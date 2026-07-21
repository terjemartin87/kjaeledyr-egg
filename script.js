/* ---------- Config ---------- */

const SPECIES = {
  cat:    { name:'Katt',   body:'#f4b183', ear:'#e8935a', pattern:'#c9754a', eyeType:'round'  },
  dog:    { name:'Hund',   body:'#d8c39a', ear:'#b89566', pattern:'#8a6a45', eyeType:'round'  },
  dragon: { name:'Drage',  body:'#7fd8a0', ear:'#4fae74', pattern:'#e0555f', eyeType:'slit'   },
  bunny:  { name:'Kanin',  body:'#f3e3ee', ear:'#f2a8cf', pattern:'#e084b8', eyeType:'round'  },
};

const GROWTH_HOURS = { baby:0, child:2, teen:8, adult:24 }; // hours since hatch
const STAGE_SCALE   = { baby:0.55, child:0.75, teen:0.9, adult:1.05 };

const DECAY_PER_HOUR = { hunger:8, hygiene:5, happiness:6, energy:4 };
const SLEEP_ENERGY_GAIN_PER_HOUR = 1800;
const SLEEP_DECAY_FACTOR = 0.4;

const SAVE_KEY = 'petgame_save_v1';

const FOOD_EMOJI = { cat:'🐟', dog:'🦴', dragon:'🍖', bunny:'🥕' };
const FULL_HUNGER_THRESHOLD = 92;

const ACTION_DURATIONS = { eat:1300, refuse:1000, play:1700, wash:2000 };

const PLAY_VARIANTS = [
  { key:'bounce',   emoji:'⚽' },
  { key:'spin',     emoji:'🌀' },
  { key:'zoomies',  emoji:'💨' },
  { key:'wiggle',   emoji:'🎉' },
  { key:'peekaboo', emoji:'👀' },
  { key:'backflip', emoji:'⭐' },
  { key:'dance',    emoji:'🎵' },
  { key:'chase',    emoji:'🌪️' },
  { key:'wave',     emoji:'👋' },
  { key:'jump',     emoji:'🪀' },
];

/* ---------- State ---------- */

let state = loadState();
let audioCtx = null;
let animFrame = 0;
let eggShakeCount = 0;
let eggWobble = 0;
let selectedSpecies = null;
let currentAction = null; // { type, variant, start, duration }

/* ---------- DOM refs ---------- */

const el = {
  petName: document.getElementById('petName'),
  ageLabel: document.getElementById('ageLabel'),
  screens: {
    select: document.getElementById('screen-select'),
    egg: document.getElementById('screen-egg'),
    pet: document.getElementById('screen-pet'),
  },
  eggGrid: document.getElementById('eggGrid'),
  confirmSelect: document.getElementById('btn-confirmSelect'),
  canvasEgg: document.getElementById('canvas-egg'),
  canvasPet: document.getElementById('canvas-pet'),
  actions: document.getElementById('actions'),
  sleepOverlay: document.getElementById('sleepOverlay'),
  bubbleLayer: document.getElementById('bubbleLayer'),
  toast: document.getElementById('toast'),
  soundIcon: document.getElementById('soundIcon'),
  fills: {
    hunger: document.getElementById('fill-hunger'),
    energy: document.getElementById('fill-energy'),
    hygiene: document.getElementById('fill-hygiene'),
    happiness: document.getElementById('fill-happiness'),
  },
  nums: {
    hunger: document.getElementById('num-hunger'),
    energy: document.getElementById('num-energy'),
    hygiene: document.getElementById('num-hygiene'),
    happiness: document.getElementById('num-happiness'),
  },
  btnRestart: document.getElementById('btn-restart'),
  btnFeed: document.getElementById('btn-feed'),
  btnPlay: document.getElementById('btn-play'),
  btnWash: document.getElementById('btn-wash'),
  btnSleep: document.getElementById('btn-sleep'),
  btnSound: document.getElementById('btn-sound'),
};

/* ---------- Persistence ---------- */

function defaultState(){
  return {
    phase:'select',       // select | egg | pet
    species:null,
    hatched:false,
    birthTime:null,
    lastUpdate:Date.now(),
    sleeping:false,
    muted:false,
    stats:{ hunger:100, energy:100, hygiene:100, happiness:100 },
  };
}

function loadState(){
  try{
    const raw = localStorage.getItem(SAVE_KEY);
    if(!raw) return defaultState();
    const parsed = JSON.parse(raw);
    return Object.assign(defaultState(), parsed);
  }catch(e){
    return defaultState();
  }
}

function saveState(){
  localStorage.setItem(SAVE_KEY, JSON.stringify(state));
}

/* ---------- Sound (Web Audio, synthesized) ---------- */

function ensureAudio(){
  if(!audioCtx) audioCtx = new (window.AudioContext||window.webkitAudioContext)();
  if(audioCtx.state === 'suspended') audioCtx.resume();
}

function beep(freq, dur, type='sine', vol=0.18, delay=0){
  if(state.muted) return;
  ensureAudio();
  const t0 = audioCtx.currentTime + delay;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, t0);
  gain.gain.setValueAtTime(0, t0);
  gain.gain.linearRampToValueAtTime(vol, t0+0.02);
  gain.gain.exponentialRampToValueAtTime(0.001, t0+dur);
  osc.connect(gain).connect(audioCtx.destination);
  osc.start(t0);
  osc.stop(t0+dur+0.05);
}

function glide(freqFrom, freqTo, dur, type='sine', vol=0.16, delay=0){
  if(state.muted) return;
  ensureAudio();
  const t0 = audioCtx.currentTime + delay;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freqFrom, t0);
  osc.frequency.exponentialRampToValueAtTime(freqTo, t0+dur);
  gain.gain.setValueAtTime(0.0001, t0);
  gain.gain.linearRampToValueAtTime(vol, t0+0.02);
  gain.gain.exponentialRampToValueAtTime(0.001, t0+dur);
  osc.connect(gain).connect(audioCtx.destination);
  osc.start(t0);
  osc.stop(t0+dur+0.05);
}

function noiseBurst({duration=0.08, freq=800, q=1, type='lowpass', vol=0.2, delay=0}={}){
  if(state.muted) return;
  ensureAudio();
  const t0 = audioCtx.currentTime + delay;
  const bufferSize = Math.max(1, Math.floor(audioCtx.sampleRate*duration));
  const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
  const data = buffer.getChannelData(0);
  for(let i=0;i<bufferSize;i++) data[i] = Math.random()*2-1;
  const src = audioCtx.createBufferSource();
  src.buffer = buffer;
  const filter = audioCtx.createBiquadFilter();
  filter.type = type;
  filter.frequency.value = freq;
  filter.Q.value = q;
  const gain = audioCtx.createGain();
  gain.gain.setValueAtTime(0, t0);
  gain.gain.linearRampToValueAtTime(vol, t0+0.008);
  gain.gain.exponentialRampToValueAtTime(0.001, t0+duration);
  src.connect(filter).connect(gain).connect(audioCtx.destination);
  src.start(t0);
  src.stop(t0+duration+0.02);
}

function noiseSweep({duration=0.3, freqFrom=2000, freqTo=400, type='bandpass', q=1, vol=0.15, delay=0}={}){
  if(state.muted) return;
  ensureAudio();
  const t0 = audioCtx.currentTime + delay;
  const bufferSize = Math.max(1, Math.floor(audioCtx.sampleRate*duration));
  const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
  const data = buffer.getChannelData(0);
  for(let i=0;i<bufferSize;i++) data[i] = Math.random()*2-1;
  const src = audioCtx.createBufferSource();
  src.buffer = buffer;
  const filter = audioCtx.createBiquadFilter();
  filter.type = type;
  filter.Q.value = q;
  filter.frequency.setValueAtTime(freqFrom, t0);
  filter.frequency.linearRampToValueAtTime(freqTo, t0+duration);
  const gain = audioCtx.createGain();
  gain.gain.setValueAtTime(0, t0);
  gain.gain.linearRampToValueAtTime(vol, t0+0.03);
  gain.gain.exponentialRampToValueAtTime(0.001, t0+duration);
  src.connect(filter).connect(gain).connect(audioCtx.destination);
  src.start(t0);
  src.stop(t0+duration+0.02);
}

const SFX = {
  tap:      ()=> beep(520,0.08,'square',0.12),
  crack:    ()=> { beep(180,0.15,'sawtooth',0.2); beep(90,0.2,'sawtooth',0.15,0.08); },
  hatch:    ()=> { [440,554,659,880].forEach((f,i)=>beep(f,0.22,'triangle',0.16,i*0.11)); },

  eat: ()=>{
    for(let i=0;i<4;i++){
      noiseBurst({ duration:0.09, freq:500+Math.random()*350, q:1.3, type:'lowpass', vol:0.24, delay:i*0.17 });
    }
    glide(300, 380, 0.3, 'sine', 0.12, 4*0.17+0.05);
    beep(460, 0.22, 'sine', 0.08, 4*0.17+0.2);
  },
  refuse: ()=>{
    noiseSweep({ duration:0.22, freqFrom:1200, freqTo:500, type:'bandpass', q:0.8, vol:0.08 });
    beep(260,0.13,'triangle',0.16,0.05);
    beep(190,0.17,'triangle',0.16,0.2);
  },
  play: (variant)=>{
    const big = variant==='bounce'||variant==='jump'||variant==='backflip';
    const base = big ? 420 : 500;
    for(let i=0;i<4;i++){
      beep(base + i*65 + Math.random()*15, 0.09, 'triangle', 0.14, i*0.07);
    }
    if(big){
      glide(180, 560, 0.2, 'sine', 0.16, 0.06);
    } else {
      for(let i=0;i<3;i++) beep(700+i*90, 0.06, 'square', 0.08, 0.3+i*0.05);
    }
  },
  washStart: ()=>{
    noiseSweep({ duration:0.5, freqFrom:2200, freqTo:400, type:'bandpass', q:0.7, vol:0.13 });
    for(let i=0;i<6;i++){
      noiseBurst({ duration:0.05+Math.random()*0.03, freq:1300+Math.random()*900, q:3, type:'bandpass', vol:0.09, delay:0.35+i*0.14 });
    }
  },
  sleep:    ()=> { beep(392,0.3,'sine',0.12); beep(330,0.35,'sine',0.1,0.2); },
  wake:     ()=> { beep(523,0.15,'sine',0.14); beep(659,0.18,'sine',0.14,0.1); },
  grow:     ()=> { [523,659,784,1047].forEach((f,i)=>beep(f,0.18,'sine',0.15,i*0.09)); },
  low:      ()=> { beep(220,0.18,'sawtooth',0.12); },
};

/* ---------- Toast ---------- */

let toastTimer = null;
function toast(msg){
  el.toast.textContent = msg;
  el.toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=> el.toast.classList.remove('show'), 1600);
}

/* ---------- Egg selection screen ---------- */

function buildEggGrid(){
  el.eggGrid.innerHTML = '';
  Object.keys(SPECIES).forEach(key=>{
    const wrap = document.createElement('div');
    wrap.className = 'eggChoice';
    wrap.dataset.species = key;

    const c = document.createElement('canvas');
    c.width = 96; c.height = 96;
    drawEggPreview(c.getContext('2d'), key);

    const label = document.createElement('div');
    label.className = 'eggChoiceName';
    label.textContent = '???';

    wrap.appendChild(c);
    wrap.appendChild(label);
    wrap.addEventListener('click', ()=>{
      document.querySelectorAll('.eggChoice').forEach(n=>n.classList.remove('selected'));
      wrap.classList.add('selected');
      selectedSpecies = key;
      el.confirmSelect.disabled = false;
      SFX.tap();
    });
    el.eggGrid.appendChild(wrap);
  });
}

function drawEggPreview(ctx, speciesKey){
  const sp = SPECIES[speciesKey];
  ctx.clearRect(0,0,96,96);
  ctx.save();
  ctx.translate(48,50);
  drawEggShape(ctx, sp.pattern, sp.body, 1);
  ctx.restore();
}

function drawEggShape(ctx, patternColor, bodyColor, scale, wobble=0){
  ctx.save();
  ctx.rotate(wobble);
  ctx.beginPath();
  ctx.moveTo(0,-38*scale);
  ctx.bezierCurveTo(24*scale,-38*scale, 30*scale,10*scale, 0,40*scale);
  ctx.bezierCurveTo(-30*scale,10*scale, -24*scale,-38*scale, 0,-38*scale);
  ctx.closePath();
  const grad = ctx.createLinearGradient(0,-38*scale,0,40*scale);
  grad.addColorStop(0,'#ffffff');
  grad.addColorStop(1, bodyColor);
  ctx.fillStyle = grad;
  ctx.fill();
  ctx.lineWidth = 3;
  ctx.strokeStyle = 'rgba(0,0,0,0.12)';
  ctx.stroke();

  ctx.fillStyle = patternColor;
  ctx.globalAlpha = 0.5;
  const spots = [[-10,-10,5],[8,4,7],[-4,18,4],[12,-18,4]];
  spots.forEach(([x,y,r])=>{
    ctx.beginPath();
    ctx.arc(x*scale,y*scale,r*scale,0,Math.PI*2);
    ctx.fill();
  });
  ctx.globalAlpha = 1;
  ctx.restore();
}

/* ---------- Egg screen (shake to hatch) ---------- */

const EGG_SHAKES_NEEDED = 7;

function initEggScreen(){
  const canvas = el.canvasEgg;
  const ctx = canvas.getContext('2d');

  function render(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.save();
    ctx.translate(canvas.width/2, canvas.height/2+20);
    const sp = SPECIES[state.species];
    drawEggShape(ctx, sp.pattern, sp.body, 2.2, eggWobble);
    if(eggShakeCount > 0){
      ctx.strokeStyle='rgba(0,0,0,0.35)';
      ctx.lineWidth=3;
      const crackLevel = Math.min(eggShakeCount, EGG_SHAKES_NEEDED);
      for(let i=0;i<crackLevel;i++){
        ctx.save();
        ctx.rotate((i/EGG_SHAKES_NEEDED)*Math.PI*2);
        ctx.beginPath();
        ctx.moveTo(0,-20);
        ctx.lineTo(4,0);
        ctx.lineTo(-3,10);
        ctx.stroke();
        ctx.restore();
      }
    }
    ctx.restore();
  }

  canvas.onclick = ()=>{
    eggShakeCount++;
    eggWobble = (Math.random()-0.5)*0.5;
    SFX.tap();
    render();
    setTimeout(()=>{ eggWobble=0; render(); },120);

    if(eggShakeCount >= EGG_SHAKES_NEEDED){
      canvas.onclick = null;
      SFX.crack();
      setTimeout(()=>{
        SFX.hatch();
        hatchEgg();
      }, 350);
    }
  };

  render();
}

function hatchEgg(){
  state.hatched = true;
  state.phase = 'pet';
  state.birthTime = Date.now();
  state.lastUpdate = Date.now();
  saveState();
  showScreen('pet');
  spawnSparkles(8);
  toast(`${SPECIES[state.species].name} har klekket! 🎉`);
}

/* ---------- Pet rendering ---------- */

function getStage(){
  if(!state.birthTime) return 'baby';
  const hours = (Date.now() - state.birthTime)/3600000;
  if(hours >= GROWTH_HOURS.adult) return 'adult';
  if(hours >= GROWTH_HOURS.teen) return 'teen';
  if(hours >= GROWTH_HOURS.child) return 'child';
  return 'baby';
}

let lastStageSeen = null;
let blinkPhase = 0;
let bounceTime = 0;

function triggerAction(type, variant){
  currentAction = { type, variant, start: performance.now(), duration: ACTION_DURATIONS[type] };
}

function getActionProgress(){
  if(!currentAction) return null;
  const t = performance.now() - currentAction.start;
  if(t >= currentAction.duration){
    currentAction = null;
    return null;
  }
  return { type:currentAction.type, variant:currentAction.variant, progress: t/currentAction.duration };
}

function getPlayTransform(key, p){
  const env = Math.sin(Math.min(p,1)*Math.PI);
  switch(key){
    case 'bounce':   return { translateY:-60*env, scaleX:1+0.15*env, scaleY:1-0.12*env };
    case 'spin':     return { rotate:p*Math.PI*2 };
    case 'zoomies':  return { translateX:Math.sin(p*Math.PI*8)*40, rotate:Math.sin(p*Math.PI*8)*0.15 };
    case 'wiggle':   return { rotate:Math.sin(p*Math.PI*10)*0.25 };
    case 'peekaboo': { const s = 0.35+0.65*Math.abs(Math.sin(p*Math.PI*2)); return { scaleX:s, scaleY:s }; }
    case 'backflip': return { rotate:p*Math.PI*2, translateY:-80*env };
    case 'dance':    return { translateX:Math.sin(p*Math.PI*6)*25, rotate:Math.sin(p*Math.PI*6)*0.2, translateY:-10*env };
    case 'chase':    return { rotate:p*Math.PI*6, translateX:Math.cos(p*Math.PI*6)*15, translateY:Math.sin(p*Math.PI*6)*15 };
    case 'wave':     return { translateY:-8*env, rotate:Math.sin(p*Math.PI*6)*0.06 };
    case 'jump':     return { translateY:-70*Math.sin(Math.min(p*1.3,1)*Math.PI), scaleY: p<0.12 ? 1-p*1.4 : 1 };
    default:         return {};
  }
}

function drawEmojiOverlay(ctx, emoji, x, y, size, alpha=1){
  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.font = `${size}px "Segoe UI Emoji", sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(emoji, x, y);
  ctx.restore();
}

function drawCreature(ctx, speciesKey, stage, opts={}){
  const sp = SPECIES[speciesKey];
  const scale = STAGE_SCALE[stage] * 130;
  const sad = opts.sad;
  const asleep = opts.asleep;
  const action = opts.action;

  let extraTX=0, extraTY=0, extraRotate=0, extraScaleX=1, extraScaleY=1;
  let chompProgress = null;

  if(action && action.type==='play'){
    const t = getPlayTransform(action.variant, action.progress);
    extraTX = t.translateX||0; extraTY = t.translateY||0; extraRotate = t.rotate||0;
    extraScaleX = t.scaleX||1; extraScaleY = t.scaleY||1;
  } else if(action && action.type==='refuse'){
    extraRotate = Math.sin(action.progress*Math.PI*6)*0.2;
  } else if(action && action.type==='eat'){
    chompProgress = Math.min(action.progress/0.75, 1);
    if(chompProgress<1){
      const chomp = Math.abs(Math.sin(chompProgress*Math.PI*4));
      extraScaleY = 1 - chomp*0.06;
      extraTY = chomp*3;
    } else {
      const happyEnv = Math.sin(((action.progress-0.75)/0.25)*Math.PI);
      extraTY = -happyEnv*10;
    }
  }

  const bounce = (asleep || action) ? 0 : Math.sin(bounceTime*2)*4;
  const closedEyes = asleep || (action && action.type==='wash');

  ctx.save();
  ctx.translate(180+extraTX, 200+bounce+extraTY);
  ctx.rotate(extraRotate);
  ctx.scale((scale/100)*extraScaleX, (scale/100)*extraScaleY);

  // tail (dragon/cat/dog)
  if(speciesKey==='dragon'){
    ctx.beginPath();
    ctx.moveTo(45,20);
    ctx.quadraticCurveTo(90,10,95,-30);
    ctx.lineWidth=18;
    ctx.strokeStyle = sp.body;
    ctx.lineCap='round';
    ctx.stroke();
  } else if(speciesKey==='dog'){
    ctx.beginPath();
    ctx.moveTo(48,10);
    ctx.quadraticCurveTo(75,-10,72,-35);
    ctx.lineWidth=14;
    ctx.strokeStyle = sp.ear;
    ctx.lineCap='round';
    ctx.stroke();
  }

  // body
  ctx.beginPath();
  ctx.ellipse(0,10,58,50,0,0,Math.PI*2);
  ctx.fillStyle = sp.body;
  ctx.fill();

  // belly patch
  ctx.beginPath();
  ctx.ellipse(0,26,30,24,0,0,Math.PI*2);
  ctx.fillStyle='rgba(255,255,255,0.45)';
  ctx.fill();

  // ears
  drawEars(ctx, speciesKey, sp);

  // dragon back spikes
  if(speciesKey==='dragon' && (stage==='teen'||stage==='adult')){
    ctx.fillStyle = sp.pattern;
    for(let i=-1;i<=1;i++){
      ctx.beginPath();
      ctx.moveTo(i*16-6,-40);
      ctx.lineTo(i*16,-56);
      ctx.lineTo(i*16+6,-40);
      ctx.closePath();
      ctx.fill();
    }
  }

  // face
  const eyeY = -8;
  const eyeDX = 20;
  const blink = (blinkPhase>0.92);
  const annoyed = sad || (action && action.type==='refuse');

  if(closedEyes || blink){
    ctx.strokeStyle='#3a2a20';
    ctx.lineWidth=3;
    ctx.lineCap='round';
    [-1,1].forEach(dir=>{
      ctx.beginPath();
      ctx.moveTo(dir*eyeDX-8, eyeY);
      ctx.quadraticCurveTo(dir*eyeDX, eyeY+6, dir*eyeDX+8, eyeY);
      ctx.stroke();
    });
  } else {
    [-1,1].forEach(dir=>{
      ctx.beginPath();
      if(sp.eyeType==='slit'){
        ctx.ellipse(dir*eyeDX, eyeY, 7, 9, 0, 0, Math.PI*2);
        ctx.fillStyle='#fff';
        ctx.fill();
        ctx.fillStyle='#2a2a2a';
        ctx.fillRect(dir*eyeDX-1.5, eyeY-6, 3, 12);
      } else {
        ctx.arc(dir*eyeDX, eyeY, 7, 0, Math.PI*2);
        ctx.fillStyle='#fff';
        ctx.fill();
        ctx.beginPath();
        ctx.arc(dir*eyeDX + (annoyed?0:1), eyeY+ (annoyed?2:1), 4, 0, Math.PI*2);
        ctx.fillStyle='#2a2a2a';
        ctx.fill();
      }
    });
  }

  // eyebrows if sad or refusing
  if(annoyed && !closedEyes){
    ctx.strokeStyle='rgba(0,0,0,0.4)';
    ctx.lineWidth=3;
    [-1,1].forEach(dir=>{
      ctx.beginPath();
      ctx.moveTo(dir*eyeDX-9, eyeY-11);
      ctx.lineTo(dir*eyeDX+9, eyeY-6);
      ctx.stroke();
    });
  }

  // nose + mouth
  ctx.fillStyle='#3a2a20';
  ctx.beginPath();
  ctx.ellipse(0, 6, 3.5, 2.5, 0, 0, Math.PI*2);
  ctx.fill();

  ctx.strokeStyle='#3a2a20';
  ctx.lineWidth=2.5;
  ctx.lineCap='round';
  ctx.beginPath();
  if(asleep){
    ctx.moveTo(-6,14); ctx.lineTo(6,14);
  } else if(action && action.type==='eat' && chompProgress<1){
    const mouthOpen = Math.abs(Math.sin(chompProgress*Math.PI*4))*8;
    ctx.moveTo(-9,12);
    ctx.quadraticCurveTo(0,16+mouthOpen,9,12);
  } else if(annoyed){
    ctx.moveTo(-9,18);
    ctx.quadraticCurveTo(0,10,9,18);
  } else {
    ctx.moveTo(-9,12);
    ctx.quadraticCurveTo(0,22,9,12);
  }
  ctx.stroke();

  // cheeks
  ctx.fillStyle='rgba(255,120,140,0.35)';
  [-1,1].forEach(dir=>{
    ctx.beginPath();
    ctx.arc(dir*32, 12, 7, 0, Math.PI*2);
    ctx.fill();
  });

  // action overlays (food, soap)
  if(action && action.type==='eat'){
    const foodEmoji = FOOD_EMOJI[speciesKey] || '🍎';
    if(chompProgress<1){
      const foodScale = 1-chompProgress*0.7;
      drawEmojiOverlay(ctx, foodEmoji, 34, 4, 30*foodScale, 1);
    }
  } else if(action && action.type==='refuse'){
    const foodEmoji = FOOD_EMOJI[speciesKey] || '🍎';
    const pushAway = action.progress*18;
    drawEmojiOverlay(ctx, foodEmoji, 40+pushAway, 4, 26, 1-action.progress*0.7);
  } else if(action && action.type==='wash'){
    const p = action.progress;
    const sudsEnv = Math.sin(Math.min(p/0.85,1)*Math.PI);
    ctx.fillStyle = 'rgba(255,255,255,0.75)';
    const suds = [[-22,-4,10],[10,-14,12],[24,8,9],[-8,18,8],[2,-2,14]];
    suds.forEach(([sx,sy,sr],i)=>{
      ctx.beginPath();
      ctx.arc(sx, sy, sr*sudsEnv*(0.7+0.3*Math.sin(p*10+i)), 0, Math.PI*2);
      ctx.fill();
    });
    const spongeX = Math.sin(p*Math.PI*6)*36;
    drawEmojiOverlay(ctx, '🧽', spongeX, 4, 26, 1);
  }

  ctx.restore();
}

function drawEars(ctx, speciesKey, sp){
  ctx.fillStyle = sp.ear;
  if(speciesKey==='cat'){
    [-1,1].forEach(dir=>{
      ctx.beginPath();
      ctx.moveTo(dir*34,-30);
      ctx.lineTo(dir*50,-62);
      ctx.lineTo(dir*20,-46);
      ctx.closePath();
      ctx.fill();
    });
  } else if(speciesKey==='dog'){
    [-1,1].forEach(dir=>{
      ctx.beginPath();
      ctx.ellipse(dir*44,-24,13,26,dir*0.4,0,Math.PI*2);
      ctx.fill();
    });
  } else if(speciesKey==='dragon'){
    [-1,1].forEach(dir=>{
      ctx.beginPath();
      ctx.moveTo(dir*30,-34);
      ctx.quadraticCurveTo(dir*54,-60,dir*40,-70);
      ctx.quadraticCurveTo(dir*36,-46,dir*18,-40);
      ctx.closePath();
      ctx.fill();
    });
  } else if(speciesKey==='bunny'){
    [-1,1].forEach(dir=>{
      ctx.beginPath();
      ctx.ellipse(dir*20,-58,11,38,dir*0.15,0,Math.PI*2);
      ctx.fill();
      ctx.fillStyle=sp.pattern;
      ctx.beginPath();
      ctx.ellipse(dir*20,-56,5,28,dir*0.15,0,Math.PI*2);
      ctx.fill();
      ctx.fillStyle = sp.ear;
    });
  }
}

/* ---------- Effects ---------- */

function spawnSparkles(n=6){
  const layer = el.bubbleLayer;
  for(let i=0;i<n;i++){
    setTimeout(()=>{
      const s = document.createElement('div');
      s.className='sparkle';
      s.textContent = ['✨','⭐','💫'][Math.floor(Math.random()*3)];
      s.style.left = (35+Math.random()*30)+'%';
      s.style.bottom = (30+Math.random()*20)+'%';
      layer.appendChild(s);
      setTimeout(()=>s.remove(),1000);
    }, i*70);
  }
}

function spawnEmojiBurst(emoji, n=6){
  const layer = el.bubbleLayer;
  for(let i=0;i<n;i++){
    setTimeout(()=>{
      const s = document.createElement('div');
      s.className='sparkle';
      s.textContent = emoji;
      s.style.left = (15+Math.random()*70)+'%';
      s.style.bottom = (25+Math.random()*35)+'%';
      layer.appendChild(s);
      setTimeout(()=>s.remove(),1000);
    }, i*90);
  }
}

function spawnBubbles(n=10){
  const layer = el.bubbleLayer;
  for(let i=0;i<n;i++){
    setTimeout(()=>{
      const b = document.createElement('div');
      b.className='bubble';
      const size = 6+Math.random()*14;
      b.style.width = size+'px';
      b.style.height = size+'px';
      b.style.left = (20+Math.random()*60)+'%';
      b.style.animationDuration = (1+Math.random()*0.8)+'s';
      layer.appendChild(b);
      setTimeout(()=>b.remove(),1900);
    }, i*60);
  }
}

/* ---------- Screen switching ---------- */

function showScreen(name){
  Object.entries(el.screens).forEach(([k,node])=>{
    node.classList.toggle('hidden', k!==name);
  });
  el.actions.classList.toggle('hidden', name!=='pet');
}

/* ---------- Stat update / decay ---------- */

function clamp(v){ return Math.max(0, Math.min(100, v)); }

function applyElapsed(){
  if(state.phase !== 'pet') { state.lastUpdate = Date.now(); return; }
  const now = Date.now();
  const hours = (now - state.lastUpdate) / 3600000;
  if(hours <= 0) return;

  const s = state.stats;
  if(state.sleeping){
    s.energy = clamp(s.energy + SLEEP_ENERGY_GAIN_PER_HOUR*hours);
    s.hunger = clamp(s.hunger - DECAY_PER_HOUR.hunger*hours*SLEEP_DECAY_FACTOR);
    s.hygiene = clamp(s.hygiene - DECAY_PER_HOUR.hygiene*hours*SLEEP_DECAY_FACTOR);
    s.happiness = clamp(s.happiness - DECAY_PER_HOUR.happiness*hours*SLEEP_DECAY_FACTOR);
    if(s.energy >= 100){
      state.sleeping = false;
      toast('Uthvilt og klar! ☀️');
    }
  } else {
    s.hunger = clamp(s.hunger - DECAY_PER_HOUR.hunger*hours);
    s.energy = clamp(s.energy - DECAY_PER_HOUR.energy*hours);
    s.hygiene = clamp(s.hygiene - DECAY_PER_HOUR.hygiene*hours);
    let happinessDrop = DECAY_PER_HOUR.happiness*hours;
    if(s.hunger<25 || s.hygiene<25 || s.energy<20) happinessDrop *= 1.6;
    s.happiness = clamp(s.happiness - happinessDrop);
  }
  state.lastUpdate = now;
}

function refreshStatBars(){
  Object.entries(el.fills).forEach(([key,node])=>{
    const v = Math.round(state.stats[key]*10)/10;
    const vRounded = Math.round(v);
    node.style.width = vRounded+'%';
    node.style.background = vRounded<25 ? 'var(--bad)' : (vRounded<55 ? 'var(--mid)' : 'var(--good)');
    el.nums[key].textContent = v.toFixed(1)+'%';
  });
}

function isNeedy(){
  const s = state.stats;
  return s.hunger<25 || s.hygiene<25 || s.happiness<25 || s.energy<15;
}

/* ---------- Actions ---------- */

function doFeed(){
  if(state.sleeping) return toast('Zzz... sover nå 💤');
  if(currentAction) return;

  if(state.stats.hunger >= FULL_HUNGER_THRESHOLD){
    triggerAction('refuse');
    SFX.refuse();
    toast('Stappmett! Vil ikke ha mer 🙅');
    return;
  }

  triggerAction('eat');
  SFX.eat();
  state.stats.hunger = clamp(state.stats.hunger+30);
  state.stats.happiness = clamp(state.stats.happiness+8);
  saveState();
  setTimeout(()=>{ toast('Nam nam, godt mett! 😋'); spawnSparkles(5); }, ACTION_DURATIONS.eat*0.72);
}

function doPlay(){
  if(state.sleeping) return toast('Zzz... sover nå 💤');
  if(currentAction) return;
  if(state.stats.energy < 10) return toast('For sliten til å leke 😴');

  const variant = PLAY_VARIANTS[Math.floor(Math.random()*PLAY_VARIANTS.length)];
  triggerAction('play', variant.key);
  SFX.play(variant.key);
  spawnEmojiBurst(variant.emoji);
  state.stats.happiness = clamp(state.stats.happiness+25);
  state.stats.energy = clamp(state.stats.energy-7);
  state.stats.hunger = clamp(state.stats.hunger-8);
  toast('Så gøy! '+variant.emoji);
  saveState();
}

function doWash(){
  if(state.sleeping) return toast('Zzz... sover nå 💤');
  if(currentAction) return;

  triggerAction('wash');
  SFX.washStart();
  spawnBubbles(14);
  state.stats.hygiene = clamp(state.stats.hygiene+40);
  state.stats.happiness = clamp(state.stats.happiness+5);
  saveState();
  setTimeout(()=>{ toast('Skinnende ren! 🧼✨'); }, ACTION_DURATIONS.wash*0.8);
}

function doToggleSleep(){
  state.sleeping = !state.sleeping;
  if(state.sleeping){ SFX.sleep(); toast('God natt 🌙'); }
  else { SFX.wake(); toast('God morgen! ☀️'); }
  saveState();
  refreshSleepUI();
}

function refreshSleepUI(){
  el.sleepOverlay.classList.toggle('hidden', !state.sleeping);
  el.sleepOverlay.textContent = state.sleeping ? '💤' : '';
}

function resetGame(){
  const ok = confirm('Starte på nytt med et nytt kjæledyr? Fremgangen for det nåværende kjæledyret blir slettet.');
  if(!ok) return;

  currentAction = null;
  eggShakeCount = 0;
  eggWobble = 0;
  selectedSpecies = null;
  lastStageSeen = null;
  state = defaultState();
  saveState();

  document.querySelectorAll('.eggChoice').forEach(n=>n.classList.remove('selected'));
  el.confirmSelect.disabled = true;
  el.sleepOverlay.classList.add('hidden');
  showScreen('select');
}

function doToggleSound(){
  state.muted = !state.muted;
  el.soundIcon.textContent = state.muted ? '🔇' : '🔊';
  saveState();
  if(!state.muted) SFX.tap();
}

/* ---------- Main loop ---------- */

function tick(){
  animFrame++;
  bounceTime += 0.03;
  blinkPhase = (blinkPhase+0.01) % 1;

  if(state.phase === 'pet'){
    applyElapsed();
    refreshStatBars();

    const stage = getStage();
    if(lastStageSeen && stage !== lastStageSeen){
      SFX.grow();
      toast(`${SPECIES[state.species].name} har vokst! 🌱`);
      spawnSparkles(10);
    }
    lastStageSeen = stage;

    const ctx = el.canvasPet.getContext('2d');
    ctx.clearRect(0,0,el.canvasPet.width, el.canvasPet.height);
    drawCreature(ctx, state.species, stage, { sad:isNeedy(), asleep:state.sleeping, action:getActionProgress() });

    const hours = state.birthTime ? (Date.now()-state.birthTime)/3600000 : 0;
    const days = Math.floor(hours/24);
    const hrs = Math.floor(hours%24);
    el.petName.textContent = `${SPECIES[state.species].name} • ${stage==='baby'?'Baby':stage==='child'?'Barn':stage==='teen'?'Tenåring':'Voksen'}`;
    el.ageLabel.textContent = days>0 ? `${days}d ${hrs}t gammel` : `${hrs}t gammel`;

    refreshSleepUI();
    el.btnSleep.querySelector('.icon').textContent = state.sleeping ? '☀️' : '💤';
    el.btnSleep.querySelector('.label').textContent = state.sleeping ? 'Våkne' : 'Sov';
  }

  requestAnimationFrame(tick);
}

/* ---------- Init ---------- */

function init(){
  buildEggGrid();

  el.confirmSelect.addEventListener('click', ()=>{
    if(!selectedSpecies) return;
    state.species = selectedSpecies;
    state.phase = 'egg';
    eggShakeCount = 0;
    saveState();
    showScreen('egg');
    initEggScreen();
  });

  el.btnFeed.addEventListener('click', doFeed);
  el.btnPlay.addEventListener('click', doPlay);
  el.btnWash.addEventListener('click', doWash);
  el.btnSleep.addEventListener('click', doToggleSleep);
  el.btnSound.addEventListener('click', doToggleSound);
  el.btnRestart.addEventListener('click', resetGame);

  el.soundIcon.textContent = state.muted ? '🔇' : '🔊';

  applyElapsed();

  if(state.phase === 'pet' && state.species){
    showScreen('pet');
    lastStageSeen = getStage();
  } else if(state.phase === 'egg' && state.species){
    showScreen('egg');
    initEggScreen();
  } else {
    showScreen('select');
  }

  requestAnimationFrame(tick);
}

document.addEventListener('DOMContentLoaded', init);
window.addEventListener('beforeunload', saveState);
window.addEventListener('pagehide', saveState);
document.addEventListener('visibilitychange', ()=>{
  if(document.visibilityState === 'hidden') saveState();
  if(document.visibilityState === 'visible') requestWakeLock();
});
setInterval(saveState, 2000);

/* ---------- Keep screen awake while the game is open ---------- */

let wakeLock = null;

async function requestWakeLock(){
  if(!('wakeLock' in navigator)) return;
  try{
    wakeLock = await navigator.wakeLock.request('screen');
    wakeLock.addEventListener('release', ()=>{ wakeLock = null; });
  }catch(e){
    // ignored: e.g. blocked by low battery mode - not critical
  }
}

window.addEventListener('load', requestWakeLock);
el.actions.addEventListener('click', ()=>{ if(!wakeLock) requestWakeLock(); });

if('serviceWorker' in navigator){
  window.addEventListener('load', ()=>{
    navigator.serviceWorker.register('sw.js').catch(()=>{});
  });
}
