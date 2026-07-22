/* ---------- Config ---------- */

const SPECIES = {
  cat:    { name:'Katt',   body:'#f4b183', ear:'#e8935a', pattern:'#c9754a', eyeType:'round', emoji:'🐱' },
  dog:    { name:'Hund',   body:'#d8c39a', ear:'#b89566', pattern:'#8a6a45', eyeType:'round', emoji:'🐶' },
  fox:    { name:'Rev',    body:'#e8873f', ear:'#2a2a2a', pattern:'#ffffff', eyeType:'slit',  emoji:'🦊' },
  panda:  { name:'Panda',  body:'#f7f7f2', ear:'#2a2a2a', pattern:'#2a2a2a', eyeType:'round', emoji:'🐼' },
  dragon: { name:'Drage',  body:'#7fd8a0', ear:'#4fae74', pattern:'#e0555f', eyeType:'slit',  emoji:'🐲' },
  bunny:  { name:'Kanin',  body:'#f3e3ee', ear:'#f2a8cf', pattern:'#e084b8', eyeType:'round', emoji:'🐰' },
  snake:  { name:'Slange', body:'#8fbf6a', ear:'#5c8f3f', pattern:'#e0d060', eyeType:'round', emoji:'🐍', bodyPlan:'snake' },
  gecko:  { name:'Gekko',  body:'#f0c869', ear:'#c9a04a', pattern:'#5a3a2a', eyeType:'round', emoji:'🦎', bodyPlan:'gecko' },
};

const SHOP_ITEMS = [
  { id:'cap',         slot:'hat',      name:'Caps',          emoji:'🧢', price:30  },
  { id:'partyhat',    slot:'hat',      name:'Festhatt',      emoji:'🎉', price:25  },
  { id:'tophat',      slot:'hat',      name:'Flosshatt',     emoji:'🎩', price:60  },
  { id:'crown',       slot:'hat',      name:'Krone',         emoji:'👑', price:100 },
  { id:'sunglasses',  slot:'glasses',  name:'Solbriller',    emoji:'🕶️', price:40  },
  { id:'nerdglasses', slot:'glasses',  name:'Nerdebriller',  emoji:'🤓', price:35  },
  { id:'bowtie',      slot:'neck',     name:'Sløyfe',        emoji:'🎀', price:20  },
  { id:'scarf',       slot:'neck',     name:'Skjerf',        emoji:'🧣', price:30  },
  { id:'bandana',     slot:'neck',     name:'Bandana',       emoji:'🏴', price:25  },
];

const STAGE_LABELS = { baby:'Baby', child:'Barn', teen:'Tenåring', adult:'Voksen' };

const GROWTH_UNITS = { baby:0, child:1.0, teen:3.5, adult:10 };
const STAGE_SCALE  = { baby:0.42, child:0.68, teen:1.0, adult:1.4 };
const GROWTH_ACTION_BONUS = 0.015;

// Ekte proporsjoner: skiller hode og kropp. Baby har stort hode og liten kropp. Voksen har lang kropp og lengre snute.
const STAGE_PROFILE = {
  baby:  { headR: 38, bodyRX: 24, bodyRY: 20, bodyY: 28, eyeScale: 1.35, eyeSpread: 0.85, earScale: 0.6,  tailScale: 0.5, features: true },
  child: { headR: 34, bodyRX: 32, bodyRY: 30, bodyY: 38, eyeScale: 1.15, eyeSpread: 0.95, earScale: 0.85, tailScale: 0.8, features: true },
  teen:  { headR: 30, bodyRX: 38, bodyRY: 42, bodyY: 48, eyeScale: 1.0,  eyeSpread: 1.0,  earScale: 1.0,  tailScale: 1.0, features: true },
  adult: { headR: 26, bodyRX: 44, bodyRY: 56, bodyY: 58, eyeScale: 0.85, eyeSpread: 1.05, earScale: 1.15, tailScale: 1.15, features: true },
};

const DECAY_PER_HOUR = { hunger:20, hygiene:10, happiness:6, energy:4 };
const SLEEP_ENERGY_GAIN_PER_HOUR = 1800;
const SLEEP_DECAY_FACTOR = 0.4;
const PACIFIER_HAPPINESS_PER_HOUR = 40;

const SLOT_KEYS = ['petgame_save_slot1', 'petgame_save_slot2', 'petgame_save_slot3', 'petgame_save_slot4'];
const ACTIVE_SLOT_KEY = 'petgame_active_slot';
const LEGACY_SAVE_KEY = 'petgame_save_v1';

const FOOD_EMOJI = { cat:'🐟', dog:'🦴', fox:'🍗', panda:'🎋', dragon:'🍖', bunny:'🥕', snake:'🐁', gecko:'🦗' };
const FULL_HUNGER_THRESHOLD = 92;

const ACTION_DURATIONS = { eat:1300, refuse:1000, play:1700, wash:2000, jump:1200, cycle:2200, brush:1800, drive:5000 };

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

const YAW_MAX = 1.1;

/* ---------- State ---------- */

migrateLegacySave();
let activeSlot = Number(localStorage.getItem(ACTIVE_SLOT_KEY)) || null;

let state = activeSlot ? loadState() : defaultState();
let audioCtx = null;
let animFrame = 0;
let eggShakeCount = 0;
let eggWobble = 0;
let selectedSpecies = null;
let currentAction = null;
let growthPulseUntil = 0;
let petYaw = 0;
let petYawTarget = 0;
let isDraggingPet = false;
let dragStartX = 0;
let dragStartYaw = 0;

/* ---------- DOM refs ---------- */

const el = {
  petName: document.getElementById('petName'),
  ageLabel: document.getElementById('ageLabel'),
  screens: {
    slots: document.getElementById('screen-slots'),
    select: document.getElementById('screen-select'),
    egg: document.getElementById('screen-egg'),
    pet: document.getElementById('screen-pet'),
    shop: document.getElementById('screen-shop'),
    meetup: document.getElementById('screen-meetup'),
  },
  slotGrid: document.getElementById('slotGrid'),
  btnCloseSlots: document.getElementById('btn-closeSlots'),
  btnMeetup: document.getElementById('btn-meetup'),
  btnCoins: document.getElementById('btn-coins'),
  coinCount: document.getElementById('coinCount'),
  shopGrid: document.getElementById('shopGrid'),
  shopCoins: document.getElementById('shopCoins'),
  btnCloseShop: document.getElementById('btn-closeShop'),
  canvasMeetup: document.getElementById('canvas-meetup'),
  meetupSubtitle: document.getElementById('meetupSubtitle'),
  btnCloseMeetup: document.getElementById('btn-closeMeetup'),
  roomBg: document.getElementById('roomBg'),
  roomWindow: document.getElementById('roomWindow'),
  skySunMoon: document.getElementById('skySunMoon'),
  skyClouds: document.getElementById('skyClouds'),
  skyRain: document.getElementById('skyRain'),
  eggGrid: document.getElementById('eggGrid'),
  confirmSelect: document.getElementById('btn-confirmSelect'),
  canvasEgg: document.getElementById('canvas-egg'),
  canvasPet: document.getElementById('canvas-pet'),
  actions: document.getElementById('actions'),
  sleepOverlay: document.getElementById('sleepOverlay'),
  bubbleLayer: document.getElementById('bubbleLayer'),
  toast: document.getElementById('toast'),
  rotateHint: document.getElementById('rotateHint'),
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
  btnJump: document.getElementById('btn-jump'),
  btnCycle: document.getElementById('btn-cycle'),
  btnBrush: document.getElementById('btn-brush'),
  btnPacifier: document.getElementById('btn-pacifier'),
  btnDrive: document.getElementById('btn-drive'),
  btnFeed: document.getElementById('btn-feed'),
  btnPlay: document.getElementById('btn-play'),
  btnWash: document.getElementById('btn-wash'),
  btnSleep: document.getElementById('btn-sleep'),
};

/* ---------- Persistence ---------- */

function defaultState(){
  return {
    phase:'select',
    species:null,
    petName:null,
    hatched:false,
    birthTime:null,
    growthProgress:0,
    lastUpdate:Date.now(),
    sleeping:false,
    pacifier:false,
    muted:false,
    coins:0,
    inventory:[],
    equipped:{ hat:null, glasses:null, neck:null },
    stats:{ hunger:100, energy:100, hygiene:100, happiness:100 },
  };
}

function displayName(s){
  return (s && s.petName) || (s && SPECIES[s.species] && SPECIES[s.species].name) || '???';
}

function migrateLegacySave(){
  const legacy = localStorage.getItem(LEGACY_SAVE_KEY);
  if(legacy){
    if(!localStorage.getItem(SLOT_KEYS[0])){
      localStorage.setItem(SLOT_KEYS[0], legacy);
      localStorage.setItem(ACTIVE_SLOT_KEY, '1');
    }
    localStorage.removeItem(LEGACY_SAVE_KEY);
  }
}

function loadSlotRaw(slotIndex){
  try{
    const raw = localStorage.getItem(SLOT_KEYS[slotIndex-1]);
    if(!raw) return null;
    return JSON.parse(raw);
  }catch(e){
    return null;
  }
}

function loadState(){
  const parsed = loadSlotRaw(activeSlot);
  if(!parsed) return defaultState();
  return Object.assign(defaultState(), parsed);
}

function saveState(){
  if(!activeSlot) return;
  localStorage.setItem(SLOT_KEYS[activeSlot-1], JSON.stringify(state));
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
  jump: ()=>{
    glide(300,520,0.16,'sine',0.16);
    glide(520,340,0.16,'sine',0.12,0.18);
  },
  cycle: ()=>{
    beep(1200,0.05,'square',0.06);
    beep(1800,0.08,'square',0.07,0.07);
    for(let i=0;i<9;i++){
      noiseBurst({ duration:0.04, freq:280+Math.random()*120, q:2, type:'lowpass', vol:0.11, delay:0.3+i*0.16 });
    }
  },
  brush: ()=>{
    for(let i=0;i<10;i++){
      noiseBurst({ duration:0.05, freq:3200+Math.random()*1200, q:4, type:'highpass', vol:0.08, delay:i*0.12 });
    }
    beep(1046,0.16,'sine',0.12,10*0.12+0.1);
    beep(1318,0.18,'sine',0.1,10*0.12+0.22);
  },
  drive: ()=>{
    beep(280,0.35,'square',0.1);
    beep(220,0.4,'sawtooth',0.06,0.1);
    for(let i=0;i<6;i++){
      noiseBurst({ duration:0.15, freq:150+Math.random()*60, q:1, type:'lowpass', vol:0.1, delay:0.5+i*0.7 });
    }
    beep(660,0.1,'square',0.1,0.05); beep(880,0.12,'square',0.08,0.18); // beep beep!
  },
  pacifierIn: ()=> glide(500,300,0.4,'sine',0.1),
  pacifierOut: ()=>{ beep(700,0.1,'square',0.12); beep(900,0.12,'square',0.1,0.08); },
  sleep:    ()=> { beep(392,0.3,'sine',0.12); beep(330,0.35,'sine',0.1,0.2); },
  wake:     ()=> { beep(523,0.15,'sine',0.14); beep(659,0.18,'sine',0.14,0.1); },
  grow:     ()=> { [523,659,784,1047,1318].forEach((f,i)=>beep(f,0.2,'sine',0.16,i*0.09)); },
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

/* ---------- Naming ---------- */

function renamePet(){
  if(state.phase !== 'pet') return;
  const current = state.petName || SPECIES[state.species].name;
  const input = prompt('Gi kjæledyret ditt et navn:', current);
  if(input === null) return;
  const trimmed = input.trim().slice(0, 16);
  state.petName = trimmed || null;
  saveState();
}

/* ---------- Coins ---------- */

function earnCoins(n){
  state.coins = (state.coins||0) + n;
}

function refreshCoinUI(){
  el.coinCount.textContent = state.coins||0;
}

/* ---------- Shop ---------- */

function renderShop(){
  el.shopCoins.textContent = '🪙 ' + (state.coins||0);
  const grid = el.shopGrid;
  grid.innerHTML = '';
  SHOP_ITEMS.forEach(item=>{
    const owned = (state.inventory||[]).includes(item.id);
    const equipped = state.equipped && state.equipped[item.slot] === item.id;
    const div = document.createElement('div');
    div.className = 'shopItem' + (owned?' owned':'') + (equipped?' equipped':'');
    const priceLabel = owned ? (equipped ? 'På ✓' : 'Trykk for å ta på') : ('🪙 '+item.price);
    div.innerHTML = `<div class="shopIcon">${item.emoji}</div><div class="shopName">${item.name}</div><div class="shopPrice">${priceLabel}</div>`;
    div.addEventListener('click', ()=>{
      if(!owned){
        if((state.coins||0) < item.price){ toast('Ikke nok mynter 🪙'); return; }
        state.coins -= item.price;
        state.inventory = state.inventory || [];
        state.inventory.push(item.id);
        state.equipped = state.equipped || { hat:null, glasses:null, neck:null };
        state.equipped[item.slot] = item.id;
        SFX.tap();
        toast(`Kjøpte ${item.name}! 🎉`);
      } else {
        state.equipped = state.equipped || { hat:null, glasses:null, neck:null };
        state.equipped[item.slot] = equipped ? null : item.id;
        SFX.tap();
      }
      saveState();
      renderShop();
    });
    grid.appendChild(div);
  });
}

/* ---------- Room environment: day/night + weather ---------- */

let lastEnvUpdate = 0;

function updateEnvironment(){
  const hour = new Date().getHours();
  let skyTop, skyBottom, sunColor, sunGlow, phaseClass;
  if(hour>=6 && hour<9){
    skyTop='#ffd9a0'; skyBottom='#ffe9c9'; sunColor='#ffd76b'; sunGlow='rgba(255,215,107,0.7)'; phaseClass='';
  } else if(hour>=9 && hour<17){
    skyTop='#bfe3ff'; skyBottom='#eaf6ff'; sunColor='#ffe27a'; sunGlow='rgba(255,226,122,0.8)'; phaseClass='';
  } else if(hour>=17 && hour<20){
    skyTop='#ff9a6a'; skyBottom='#ffd3a0'; sunColor='#ff9a4a'; sunGlow='rgba(255,154,74,0.7)'; phaseClass='evening';
  } else {
    skyTop='#1c2340'; skyBottom='#33396a'; sunColor='#e8ecf5'; sunGlow='rgba(232,236,245,0.55)'; phaseClass='night';
  }

  const seed = Math.floor(Date.now()/3600000);
  const rnd = ((seed*9301+49297) % 233280) / 233280;
  let weather = 'sun';
  if(rnd>0.82) weather='rain'; else if(rnd>0.55) weather='cloud';

  el.roomWindow.style.setProperty('--sky-top', skyTop);
  el.roomWindow.style.setProperty('--sky-bottom', skyBottom);
  el.skySunMoon.style.setProperty('--sun-color', sunColor);
  el.skySunMoon.style.setProperty('--sun-glow', sunGlow);
  el.skySunMoon.style.opacity = weather==='rain' ? '0.3' : '1';
  el.skyClouds.classList.toggle('show', weather==='cloud' || weather==='rain');
  el.skyRain.classList.toggle('show', weather==='rain');
  el.roomBg.classList.toggle('night', phaseClass==='night');
  el.roomBg.classList.toggle('evening', phaseClass==='evening');
}

/* ---------- Slot picker ---------- */

function renderSlotPicker(allowCancel){
  const grid = el.slotGrid;
  grid.innerHTML = '';
  [1,2,3,4].forEach(slotIndex=>{
    const raw = loadSlotRaw(slotIndex);
    const card = document.createElement('div');
    card.className = 'slotCard' + (slotIndex===activeSlot ? ' active' : '');

    let emoji = '🥚', title = `Plass ${slotIndex}`, subtitle = 'Tom - start nytt eventyr';
    if(raw && raw.species && SPECIES[raw.species]){
      const sp = SPECIES[raw.species];
      emoji = sp.emoji;
      title = displayName(raw);
      if(raw.phase === 'egg') subtitle = 'Egg, ikke klekket enda';
      else if(raw.phase === 'pet') subtitle = STAGE_LABELS[stageFromProgress(raw.growthProgress||0)] || 'Aktivt kjæledyr';
      else subtitle = 'Tom - start nytt eventyr';
    }

    const emojiEl = document.createElement('div');
    emojiEl.className = 'slotEmoji';
    emojiEl.textContent = emoji;

    const info = document.createElement('div');
    info.className = 'slotInfo';
    info.innerHTML = `<div class="slotTitle">${title}</div><div class="slotSubtitle">${subtitle}</div>`;

    card.appendChild(emojiEl);
    card.appendChild(info);

    if(raw){
      const del = document.createElement('button');
      del.className = 'slotDelete';
      del.textContent = '🗑';
      del.title = 'Slett denne lagringen';
      del.addEventListener('click', (e)=>{
        e.stopPropagation();
        if(confirm(`Slette lagringen på Plass ${slotIndex}? Dette kan ikke angres.`)){
          localStorage.removeItem(SLOT_KEYS[slotIndex-1]);
          if(slotIndex === activeSlot){
            state = defaultState();
          }
          renderSlotPicker(allowCancel);
        }
      });
      card.appendChild(del);
    }

    card.addEventListener('click', ()=> chooseSlot(slotIndex));
    grid.appendChild(card);
  });
  el.btnCloseSlots.classList.toggle('hidden', !allowCancel);

  el.btnMeetup.classList.toggle('hidden', getHatchedSlots().length < 2);
}

/* ---------- Meetup between two of the saved pets ---------- */

function getHatchedSlots(){
  return [1,2,3,4]
    .map(index=>({ index, raw: loadSlotRaw(index) }))
    .filter(s=> s.raw && s.raw.phase==='pet');
}

function doMeetup(){
  const hatched = getHatchedSlots();
  if(hatched.length < 2) return;
  const [a, b] = hatched;
  const raw1 = a.raw, raw2 = b.raw;

  raw1.stats.happiness = Math.min(100, raw1.stats.happiness+20);
  raw2.stats.happiness = Math.min(100, raw2.stats.happiness+20);
  localStorage.setItem(SLOT_KEYS[a.index-1], JSON.stringify(raw1));
  localStorage.setItem(SLOT_KEYS[b.index-1], JSON.stringify(raw2));
  if(activeSlot===a.index) state.stats.happiness = raw1.stats.happiness;
  if(activeSlot===b.index) state.stats.happiness = raw2.stats.happiness;

  el.meetupSubtitle.textContent = `${displayName(raw1)} og ${displayName(raw2)} er glade for å se hverandre! 🎉`;
  showScreen('meetup');
  SFX.hatch();

  const ctx = el.canvasMeetup.getContext('2d');
  ctx.clearRect(0,0,360,260);
  ctx.save(); ctx.translate(-95,-70);
  drawCreature(ctx, raw1.species, stageFromProgress(raw1.growthProgress||0), { sad:false, asleep:false, pacifier:false, action:null, yaw:0.35, equipped:raw1.equipped });
  ctx.restore();
  ctx.save(); ctx.translate(95,-70);
  drawCreature(ctx, raw2.species, stageFromProgress(raw2.growthProgress||0), { sad:false, asleep:false, pacifier:false, action:null, yaw:-0.35, equipped:raw2.equipped });
  ctx.restore();
  drawEmojiOverlay(ctx, '💕', 180, 90, 30, 1);
}

function chooseSlot(slotIndex){
  activeSlot = slotIndex;
  localStorage.setItem(ACTIVE_SLOT_KEY, String(slotIndex));
  state = loadState();
  eggShakeCount = 0;
  selectedSpecies = null;
  currentAction = null;
  lastStageSeen = null;
  document.querySelectorAll('.eggChoice').forEach(n=>n.classList.remove('selected'));
  el.confirmSelect.disabled = true;
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
  state.growthProgress = 0;
  state.lastUpdate = Date.now();
  saveState();
  showScreen('pet');
  spawnSparkles(8);
  toast(`${SPECIES[state.species].name} har klekket! 🎉`);
}

/* ---------- Pet rendering ---------- */

function stageFromProgress(gp){
  if(gp >= GROWTH_UNITS.adult) return 'adult';
  if(gp >= GROWTH_UNITS.teen) return 'teen';
  if(gp >= GROWTH_UNITS.child) return 'child';
  return 'baby';
}

function getStage(){
  return stageFromProgress(state.growthProgress || 0);
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

function drawPacifier(ctx, x, y, scale=1){
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(scale, scale);
  // ring handle
  ctx.beginPath();
  ctx.ellipse(0,15,5.5,4.2,0,0,Math.PI*2);
  ctx.lineWidth=3;
  ctx.strokeStyle='#4fa8e8';
  ctx.stroke();
  // shield
  ctx.beginPath();
  ctx.ellipse(0,5,10.5,7.5,0,0,Math.PI*2);
  ctx.fillStyle='#4fa8e8';
  ctx.fill();
  ctx.strokeStyle='rgba(0,0,0,0.18)';
  ctx.lineWidth=1;
  ctx.stroke();
  ctx.beginPath();
  ctx.ellipse(-3,2,4,2.4,-0.3,0,Math.PI*2);
  ctx.fillStyle='rgba(255,255,255,0.4)';
  ctx.fill();
  // nipple (tucked toward the mouth)
  ctx.beginPath();
  ctx.ellipse(0,-4,3.6,5.2,0,0,Math.PI*2);
  ctx.fillStyle='#f4d9b8';
  ctx.fill();
  ctx.restore();
}

function drawAccessory(ctx, id, originX, originY, spread, scale=1){
  ctx.save();
  ctx.translate(originX, originY);
  ctx.scale(scale, scale);
  const eyeDX = spread;
  switch(id){
    case 'cap':
      ctx.fillStyle='#4fa8e8';
      ctx.beginPath();
      ctx.arc(0, -18, 26, Math.PI, 0);
      ctx.fill();
      ctx.fillStyle='#3a86c2';
      ctx.beginPath();
      ctx.ellipse(16, -18, 15, 5, 0, 0, Math.PI*2);
      ctx.fill();
      break;
    case 'partyhat':
      ctx.save();
      ctx.translate(0, -16);
      ctx.rotate(0.18);
      ctx.beginPath();
      ctx.moveTo(-14,0); ctx.lineTo(14,0); ctx.lineTo(0,-38);
      ctx.closePath();
      ctx.fillStyle='#ff8fb1';
      ctx.fill();
      ctx.fillStyle='#ffd76b';
      ctx.beginPath(); ctx.arc(0,-38,5,0,Math.PI*2); ctx.fill();
      ctx.restore();
      break;
    case 'tophat':
      ctx.fillStyle='#2a2a2a';
      ctx.fillRect(-15, -48, 30, 28);
      ctx.beginPath();
      ctx.ellipse(0, -20, 23, 6.5, 0, 0, Math.PI*2);
      ctx.fill();
      ctx.fillStyle='#c73c3c';
      ctx.fillRect(-15, -27, 30, 5);
      break;
    case 'crown':
      ctx.fillStyle='#ffd76b';
      ctx.beginPath();
      ctx.moveTo(-22, -18);
      ctx.lineTo(-22, -32);
      ctx.lineTo(-11, -22);
      ctx.lineTo(0, -36);
      ctx.lineTo(11, -22);
      ctx.lineTo(22, -32);
      ctx.lineTo(22, -18);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle='#e0555f';
      [-11,0,11].forEach(x=>{ ctx.beginPath(); ctx.arc(x, -24, 2.5, 0, Math.PI*2); ctx.fill(); });
      break;
    case 'sunglasses':
      ctx.fillStyle='#1a1a1a';
      [-1,1].forEach(dir=>{
        ctx.beginPath();
        ctx.ellipse(dir*eyeDX, 0, 9, 6.5, 0, 0, Math.PI*2);
        ctx.fill();
      });
      ctx.strokeStyle='#1a1a1a';
      ctx.lineWidth=2.5;
      ctx.beginPath();
      ctx.moveTo(-eyeDX+8, 0); ctx.lineTo(eyeDX-8, 0);
      ctx.stroke();
      break;
    case 'nerdglasses':
      ctx.strokeStyle='#2a2a2a';
      ctx.lineWidth=2.5;
      [-1,1].forEach(dir=>{
        ctx.beginPath();
        ctx.arc(dir*eyeDX, 0, 9, 0, Math.PI*2);
        ctx.stroke();
      });
      ctx.beginPath();
      ctx.moveTo(-eyeDX+9, 0); ctx.lineTo(eyeDX-9, 0);
      ctx.stroke();
      break;
  }
  ctx.restore();
}

function drawNeckAccessory(ctx, id, originX=0, originY=0, scale=1){
  ctx.save();
  ctx.translate(originX, originY);
  ctx.scale(scale, scale);
  switch(id){
    case 'bowtie':
      ctx.fillStyle='#e0555f';
      ctx.beginPath(); ctx.moveTo(0,26); ctx.lineTo(-12,18); ctx.lineTo(-12,34); ctx.closePath(); ctx.fill();
      ctx.beginPath(); ctx.moveTo(0,26); ctx.lineTo(12,18); ctx.lineTo(12,34); ctx.closePath(); ctx.fill();
      ctx.fillStyle='#c73c3c';
      ctx.beginPath(); ctx.arc(0,26,4,0,Math.PI*2); ctx.fill();
      break;
    case 'scarf':
      ctx.strokeStyle='#6ec6ff';
      ctx.lineWidth=14;
      ctx.lineCap='round';
      ctx.beginPath(); ctx.moveTo(-30,20); ctx.quadraticCurveTo(0,32,30,20); ctx.stroke();
      ctx.fillStyle='#4fa8e8';
      ctx.fillRect(-6,26,10,20);
      break;
    case 'bandana':
      ctx.fillStyle='#ff8fb1';
      ctx.beginPath();
      ctx.moveTo(-28,16); ctx.quadraticCurveTo(0,30,28,16); ctx.lineTo(24,26); ctx.quadraticCurveTo(0,38,-24,26); ctx.closePath();
      ctx.fill();
      ctx.fillStyle='#e0555f';
      [-12,0,12].forEach(x=>{ ctx.beginPath(); ctx.arc(x,26,2,0,Math.PI*2); ctx.fill(); });
      break;
  }
  ctx.restore();
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

function drawLimbs(ctx, speciesKey, sp, profile, bodyY) {
  const isPanda = speciesKey === 'panda';
  const limbColor = isPanda ? '#2a2a2a' : sp.body;
  const pawColor = isPanda ? '#1a1a1a' : 'rgba(255,255,255,0.4)';

  // Bakbein
  [-1, 1].forEach(dir => {
    ctx.beginPath();
    ctx.ellipse(dir * profile.bodyRX * 0.7, bodyY + profile.bodyRY * 0.7, 12, 16, dir * 0.3, 0, Math.PI * 2);
    ctx.fillStyle = limbColor;
    ctx.fill();
    // Poter
    ctx.beginPath();
    ctx.ellipse(dir * profile.bodyRX * 0.75, bodyY + profile.bodyRY * 0.7 + 12, 14, 8, 0, 0, Math.PI * 2);
    ctx.fillStyle = pawColor;
    ctx.fill();
  });

  // Armer foran
  [-1, 1].forEach(dir => {
    ctx.beginPath();
    ctx.ellipse(dir * profile.bodyRX * 0.8, bodyY - profile.bodyRY * 0.1, 10, 20, dir * 0.5, 0, Math.PI * 2);
    ctx.fillStyle = limbColor;
    ctx.fill();
  });
}

function drawCreature(ctx, speciesKey, stage, opts={}){
  const sp = SPECIES[speciesKey];
  if(sp.bodyPlan==='snake') return drawSnakeCreature(ctx, speciesKey, stage, opts);
  if(sp.bodyPlan==='gecko') return drawGeckoCreature(ctx, speciesKey, stage, opts);
  
  const profile = STAGE_PROFILE[stage];
  const baseScale = STAGE_SCALE[stage] * 120;
  const sad = opts.sad;
  const asleep = opts.asleep;
  const pacifier = opts.pacifier;
  const action = opts.action;
  const yaw = opts.yaw || 0;

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
  } else if(action && action.type==='jump'){
    const hopPhase = (action.progress*2) % 1;
    extraTY = -50*Math.sin(hopPhase*Math.PI);
    extraScaleX = 1 + 0.08*Math.sin(hopPhase*Math.PI);
  } else if(action && action.type==='cycle'){
    extraRotate = 0.08 + Math.sin(action.progress*Math.PI*10)*0.05;
    extraTY = Math.abs(Math.sin(action.progress*Math.PI*10))*4;
  } else if(action && action.type==='drive'){
    extraScaleX = 0.42; extraScaleY = 0.45;
    extraTY = 40 + Math.sin(action.progress*Math.PI*12)*2;
  }

  let pulseScale = 1;
  const pulseRemaining = growthPulseUntil - performance.now();
  if(pulseRemaining > 0){
    const p = 1 - pulseRemaining/700;
    pulseScale = 1 + Math.sin(Math.min(p,1)*Math.PI)*0.3;
  }

  const bounce = (asleep || action) ? 0 : Math.sin(bounceTime*2)*4;
  const closedEyes = asleep || (action && action.type==='wash');

  ctx.save();
  ctx.translate(180+extraTX, 180 - (profile.bodyY/2) + bounce+extraTY);
  ctx.rotate(extraRotate);
  ctx.scale((baseScale/100)*extraScaleX*pulseScale*Math.cos(yaw), (baseScale/100)*extraScaleY*pulseScale);

  // 1. Hale
  ctx.save();
  ctx.translate(0, profile.bodyY);
  ctx.scale(profile.tailScale, profile.tailScale);
  drawTail(ctx, speciesKey, sp, stage);
  ctx.restore();

  // Sykkel (tegnes bak)
  if(action && action.type==='cycle'){
    const wheelRot = action.progress*Math.PI*10;
    ctx.strokeStyle = '#c0392b'; ctx.lineWidth = 4;
    ctx.beginPath(); ctx.moveTo(-30, profile.bodyY+60); ctx.lineTo(0, profile.bodyY+32); ctx.lineTo(30, profile.bodyY+60); ctx.stroke();
    [-30,30].forEach(wx=>{
      ctx.save(); ctx.translate(wx, profile.bodyY+62); ctx.rotate(wheelRot);
      ctx.beginPath(); ctx.arc(0,0,15,0,Math.PI*2); ctx.strokeStyle='#2a2a2a'; ctx.lineWidth=3; ctx.stroke();
      for(let s=0;s<4;s++){ ctx.beginPath(); ctx.moveTo(-15,0); ctx.lineTo(15,0); ctx.stroke(); ctx.rotate(Math.PI/4); }
      ctx.restore();
    });
  }

  // Dragevinger (bak kropp)
  if(speciesKey==='dragon' && profile.features){
    ctx.save(); ctx.translate(0, profile.bodyY);
    [-1,1].forEach(dir=>{
      ctx.beginPath(); ctx.moveTo(dir*20, -10); ctx.quadraticCurveTo(dir*90,-40,dir*70,20); ctx.quadraticCurveTo(dir*55,10,dir*20,-10); ctx.closePath();
      ctx.fillStyle='rgba(127,216,160,0.55)'; ctx.fill(); ctx.strokeStyle='rgba(79,174,116,0.6)'; ctx.lineWidth=1.5; ctx.stroke();
    });
    ctx.restore();
  }

  // 2. Armer og bein
  drawLimbs(ctx, speciesKey, sp, profile, profile.bodyY);

  // 3. Kropp (Torso)
  ctx.beginPath();
  ctx.ellipse(0, profile.bodyY, profile.bodyRX, profile.bodyRY, 0, 0, Math.PI*2);
  ctx.fillStyle = (speciesKey === 'panda') ? '#2a2a2a' : sp.body; 
  ctx.fill();

  // Mage
  if(speciesKey === 'panda') {
    ctx.beginPath();
    ctx.ellipse(0, profile.bodyY + profile.bodyRY*0.1, profile.bodyRX*0.8, profile.bodyRY*0.75, 0, 0, Math.PI*2);
    ctx.fillStyle = sp.body; 
    ctx.fill();
  } else {
    ctx.beginPath();
    ctx.ellipse(0, profile.bodyY + profile.bodyRY*0.1, profile.bodyRX*0.7, profile.bodyRY*0.75, 0, 0, Math.PI*2);
    ctx.fillStyle='rgba(255,255,255,0.45)';
    ctx.fill();
  }

  // Halsbånd/skjerf
  const equipped = opts.equipped;
  if(equipped && equipped.neck){
    drawNeckAccessory(ctx, equipped.neck, 0, profile.bodyY - profile.bodyRY*0.6);
  }

  // 4. Ører (bak hodet)
  ctx.save();
  ctx.scale(profile.earScale, profile.earScale);
  drawEars(ctx, speciesKey, sp);
  ctx.restore();

  // 5. Hode
  ctx.beginPath();
  ctx.arc(0, 0, profile.headR, 0, Math.PI*2);
  ctx.fillStyle = sp.body;
  ctx.fill();

  // Panda øyelapper
  if(speciesKey==='panda' && !closedEyes && profile.features){
    ctx.fillStyle = sp.ear;
    [-1,1].forEach(dir=>{
      ctx.beginPath(); ctx.ellipse(dir*16,-2,10,12,dir*0.15,0,Math.PI*2); ctx.fill();
    });
  }

  // Hunde/reve snute
  if((speciesKey==='fox' || speciesKey==='dog') && !pacifier && profile.features){
    ctx.beginPath();
    const snoutW = stage === 'adult' ? 18 : (stage === 'teen' ? 16 : 14);
    const snoutH = stage === 'adult' ? 14 : 12;
    ctx.ellipse(0, 10, snoutW, snoutH, 0, 0, Math.PI*2);
    ctx.fillStyle = speciesKey==='fox' ? '#fff8ee' : 'rgba(255,255,255,0.6)';
    ctx.fill();
  }

  // Ansikt
  const eyeY = -4;
  const eyeDX = 16 * profile.eyeSpread;
  const eyeR = 6 * profile.eyeScale;
  const blink = (blinkPhase>0.92);
  const annoyed = sad || (action && action.type==='refuse');
  const faceShift = Math.sin(yaw)*6;

  ctx.save();
  ctx.translate(faceShift, 0);

  // Øyne
  if(closedEyes || blink){
    ctx.strokeStyle='#3a2a20'; ctx.lineWidth=3; ctx.lineCap='round';
    [-1,1].forEach(dir=>{
      ctx.beginPath(); ctx.moveTo(dir*eyeDX-8, eyeY); ctx.quadraticCurveTo(dir*eyeDX, eyeY+6, dir*eyeDX+8, eyeY); ctx.stroke();
    });
  } else {
    [-1,1].forEach(dir=>{
      ctx.beginPath();
      if(sp.eyeType==='slit'){
        ctx.ellipse(dir*eyeDX, eyeY, eyeR, eyeR*1.28, 0, 0, Math.PI*2); ctx.fillStyle='#fff'; ctx.fill();
        ctx.fillStyle='#2a2a2a'; ctx.fillRect(dir*eyeDX-1.5, eyeY-eyeR*0.85, 3, eyeR*1.7);
      } else {
        ctx.arc(dir*eyeDX, eyeY, eyeR, 0, Math.PI*2); ctx.fillStyle='#fff'; ctx.fill();
        ctx.beginPath(); ctx.arc(dir*eyeDX + (annoyed?0:1), eyeY+ (annoyed?2:1), eyeR*0.57, 0, Math.PI*2); ctx.fillStyle='#2a2a2a'; ctx.fill();
      }
    });
  }

  if(equipped && equipped.glasses && !closedEyes) drawAccessory(ctx, equipped.glasses, 0, eyeY, eyeDX, 1);

  if(speciesKey==='cat' && !closedEyes && profile.features){
    ctx.strokeStyle='rgba(60,40,30,0.45)'; ctx.lineWidth=1.3;
    [-1,1].forEach(dir=>{
      for(let i=-1;i<=1;i++){ ctx.beginPath(); ctx.moveTo(dir*22, 8+i*4); ctx.lineTo(dir*38, 6+i*6); ctx.stroke(); }
    });
  }

  if(annoyed && !closedEyes){
    ctx.strokeStyle='rgba(0,0,0,0.4)'; ctx.lineWidth=3;
    [-1,1].forEach(dir=>{ ctx.beginPath(); ctx.moveTo(dir*eyeDX-9, eyeY-11); ctx.lineTo(dir*eyeDX+9, eyeY-6); ctx.stroke(); });
  }

  if(pacifier){
    drawPacifier(ctx, 0, 10, 1.1);
  } else {
    ctx.fillStyle='#3a2a20'; ctx.beginPath(); ctx.ellipse(0, 6, 3.5, 2.5, 0, 0, Math.PI*2); ctx.fill();
    ctx.strokeStyle='#3a2a20'; ctx.lineWidth=2.5; ctx.lineCap='round'; ctx.beginPath();
    if(asleep){ ctx.moveTo(-6,12); ctx.lineTo(6,12); }
    else if(action && action.type==='eat' && chompProgress<1){ const mouthOpen = Math.abs(Math.sin(chompProgress*Math.PI*4))*8; ctx.moveTo(-9,10); ctx.quadraticCurveTo(0,14+mouthOpen,9,10); }
    else if(annoyed){ ctx.moveTo(-9,16); ctx.quadraticCurveTo(0,8,9,16); }
    else { ctx.moveTo(-9,10); ctx.quadraticCurveTo(0,20,9,10); }
    ctx.stroke();

    if(speciesKey==='bunny' && !annoyed && !asleep && profile.features){
      ctx.fillStyle='#fff'; ctx.fillRect(-4,13,3.5,6); ctx.fillRect(0.5,13,3.5,6);
      ctx.strokeStyle='rgba(0,0,0,0.15)'; ctx.lineWidth=0.5; ctx.strokeRect(-4,13,3.5,6); ctx.strokeRect(0.5,13,3.5,6);
    }
  }

  ctx.fillStyle='rgba(255,120,140,0.35)';
  [-1,1].forEach(dir=>{ ctx.beginPath(); ctx.arc(dir*24, 10, 6, 0, Math.PI*2); ctx.fill(); });

  if(equipped && equipped.hat) drawAccessory(ctx, equipped.hat, 0, -profile.headR + 10, eyeDX, 1);

  if(action && action.type==='eat'){
    if(chompProgress<1){ const foodScale = 1-chompProgress*0.7; drawEmojiOverlay(ctx, FOOD_EMOJI[speciesKey] || '🍎', 30, 4, 30*foodScale, 1); }
  } else if(action && action.type==='refuse'){
    drawEmojiOverlay(ctx, FOOD_EMOJI[speciesKey] || '🍎', 34+action.progress*18, 4, 26, 1-action.progress*0.7);
  } else if(action && action.type==='wash'){
    const p = action.progress; const sudsEnv = Math.sin(Math.min(p/0.85,1)*Math.PI); ctx.fillStyle = 'rgba(255,255,255,0.75)';
    [[-18,-4,10],[10,-12,12],[20,8,9],[-6,16,8],[2,-2,14]].forEach(([sx,sy,sr],i)=>{ ctx.beginPath(); ctx.arc(sx, sy, sr*sudsEnv*(0.7+0.3*Math.sin(p*10+i)), 0, Math.PI*2); ctx.fill(); });
    drawEmojiOverlay(ctx, '🧽', Math.sin(p*Math.PI*6)*30, 4, 26, 1);
  } else if(action && action.type==='brush'){
    drawEmojiOverlay(ctx, '🪥', 4+Math.sin(action.progress*Math.PI*12)*8, 8, 26, 1);
    if(action.progress>0.8) drawEmojiOverlay(ctx, '✨', 20, -14, 18, 1);
  }

  ctx.restore();
  ctx.restore();
}

function drawTail(ctx, speciesKey, sp, stage){
  if(speciesKey==='dragon'){
    ctx.beginPath();
    ctx.moveTo(45,20);
    ctx.quadraticCurveTo(90,10,95,-30);
    ctx.lineWidth=18;
    ctx.strokeStyle = sp.body;
    ctx.lineCap='round';
    ctx.stroke();
    if(stage==='teen'||stage==='adult'){
      ctx.fillStyle = sp.pattern;
      ctx.beginPath();
      ctx.moveTo(95,-30); ctx.lineTo(88,-42); ctx.lineTo(100,-38);
      ctx.closePath();
      ctx.fill();
    }
  } else if(speciesKey==='dog'){
    ctx.beginPath();
    ctx.moveTo(48,10);
    ctx.quadraticCurveTo(75,-10,72,-35);
    ctx.lineWidth=14;
    ctx.strokeStyle = sp.ear;
    ctx.lineCap='round';
    ctx.stroke();
  } else if(speciesKey==='cat'){
    ctx.beginPath();
    ctx.moveTo(46,22);
    ctx.quadraticCurveTo(78,20,80,-8);
    ctx.quadraticCurveTo(82,-24,68,-24);
    ctx.lineWidth=13;
    ctx.strokeStyle = sp.body;
    ctx.lineCap='round';
    ctx.stroke();
  } else if(speciesKey==='fox'){
    ctx.beginPath();
    ctx.ellipse(78,10,32,17,-0.5,0,Math.PI*2);
    ctx.fillStyle = sp.body;
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(96,4,11,8,-0.5,0,Math.PI*2);
    ctx.fillStyle = '#fff8ee';
    ctx.fill();
  } else if(speciesKey==='panda'){
    ctx.beginPath();
    ctx.arc(50,32,9,0,Math.PI*2);
    ctx.fillStyle = '#fff';
    ctx.fill();
  } else if(speciesKey==='bunny'){
    ctx.beginPath();
    ctx.arc(48,28,10,0,Math.PI*2);
    ctx.fillStyle = '#fff';
    ctx.fill();
  }
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
      ctx.beginPath();
      ctx.moveTo(dir*33,-33);
      ctx.lineTo(dir*44,-54);
      ctx.lineTo(dir*25,-45);
      ctx.closePath();
      ctx.fillStyle = sp.pattern;
      ctx.fill();
      ctx.fillStyle = sp.ear;
    });
  } else if(speciesKey==='dog'){
    [-1,1].forEach(dir=>{
      ctx.beginPath();
      ctx.ellipse(dir*44,-24,13,26,dir*0.4,0,Math.PI*2);
      ctx.fill();
    });
  } else if(speciesKey==='fox'){
    [-1,1].forEach(dir=>{
      ctx.beginPath();
      ctx.moveTo(dir*30,-32);
      ctx.lineTo(dir*48,-72);
      ctx.lineTo(dir*16,-44);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = '#2a2a2a';
      ctx.beginPath();
      ctx.moveTo(dir*44,-64);
      ctx.lineTo(dir*48,-72);
      ctx.lineTo(dir*38,-58);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = '#fff';
      ctx.beginPath();
      ctx.moveTo(dir*32,-36);
      ctx.lineTo(dir*40,-58);
      ctx.lineTo(dir*22,-42);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = sp.ear;
    });
  } else if(speciesKey==='panda'){
    [-1,1].forEach(dir=>{
      ctx.beginPath();
      ctx.arc(dir*38,-42,17,0,Math.PI*2);
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

/* ---------- Reptiles: real body-plans instead of the round chibi template ---------- */

function drawTaperedPath(ctx, points, color){
  ctx.fillStyle = color;
  for(let i=0;i<points.length-1;i++){
    const a=points[i], b=points[i+1];
    const steps=12;
    for(let s=0;s<=steps;s++){
      const t=s/steps;
      const x=a.x+(b.x-a.x)*t;
      const y=a.y+(b.y-a.y)*t;
      const r=a.r+(b.r-a.r)*t;
      ctx.beginPath();
      ctx.arc(x,y,r,0,Math.PI*2);
      ctx.fill();
    }
  }
}

function computeSharedTransform(opts){
  let extraTX=0, extraTY=0, extraRotate=0, extraScaleX=1, extraScaleY=1;
  let chompProgress = null;
  const action = opts.action;
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
  } else if(action && action.type==='jump'){
    const hopPhase = (action.progress*2) % 1;
    extraTY = -50*Math.sin(hopPhase*Math.PI);
    extraScaleX = 1 + 0.08*Math.sin(hopPhase*Math.PI);
  } else if(action && action.type==='cycle'){
    extraRotate = 0.08 + Math.sin(action.progress*Math.PI*10)*0.05;
    extraTY = Math.abs(Math.sin(action.progress*Math.PI*10))*4;
  } else if(action && action.type==='drive'){
    extraScaleX = 0.5; extraScaleY = 0.5;
    extraTY = 34 + Math.sin(action.progress*Math.PI*12)*2;
  }
  let pulseScale = 1;
  const pulseRemaining = growthPulseUntil - performance.now();
  if(pulseRemaining > 0){
    const p = 1 - pulseRemaining/700;
    pulseScale = 1 + Math.sin(Math.min(p,1)*Math.PI)*0.3;
  }
  return { extraTX, extraTY, extraRotate, extraScaleX, extraScaleY, chompProgress, pulseScale };
}

function drawReptileActionOverlays(ctx, speciesKey, opts, t, headX, headY, headR){
  const action = opts.action;
  const equipped = opts.equipped;
  const hs = headR/22; 
  if(action && action.type==='eat'){
    const foodEmoji = FOOD_EMOJI[speciesKey] || '🍎';
    if(t.chompProgress<1){
      drawEmojiOverlay(ctx, foodEmoji, headX+18, headY, 26*(1-t.chompProgress*0.7), 1);
    }
  } else if(action && action.type==='refuse'){
    const foodEmoji = FOOD_EMOJI[speciesKey] || '🍎';
    drawEmojiOverlay(ctx, foodEmoji, headX+22+action.progress*16, headY, 22, 1-action.progress*0.7);
  } else if(action && action.type==='wash'){
    const p = action.progress;
    const sudsEnv = Math.sin(Math.min(p/0.85,1)*Math.PI);
    ctx.fillStyle = 'rgba(255,255,255,0.75)';
    [[-10,-4,9],[8,-10,8],[0,6,10]].forEach(([sx,sy,sr],i)=>{
      ctx.beginPath();
      ctx.arc(headX+sx, headY+sy, sr*sudsEnv*(0.7+0.3*Math.sin(p*10+i)), 0, Math.PI*2);
      ctx.fill();
    });
  } else if(action && action.type==='brush'){
    const bx = Math.sin(action.progress*Math.PI*12)*6;
    drawEmojiOverlay(ctx, '🪥', headX+bx, headY+6, 22, 1);
  }
  if(opts.pacifier){
    drawPacifier(ctx, headX, headY+headR*0.45, hs*0.8);
  }
  if(equipped && equipped.glasses){
    drawAccessory(ctx, equipped.glasses, headX, headY-headR*0.05, headR*0.42, hs*0.65);
  }
  if(equipped && equipped.hat){
    drawAccessory(ctx, equipped.hat, headX, headY-headR*0.55, headR*0.42, hs*0.55);
  }
  if(equipped && equipped.neck){
    drawNeckAccessory(ctx, equipped.neck, headX-headR*1.6, headY+headR*0.3, hs*0.6);
  }
}

function drawSnakeCreature(ctx, speciesKey, stage, opts={}){
  const sp = SPECIES[speciesKey];
  const scale = STAGE_SCALE[stage];
  const asleep = opts.asleep;
  const sad = opts.sad;
  const action = opts.action;
  const yaw = opts.yaw || 0;
  const annoyed = sad || (action && action.type==='refuse');
  const t = computeSharedTransform(opts);

  const bounce = (asleep || action) ? 0 : Math.sin(bounceTime*2)*3;

  ctx.save();
  ctx.translate(180+t.extraTX, 215+bounce+t.extraTY);
  ctx.rotate(t.extraRotate);
  ctx.scale(scale*t.extraScaleX*t.pulseScale*Math.cos(yaw), scale*t.extraScaleY*t.pulseScale);

  const coil = { baby:0.32, child:0.55, teen:0.78, adult:1.0 }[stage];
  const bodyPts = [
    { x:-95*coil, y:14, r:5+3*coil },
    { x:-58*coil, y:-16*coil, r:9+5*coil },
    { x:-18*coil, y:12*coil, r:13+7*coil },
    { x:22*coil,  y:-14*coil, r:12+6*coil },
    { x:55*coil,  y:8*coil,   r:9+4*coil },
  ];
  drawTaperedPath(ctx, bodyPts, sp.body);

  ctx.fillStyle = sp.pattern;
  for(let i=0;i<bodyPts.length-1;i++){
    const a=bodyPts[i], b=bodyPts[i+1];
    const mx=(a.x+b.x)/2, my=(a.y+b.y)/2, mr=(a.r+b.r)/2;
    ctx.save();
    ctx.translate(mx,my);
    ctx.rotate(Math.PI/4);
    ctx.fillRect(-mr*0.4,-mr*0.4,mr*0.8,mr*0.8);
    ctx.restore();
  }

  // head
  const headX = 68*coil+18, headY = -2*coil;
  const headR = 15+4*coil;
  ctx.beginPath();
  ctx.ellipse(headX, headY, headR, headR*0.85, 0, 0, Math.PI*2);
  ctx.fillStyle = sp.body;
  ctx.fill();

  const closedEyes = asleep;
  const eyeY2 = headY-3, eyeDX2 = headR*0.5;
  if(closedEyes){
    ctx.strokeStyle='#2a2a1a'; ctx.lineWidth=2; ctx.lineCap='round';
    ctx.beginPath(); ctx.moveTo(headX+eyeDX2-5,eyeY2); ctx.quadraticCurveTo(headX+eyeDX2,eyeY2+4,headX+eyeDX2+5,eyeY2); ctx.stroke();
  } else {
    ctx.beginPath(); ctx.arc(headX+eyeDX2, eyeY2, headR*0.24, 0, Math.PI*2); ctx.fillStyle='#fff'; ctx.fill();
    ctx.beginPath(); ctx.arc(headX+eyeDX2+1, eyeY2+ (annoyed?2:0), headR*0.14, 0, Math.PI*2); ctx.fillStyle='#2a2a2a'; ctx.fill();
  }

  if(annoyed && !closedEyes){
    ctx.strokeStyle='rgba(0,0,0,0.4)'; ctx.lineWidth=2;
    ctx.beginPath(); ctx.moveTo(headX+eyeDX2-6,eyeY2-8); ctx.lineTo(headX+eyeDX2+6,eyeY2-4); ctx.stroke();
  }

  // nostril
  ctx.fillStyle = 'rgba(0,0,0,0.35)';
  ctx.beginPath(); ctx.arc(headX+headR*0.75, headY-2, 1.4, 0, Math.PI*2); ctx.fill();

  // mouth
  ctx.strokeStyle='#2a2a1a'; ctx.lineWidth=1.6; ctx.lineCap='round';
  ctx.beginPath();
  if(asleep){ ctx.moveTo(headX+3,headY+9); ctx.lineTo(headX+11,headY+9); }
  else if(annoyed){ ctx.moveTo(headX+2,headY+11); ctx.quadraticCurveTo(headX+8,headY+6,headX+14,headY+9); }
  else { ctx.moveTo(headX+2,headY+8); ctx.quadraticCurveTo(headX+8,headY+12,headX+14,headY+8); }
  ctx.stroke();

  // flicking forked tongue
  if(!asleep && !annoyed && Math.sin(bounceTime*2.6) > 0.65){
    ctx.strokeStyle='#c73c5a'; ctx.lineWidth=1.4;
    ctx.beginPath();
    ctx.moveTo(headX+headR*0.95, headY+6);
    ctx.lineTo(headX+headR*1.35, headY+6);
    ctx.lineTo(headX+headR*1.55, headY+2);
    ctx.moveTo(headX+headR*1.35, headY+6);
    ctx.lineTo(headX+headR*1.55, headY+10);
    ctx.stroke();
  }

  drawReptileActionOverlays(ctx, speciesKey, opts, t, headX, headY, headR);

  ctx.restore();
}

function drawGeckoCreature(ctx, speciesKey, stage, opts={}){
  const sp = SPECIES[speciesKey];
  const scale = STAGE_SCALE[stage];
  const asleep = opts.asleep;
  const sad = opts.sad;
  const action = opts.action;
  const yaw = opts.yaw || 0;
  const annoyed = sad || (action && action.type==='refuse');
  const t = computeSharedTransform(opts);

  const bounce = (asleep || action) ? 0 : Math.sin(bounceTime*2)*3;

  ctx.save();
  ctx.translate(180+t.extraTX, 210+bounce+t.extraTY);
  ctx.rotate(t.extraRotate);
  ctx.scale(scale*t.extraScaleX*t.pulseScale*Math.cos(yaw), scale*t.extraScaleY*t.pulseScale);

  drawTaperedPath(ctx, [
    { x:-40, y:6, r:5 },
    { x:-68, y:-2, r:9 },
    { x:-92, y:4, r:6 },
  ], sp.body);

  [[-28,26,-1],[18,26,-1],[-28,-24,1],[18,-24,1]].forEach(([lx,ly])=>{
    ctx.beginPath();
    ctx.ellipse(lx, ly, 10, 7, 0, 0, Math.PI*2);
    ctx.fillStyle = sp.body;
    ctx.fill();
    ctx.fillStyle = sp.pattern;
    for(let toe=-1; toe<=1; toe++){
      ctx.beginPath();
      ctx.arc(lx+toe*4, ly+ (ly>0?8:-8), 1.6, 0, Math.PI*2);
      ctx.fill();
    }
    ctx.fillStyle = sp.body;
  });

  // body
  ctx.beginPath();
  ctx.ellipse(-4, 0, 46, 24, 0, 0, Math.PI*2);
  ctx.fillStyle = sp.body;
  ctx.fill();

  ctx.fillStyle = sp.pattern;
  [[-38,-6],[-20,10],[0,-10],[18,8],[-60,-1],[-78,3],[8,-2],[-30,3]].forEach(([sx,sy])=>{
    ctx.beginPath();
    ctx.ellipse(sx, sy, 3.4, 2.6, Math.random(), 0, Math.PI*2);
    ctx.fill();
  });

  // belly
  ctx.beginPath();
  ctx.ellipse(-4, 10, 30, 10, 0, 0, Math.PI*2);
  ctx.fillStyle = 'rgba(255,255,255,0.35)';
  ctx.fill();

  // head
  const headX = 44, headY = -2;
  const headR = 22;
  ctx.beginPath();
  ctx.ellipse(headX, headY, headR, headR*0.8, 0, 0, Math.PI*2);
  ctx.fillStyle = sp.body;
  ctx.fill();
  ctx.fillStyle = sp.pattern;
  [[headX-6,headY-6],[headX+6,headY+4]].forEach(([sx,sy])=>{
    ctx.beginPath(); ctx.ellipse(sx,sy,2.6,2,0.4,0,Math.PI*2); ctx.fill();
  });

  const closedEyes = asleep;
  const eyeY2 = headY-6, eyeDX2 = headR*0.42;
  if(closedEyes){
    ctx.strokeStyle='#3a2a1a'; ctx.lineWidth=2; ctx.lineCap='round';
    ctx.beginPath(); ctx.moveTo(headX+eyeDX2-7,eyeY2); ctx.quadraticCurveTo(headX+eyeDX2,eyeY2+5,headX+eyeDX2+7,eyeY2); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(headX-eyeDX2-7,eyeY2); ctx.quadraticCurveTo(headX-eyeDX2,eyeY2+5,headX-eyeDX2+7,eyeY2); ctx.stroke();
  } else {
    [-1,1].forEach(dir=>{
      ctx.beginPath();
      ctx.arc(headX+dir*eyeDX2, eyeY2, headR*0.4, 0, Math.PI*2);
      ctx.fillStyle='#2a1f10';
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(headX+dir*eyeDX2, eyeY2, headR*0.36, headR*0.36, 0, 0, Math.PI*2);
      ctx.fillStyle='#e0a83a';
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(headX+dir*eyeDX2+(annoyed?0:0.5), eyeY2+(annoyed?2:0), headR*0.08, headR*0.32, 0, 0, Math.PI*2);
      ctx.fillStyle='#1a1208';
      ctx.fill();
      ctx.beginPath();
      ctx.arc(headX+dir*eyeDX2-headR*0.14, eyeY2-headR*0.14, headR*0.09, 0, Math.PI*2);
      ctx.fillStyle='rgba(255,255,255,0.85)';
      ctx.fill();
    });
  }

  if(annoyed && !closedEyes){
    ctx.strokeStyle='rgba(0,0,0,0.35)'; ctx.lineWidth=2;
    [-1,1].forEach(dir=>{
      ctx.beginPath();
      ctx.moveTo(headX+dir*eyeDX2-6, eyeY2-12);
      ctx.lineTo(headX+dir*eyeDX2+6, eyeY2-8);
      ctx.stroke();
    });
  }

  ctx.strokeStyle='#3a2a1a'; ctx.lineWidth=1.6; ctx.lineCap='round';
  ctx.beginPath();
  if(asleep){ ctx.moveTo(headX+12,headY+13); ctx.lineTo(headX+22,headY+13); }
  else if(annoyed){ ctx.moveTo(headX+10,headY+16); ctx.quadraticCurveTo(headX+18,headY+10,headX+26,headY+14); }
  else { ctx.moveTo(headX+10,headY+12); ctx.quadraticCurveTo(headX+18,headY+17,headX+26,headY+12); }
  ctx.stroke();

  drawReptileActionOverlays(ctx, speciesKey, opts, t, headX, headY, headR);

  ctx.restore();
}

/* ---------- Pet drag-to-rotate ---------- */

function setupPetDrag(){
  const canvas = el.canvasPet;
  canvas.addEventListener('pointerdown', (e)=>{
    if(state.phase !== 'pet') return;
    isDraggingPet = true;
    dragStartX = e.clientX;
    dragStartYaw = petYawTarget;
    try{ canvas.setPointerCapture(e.pointerId); }catch(err){}
    el.rotateHint.classList.add('hidden');
  });
  canvas.addEventListener('pointermove', (e)=>{
    if(!isDraggingPet) return;
    const dx = e.clientX - dragStartX;
    petYawTarget = Math.max(-YAW_MAX, Math.min(YAW_MAX, dragStartYaw + dx*0.012));
  });
  ['pointerup','pointercancel','pointerleave'].forEach(evt=>{
    canvas.addEventListener(evt, ()=>{ isDraggingPet = false; });
  });
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

let lastNonSlotScreen = 'select';

function showScreen(name){
  if(name !== 'slots' && name !== 'shop' && name !== 'meetup') lastNonSlotScreen = name;
  Object.entries(el.screens).forEach(([k,node])=>{
    node.classList.toggle('hidden', k!==name);
  });
  el.actions.classList.toggle('hidden', name!=='pet');
}

/* ---------- Stat update / decay ---------- */

function clamp(v){ return Math.max(0, Math.min(100, v)); }

function updateGrowth(hours){
  if(hours <= 0) return;
  let mult = 1;
  if(state.stats.happiness >= 90) mult = 1.4;
  else if(state.stats.happiness >= 70) mult = 1.15;
  state.growthProgress = (state.growthProgress||0) + hours*mult;
}

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
  } else {
    s.hunger = clamp(s.hunger - DECAY_PER_HOUR.hunger*hours);
    s.energy = clamp(s.energy - DECAY_PER_HOUR.energy*hours);
    s.hygiene = clamp(s.hygiene - DECAY_PER_HOUR.hygiene*hours);
    if(state.pacifier){
      s.happiness = clamp(s.happiness + PACIFIER_HAPPINESS_PER_HOUR*hours);
    } else {
      let happinessDrop = DECAY_PER_HOUR.happiness*hours;
      if(s.hunger<25 || s.hygiene<25 || s.energy<20) happinessDrop *= 1.6;
      s.happiness = clamp(s.happiness - happinessDrop);
    }
  }
  updateGrowth(hours);
  state.lastUpdate = now;
}

function refreshStatBars(){
  Object.entries(el.fills).forEach(([key,node])=>{
    const v = Math.round(state.stats[key]*10)/10;
    const vRounded = Math.round(v);
    node.style.width = vRounded+'%';
    node.classList.toggle('bad', vRounded<25);
    node.classList.toggle('mid', vRounded>=25 && vRounded<55);
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
  if(state.pacifier) return toast('Har smokk i munnen 🍼');
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
  state.growthProgress = (state.growthProgress||0) + GROWTH_ACTION_BONUS;
  earnCoins(3);
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
  state.growthProgress = (state.growthProgress||0) + GROWTH_ACTION_BONUS;
  earnCoins(4);
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
  earnCoins(3);
  saveState();
  setTimeout(()=>{ toast('Skinnende ren! 🧼✨'); }, ACTION_DURATIONS.wash*0.8);
}

function doJump(){
  if(state.sleeping) return toast('Zzz... sover nå 💤');
  if(currentAction) return;
  if(state.stats.energy < 8) return toast('For sliten til å hoppe 😴');

  triggerAction('jump');
  SFX.jump();
  spawnEmojiBurst('✨', 4);
  state.stats.happiness = clamp(state.stats.happiness+14);
  state.stats.energy = clamp(state.stats.energy-6);
  state.stats.hunger = clamp(state.stats.hunger-6);
  state.growthProgress = (state.growthProgress||0) + GROWTH_ACTION_BONUS;
  earnCoins(2);
  toast('Hopp hopp! 🤸');
  saveState();
}

function doCycle(){
  if(state.sleeping) return toast('Zzz... sover nå 💤');
  if(currentAction) return;
  if(state.stats.energy < 15) return toast('For sliten til å sykle 😴');

  triggerAction('cycle');
  SFX.cycle();
  spawnEmojiBurst('🚲', 4);
  state.stats.happiness = clamp(state.stats.happiness+22);
  state.stats.energy = clamp(state.stats.energy-14);
  state.stats.hygiene = clamp(state.stats.hygiene-10);
  state.stats.hunger = clamp(state.stats.hunger-12);
  state.growthProgress = (state.growthProgress||0) + GROWTH_ACTION_BONUS*1.3;
  earnCoins(4);
  toast('Sykkeltur! 🚲');
  saveState();
}

function doBrushTeeth(){
  if(state.sleeping) return toast('Zzz... sover nå 💤');
  if(state.pacifier) return toast('Har smokk i munnen 🍼');
  if(currentAction) return;

  triggerAction('brush');
  SFX.brush();
  state.stats.hygiene = clamp(state.stats.hygiene+22);
  state.stats.happiness = clamp(state.stats.happiness+5);
  earnCoins(2);
  saveState();
  setTimeout(()=>{ toast('Skinnende rene tenner! 🪥✨'); spawnSparkles(4); }, ACTION_DURATIONS.brush*0.7);
}

function doDrive(){
  if(state.sleeping) return toast('Zzz... sover nå 💤');
  if(currentAction) return;
  if(getStage() !== 'adult') return toast('For lite til å kjøre bil ennå 🚗');

  triggerAction('drive');
  SFX.drive();
  spawnEmojiBurst('💨', 4);
  state.stats.happiness = clamp(state.stats.happiness+18);
  state.stats.energy = clamp(state.stats.energy-8);
  state.stats.hunger = clamp(state.stats.hunger-6);
  earnCoins(5);
  toast('Kjører en tur! 🚗');
  saveState();
  setTimeout(()=>{ toast('Så gøy tur det var! 🎉'); }, ACTION_DURATIONS.drive-400);
}

function drawCarBody(ctx, progress){
  const wheelRot = progress*Math.PI*16;
  ctx.save();
  ctx.translate(180, 258);

  ctx.strokeStyle='rgba(255,255,255,0.55)';
  ctx.lineWidth=3;
  ctx.lineCap='round';
  for(let i=0;i<4;i++){
    const ly = -22+i*15;
    const wobble = (progress*420) % 60;
    ctx.beginPath(); ctx.moveTo(-135-wobble, ly); ctx.lineTo(-165-wobble, ly); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(135+wobble, ly); ctx.lineTo(165+wobble, ly); ctx.stroke();
  }

  ctx.fillStyle='#e0555f';
  ctx.beginPath();
  ctx.moveTo(-92,22);
  ctx.quadraticCurveTo(-92,-32,-48,-38);
  ctx.lineTo(48,-38);
  ctx.quadraticCurveTo(92,-32,92,22);
  ctx.lineTo(92,42);
  ctx.lineTo(-92,42);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle='rgba(0,0,0,0.15)';
  ctx.lineWidth=2;
  ctx.stroke();

  ctx.fillStyle='rgba(200,230,255,0.65)';
  ctx.beginPath();
  ctx.moveTo(-42,-35); ctx.lineTo(42,-35); ctx.lineTo(32,2); ctx.lineTo(-32,2);
  ctx.closePath();
  ctx.fill();

  [-56,56].forEach(wx=>{
    ctx.save();
    ctx.translate(wx, 42);
    ctx.rotate(wheelRot);
    ctx.beginPath(); ctx.arc(0,0,19,0,Math.PI*2); ctx.fillStyle='#2a2a2a'; ctx.fill();
    ctx.strokeStyle='#999'; ctx.lineWidth=2.5;
    for(let s=0;s<4;s++){
      ctx.beginPath(); ctx.moveTo(-19,0); ctx.lineTo(19,0); ctx.stroke();
      ctx.rotate(Math.PI/4);
    }
    ctx.beginPath(); ctx.arc(0,0,4,0,Math.PI*2); ctx.fillStyle='#ccc'; ctx.fill();
    ctx.restore();
  });

  ctx.restore();
}

function doTogglePacifier(){
  state.pacifier = !state.pacifier;
  if(state.pacifier){ SFX.pacifierIn(); toast('God og rolig 🍼'); }
  else { SFX.pacifierOut(); toast('Smokk ut!'); }
  saveState();
  refreshPacifierUI();
}

function refreshPacifierUI(){
  el.btnPacifier.classList.toggle('activeToggle', !!state.pacifier);
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

/* ---------- Main loop ---------- */

function tick(){
  animFrame++;
  bounceTime += 0.03;
  blinkPhase = (blinkPhase+0.01) % 1;

  if(!isDraggingPet){
    petYawTarget *= 0.93;
  }
  petYaw += (petYawTarget - petYaw) * 0.25;

  if(state.phase === 'pet'){
    applyElapsed();
    refreshStatBars();

    const stage = getStage();
    if(lastStageSeen && stage !== lastStageSeen){
      SFX.grow();
      toast(`${SPECIES[state.species].name} har vokst! 🌱`);
      spawnSparkles(14);
      growthPulseUntil = performance.now() + 700;
    }
    lastStageSeen = stage;

    const ctx = el.canvasPet.getContext('2d');
    ctx.clearRect(0,0,el.canvasPet.width, el.canvasPet.height);
    const currentActionProgress = getActionProgress();
    if(currentActionProgress && currentActionProgress.type==='drive'){
      drawCarBody(ctx, currentActionProgress.progress);
    }
    drawCreature(ctx, state.species, stage, {
      sad:isNeedy(), asleep:state.sleeping, pacifier:state.pacifier,
      action:currentActionProgress, yaw:petYaw, equipped:state.equipped,
    });

    const hours = state.birthTime ? (Date.now()-state.birthTime)/3600000 : 0;
    const days = Math.floor(hours/24);
    const hrs = Math.floor(hours%24);
    el.petName.textContent = `${displayName(state)} • ${STAGE_LABELS[stage]}`;
    el.ageLabel.textContent = days>0 ? `${days}d ${hrs}t gammel` : `${hrs}t gammel`;

    refreshSleepUI();
    refreshPacifierUI();
    refreshCoinUI();
    el.btnSleep.querySelector('.icon').textContent = state.sleeping ? '☀️' : '💤';
    el.btnSleep.querySelector('.label').textContent = state.sleeping ? 'Våkne' : 'Sov';
    el.btnDrive.classList.toggle('hidden', stage !== 'adult');

    if(Date.now() - lastEnvUpdate > 30000){
      updateEnvironment();
      lastEnvUpdate = Date.now();
    }
  }

  requestAnimationFrame(tick);
}

/* ---------- Init ---------- */

function init(){
  buildEggGrid();
  setupPetDrag();

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
  el.btnJump.addEventListener('click', doJump);
  el.btnCycle.addEventListener('click', doCycle);
  el.btnBrush.addEventListener('click', doBrushTeeth);
  el.btnPacifier.addEventListener('click', doTogglePacifier);
  el.btnDrive.addEventListener('click', doDrive);

  el.btnRestart.addEventListener('click', ()=>{
    renderSlotPicker(true);
    showScreen('slots');
  });
  el.btnCloseSlots.addEventListener('click', ()=>{
    showScreen(lastNonSlotScreen);
  });
  el.btnMeetup.addEventListener('click', doMeetup);
  el.btnCloseMeetup.addEventListener('click', ()=>{
    renderSlotPicker(true);
    showScreen('slots');
  });

  el.petName.addEventListener('click', renamePet);
  el.btnCoins.addEventListener('click', ()=>{
    if(state.phase !== 'pet'){ toast('Ingen kjæledyr å pynte ennå 🛍️'); return; }
    renderShop();
    showScreen('shop');
  });
  el.btnCloseShop.addEventListener('click', ()=>{
    showScreen('pet');
  });

  applyElapsed();
  updateEnvironment();

  if(!activeSlot){
    renderSlotPicker(false);
    showScreen('slots');
  } else if(state.phase === 'pet' && state.species){
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
    // ignored
  }
}

window.addEventListener('load', requestWakeLock);
el.actions.addEventListener('click', ()=>{ if(!wakeLock) requestWakeLock(); });

if('serviceWorker' in navigator){
  window.addEventListener('load', ()=>{
    navigator.serviceWorker.register('sw.js').catch(()=>{});
  });
}