/* ---------- Config ---------- */

const SPECIES = {
  cat:      { name:'Katt',     body:'#f4b183', ear:'#e8935a', pattern:'#c9754a', eyeType:'round', emoji:'🐱', bodyPlan:'catlike' },
  dog:      { name:'Hund',     body:'#d8c39a', ear:'#b89566', pattern:'#8a6a45', eyeType:'round', emoji:'🐶', bodyPlan:'catlike' },
  fox:      { name:'Rev',      body:'#e8873f', ear:'#2a2a2a', pattern:'#ffffff', eyeType:'slit',  emoji:'🦊', bodyPlan:'catlike' },
  panda:    { name:'Panda',    body:'#f7f7f2', ear:'#2a2a2a', pattern:'#2a2a2a', eyeType:'round', emoji:'🐼', bodyPlan:'panda' },
  dragon:   { name:'Drage',    body:'#7fd8a0', ear:'#4fae74', pattern:'#e0555f', eyeType:'slit',  emoji:'🐲', bodyPlan:'dragon' },
  bunny:    { name:'Kanin',    body:'#f3e3ee', ear:'#f2a8cf', pattern:'#e084b8', eyeType:'round', emoji:'🐰', bodyPlan:'bunny' },
  snake:    { name:'Slange',   body:'#8fbf6a', ear:'#5c8f3f', pattern:'#e0d060', eyeType:'round', emoji:'🐍', bodyPlan:'snake' },
  gecko:    { name:'Gekko',    body:'#f0c869', ear:'#c9a04a', pattern:'#5a3a2a', eyeType:'round', emoji:'🦎', bodyPlan:'gecko' },
  lion:     { name:'Løve',     body:'#f1c40f', ear:'#e67e22', pattern:'#d35400', eyeType:'round', emoji:'🦁', bodyPlan:'lion' },
  monkey:   { name:'Ape',      body:'#8d6e63', ear:'#f4b183', pattern:'#d7ccc8', eyeType:'round', emoji:'🐒', bodyPlan:'primate' },
  unicorn:  { name:'Enhjørning', body:'#f8f9fa', ear:'#ffb6c1', pattern:'#a29bfe', eyeType:'round', emoji:'🦄', bodyPlan:'unicorn' },
  pig:      { name:'Gris',     body:'#ffb8c6', ear:'#f48fb1', pattern:'#ff9eaf', eyeType:'round', emoji:'🐷', bodyPlan:'pig' },
  fennec:   { name:'Fennek',   body:'#f5deb3', ear:'#e6c280', pattern:'#8b5a2b', eyeType:'slit',  emoji:'🦊', bodyPlan:'catlike' },
  cheetah:  { name:'Gepard',   body:'#f1c40f', ear:'#d35400', pattern:'#2a2a2a', eyeType:'round', emoji:'🐆', bodyPlan:'catlike' },
  lemur:    { name:'Lemur',    body:'#aeb6bf', ear:'#7f8c8d', pattern:'#2a2a2a', eyeType:'round', emoji:'🐒', bodyPlan:'primate' },
  redpanda: { name:'Rød Panda',body:'#d35400', ear:'#e67e22', pattern:'#ffffff', eyeType:'round', emoji:'🐼', bodyPlan:'redpanda' },
  turtle:   { name:'Skilpadde',body:'#7fb87a', ear:'#4d8549', pattern:'#2d4c2b', eyeType:'round', emoji:'🐢', bodyPlan:'turtle' },
  penguin:  { name:'Pingvin',  body:'#2b2d42', ear:'#f1c40f', pattern:'#ecf0f1', eyeType:'round', emoji:'🐧', bodyPlan:'bird' },
  owl:      { name:'Ugle',     body:'#8b5a2b', ear:'#cd853f', pattern:'#f5deb3', eyeType:'round', emoji:'🦉', bodyPlan:'bird' },
  phoenix:  { name:'Føniks',   body:'#ff6b35', ear:'#ffd23f', pattern:'#c81d25', eyeType:'slit',  emoji:'🔥', bodyPlan:'phoenix' },
  robot:    { name:'Robot',    body:'#9aa5b1', ear:'#00e5ff', pattern:'#37474f', eyeType:'round', emoji:'🤖', bodyPlan:'robot' },
  alien:    { name:'Alien',    body:'#9be15d', ear:'#bd6fff', pattern:'#3f8f3f', eyeType:'round', emoji:'👽', bodyPlan:'alien' },
  slime:    { name:'Slim',     body:'#37e58c', ear:'#1fae67', pattern:'#0c7a45', eyeType:'round', emoji:'🟢', bodyPlan:'blob' },
  yeti:     { name:'Yeti',     body:'#eaf6ff', ear:'#b3e5fc', pattern:'#5c8aa8', eyeType:'round', emoji:'❄️', bodyPlan:'yeti' },
  golem:    { name:'Krystallgolem', body:'#8ec9e8', ear:'#c9a6ff', pattern:'#4a3a7a', eyeType:'round', emoji:'💎', bodyPlan:'golem' },
  kraken:   { name:'Krake',    body:'#4a3a7a', ear:'#7a3ab8', pattern:'#2a1a4a', eyeType:'slit',  emoji:'🐙', bodyPlan:'kraken' },
  gopher:   { name:'Gnager',   body:'#8a9bb5', ear:'#5c6d87', pattern:'#c9d4e0', eyeType:'round', emoji:'🐹', bodyPlan:'gopher' },
  bear:     { name:'Bjørn',    body:'#8b5a2b', ear:'#6b4322', pattern:'#e6c89a', eyeType:'round', emoji:'🐻', bodyPlan:'bear' },
  wolf:     { name:'Ulv',      body:'#8a8f99', ear:'#5a5f68', pattern:'#eef0f2', eyeType:'slit',  emoji:'🐺', bodyPlan:'wolf' },
  nightdragon: { name:'Nattdrage', body:'#2e2e38', ear:'#1c1c24', pattern:'#5cff9d', eyeType:'round', emoji:'🐉', bodyPlan:'nightdragon' },
  hybrid:   { name:'Mytisk Hybrid', body:'#ffffff', ear:'#ffffff', pattern:'#ffffff', eyeType:'round', emoji:'✨' }
};

const SHOP_ITEMS = [
  { id:'cap', slot:'hat', name:'Caps', emoji:'🧢', price:30 }, 
  { id:'partyhat', slot:'hat', name:'Festhatt', emoji:'🎉', price:25 },
  { id:'tophat', slot:'hat', name:'Flosshatt', emoji:'🎩', price:60 }, 
  { id:'crown', slot:'hat', name:'Krone', emoji:'👑', price:100 },
  { id:'wizardhat', slot:'hat', name:'Trollmannhatt', emoji:'🧙', price:70 }, 
  { id:'flowercrown', slot:'hat', name:'Blomsterkrans', emoji:'🌸', price:45 },
  { id:'sunglasses', slot:'glasses', name:'Solbriller', emoji:'🕶️', price:40 }, 
  { id:'nerdglasses', slot:'glasses', name:'Nerdebriller', emoji:'🤓', price:35 },
  { id:'heartglasses', slot:'glasses', name:'Hjertebriller', emoji:'😍', price:45 }, 
  { id:'bowtie', slot:'neck', name:'Sløyfe', emoji:'🎀', price:20 },
  { id:'scarf', slot:'neck', name:'Skjerf', emoji:'🧣', price:30 }, 
  { id:'bandana', slot:'neck', name:'Bandana', emoji:'🏴', price:25 },
  { id:'necklace', slot:'neck', name:'Halskjede', emoji:'📿', price:55 }, 
  { id:'plant', slot:'plant', name:'Potteplante', emoji:'🪴', price:35 },
  { id:'plant2', slot:'plant2', name:'Kaktus', emoji:'🌵', price:30 }, 
  { id:'poster', slot:'poster', name:'Plakat', emoji:'🖼️', price:45 },
  { id:'lamp', slot:'lamp', name:'Gulvlampe', emoji:'🪔', price:50 }, 
  { id:'clock', slot:'clock', name:'Veggklokke', emoji:'🕰️', price:40 }
];

const STAGE_LABELS = { baby:'Baby', child:'Barn', teen:'Tenåring', adult:'Voksen' };
const GROWTH_UNITS = { baby:0, child:1.0, teen:3.5, adult:10 };
const STAGE_SCALE  = { baby:0.42, child:0.68, teen:1.0, adult:1.4 };
const GROWTH_ACTION_BONUS = 0.015;

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

const SLOT_COUNT = 20;
const SLOT_KEYS = Array.from({length:SLOT_COUNT}, (_,i)=>`petgame_save_slot${i+1}`);
const SLOT_INDEXES = Array.from({length:SLOT_COUNT}, (_,i)=>i+1);
const ACTIVE_SLOT_KEY = 'petgame_active_slot';
const LEGACY_SAVE_KEY = 'petgame_save_v1';
const GLOBAL_COINS_KEY = 'petgame_global_coins';
const LAST_INCOME_KEY = 'petgame_last_income_ts';
const PASSIVE_INCOME_PER_HOUR = 6;
const INCOME_CHECK_INTERVAL = 60000;

const FOOD_EMOJI = {
  cat:'🐟', dog:'🦴', fox:'🍗', panda:'🎋', dragon:'🍖', bunny:'🥕', snake:'🐁', gecko:'🦗', lion:'🥩', monkey:'🍌',
  unicorn:'🧁', pig:'🍎', fennec:'🦂', cheetah:'🥩', lemur:'🍉', redpanda:'🍇', turtle:'🥬', penguin:'🐟', owl:'🐁',
  phoenix:'🌶️', robot:'🔋', alien:'🧪', slime:'🍬', yeti:'🍧', golem:'💠', kraken:'🐟',
  gopher:'🥜', bear:'🍯', wolf:'🥩', nightdragon:'🐟', hybrid:'🌟'
};


const FULL_HUNGER_THRESHOLD = 92;
const ACTION_DURATIONS = { eat:1300, refuse:1000, play:1700, wash:2000, jump:1200, cycle:2200, brush:1800, drive:5000, dino:5000, toilet:1600 };
const PLAY_VARIANTS = [ {key:'bounce',emoji:'⚽'}, {key:'spin',emoji:'🌀'}, {key:'zoomies',emoji:'💨'}, {key:'wiggle',emoji:'🎉'}, {key:'peekaboo',emoji:'👀'}, {key:'backflip',emoji:'⭐'}, {key:'dance',emoji:'🎵'}, {key:'chase',emoji:'🌪️'}, {key:'wave',emoji:'👋'}, {key:'jump',emoji:'🪀'} ];
const YAW_MAX = 1.1;
const EGG_SHAKES_NEEDED = 4;

/* ---------- Tjenester og Grunnfunksjoner ---------- */
function getGlobalCoins() { return parseInt(localStorage.getItem(GLOBAL_COINS_KEY)) || 0; }
function addGlobalCoins(n) { const c = Math.max(0, getGlobalCoins() + n); localStorage.setItem(GLOBAL_COINS_KEY, c); return c; }

function countActivePets(){
  return SLOT_INDEXES.reduce((n, i) => { const raw = loadSlotRaw(i); return n + (raw && raw.phase === 'pet' ? 1 : 0); }, 0);
}

function collectPassiveIncome(){
  const now = Date.now();
  const last = parseInt(localStorage.getItem(LAST_INCOME_KEY)) || now;
  localStorage.setItem(LAST_INCOME_KEY, String(now));
  const hours = (now - last) / 3600000; if(hours <= 0) return 0;
  const activePets = countActivePets(); if(activePets <= 0) return 0;
  const earned = Math.floor(activePets * PASSIVE_INCOME_PER_HOUR * hours);
  if(earned > 0) addGlobalCoins(earned);
  return earned;
}

function mixHex(c1, c2) {
  if(!c1) c1 = '#ffffff'; if(!c2) c2 = '#ffffff';
  const hex2rgb = hex => {
    const h = hex.replace('#',''); const full = h.length === 3 ? h.split('').map(x=>x+x).join('') : h;
    return [parseInt(full.slice(0,2),16), parseInt(full.slice(2,4),16), parseInt(full.slice(4,6),16)];
  };
  const rgb1 = hex2rgb(c1), rgb2 = hex2rgb(c2);
  const mixed = rgb1.map((v, i) => Math.round((v + rgb2[i]) / 2));
  return '#' + mixed.map(x => x.toString(16).padStart(2,'0')).join('');
}

function defaultState(){
  return { phase:'select', species:null, colors: null, hybridDNA: null, hatchReadyAt: null, petName:null, hatched:false, birthTime:null, growthProgress:0, prestige: 0, lastUpdate:Date.now(), sleeping:false, pacifier:false, muted:false, inventory:[], equipped:{}, stats:{ hunger:100, energy:100, hygiene:100, happiness:100 } };
}

function hybridName(dna){
  if(!dna) return SPECIES.hybrid.name;
  const base = SPECIES[dna.base] ? SPECIES[dna.base].name : '???';
  const ears = SPECIES[dna.ears] ? SPECIES[dna.ears].name : '???';
  return base === ears ? base : `${base} × ${ears}`;
}

function displayName(s){
  if(!s) return '???';
  if(s.petName) return s.petName;
  if(s.species === 'hybrid' && s.hybridDNA) return (s.legendary ? '🌟 ' : '') + hybridName(s.hybridDNA);
  if(s.species && SPECIES[s.species]) return SPECIES[s.species].name;
  return '???';
}

function migrateLegacySave(){ 
  try {
    const legacy = localStorage.getItem(LEGACY_SAVE_KEY); 
    if(legacy){ 
      if(!localStorage.getItem(SLOT_KEYS[0])){ localStorage.setItem(SLOT_KEYS[0], legacy); localStorage.setItem(ACTIVE_SLOT_KEY, '1'); } 
      localStorage.removeItem(LEGACY_SAVE_KEY); 
    } 
  } catch(e) {}
}

function loadSlotRaw(slotIndex){ 
  if(!slotIndex) return null;
  try{ const raw = localStorage.getItem(SLOT_KEYS[slotIndex-1]); return raw ? JSON.parse(raw) : null; }catch(e){ return null; } 
}

function loadState(slot){ 
  const parsed = loadSlotRaw(slot); 
  if(!parsed) return defaultState(); 
  return Object.assign(defaultState(), parsed); 
}

function saveState(){ 
  if(!activeSlot || !state) return; 
  try { localStorage.setItem(SLOT_KEYS[activeSlot-1], JSON.stringify(state)); } catch(e) {}
}

/* ---------- GLOBALE VARIABLER ---------- */
migrateLegacySave();

let activeSlot = Number(localStorage.getItem(ACTIVE_SLOT_KEY)) || null;
let state = activeSlot ? loadState(activeSlot) : defaultState();
if (!state || typeof state !== 'object') state = defaultState(); 

let audioCtx = null, animFrame = 0, eggShakeCount = 0, eggWobble = 0, selectedSpecies = null;
let currentAction = null, growthPulseUntil = 0, petYaw = 0, petYawTarget = 0, isDraggingPet = false, dragStartX = 0, dragStartYaw = 0, currentMeetupPets = [];
let lastStageSeen = null, blinkPhase = 0, bounceTime = 0, toastTimer = null, lastEnvUpdate = 0, lastNonSlotScreen = 'select', wakeLock = null, lastIncomeTick = 0, nextIdleReactionAt = 0;

/* ---------- DOM refs ---------- */
const el = {
  petName: document.getElementById('petName'), ageLabel: document.getElementById('ageLabel'), clockLabel: document.getElementById('clockLabel'),
  screens: { slots: document.getElementById('screen-slots'), select: document.getElementById('screen-select'), egg: document.getElementById('screen-egg'), pet: document.getElementById('screen-pet'), shop: document.getElementById('screen-shop'), meetupSelect: null, meetup: document.getElementById('screen-meetup') },
  slotGrid: document.getElementById('slotGrid'), btnCloseSlots: document.getElementById('btn-closeSlots'), btnMeetup: document.getElementById('btn-meetup'),
  btnCoins: document.getElementById('btn-coins'), coinCount: document.getElementById('coinCount'), shopGrid: document.getElementById('shopGrid'), shopCoins: document.getElementById('shopCoins'), btnCloseShop: document.getElementById('btn-closeShop'),
  canvasMeetup: document.getElementById('canvas-meetup'), meetupSubtitle: document.getElementById('meetupSubtitle'), btnCloseMeetup: document.getElementById('btn-closeMeetup'),
  roomBg: document.getElementById('roomBg'), roomWindow: document.getElementById('roomWindow'), skySunMoon: document.getElementById('skySunMoon'), skyClouds: document.getElementById('skyClouds'), skyRain: document.getElementById('skyRain'),
  eggGrid: document.getElementById('eggGrid'), confirmSelect: document.getElementById('btn-confirmSelect'), canvasEgg: document.getElementById('canvas-egg'), canvasPet: document.getElementById('canvas-pet'),
  actions: document.getElementById('actions'), sleepOverlay: document.getElementById('sleepOverlay'), bubbleLayer: document.getElementById('bubbleLayer'), toast: document.getElementById('toast'), rotateHint: document.getElementById('rotateHint'),
  fills: { hunger: document.getElementById('fill-hunger'), energy: document.getElementById('fill-energy'), hygiene: document.getElementById('fill-hygiene'), happiness: document.getElementById('fill-happiness') },
  nums: { hunger: document.getElementById('num-hunger'), energy: document.getElementById('num-energy'), hygiene: document.getElementById('num-hygiene'), happiness: document.getElementById('num-happiness') },
  btnRestart: document.getElementById('btn-restart'), btnJump: document.getElementById('btn-jump'), btnCycle: document.getElementById('btn-cycle'), btnBrush: document.getElementById('btn-brush'), btnPacifier: document.getElementById('btn-pacifier'), btnDrive: document.getElementById('btn-drive'), btnDino: document.getElementById('btn-dino'), btnToilet: document.getElementById('btn-toilet'), btnFeed: document.getElementById('btn-feed'), btnPlay: document.getElementById('btn-play'), btnWash: document.getElementById('btn-wash'), btnSleep: document.getElementById('btn-sleep'), btnPrestige: null, btnBreed: null
};

/* Sørg for at pyntegjenstandene og nye menyer eksisterer */
function ensureNewElementsExist() {
  const roomBg = document.getElementById('roomBg');
  if(roomBg) {
    const items = [ { id: 'roomPlant', class: 'roomDecor hidden', emoji: '🪴' }, { id: 'roomPlant2', class: 'roomDecor hidden', emoji: '🌵' }, { id: 'roomPoster', class: 'roomDecor hidden', emoji: '🖼️' }, { id: 'roomLamp', class: 'roomDecor hidden', emoji: '🪔' }, { id: 'roomClock', class: 'roomDecor hidden', emoji: '🕰️' } ];
    items.forEach(item => {
      let div = document.getElementById(item.id);
      if(!div) { div = document.createElement('div'); div.id = item.id; div.className = item.class; div.textContent = item.emoji; roomBg.appendChild(div); }
      el[item.id] = div;
    });
  }

  const container = document.getElementById('stage') || document.body;
  if (container && !document.getElementById('screen-meetup-select')) {
    const div = document.createElement('div'); div.id = 'screen-meetup-select'; div.className = 'screen hidden';
    div.innerHTML = `
      <h1 style="color:#333;">Velg hvem som skal leke!</h1>
      <div class="subtitle" style="color:#555;">Nøyaktig 2 voksne for avling.</div>
      <div id="meetupSelectList" style="display:flex; flex-wrap:wrap; gap:10px; justify-content:center; width:100%; max-height:45vh; overflow-y:auto; padding:10px;"></div>
      <button id="btn-startMeetup" class="bigButton" style="margin-top:15px; width:80%;">Start Lekestund 🎉</button>
      <button id="btn-cancelMeetup" class="ghostButton" style="margin-top:10px;">Avbryt</button>
    `;
    container.appendChild(div); el.screens.meetupSelect = div;
    document.getElementById('btn-startMeetup').addEventListener('click', startMeetupSession);
    document.getElementById('btn-cancelMeetup').addEventListener('click', () => { showScreen(lastNonSlotScreen); });
  }

  const screenEgg = document.getElementById('screen-egg');
  if (screenEgg && !document.getElementById('eggTimerLabel')) {
    const lbl = document.createElement('div'); lbl.id = 'eggTimerLabel'; lbl.style.cssText = 'margin-top: 15px; font-weight: bold; font-size: 1.1rem; color: #ff477e;'; screenEgg.appendChild(lbl);
  }

  if (!document.getElementById('dynamic-meetup-css')) {
    const style = document.createElement('style'); style.id = 'dynamic-meetup-css';
    style.innerHTML = `
      .meetup-pet-toggle { background: #fff; border: 3px solid transparent; border-radius: 14px; padding: 10px; cursor: pointer; opacity: 0.5; transition: all .2s ease; width: 80px; display: flex; flex-direction: column; align-items: center; gap: 5px; color:#333; }
      .meetup-pet-toggle.selected { border-color: #ff8fb1; opacity: 1; background: #ffe0f0; transform: translateY(-3px); box-shadow: 0 4px 10px rgba(255,143,177,.3); }
    `;
    document.head.appendChild(style);
  }
}

/* ---------- Sound ---------- */
function ensureAudio(){ if(!audioCtx) audioCtx = new (window.AudioContext||window.webkitAudioContext)(); if(audioCtx.state === 'suspended') audioCtx.resume(); }
function beep(freq, dur, type='sine', vol=0.18, delay=0){
  if(!state || state.muted) return; ensureAudio(); const t0 = audioCtx.currentTime + delay; const osc = audioCtx.createOscillator(); const gain = audioCtx.createGain();
  osc.type = type; osc.frequency.setValueAtTime(freq, t0); gain.gain.setValueAtTime(0, t0); gain.gain.linearRampToValueAtTime(vol, t0+0.02); gain.gain.exponentialRampToValueAtTime(0.001, t0+dur);
  osc.connect(gain).connect(audioCtx.destination); osc.start(t0); osc.stop(t0+dur+0.05);
}
function glide(freqFrom, freqTo, dur, type='sine', vol=0.16, delay=0){
  if(!state || state.muted) return; ensureAudio(); const t0 = audioCtx.currentTime + delay; const osc = audioCtx.createOscillator(); const gain = audioCtx.createGain();
  osc.type = type; osc.frequency.setValueAtTime(freqFrom, t0); osc.frequency.exponentialRampToValueAtTime(freqTo, t0+dur); gain.gain.setValueAtTime(0.0001, t0); gain.gain.linearRampToValueAtTime(vol, t0+0.02); gain.gain.exponentialRampToValueAtTime(0.001, t0+dur);
  osc.connect(gain).connect(audioCtx.destination); osc.start(t0); osc.stop(t0+dur+0.05);
}
function noiseBurst({duration=0.08, freq=800, q=1, type='lowpass', vol=0.2, delay=0}={}){
  if(!state || state.muted) return; ensureAudio(); const t0 = audioCtx.currentTime + delay; const bufferSize = Math.max(1, Math.floor(audioCtx.sampleRate*duration));
  const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate); const data = buffer.getChannelData(0); for(let i=0;i<bufferSize;i++) data[i] = Math.random()*2-1;
  const src = audioCtx.createBufferSource(); src.buffer = buffer; const filter = audioCtx.createBiquadFilter(); filter.type = type; filter.frequency.value = freq; filter.Q.value = q;
  const gain = audioCtx.createGain(); gain.gain.setValueAtTime(0, t0); gain.gain.linearRampToValueAtTime(vol, t0+0.008); gain.gain.exponentialRampToValueAtTime(0.001, t0+duration); src.connect(filter).connect(gain).connect(audioCtx.destination); src.start(t0); src.stop(t0+duration+0.02);
}
function noiseSweep({duration=0.3, freqFrom=2000, freqTo=400, type='bandpass', q=1, vol=0.15, delay=0}={}){
  if(!state || state.muted) return; ensureAudio(); const t0 = audioCtx.currentTime + delay; const bufferSize = Math.max(1, Math.floor(audioCtx.sampleRate*duration));
  const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate); const data = buffer.getChannelData(0); for(let i=0;i<bufferSize;i++) data[i] = Math.random()*2-1;
  const src = audioCtx.createBufferSource(); src.buffer = buffer; const filter = audioCtx.createBiquadFilter(); filter.type = type; filter.Q.value = q; filter.frequency.setValueAtTime(freqFrom, t0); filter.frequency.linearRampToValueAtTime(freqTo, t0+duration);
  const gain = audioCtx.createGain(); gain.gain.setValueAtTime(0, t0); gain.gain.linearRampToValueAtTime(vol, t0+0.03); gain.gain.exponentialRampToValueAtTime(0.001, t0+duration); src.connect(filter).connect(gain).connect(audioCtx.destination); src.start(t0); src.stop(t0+duration+0.02);
}

const SFX = {
  tap: ()=> beep(520,0.08,'square',0.12), crack: ()=> { beep(180,0.15,'sawtooth',0.2); beep(90,0.2,'sawtooth',0.15,0.08); }, hatch: ()=> { [440,554,659,880].forEach((f,i)=>beep(f,0.22,'triangle',0.16,i*0.11)); },
  eat: ()=>{ for(let i=0;i<4;i++){ noiseBurst({ duration:0.09, freq:500+Math.random()*350, q:1.3, type:'lowpass', vol:0.24, delay:i*0.17 }); } glide(300, 380, 0.3, 'sine', 0.12, 4*0.17+0.05); beep(460, 0.22, 'sine', 0.08, 4*0.17+0.2); },
  refuse: ()=>{ noiseSweep({ duration:0.22, freqFrom:1200, freqTo:500, type:'bandpass', q:0.8, vol:0.08 }); beep(260,0.13,'triangle',0.16,0.05); beep(190,0.17,'triangle',0.16,0.2); },
  play: (variant)=>{ const big = variant==='bounce'||variant==='jump'||variant==='backflip'; const base = big ? 420 : 500; for(let i=0;i<4;i++){ beep(base + i*65 + Math.random()*15, 0.09, 'triangle', 0.14, i*0.07); } if(big) glide(180, 560, 0.2, 'sine', 0.16, 0.06); else for(let i=0;i<3;i++) beep(700+i*90, 0.06, 'square', 0.08, 0.3+i*0.05); },
  washStart: ()=>{ noiseSweep({ duration:0.5, freqFrom:2200, freqTo:400, type:'bandpass', q:0.7, vol:0.13 }); for(let i=0;i<6;i++){ noiseBurst({ duration:0.05+Math.random()*0.03, freq:1300+Math.random()*900, q:3, type:'bandpass', vol:0.09, delay:0.35+i*0.14 }); } },
  jump: ()=> { glide(300,520,0.16,'sine',0.16); glide(520,340,0.16,'sine',0.12,0.18); },
  cycle: ()=>{ beep(1200,0.05,'square',0.06); beep(1800,0.08,'square',0.07,0.07); for(let i=0;i<9;i++){ noiseBurst({ duration:0.04, freq:280+Math.random()*120, q:2, type:'lowpass', vol:0.11, delay:0.3+i*0.16 }); } },
  brush: ()=>{ for(let i=0;i<10;i++){ noiseBurst({ duration:0.05, freq:3200+Math.random()*1200, q:4, type:'highpass', vol:0.08, delay:i*0.12 }); } beep(1046,0.16,'sine',0.12,10*0.12+0.1); beep(1318,0.18,'sine',0.1,10*0.12+0.22); },
  drive: ()=>{ beep(280,0.35,'square',0.1); beep(220,0.4,'sawtooth',0.06,0.1); for(let i=0;i<6;i++){ noiseBurst({ duration:0.15, freq:150+Math.random()*60, q:1, type:'lowpass', vol:0.1, delay:0.5+i*0.7 }); } beep(660,0.1,'square',0.1,0.05); beep(880,0.12,'square',0.08,0.18); },
  pacifierIn: ()=> glide(500,300,0.4,'sine',0.1), pacifierOut: ()=>{ beep(700,0.1,'square',0.12); beep(900,0.12,'square',0.1,0.08); },
  sleep: ()=> { beep(392,0.3,'sine',0.12); beep(330,0.35,'sine',0.1,0.2); }, wake: ()=> { beep(523,0.15,'sine',0.14); beep(659,0.18,'sine',0.14,0.1); },
  grow: ()=> { [523,659,784,1047,1318].forEach((f,i)=>beep(f,0.2,'sine',0.16,i*0.09)); }, low: ()=> { beep(220,0.18,'sawtooth',0.12); },
  dinoRoar: ()=>{ glide(140,60,0.5,'sawtooth',0.16); noiseSweep({ duration:0.45, freqFrom:900, freqTo:200, type:'bandpass', q:0.6, vol:0.14, delay:0.05 }); beep(80,0.3,'sawtooth',0.12,0.1); },
  fart: ()=>{ noiseSweep({ duration:0.55, freqFrom:260, freqTo:90, type:'lowpass', q:0.9, vol:0.22 }); glide(150,70,0.5,'sawtooth',0.14,0.02); },
  prestige: ()=>{ [261,329,392,523,659].forEach((f,i)=>beep(f,0.4,'square',0.1,i*0.1)); glide(600,1200,0.8,'sine',0.15); }
};

function toast(msg){
  const t = document.getElementById('toast'); if(!t) return;
  t.textContent = msg; t.classList.add('show');
  clearTimeout(toastTimer); toastTimer = setTimeout(()=> t.classList.remove('show'), 1600);
}

function renamePet(){
  if(!state || state.phase !== 'pet') return;
  const input = prompt('Gi kjæledyret ditt et navn:', state.petName || SPECIES[state.species].name);
  if(input === null) return;
  state.petName = input.trim().slice(0, 16) || null; saveState();
}

function earnCoins(n){ addGlobalCoins(n); }
function refreshCoinUI(){ 
  const c = document.getElementById('coinCount'); if(c) c.textContent = getGlobalCoins(); 
  const sc = document.getElementById('shopCoins'); if(sc) sc.textContent = '🪙 ' + getGlobalCoins();
}

function renderShop(){
  if(!state) state = defaultState();
  const grid = document.getElementById('shopGrid'); if(!grid) return; grid.innerHTML = '';
  refreshCoinUI();
  SHOP_ITEMS.forEach(item=>{
    const owned = (state.inventory||[]).includes(item.id); const equipped = state.equipped && state.equipped[item.slot] === item.id;
    const div = document.createElement('div'); div.className = 'shopItem' + (owned?' owned':'') + (equipped?' equipped':'');
    const priceLabel = owned ? (equipped ? 'På ✓' : 'Trykk for å ta på') : ('🪙 '+item.price);
    div.innerHTML = `<div class="shopIcon">${item.emoji}</div><div class="shopName">${item.name}</div><div class="shopPrice">${priceLabel}</div>`;
    div.addEventListener('click', ()=>{
      if(!state) state = defaultState();
      if(!owned){
        if(getGlobalCoins() < item.price) return toast('Ikke nok mynter 🪙');
        addGlobalCoins(-item.price); state.inventory = state.inventory || []; state.inventory.push(item.id);
        state.equipped = state.equipped || {}; state.equipped[item.slot] = item.id; SFX.tap(); toast(`Kjøpte ${item.name}! 🎉`);
      } else { state.equipped = state.equipped || {}; state.equipped[item.slot] = equipped ? null : item.id; SFX.tap(); }
      saveState(); renderShop();
    });
    grid.appendChild(div);
  });
}

function updateEnvironment(){
  const hour = new Date().getHours(); let skyTop, skyBottom, sunColor, sunGlow, phaseClass;
  if(hour>=6 && hour<9){ skyTop='#ffd9a0'; skyBottom='#ffe9c9'; sunColor='#ffd76b'; sunGlow='rgba(255,215,107,0.7)'; phaseClass=''; } 
  else if(hour>=9 && hour<17){ skyTop='#bfe3ff'; skyBottom='#eaf6ff'; sunColor='#ffe27a'; sunGlow='rgba(255,226,122,0.8)'; phaseClass=''; } 
  else if(hour>=17 && hour<20){ skyTop='#ff9a6a'; skyBottom='#ffd3a0'; sunColor='#ff9a4a'; sunGlow='rgba(255,154,74,0.7)'; phaseClass='evening'; } 
  else { skyTop='#1c2340'; skyBottom='#33396a'; sunColor='#e8ecf5'; sunGlow='rgba(232,236,245,0.55)'; phaseClass='night'; }
  const seed = Math.floor(Date.now()/3600000); const rnd = ((seed*9301+49297) % 233280) / 233280;
  let weather = 'sun'; if(rnd>0.82) weather='rain'; else if(rnd>0.55) weather='cloud';

  const w = document.getElementById('roomWindow'), sm = document.getElementById('skySunMoon'), sc = document.getElementById('skyClouds'), sr = document.getElementById('skyRain'), rb = document.getElementById('roomBg');
  if(w) { w.style.setProperty('--sky-top', skyTop); w.style.setProperty('--sky-bottom', skyBottom); }
  if(sm) { sm.style.setProperty('--sun-color', sunColor); sm.style.setProperty('--sun-glow', sunGlow); sm.style.opacity = weather==='rain' ? '0.3' : '1'; }
  if(sc) sc.classList.toggle('show', weather==='cloud' || weather==='rain');
  if(sr) sr.classList.toggle('show', weather==='rain');
  if(rb) { rb.classList.toggle('night', phaseClass==='night'); rb.classList.toggle('evening', phaseClass==='evening'); }
}

/* ---------- Slot picker & Meetup ---------- */
function renderSlotPicker(allowCancel){
  const grid = document.getElementById('slotGrid'); if(!grid) return; grid.innerHTML = '';
  SLOT_INDEXES.forEach(slotIndex=>{
    const raw = loadSlotRaw(slotIndex); const card = document.createElement('div'); card.className = 'slotCard' + (slotIndex===activeSlot ? ' active' : '');
    let emoji = '🥚', title = `Plass ${slotIndex}`, subtitle = 'Tom - start nytt eventyr';
    if(raw && raw.species && SPECIES[raw.species]){
      emoji = raw.legendary ? '🌟' : SPECIES[raw.species].emoji; title = displayName(raw);
      if(raw.phase === 'egg') subtitle = raw.hatchReadyAt && Date.now() < raw.hatchReadyAt ? 'Ruger fortsatt...' : 'Egg, ikke klekket enda';
      else if(raw.phase === 'pet') { subtitle = STAGE_LABELS[stageFromProgress(raw.growthProgress||0)] || 'Aktivt kjæledyr'; if(raw.prestige > 0) subtitle += ` 🔥${raw.prestige}`; }
    }
    const emojiEl = document.createElement('div'); emojiEl.className = 'slotEmoji'; emojiEl.textContent = emoji;
    const info = document.createElement('div'); info.className = 'slotInfo'; info.innerHTML = `<div class="slotTitle">${title}</div><div class="slotSubtitle">${subtitle}</div>`;
    card.appendChild(emojiEl); card.appendChild(info);
    if(raw){
      const del = document.createElement('button'); del.className = 'slotDelete'; del.textContent = '🗑'; del.title = 'Slett lagring';
      del.addEventListener('click', (e)=>{ 
        e.stopPropagation(); 
        if(confirm(`Slette Plass ${slotIndex}?`)){ 
          localStorage.removeItem(SLOT_KEYS[slotIndex-1]); 
          if(slotIndex === activeSlot) {
            state = defaultState();
            activeSlot = null;
          }
          renderSlotPicker(allowCancel); 
        } 
      });
      card.appendChild(del);
    }
    card.addEventListener('click', ()=> chooseSlot(slotIndex)); grid.appendChild(card);
  });
  const bCancel = document.getElementById('btn-closeSlots'); if(bCancel) bCancel.style.display = allowCancel ? '' : 'none';
  const bMeetup = document.getElementById('btn-meetup'); if(bMeetup) bMeetup.style.display = getHatchedSlots().length < 2 ? 'none' : '';
}

function getHatchedSlots(){ return SLOT_INDEXES.map(index=>({ index, raw: loadSlotRaw(index) })).filter(s=> s.raw && s.raw.phase==='pet'); }

function openMeetupSelect() {
  const hatched = getHatchedSlots(); if(hatched.length < 2) return toast("Minst to levende dyr!");
  const list = document.getElementById('meetupSelectList'); if(!list) return; list.innerHTML = '';
  hatched.forEach(({index, raw}) => {
    const btn = document.createElement('div'); 
    btn.className = 'meetup-pet-toggle'; // Starter uvalgt!
    btn.dataset.index = index;
    const sp = SPECIES[raw.species] || SPECIES['cat']; 
    btn.innerHTML = `<div style="font-size:1.8rem;">${sp.emoji}</div><div style="font-size:0.7rem; text-align:center;">${displayName(raw)}</div>`;
    btn.addEventListener('click', () => btn.classList.toggle('selected')); 
    list.appendChild(btn);
  });
  showScreen('meetupSelect');
}

function startMeetupSession() {
  const selectedNodes = document.querySelectorAll('.meetup-pet-toggle.selected');
  if(selectedNodes.length < 2) return toast('Velg minst 2 dyr for lekestund!');
  
  currentMeetupPets = Array.from(selectedNodes).map(node => { const index = parseInt(node.dataset.index); return { index, raw: loadSlotRaw(index) }; });
  currentMeetupPets.forEach(({raw, index}) => {
    raw.stats.happiness = Math.min(100, raw.stats.happiness + 20); localStorage.setItem(SLOT_KEYS[index-1], JSON.stringify(raw));
    if(activeSlot === index && state) state.stats.happiness = raw.stats.happiness;
  });
  
  const sub = document.getElementById('meetupSubtitle');
  if(sub) { const names = currentMeetupPets.map(h => displayName(h.raw)); sub.textContent = names.length === 2 ? `${names[0]} og ${names[1]} leker sammen! 🎉` : `${names.length} dyr har en fest sammen! 🎉`; }
  
  const adults = currentMeetupPets.filter(h => stageFromProgress(h.raw.growthProgress||0) === 'adult');
  const emptySlotIndex = SLOT_INDEXES.find(i => !loadSlotRaw(i));
  const bBreed = document.getElementById('btn-breed');
  
  if(bBreed) { 
    // Sørger for at knappen gjemmer seg totalt hvis kravene ikke er møtt
    if(adults.length === 2 && currentMeetupPets.length === 2 && emptySlotIndex) {
      const bothHybrid = adults[0].raw.species === 'hybrid' && adults[1].raw.species === 'hybrid';
      bBreed.innerHTML = bothHybrid ? '🌟 Lag LEGENDARISK egg (250 🪙)' : '🧬 Lag hybrid-egg (100 🪙)';
      bBreed.classList.remove('hidden');
      bBreed.style.display = 'block';
    } else {
      bBreed.classList.add('hidden'); 
      bBreed.style.display = 'none'; 
    }
  }
  
  showScreen('meetup'); SFX.hatch();
}

function doBreed(){
  if(currentMeetupPets.length !== 2) return toast('Må være eksakt 2 dyr for avling! 🧬');
  const p1 = currentMeetupPets[0].raw, p2 = currentMeetupPets[1].raw;
  if(stageFromProgress(p1.growthProgress||0) !== 'adult' || stageFromProgress(p2.growthProgress||0) !== 'adult') {
    return toast('Begge dyrene må være voksne for å avle! 🧬');
  }
  
  const emptySlotIndex = SLOT_INDEXES.find(i => !loadSlotRaw(i)); if(!emptySlotIndex) return toast('Ingen ledige plasser! 🥚');
  const bothHybrid = p1.species === 'hybrid' && p2.species === 'hybrid';
  const cost = bothHybrid ? 250 : 100;
  if(getGlobalCoins() < cost) return toast(`Koster ${cost} mynter! 🪙`);

  addGlobalCoins(-cost); refreshCoinUI();

  const c1 = p1.colors || SPECIES[p1.species] || SPECIES['cat'], c2 = p2.colors || SPECIES[p2.species] || SPECIES['cat'];
  const newColors = { body: mixHex(c1.body, c2.body), ear: mixHex(c1.ear, c2.ear), pattern: mixHex(c1.pattern, c2.pattern) };
  const hybridDNA = {
    base: p1.species === 'hybrid' ? p1.hybridDNA.base : p1.species, ears: p2.species === 'hybrid' ? p2.hybridDNA.ears : p2.species,
    tail: Math.random() > 0.5 ? (p1.species==='hybrid'?p1.hybridDNA.tail:p1.species) : (p2.species==='hybrid'?p2.hybridDNA.tail:p2.species)
  };
  const newEgg = defaultState(); newEgg.species = 'hybrid'; newEgg.hybridDNA = hybridDNA; newEgg.colors = newColors; newEgg.phase = 'egg'; newEgg.legendary = bothHybrid;
  const hours = bothHybrid ? Math.floor(Math.random() * 12) + 6 : Math.floor(Math.random() * 24) + 1; newEgg.hatchReadyAt = Date.now() + (hours * 3600000);
  localStorage.setItem(SLOT_KEYS[emptySlotIndex - 1], JSON.stringify(newEgg));
  SFX.hatch(); spawnEmojiBurst(bothHybrid ? '🌟' : '🧬', bothHybrid ? 20 : 10);
  const prefix = bothHybrid ? '🌟 LEGENDARISK ' : '';
  toast(`${prefix}${hybridName(hybridDNA)}-egg i Plass ${emptySlotIndex}! Klekker om ${hours}t! 🥚✨`);
  
  const bBreed = document.getElementById('btn-breed'); 
  if (bBreed) { bBreed.classList.add('hidden'); bBreed.style.display = 'none'; }
}

function renderMeetupCanvas() {
  const canvas = document.getElementById('canvas-meetup'); if(!canvas) return;
  if(canvas.width !== 400) canvas.width = 400; 
  if(canvas.height !== 300) canvas.height = 300; 
  const ctx = canvas.getContext('2d'); ctx.clearRect(0,0, canvas.width, canvas.height);
  
  const n = currentMeetupPets.length; if(n === 0) return;
  let maxCols = 4; if (n > 12) maxCols = 5; else if (n <= 4) maxCols = n; else if (n === 5 || n === 6) maxCols = 3;
  const numRows = Math.ceil(n / maxCols);
  let scale = 0.85; if (n > 2) scale = 0.6; if (n > 4) scale = 0.45; if (n > 8) scale = 0.35; if (n > 12) scale = 0.25; if (n > 16) scale = 0.22;
  const spacingX = 140 * scale + 40, spacingY = 140 * scale + 40; // Tilpasset sentrering

  ctx.save();
  currentMeetupPets.forEach(({raw}, i)=>{
    const row = Math.floor(i / maxCols), col = i % maxCols;
    const itemsInThisRow = row === numRows - 1 ? n - (row * maxCols) : maxCols;
    const offsetX = (col - (itemsInThisRow - 1) / 2) * spacingX; 
    const offsetY = (row - (numRows - 1) / 2) * spacingY; 
    
    // Senter av canvas er (200, 150) pluss grid-offset
    const posX = 200 + offsetX;
    const posY = 160 + offsetY; 

    const bounce = Math.abs(Math.sin(bounceTime * 3 + i)) * 15; 
    const yaw = offsetX < -20 ? 0.3 : (offsetX > 20 ? -0.3 : 0);
    
    ctx.save(); 
    ctx.translate(posX, posY - bounce); 
    ctx.scale(scale, scale);
    ctx.translate(-180, -180); // Fikser problemet med avstands-scalingen!
    drawCreature(ctx, raw.species, stageFromProgress(raw.growthProgress||0), { sad:false, asleep:false, pacifier:false, action:null, yaw, equipped:raw.equipped, prestige:raw.prestige||0, colors:raw.colors, hybridDNA: raw.hybridDNA });
    ctx.restore();
  });
  ctx.restore(); drawEmojiOverlay(ctx, '💕', 200, 45, 40, 1);
}

function chooseSlot(slotIndex){
  activeSlot = slotIndex; localStorage.setItem(ACTIVE_SLOT_KEY, String(slotIndex));
  state = loadState(activeSlot); if(!state) state = defaultState();
  eggShakeCount = 0; selectedSpecies = null; currentAction = null; lastStageSeen = null;
  document.querySelectorAll('.eggChoice').forEach(n=>n.classList.remove('selected'));
  const btnConf = document.getElementById('btn-confirmSelect'); if(btnConf) btnConf.disabled = true; applyElapsed();
  if(state.phase === 'pet' && state.species){ showScreen('pet'); lastStageSeen = getStage(); }
  else if(state.phase === 'egg' && state.species){ showScreen('egg'); initEggScreen(); }
  else showScreen('select');
}

/* ---------- Egg selection & hatching ---------- */
function buildEggGrid(){
  const grid = document.getElementById('eggGrid'); if(!grid) return; grid.innerHTML = '';
  Object.keys(SPECIES).filter(k => k !== 'hybrid').forEach(key=>{
    const wrap = document.createElement('div'); wrap.className = 'eggChoice'; wrap.dataset.species = key;
    const c = document.createElement('canvas'); c.width = 96; c.height = 96; drawEggPreview(c.getContext('2d'), key);
    const label = document.createElement('div'); label.className = 'eggChoiceName'; label.textContent = SPECIES[key].name;
    wrap.appendChild(c); wrap.appendChild(label);
    wrap.addEventListener('click', ()=>{
      document.querySelectorAll('.eggChoice').forEach(n=>n.classList.remove('selected')); wrap.classList.add('selected'); selectedSpecies = key; 
      const btnConf = document.getElementById('btn-confirmSelect'); if(btnConf) btnConf.disabled = false; SFX.tap();
    });
    grid.appendChild(wrap);
  });
}

function drawEggPreview(ctx, speciesKey, colors=null){
  const isHybrid = speciesKey === 'hybrid'; const sp = SPECIES[speciesKey] || SPECIES['hybrid']; const c = colors || sp;
  ctx.clearRect(0,0,96,96); ctx.save(); ctx.translate(48,50); drawEggShape(ctx, c.pattern, c.body, 1, 0, isHybrid); ctx.restore();
}

function drawEggShape(ctx, patternColor, bodyColor, scale, wobble=0, isHybrid=false){
  ctx.save(); ctx.rotate(wobble); ctx.beginPath();
  ctx.moveTo(0,-38*scale); ctx.bezierCurveTo(24*scale,-38*scale, 30*scale,10*scale, 0,40*scale); ctx.bezierCurveTo(-30*scale,10*scale, -24*scale,-38*scale, 0,-38*scale); ctx.closePath();
  if (isHybrid) {
    const grad = ctx.createLinearGradient(0,-40*scale, 0,40*scale); grad.addColorStop(0, '#fff'); grad.addColorStop(0.5, bodyColor); grad.addColorStop(1, patternColor);
    ctx.fillStyle = grad; ctx.shadowColor = patternColor; ctx.shadowBlur = 15;
  } else {
    const grad = ctx.createLinearGradient(0,-38*scale,0,40*scale); grad.addColorStop(0,'#ffffff'); grad.addColorStop(1, bodyColor); ctx.fillStyle = grad; 
  }
  ctx.fill(); ctx.lineWidth = 3; ctx.strokeStyle = 'rgba(0,0,0,0.12)'; ctx.stroke();
  if (!isHybrid) {
    ctx.fillStyle = patternColor; ctx.globalAlpha = 0.5;
    [[-10,-10,5],[8,4,7],[-4,18,4],[12,-18,4]].forEach(([x,y,r])=>{ ctx.beginPath(); ctx.arc(x*scale,y*scale,r*scale,0,Math.PI*2); ctx.fill(); });
  } else {
    ctx.fillStyle = '#fff'; ctx.globalAlpha = 0.8;
    [[-10,-10,4],[8,4,5],[-4,18,3]].forEach(([x,y,r])=>{ ctx.beginPath(); ctx.arc(x*scale,y*scale,r*scale,0,Math.PI*2); ctx.fill(); });
  }
  ctx.globalAlpha = 1; ctx.restore();
}

function initEggScreen(){
  if(!state) state = defaultState();
  const canvas = document.getElementById('canvas-egg'); if(!canvas) return; 
  if(canvas.width !== 360) canvas.width = 360; 
  if(canvas.height !== 360) canvas.height = 360;
  
  const ctx = canvas.getContext('2d');
  function render(){
    ctx.clearRect(0,0,canvas.width,canvas.height); ctx.save(); ctx.translate(canvas.width/2, canvas.height/2+20);
    const sp = SPECIES[state.species] || SPECIES['hybrid']; const c = state.colors || sp; const isHybrid = state.species === 'hybrid';
    const float = isHybrid ? Math.sin(bounceTime * 3) * 10 : 0; ctx.translate(0, float);
    if(state.legendary){
      const auraR = 120 + Math.sin(bounceTime * 5) * 12;
      const grad = ctx.createRadialGradient(0,0,auraR*0.2, 0,0,auraR);
      grad.addColorStop(0, 'rgba(255,215,0,0.55)'); grad.addColorStop(1, 'rgba(255,100,0,0)');
      ctx.fillStyle = grad; ctx.beginPath(); ctx.arc(0,0,auraR,0,Math.PI*2); ctx.fill();
    }
    drawEggShape(ctx, c.pattern, c.body, 2.2, eggWobble, isHybrid);
    if(eggShakeCount > 0){
      ctx.strokeStyle='rgba(0,0,0,0.35)'; ctx.lineWidth=3; const crackLevel = Math.min(eggShakeCount, EGG_SHAKES_NEEDED);
      for(let i=0;i<crackLevel;i++){ ctx.save(); ctx.rotate((i/EGG_SHAKES_NEEDED)*Math.PI*2); ctx.beginPath(); ctx.moveTo(0,-20); ctx.lineTo(4,0); ctx.lineTo(-3,10); ctx.stroke(); ctx.restore(); }
    }
    ctx.restore();
  }
  canvas.onclick = ()=>{
    if(!state) state = defaultState();
    if(state.hatchReadyAt && Date.now() < state.hatchReadyAt) { SFX.refuse(); return toast("Magisk egg ruger fortsatt! ⏱️"); }
    eggShakeCount++; eggWobble = (Math.random()-0.5)*0.5; SFX.tap(); render(); setTimeout(()=>{ eggWobble=0; render(); },120);
    if(eggShakeCount >= EGG_SHAKES_NEEDED){ canvas.onclick = null; SFX.crack(); setTimeout(()=>{ SFX.hatch(); hatchEgg(); }, 350); }
  };
  render();
}

function hatchEgg(){
  if(!state) state = defaultState();
  state.hatched = true; state.phase = 'pet'; state.birthTime = Date.now(); state.growthProgress = 0; state.lastUpdate = Date.now();
  if(state.legendary){ state.prestige = Math.max(state.prestige || 0, 1); addGlobalCoins(150); refreshCoinUI(); }
  saveState(); showScreen('pet'); spawnSparkles(state.legendary ? 24 : 8);
  toast(state.legendary ? `${displayName(state)} har klekket! Legendarisk! 🌟🎉` : `${displayName(state)} har klekket! 🎉`);
}

/* ---------- Pet rendering & scaling ---------- */
function stageFromProgress(gp){ if(gp >= GROWTH_UNITS.adult) return 'adult'; if(gp >= GROWTH_UNITS.teen) return 'teen'; if(gp >= GROWTH_UNITS.child) return 'child'; return 'baby'; }
function getStage(){ return state ? stageFromProgress(state.growthProgress || 0) : 'baby'; }

function triggerAction(type, variant){ currentAction = { type, variant, start: performance.now(), duration: ACTION_DURATIONS[type] }; }
function getActionProgress(){
  if(!currentAction) return null; const t = performance.now() - currentAction.start; if(t >= currentAction.duration){ currentAction = null; return null; }
  return { type:currentAction.type, variant:currentAction.variant, progress: t/currentAction.duration };
}
function getPlayTransform(key, p){
  const env = Math.sin(Math.min(p,1)*Math.PI);
  switch(key){
    case 'bounce': return { translateY:-60*env, scaleX:1+0.15*env, scaleY:1-0.12*env }; case 'spin': return { rotate:p*Math.PI*2 };
    case 'zoomies': return { translateX:Math.sin(p*Math.PI*8)*40, rotate:Math.sin(p*Math.PI*8)*0.15 }; case 'wiggle': return { rotate:Math.sin(p*Math.PI*10)*0.25 };
    case 'peekaboo': { const s = 0.35+0.65*Math.abs(Math.sin(p*Math.PI*2)); return { scaleX:s, scaleY:s }; } case 'backflip': return { rotate:p*Math.PI*2, translateY:-80*env };
    case 'dance': return { translateX:Math.sin(p*Math.PI*6)*25, rotate:Math.sin(p*Math.PI*6)*0.2, translateY:-10*env }; case 'chase': return { rotate:p*Math.PI*6, translateX:Math.cos(p*Math.PI*6)*15, translateY:Math.sin(p*Math.PI*6)*15 };
    case 'wave': return { translateY:-8*env, rotate:Math.sin(p*Math.PI*6)*0.06 }; case 'jump': return { translateY:-70*Math.sin(Math.min(p*1.3,1)*Math.PI), scaleY: p<0.12 ? 1-p*1.4 : 1 }; default: return {};
  }
}

function drawPacifier(ctx, x, y, scale=1){
  ctx.save(); ctx.translate(x, y); ctx.scale(scale, scale);
  ctx.beginPath(); ctx.ellipse(0, 9, 5.5, 5.5, 0, 0, Math.PI*2); ctx.lineWidth=3; ctx.strokeStyle='#4fa8e8'; ctx.stroke();
  ctx.beginPath(); ctx.ellipse(0, 0, 10.5, 7.5, 0, 0, Math.PI*2); ctx.fillStyle='#4fa8e8'; ctx.fill(); ctx.strokeStyle='rgba(0,0,0,0.18)'; ctx.lineWidth=1; ctx.stroke();
  ctx.beginPath(); ctx.ellipse(-3, -2, 4, 2.4, -0.3, 0, Math.PI*2); ctx.fillStyle='rgba(255,255,255,0.4)'; ctx.fill();
  ctx.beginPath(); ctx.ellipse(0, 0, 4.5, 4.5, 0, 0, Math.PI*2); ctx.fillStyle='#f4d9b8'; ctx.fill(); ctx.restore();
}

function drawAccessory(ctx, id, originX, originY, spread, scale=1){
  ctx.save(); ctx.translate(originX, originY); ctx.scale(scale, scale); const eyeDX = spread;
  switch(id){
    case 'cap': ctx.fillStyle='#4fa8e8'; ctx.beginPath(); ctx.arc(0, -18, 26, Math.PI, 0); ctx.fill(); ctx.fillStyle='#3a86c2'; ctx.beginPath(); ctx.ellipse(16, -18, 15, 5, 0, 0, Math.PI*2); ctx.fill(); break;
    case 'partyhat': ctx.save(); ctx.translate(0, -16); ctx.rotate(0.18); ctx.beginPath(); ctx.moveTo(-14,0); ctx.lineTo(14,0); ctx.lineTo(0,-38); ctx.closePath(); ctx.fillStyle='#ff8fb1'; ctx.fill(); ctx.fillStyle='#ffd76b'; ctx.beginPath(); ctx.arc(0,-38,5,0,Math.PI*2); ctx.fill(); ctx.restore(); break;
    case 'tophat': ctx.fillStyle='#2a2a2a'; ctx.fillRect(-15, -48, 30, 28); ctx.beginPath(); ctx.ellipse(0, -20, 23, 6.5, 0, 0, Math.PI*2); ctx.fill(); ctx.fillStyle='#c73c3c'; ctx.fillRect(-15, -27, 30, 5); break;
    case 'crown': ctx.fillStyle='#ffd76b'; ctx.beginPath(); ctx.moveTo(-22,-18); ctx.lineTo(-22,-32); ctx.lineTo(-11,-22); ctx.lineTo(0,-36); ctx.lineTo(11,-22); ctx.lineTo(22,-32); ctx.lineTo(22,-18); ctx.closePath(); ctx.fill(); ctx.fillStyle='#e0555f'; [-11,0,11].forEach(x=>{ ctx.beginPath(); ctx.arc(x, -24, 2.5, 0, Math.PI*2); ctx.fill(); }); break;
    case 'wizardhat': ctx.fillStyle='#34495e'; ctx.beginPath(); ctx.ellipse(0, -14, 28, 6, 0, 0, Math.PI*2); ctx.fill(); ctx.beginPath(); ctx.moveTo(-18, -14); ctx.lineTo(0, -55); ctx.lineTo(18, -14); ctx.fill(); ctx.fillStyle='#f1c40f'; ctx.beginPath(); ctx.arc(0, -35, 4, 0, Math.PI*2); ctx.fill(); break;
    case 'flowercrown': ctx.strokeStyle='#2ecc71'; ctx.lineWidth=4; ctx.beginPath(); ctx.ellipse(0, -18, 22, 6, 0, 0, Math.PI*2); ctx.stroke(); ctx.fillStyle='#ff9ff3'; [-15, -8, 0, 8, 15].forEach((fx, i) => { ctx.beginPath(); ctx.arc(fx, -18 + (i%2)*2, 4, 0, Math.PI*2); ctx.fill(); ctx.fillStyle = i%2===0 ? '#feca57' : '#ff9ff3'; }); break;
    case 'sunglasses': ctx.fillStyle='#1a1a1a'; [-1,1].forEach(dir=>{ ctx.beginPath(); ctx.ellipse(dir*eyeDX, 0, 9, 6.5, 0, 0, Math.PI*2); ctx.fill(); }); ctx.strokeStyle='#1a1a1a'; ctx.lineWidth=2.5; ctx.beginPath(); ctx.moveTo(-eyeDX+8, 0); ctx.lineTo(eyeDX-8, 0); ctx.stroke(); break;
    case 'nerdglasses': ctx.strokeStyle='#2a2a2a'; ctx.lineWidth=2.5; [-1,1].forEach(dir=>{ ctx.beginPath(); ctx.arc(dir*eyeDX, 0, 9, 0, Math.PI*2); ctx.stroke(); }); ctx.beginPath(); ctx.moveTo(-eyeDX+9, 0); ctx.lineTo(eyeDX-9, 0); ctx.stroke(); break;
    case 'heartglasses': ctx.fillStyle='#ff4757'; [-1,1].forEach(dir=>{ ctx.save(); ctx.translate(dir*eyeDX, 0); ctx.beginPath(); ctx.moveTo(0, 4); ctx.bezierCurveTo(-10, -8, -12, -14, -6, -16); ctx.bezierCurveTo(0, -18, 0, -10, 0, -10); ctx.bezierCurveTo(0, -10, 0, -18, 6, -16); ctx.bezierCurveTo(12, -14, 10, -8, 0, 4); ctx.fill(); ctx.restore(); }); ctx.strokeStyle='#ff4757'; ctx.lineWidth=2; ctx.beginPath(); ctx.moveTo(-eyeDX+6, -10); ctx.lineTo(eyeDX-6, -10); ctx.stroke(); break;
  }
  ctx.restore();
}

function drawNeckAccessory(ctx, id, originX=0, originY=0, scale=1){
  ctx.save(); ctx.translate(originX, originY); ctx.scale(scale, scale);
  switch(id){
    case 'bowtie': ctx.fillStyle='#e0555f'; ctx.beginPath(); ctx.moveTo(0,26); ctx.lineTo(-12,18); ctx.lineTo(-12,34); ctx.closePath(); ctx.fill(); ctx.beginPath(); ctx.moveTo(0,26); ctx.lineTo(12,18); ctx.lineTo(12,34); ctx.closePath(); ctx.fill(); ctx.fillStyle='#c73c3c'; ctx.beginPath(); ctx.arc(0,26,4,0,Math.PI*2); ctx.fill(); break;
    case 'scarf': ctx.strokeStyle='#6ec6ff'; ctx.lineWidth=14; ctx.lineCap='round'; ctx.beginPath(); ctx.moveTo(-30,20); ctx.quadraticCurveTo(0,32,30,20); ctx.stroke(); ctx.fillStyle='#4fa8e8'; ctx.fillRect(-6,26,10,20); break;
    case 'bandana': ctx.fillStyle='#ff8fb1'; ctx.beginPath(); ctx.moveTo(-28,16); ctx.quadraticCurveTo(0,30,28,16); ctx.lineTo(24,26); ctx.quadraticCurveTo(0,38,-24,26); ctx.closePath(); ctx.fill(); ctx.fillStyle='#e0555f'; [-12,0,12].forEach(x=>{ ctx.beginPath(); ctx.arc(x,26,2,0,Math.PI*2); ctx.fill(); }); break;
    case 'necklace': ctx.strokeStyle='#f1c40f'; ctx.lineWidth=3; ctx.beginPath(); ctx.ellipse(0, 24, 14, 8, 0, 0, Math.PI); ctx.stroke(); ctx.fillStyle='#e74c3c'; ctx.beginPath(); ctx.arc(0, 32, 5, 0, Math.PI*2); ctx.fill(); break;
  }
  ctx.restore();
}

function drawEmojiOverlay(ctx, emoji, x, y, size, alpha=1){
  ctx.save(); ctx.globalAlpha = alpha; ctx.font = `${size}px "Segoe UI Emoji", sans-serif`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(emoji, x, y); ctx.restore();
}

function drawEars(ctx, speciesKey, colors, profile, stage){
  const r = profile.headR; const s = profile.earScale; ctx.fillStyle = colors.ear;
  if (speciesKey === 'lion') {
    if (profile.features && (stage === 'teen' || stage === 'adult')) {
      ctx.fillStyle = colors.pattern; ctx.beginPath(); ctx.arc(0, -r*0.1, r*1.6, 0, Math.PI*2); ctx.fill();
      for(let i=0; i<12; i++){ ctx.save(); ctx.rotate((i/12)*Math.PI*2); ctx.beginPath(); ctx.moveTo(r*1.4, 0); ctx.lineTo(r*2.1, r*0.4); ctx.lineTo(r*1.4, r*0.8); ctx.fill(); ctx.restore(); }
    }
    [-1, 1].forEach(dir => { ctx.save(); ctx.translate(dir * r * 0.75, -r * 0.6); ctx.scale(s, s); ctx.beginPath(); ctx.arc(0,0, 10, 0, Math.PI*2); ctx.fillStyle=colors.body; ctx.fill(); ctx.beginPath(); ctx.arc(0,0, 5, 0, Math.PI*2); ctx.fillStyle=colors.ear; ctx.fill(); ctx.restore(); });
  } else if (speciesKey === 'owl') {
    [-1, 1].forEach(dir => { ctx.save(); ctx.translate(dir * r * 0.6, -r * 0.8); ctx.scale(s, s); ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(dir * 15, -25); ctx.lineTo(dir * 25, 0); ctx.fillStyle = colors.body; ctx.fill(); ctx.restore(); });
  } else if (speciesKey === 'monkey' || speciesKey === 'lemur') {
    [-1, 1].forEach(dir => { ctx.save(); ctx.translate(dir * r * 0.9, -r * 0.2); ctx.scale(s, s); ctx.beginPath(); ctx.arc(0,0, 14, 0, Math.PI*2); ctx.fillStyle=colors.body; ctx.fill(); ctx.beginPath(); ctx.arc(dir*2,0, 8, 0, Math.PI*2); ctx.fillStyle=colors.ear; ctx.fill(); ctx.restore(); });
  } else if (speciesKey === 'cheetah') {
    [-1, 1].forEach(dir => { ctx.save(); ctx.translate(dir * r * 0.75, -r * 0.6); ctx.scale(s, s); ctx.beginPath(); ctx.arc(0,0, 8, 0, Math.PI*2); ctx.fillStyle=colors.body; ctx.fill(); ctx.beginPath(); ctx.arc(0,0, 4, 0, Math.PI*2); ctx.fillStyle=colors.ear; ctx.fill(); ctx.restore(); });
  } else if (speciesKey === 'fennec') {
    [-1, 1].forEach(dir => { ctx.save(); ctx.translate(dir * r * 0.8, -r * 0.4); ctx.scale(s, s); ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(dir * 28, -50); ctx.lineTo(dir * -10, -20); ctx.closePath(); ctx.fill(); ctx.fillStyle = colors.pattern; ctx.beginPath(); ctx.moveTo(dir * 2, -5); ctx.lineTo(dir * 22, -40); ctx.lineTo(dir * -4, -18); ctx.closePath(); ctx.fill(); ctx.restore(); ctx.fillStyle = colors.ear; });
  } else if (speciesKey === 'redpanda') {
    [-1, 1].forEach(dir => { ctx.save(); ctx.translate(dir * r * 0.7, -r * 0.65); ctx.scale(s, s); ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(dir * 18, -25); ctx.lineTo(dir * -12, -10); ctx.closePath(); ctx.fill(); ctx.fillStyle = colors.pattern; ctx.beginPath(); ctx.moveTo(dir * 4, -4); ctx.lineTo(dir * 14, -18); ctx.lineTo(dir * -6, -8); ctx.closePath(); ctx.fill(); ctx.restore(); ctx.fillStyle = colors.ear; });
  } else if (speciesKey === 'unicorn') {
    [-1, 1].forEach(dir => { ctx.save(); ctx.translate(dir * r * 0.5, -r * 0.8); ctx.scale(s, s); ctx.beginPath(); ctx.moveTo(0,0); ctx.quadraticCurveTo(dir*10, -20, dir*4, -30); ctx.quadraticCurveTo(-dir*5, -15, -dir*10, 0); ctx.fillStyle=colors.body; ctx.fill(); ctx.restore(); });
    if (profile.features) { ctx.save(); ctx.translate(0, -r * 0.85); ctx.scale(s, s); ctx.beginPath(); ctx.moveTo(-6, 0); ctx.lineTo(0, -35); ctx.lineTo(6, 0); ctx.fillStyle=colors.pattern; ctx.fill(); ctx.beginPath(); ctx.moveTo(-4, -10); ctx.lineTo(4, -15); ctx.lineWidth=2; ctx.strokeStyle='rgba(255,255,255,0.5)'; ctx.stroke(); ctx.beginPath(); ctx.moveTo(-3, -20); ctx.lineTo(3, -25); ctx.stroke(); ctx.restore(); }
  } else if (speciesKey === 'pig') {
    [-1, 1].forEach(dir => { ctx.save(); ctx.translate(dir * r * 0.7, -r * 0.6); ctx.scale(s, s); ctx.beginPath(); ctx.moveTo(0,0); ctx.lineTo(dir*20, -10); ctx.lineTo(dir*10, 10); ctx.fillStyle=colors.body; ctx.fill(); ctx.beginPath(); ctx.moveTo(dir*4,0); ctx.lineTo(dir*16, -6); ctx.lineTo(dir*8, 6); ctx.fillStyle=colors.ear; ctx.fill(); ctx.restore(); });
  } else if (speciesKey === 'cat') {
    [-1, 1].forEach(dir => { ctx.save(); ctx.translate(dir * r * 0.7, -r * 0.6); ctx.scale(s, s); ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(dir * 16, -30); ctx.lineTo(dir * -12, -14); ctx.closePath(); ctx.fill(); ctx.fillStyle = colors.pattern; ctx.beginPath(); ctx.moveTo(dir * 2, -4); ctx.lineTo(dir * 10, -22); ctx.lineTo(dir * -6, -12); ctx.closePath(); ctx.fill(); ctx.restore(); ctx.fillStyle = colors.ear; });
  } else if (speciesKey === 'dog') {
    [-1, 1].forEach(dir => { ctx.save(); ctx.translate(dir * r * 0.85, -r * 0.2); ctx.scale(s, s); ctx.beginPath(); ctx.ellipse(dir * 8, 10, 12, 24, dir * 0.3, 0, Math.PI * 2); ctx.fill(); ctx.restore(); });
  } else if (speciesKey === 'fox') {
    [-1, 1].forEach(dir => { ctx.save(); ctx.translate(dir * r * 0.65, -r * 0.65); ctx.scale(s, s); ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(dir * 16, -36); ctx.lineTo(dir * -14, -10); ctx.closePath(); ctx.fill(); ctx.fillStyle = '#2a2a2a'; ctx.beginPath(); ctx.moveTo(dir * 12, -26); ctx.lineTo(dir * 16, -36); ctx.lineTo(dir * 6, -20); ctx.closePath(); ctx.fill(); ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.moveTo(dir * 2, -4); ctx.lineTo(dir * 8, -24); ctx.lineTo(dir * -8, -8); ctx.closePath(); ctx.fill(); ctx.restore(); ctx.fillStyle = colors.ear; });
  } else if (speciesKey === 'panda') {
    [-1, 1].forEach(dir => { ctx.save(); ctx.translate(dir * r * 0.75, -r * 0.7); ctx.scale(s, s); ctx.beginPath(); ctx.arc(dir * 4, -4, 13, 0, Math.PI * 2); ctx.fillStyle = colors.ear; ctx.fill(); ctx.restore(); });
  } else if (speciesKey === 'bunny') {
    [-1, 1].forEach(dir => { ctx.save(); ctx.translate(dir * r * 0.5, -r * 0.85); ctx.scale(s, s); ctx.beginPath(); ctx.ellipse(dir * 4, -25, 10, 36, dir * 0.15, 0, Math.PI * 2); ctx.fill(); ctx.fillStyle = colors.pattern; ctx.beginPath(); ctx.ellipse(dir * 4, -24, 4.5, 26, dir * 0.15, 0, Math.PI * 2); ctx.fill(); ctx.restore(); ctx.fillStyle = colors.ear; });
  } else if (speciesKey === 'dragon') {
    [-1, 1].forEach(dir => { ctx.save(); ctx.translate(dir * r * 0.6, -r * 0.75); ctx.scale(s, s); ctx.beginPath(); ctx.moveTo(0, 5); ctx.lineTo(dir * 10, -22); ctx.lineTo(dir * -6, -8); ctx.closePath(); ctx.fillStyle = colors.body; ctx.fill(); ctx.fillStyle = colors.pattern; ctx.beginPath(); ctx.moveTo(dir * 2, 0); ctx.lineTo(dir * 7, -15); ctx.lineTo(dir * -2, -6); ctx.closePath(); ctx.fill(); ctx.restore(); });
  } else if (speciesKey === 'turtle') {
    [-1, 1].forEach(dir => { ctx.save(); ctx.translate(dir * r * 0.85, -r * 0.35); ctx.scale(s, s); ctx.beginPath(); ctx.arc(0, 0, 8, 0, Math.PI * 2); ctx.fillStyle = colors.body; ctx.fill(); ctx.restore(); });
  } else if (speciesKey === 'penguin') {
    [-1, 1].forEach(dir => { ctx.save(); ctx.translate(dir * r * 0.8, -r * 0.5); ctx.scale(s, s); ctx.beginPath(); ctx.ellipse(0, 0, 7, 11, dir * 0.3, 0, Math.PI * 2); ctx.fillStyle = colors.pattern; ctx.fill(); ctx.restore(); });
  } else if (speciesKey === 'snake' || speciesKey === 'gecko') {
    ctx.fillStyle = colors.pattern;
    [-1, 1].forEach(dir => { ctx.save(); ctx.translate(dir * r * 0.7, -r * 0.7); ctx.scale(s, s); ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(dir * 8, -14); ctx.lineTo(dir * -4, -4); ctx.closePath(); ctx.fill(); ctx.restore(); });
  } else if (speciesKey === 'phoenix') {
    ctx.fillStyle = colors.ear;
    [-1, 1].forEach(dir => { ctx.save(); ctx.translate(dir * r * 0.35, -r * 0.85); ctx.scale(s, s); ctx.beginPath(); ctx.moveTo(0, 10); ctx.quadraticCurveTo(dir * 10, -15, dir * 4, -32); ctx.quadraticCurveTo(dir * -4, -15, 0, 10); ctx.closePath(); ctx.fill(); ctx.restore(); });
    ctx.fillStyle = colors.pattern;
    ctx.save(); ctx.translate(0, -r * 0.95); ctx.scale(s, s); ctx.beginPath(); ctx.moveTo(0, 8); ctx.quadraticCurveTo(6, -20, 0, -38); ctx.quadraticCurveTo(-6, -20, 0, 8); ctx.closePath(); ctx.fill(); ctx.restore();
  } else if (speciesKey === 'robot') {
    ctx.strokeStyle = colors.pattern; ctx.lineWidth = 3 * s; ctx.lineCap = 'round';
    [-1, 1].forEach(dir => { ctx.save(); ctx.translate(dir * r * 0.5, -r * 0.85); ctx.scale(s, s); ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(dir * 6, -22); ctx.stroke(); ctx.beginPath(); ctx.arc(dir * 6, -22, 5, 0, Math.PI * 2); ctx.fillStyle = colors.ear; ctx.fill(); ctx.restore(); });
  } else if (speciesKey === 'alien') {
    ctx.strokeStyle = colors.body; ctx.lineWidth = 3 * s; ctx.lineCap = 'round';
    [-1, 1].forEach(dir => { ctx.save(); ctx.translate(dir * r * 0.35, -r * 0.9); ctx.scale(s, s); ctx.beginPath(); ctx.moveTo(0, 0); ctx.quadraticCurveTo(dir * 14, -10, dir * 10, -26); ctx.stroke(); ctx.beginPath(); ctx.arc(dir * 10, -26, 5, 0, Math.PI * 2); ctx.fillStyle = colors.ear; ctx.fill(); ctx.restore(); });
  } else if (speciesKey === 'slime') {
    ctx.globalAlpha = 0.85;
    [-1, 1].forEach(dir => { ctx.save(); ctx.translate(dir * r * 0.7, -r * 0.5); ctx.scale(s, s); ctx.beginPath(); ctx.arc(0, -4, 10, 0, Math.PI * 2); ctx.fillStyle = colors.body; ctx.fill(); ctx.restore(); });
    ctx.globalAlpha = 1;
  } else if (speciesKey === 'yeti') {
    ctx.fillStyle = colors.ear;
    [-1, 1].forEach(dir => { ctx.save(); ctx.translate(dir * r * 0.7, -r * 0.6); ctx.scale(s, s); ctx.beginPath(); ctx.moveTo(0, 8); ctx.lineTo(dir * 10, -20); ctx.lineTo(dir * -6, -4); ctx.closePath(); ctx.fill(); ctx.restore(); });
  } else if (speciesKey === 'golem') {
    ctx.fillStyle = colors.ear; ctx.strokeStyle = 'rgba(255,255,255,0.6)'; ctx.lineWidth = 1;
    [-1, 1].forEach(dir => { ctx.save(); ctx.translate(dir * r * 0.75, -r * 0.6); ctx.scale(s, s); ctx.beginPath(); ctx.moveTo(0, 10); ctx.lineTo(dir * 8, -6); ctx.lineTo(0, -24); ctx.lineTo(dir * -8, -6); ctx.closePath(); ctx.fill(); ctx.stroke(); ctx.restore(); });
  } else if (speciesKey === 'kraken') {
    ctx.strokeStyle = colors.ear; ctx.lineWidth = 5 * s; ctx.lineCap = 'round';
    [-1, 1].forEach(dir => { ctx.save(); ctx.translate(dir * r * 0.6, -r * 0.3); ctx.scale(s, s); ctx.beginPath(); ctx.moveTo(0, 0); ctx.bezierCurveTo(dir * 20, -10, dir * -10, -25, dir * 15, -35); ctx.stroke(); ctx.restore(); });
  } else {
    [-1, 1].forEach(dir => { ctx.save(); ctx.translate(dir * r * 0.75, -r * 0.55); ctx.scale(s, s); ctx.beginPath(); ctx.arc(0, -6, 11, 0, Math.PI * 2); ctx.fillStyle = colors.body; ctx.fill(); ctx.beginPath(); ctx.arc(dir * 1.5, -6, 5.5, 0, Math.PI * 2); ctx.fillStyle = colors.ear; ctx.fill(); ctx.restore(); });
  }
}

function drawTail(ctx, speciesKey, colors, profile, stage){
  const bx = profile.bodyRX, by = profile.bodyRY, s = profile.tailScale; ctx.save();
  if (speciesKey === 'lion') { ctx.translate(bx * 0.85, by * 0.2); ctx.scale(s, s); ctx.beginPath(); ctx.moveTo(0, 0); ctx.quadraticCurveTo(30, 10, 40, 30); ctx.lineWidth = 8; ctx.strokeStyle = colors.body; ctx.lineCap = 'round'; ctx.stroke(); if (stage === 'teen' || stage === 'adult') { ctx.beginPath(); ctx.arc(40, 32, 8, 0, Math.PI*2); ctx.fillStyle = colors.pattern; ctx.fill(); }
  } else if (speciesKey === 'penguin') { ctx.translate(bx * 0.5, by * 0.85); ctx.scale(s, s); ctx.beginPath(); ctx.moveTo(0,0); ctx.lineTo(20, 15); ctx.lineTo(-10, 5); ctx.fillStyle = colors.body; ctx.fill();
  } else if (speciesKey === 'owl') { ctx.translate(bx * 0.6, by * 0.8); ctx.scale(s, s); ctx.beginPath(); ctx.moveTo(0,0); ctx.lineTo(25, 15); ctx.lineTo(10, 25); ctx.fillStyle = colors.body; ctx.fill();
  } else if (speciesKey === 'turtle') { ctx.translate(bx * 0.8, by * 0.6); ctx.scale(s, s); ctx.beginPath(); ctx.moveTo(0,0); ctx.lineTo(20, 10); ctx.lineTo(5, 15); ctx.fillStyle = colors.body; ctx.fill();
  } else if (speciesKey === 'cheetah') { ctx.translate(bx * 0.85, by * 0.2); ctx.scale(s, s); ctx.beginPath(); ctx.moveTo(0, 0); ctx.quadraticCurveTo(30, 20, 45, -10); ctx.lineWidth = 6; ctx.strokeStyle = colors.body; ctx.lineCap = 'round'; ctx.stroke(); if (stage === 'teen' || stage === 'adult') { ctx.beginPath(); ctx.arc(45, -10, 5, 0, Math.PI*2); ctx.fillStyle = colors.pattern; ctx.fill(); }
  } else if (speciesKey === 'lemur' || speciesKey === 'redpanda') {
    ctx.translate(bx * 0.85, by * 0.1); ctx.scale(s, s); ctx.lineWidth = speciesKey === 'redpanda' ? 14 : 10; ctx.lineCap = 'round'; ctx.strokeStyle = colors.body; ctx.beginPath(); ctx.moveTo(0, 0); ctx.quadraticCurveTo(30, 10, 40, -35); ctx.stroke();
    if (profile.features) { ctx.strokeStyle = colors.pattern; ctx.beginPath(); ctx.moveTo(15, 6); ctx.lineTo(22, 6); ctx.stroke(); ctx.beginPath(); ctx.moveTo(31, -2); ctx.lineTo(36, -8); ctx.stroke(); ctx.beginPath(); ctx.moveTo(39, -20); ctx.lineTo(41, -26); ctx.stroke(); }
  } else if (speciesKey === 'monkey') { ctx.translate(bx * 0.85, by * 0.2); ctx.scale(s, s); ctx.beginPath(); ctx.moveTo(0, 0); ctx.quadraticCurveTo(40, 20, 50, -10); ctx.quadraticCurveTo(60, -40, 40, -40); ctx.quadraticCurveTo(25, -40, 35, -20); ctx.lineWidth = 10; ctx.strokeStyle = colors.body; ctx.lineCap = 'round'; ctx.stroke();
  } else if (speciesKey === 'unicorn') { ctx.translate(bx * 0.85, by * 0.1); ctx.scale(s, s); ctx.beginPath(); ctx.moveTo(0,0); ctx.quadraticCurveTo(30, -20, 25, 40); ctx.lineWidth = 14; ctx.strokeStyle = colors.pattern; ctx.lineCap = 'round'; ctx.stroke(); ctx.beginPath(); ctx.moveTo(5,0); ctx.quadraticCurveTo(40, -10, 35, 35); ctx.lineWidth = 8; ctx.strokeStyle = '#ffb6c1'; ctx.lineCap = 'round'; ctx.stroke();
  } else if (speciesKey === 'pig') { ctx.translate(bx * 0.85, by * 0.1); ctx.scale(s, s); ctx.beginPath(); ctx.moveTo(0, 0); ctx.quadraticCurveTo(20, -20, 10, -30); ctx.quadraticCurveTo(-5, -40, 15, -45); ctx.lineWidth = 6; ctx.strokeStyle = colors.body; ctx.lineCap = 'round'; ctx.stroke();
  } else if (speciesKey === 'dragon') { ctx.translate(bx * 0.85, 0); ctx.scale(s, s); ctx.beginPath(); ctx.moveTo(0, 0); ctx.quadraticCurveTo(40, -10, 45, -45); ctx.lineWidth = 16; ctx.strokeStyle = colors.body; ctx.lineCap = 'round'; ctx.stroke(); if (stage === 'teen' || stage === 'adult') { ctx.fillStyle = colors.pattern; ctx.beginPath(); ctx.moveTo(45, -45); ctx.lineTo(38, -55); ctx.lineTo(50, -52); ctx.closePath(); ctx.fill(); }
  } else if (speciesKey === 'dog') { ctx.translate(bx * 0.85, by * 0.25); ctx.scale(s, s); ctx.beginPath(); ctx.moveTo(0, 0); ctx.quadraticCurveTo(20, -6, 18, 14); ctx.lineWidth = 11; ctx.strokeStyle = colors.ear; ctx.lineCap = 'round'; ctx.stroke();
  } else if (speciesKey === 'cat') { ctx.translate(bx * 0.85, by * 0.1); ctx.scale(s, s); ctx.beginPath(); ctx.moveTo(0, 0); ctx.quadraticCurveTo(30, 0, 32, -25); ctx.quadraticCurveTo(34, -40, 20, -40); ctx.lineWidth = 12; ctx.strokeStyle = colors.body; ctx.lineCap = 'round'; ctx.stroke();
  } else if (speciesKey === 'fox') { ctx.translate(bx * 0.8, by * 0.1); ctx.scale(s, s); ctx.beginPath(); ctx.ellipse(25, 0, 30, 15, -0.4, 0, Math.PI * 2); ctx.fillStyle = colors.body; ctx.fill(); ctx.beginPath(); ctx.ellipse(48, -10, 10, 7, -0.4, 0, Math.PI * 2); ctx.fillStyle = '#fff8ee'; ctx.fill();
  } else if (speciesKey === 'panda') { ctx.translate(bx * 0.85, by * 0.4); ctx.scale(s, s); ctx.beginPath(); ctx.arc(5, 0, 9, 0, Math.PI * 2); ctx.fillStyle = '#fff'; ctx.fill();
  } else if (speciesKey === 'bunny') { ctx.translate(bx * 0.85, by * 0.3); ctx.scale(s, s); ctx.beginPath(); ctx.arc(5, 0, 10, 0, Math.PI * 2); ctx.fillStyle = '#fff'; ctx.fill();
  } else if (speciesKey === 'fennec') { ctx.translate(bx * 0.85, by * 0.15); ctx.scale(s, s); ctx.beginPath(); ctx.moveTo(0, 0); ctx.quadraticCurveTo(26, 10, 32, -14); ctx.lineWidth = 9; ctx.strokeStyle = colors.body; ctx.lineCap = 'round'; ctx.stroke(); ctx.beginPath(); ctx.arc(32, -14, 6, 0, Math.PI * 2); ctx.fillStyle = '#fff8ee'; ctx.fill();
  } else if (speciesKey === 'snake' || speciesKey === 'gecko') { ctx.translate(bx * 0.85, by * 0.35); ctx.scale(s, s); ctx.beginPath(); ctx.moveTo(0, 0); ctx.quadraticCurveTo(20, 8, 26, 26); ctx.lineWidth = 7; ctx.strokeStyle = colors.body; ctx.lineCap = 'round'; ctx.stroke();
  } else if (speciesKey === 'phoenix') {
    ctx.translate(bx * 0.85, by * 0.1); ctx.scale(s, s); ctx.fillStyle = colors.ear;
    [-1, 0, 1].forEach((dir, i) => { ctx.save(); ctx.rotate(dir * 0.35); ctx.beginPath(); ctx.moveTo(0, 0); ctx.quadraticCurveTo(30, 10 + i * 4, 42 - i * 3, -6 + dir * 20); ctx.quadraticCurveTo(25, 5, 0, 0); ctx.closePath(); ctx.fill(); ctx.restore(); });
  } else if (speciesKey === 'robot') {
    ctx.translate(bx * 0.85, by * 0.15); ctx.scale(s, s); ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(32, 4); ctx.lineWidth = 6; ctx.strokeStyle = colors.pattern; ctx.lineCap = 'round'; ctx.stroke(); ctx.beginPath(); ctx.arc(32, 4, 5, 0, Math.PI * 2); ctx.fillStyle = colors.ear; ctx.fill();
  } else if (speciesKey === 'alien') {
    ctx.translate(bx * 0.85, by * 0.15); ctx.scale(s, s); ctx.beginPath(); ctx.moveTo(0, 0); ctx.quadraticCurveTo(20, 20, 10, 36); ctx.lineWidth = 5; ctx.strokeStyle = colors.body; ctx.lineCap = 'round'; ctx.stroke(); ctx.beginPath(); ctx.arc(10, 36, 4, 0, Math.PI * 2); ctx.fillStyle = colors.ear; ctx.fill();
  } else if (speciesKey === 'slime') {
    ctx.translate(bx * 0.8, by * 0.3); ctx.scale(s, s); ctx.globalAlpha = 0.85; ctx.beginPath(); ctx.ellipse(10, 10, 16, 12, 0, 0, Math.PI * 2); ctx.fillStyle = colors.body; ctx.fill(); ctx.globalAlpha = 1;
  } else if (speciesKey === 'yeti') {
    ctx.translate(bx * 0.85, by * 0.2); ctx.scale(s, s); ctx.beginPath(); ctx.arc(10, 10, 14, 0, Math.PI * 2); ctx.fillStyle = colors.body; ctx.fill();
  } else if (speciesKey === 'golem') {
    ctx.translate(bx * 0.85, by * 0.15); ctx.scale(s, s); ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(24, -8); ctx.lineTo(34, 10); ctx.lineTo(16, 18); ctx.closePath(); ctx.fillStyle = colors.pattern; ctx.fill(); ctx.strokeStyle = 'rgba(255,255,255,0.5)'; ctx.lineWidth = 1; ctx.stroke();
  } else if (speciesKey === 'kraken') {
    ctx.translate(bx * 0.85, by * 0.2); ctx.scale(s, s); ctx.beginPath(); ctx.moveTo(0, 0); ctx.bezierCurveTo(20, 10, 10, 30, 30, 36); ctx.lineWidth = 8; ctx.strokeStyle = colors.body; ctx.lineCap = 'round'; ctx.stroke();
  } else { ctx.translate(bx * 0.85, by * 0.2); ctx.scale(s, s); ctx.beginPath(); ctx.moveTo(0, 0); ctx.quadraticCurveTo(24, 10, 30, 26); ctx.lineWidth = 8; ctx.strokeStyle = colors.body; ctx.lineCap = 'round'; ctx.stroke(); }
  ctx.restore();
}

function drawCreature(ctx, speciesKey, stage, opts={}){
  let baseSpecies = speciesKey; if(speciesKey === 'hybrid' && opts.hybridDNA) baseSpecies = opts.hybridDNA.base;
  const sp = SPECIES[baseSpecies] || SPECIES['cat']; const colors = opts.colors || sp;
  if(sp.bodyPlan==='snake') return drawSnakeCreature(ctx, baseSpecies, stage, opts);
  if(sp.bodyPlan==='gecko') return drawGeckoCreature(ctx, baseSpecies, stage, opts);
  if(sp.bodyPlan==='blob') return drawSlimeCreature(ctx, baseSpecies, stage, opts);
  if(sp.bodyPlan==='alien') return drawAlienCreature(ctx, baseSpecies, stage, opts);
  if(sp.bodyPlan==='robot') return drawRobotCreature(ctx, baseSpecies, stage, opts);
  if(sp.bodyPlan==='golem') return drawGolemCreature(ctx, baseSpecies, stage, opts);
  if(sp.bodyPlan==='kraken') return drawKrakenCreature(ctx, baseSpecies, stage, opts);
  if(sp.bodyPlan==='yeti') return drawYetiCreature(ctx, baseSpecies, stage, opts);
  if(sp.bodyPlan==='phoenix') return drawPhoenixCreature(ctx, baseSpecies, stage, opts);
  if(sp.bodyPlan==='dragon') return drawDragonCreature(ctx, baseSpecies, stage, opts);
  if(sp.bodyPlan==='panda') return drawPandaCreature(ctx, baseSpecies, stage, opts);
  if(sp.bodyPlan==='unicorn') return drawUnicornCreature(ctx, baseSpecies, stage, opts);
  if(sp.bodyPlan==='turtle') return drawTurtleCreature(ctx, baseSpecies, stage, opts);
  if(sp.bodyPlan==='catlike') return drawCatlikeCreature(ctx, baseSpecies, stage, opts);
  if(sp.bodyPlan==='lion') return drawLionCreature(ctx, baseSpecies, stage, opts);
  if(sp.bodyPlan==='primate') return drawPrimateCreature(ctx, baseSpecies, stage, opts);
  if(sp.bodyPlan==='pig') return drawPigCreature(ctx, baseSpecies, stage, opts);
  if(sp.bodyPlan==='bunny') return drawBunnyCreature(ctx, baseSpecies, stage, opts);
  if(sp.bodyPlan==='redpanda') return drawRedpandaCreature(ctx, baseSpecies, stage, opts);
  if(sp.bodyPlan==='bird') return drawBirdCreature(ctx, baseSpecies, stage, opts);
  if(sp.bodyPlan==='gopher') return drawGopherCreature(ctx, baseSpecies, stage, opts);
  if(sp.bodyPlan==='bear') return drawBearCreature(ctx, baseSpecies, stage, opts);
  if(sp.bodyPlan==='wolf') return drawWolfCreature(ctx, baseSpecies, stage, opts);
  if(sp.bodyPlan==='nightdragon') return drawNightDragonCreature(ctx, baseSpecies, stage, opts);
}

/* ---------- Krypdyr (Reptiles) ---------- */
function drawTaperedPath(ctx, points, color){
  ctx.fillStyle = color;
  for(let i=0;i<points.length-1;i++){
    const a=points[i], b=points[i+1]; const steps=12;
    for(let s=0;s<=steps;s++){ const t=s/steps; const x=a.x+(b.x-a.x)*t, y=a.y+(b.y-a.y)*t, r=a.r+(b.r-a.r)*t; ctx.beginPath(); ctx.arc(x,y,r,0,Math.PI*2); ctx.fill(); }
  }
}
function computeSharedTransform(opts){
  let extraTX=0, extraTY=0, extraRotate=0, extraScaleX=1, extraScaleY=1; let chompProgress = null; const action = opts.action;
  if(action && action.type==='play'){ const t = getPlayTransform(action.variant, action.progress); extraTX = t.translateX||0; extraTY = t.translateY||0; extraRotate = t.rotate||0; extraScaleX = t.scaleX||1; extraScaleY = t.scaleY||1; } 
  else if(action && action.type==='refuse'){ extraRotate = Math.sin(action.progress*Math.PI*6)*0.2; } 
  else if(action && action.type==='eat'){ chompProgress = Math.min(action.progress/0.75, 1); if(chompProgress<1){ const chomp = Math.abs(Math.sin(chompProgress*Math.PI*4)); extraScaleY = 1 - chomp*0.06; extraTY = chomp*3; } else { extraTY = -Math.sin(((action.progress-0.75)/0.25)*Math.PI)*10; } } 
  else if(action && action.type==='jump'){ const hopPhase = (action.progress*2) % 1; extraTY = -50*Math.sin(hopPhase*Math.PI); extraScaleX = 1 + 0.08*Math.sin(hopPhase*Math.PI); } 
  else if(action && action.type==='cycle'){ extraRotate = 0.08 + Math.sin(action.progress*Math.PI*10)*0.05; extraTY = Math.abs(Math.sin(action.progress*Math.PI*10))*4; } 
  else if(action && action.type==='drive'){ extraScaleX = 0.5; extraScaleY = 0.5; extraTY = 34 + Math.sin(action.progress*Math.PI*12)*2; } 
  else if(action && action.type==='dino'){ extraScaleX = 0.55; extraScaleY = 0.55; extraTY = 60 + Math.sin(action.progress*Math.PI*8)*3; } 
  else if(action && action.type==='toilet'){ extraScaleY = 0.92; extraTY = 10; }
  let pulseScale = 1; const pulseRemaining = growthPulseUntil - performance.now(); if(pulseRemaining > 0){ const p = 1 - pulseRemaining/700; pulseScale = 1 + Math.sin(Math.min(p,1)*Math.PI)*0.3; }
  return { extraTX, extraTY, extraRotate, extraScaleX, extraScaleY, chompProgress, pulseScale };
}
function drawReptileActionOverlays(ctx, speciesKey, opts, t, headX, headY, headR, mouthX, mouthY){
  const action = opts.action; const equipped = opts.equipped; const hs = headR/22; 
  if(action && action.type==='eat'){ const foodEmoji = FOOD_EMOJI[speciesKey] || '🍎'; if(t.chompProgress<1) drawEmojiOverlay(ctx, foodEmoji, mouthX+10, mouthY-4, 26*(1-t.chompProgress*0.7), 1); } 
  else if(action && action.type==='refuse'){ drawEmojiOverlay(ctx, FOOD_EMOJI[speciesKey] || '🍎', mouthX+14+action.progress*16, mouthY, 22, 1-action.progress*0.7); } 
  else if(action && action.type==='wash'){ const p = action.progress; const sudsEnv = Math.sin(Math.min(p/0.85,1)*Math.PI); ctx.fillStyle = 'rgba(255,255,255,0.75)'; [[-10,-4,9],[8,-10,8],[0,6,10]].forEach(([sx,sy,sr],i)=>{ ctx.beginPath(); ctx.arc(headX+sx, headY+sy, sr*sudsEnv*(0.7+0.3*Math.sin(p*10+i)), 0, Math.PI*2); ctx.fill(); }); } 
  else if(action && action.type==='brush'){ const bx = Math.sin(action.progress*Math.PI*12)*6; drawEmojiOverlay(ctx, '🪥', mouthX+bx, mouthY, 22, 1); }
  if(opts.pacifier) drawPacifier(ctx, mouthX, mouthY + 4*hs*0.8, hs*0.8);
  if(equipped && equipped.glasses) drawAccessory(ctx, equipped.glasses, headX, headY-headR*0.05, headR*0.42, hs*0.65);
  if(equipped && equipped.hat) drawAccessory(ctx, equipped.hat, headX, headY-headR*0.9, headR*0.42, hs*0.55);
  if(equipped && equipped.neck) drawNeckAccessory(ctx, equipped.neck, headX-15, headY+5, hs*0.6);
}

function drawSnakeCreature(ctx, speciesKey, stage, opts={}){
  let baseSpecies = speciesKey; if(speciesKey === 'hybrid' && opts.hybridDNA) baseSpecies = opts.hybridDNA.base;
  const sp = SPECIES[baseSpecies] || SPECIES['snake']; const colors = opts.colors || sp; const scale = STAGE_SCALE[stage]; const j = juvenile(stage);
  const asleep = opts.asleep; const sad = opts.sad; const action = opts.action; const yaw = opts.yaw || 0;
  const annoyed = sad || (action && action.type==='refuse') || (opts.prestige > 0 && !asleep);
  const t = computeSharedTransform(opts); const bounce = (asleep || action) ? 0 : Math.sin(bounceTime*2)*3;

  ctx.save(); ctx.translate(180+t.extraTX, 210+bounce+t.extraTY);
  if(opts.prestige > 0 && !asleep) ctx.translate(0, -Math.abs(Math.sin(bounceTime*2)) * 10 - (opts.prestige * 5));
  ctx.rotate(t.extraRotate); ctx.scale(scale*t.extraScaleX*t.pulseScale*Math.cos(yaw), scale*t.extraScaleY*t.pulseScale);

  drawPrestigeAura(ctx, 5, 95, opts.prestige || 0);

  const slither = asleep ? 0 : Math.sin(bounceTime*2.2)*6;
  const coil = { baby:0.4, child:0.62, teen:0.82, adult:1.0 }[stage];
  const bodyPts = [
    { x:-98*coil, y:16+slither*0.2, r:4+2*coil },
    { x:-72*coil, y:-8-slither*0.5, r:8+4*coil },
    { x:-42*coil, y:16+slither, r:12+6*coil },
    { x:-12*coil, y:-10-slither*0.7, r:14+7*coil },
    { x:18*coil,  y:10+slither*0.5, r:13+6*coil },
    { x:44*coil,  y:-8-slither*0.3, r:10+5*coil },
  ];
  drawTaperedPath(ctx, bodyPts, colors.body);
  ctx.fillStyle = colors.pattern;
  for(let i=1;i<bodyPts.length;i+=2){ const p=bodyPts[i]; ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(Math.PI/4); ctx.fillRect(-p.r*0.4,-p.r*0.4,p.r*0.8,p.r*0.8); ctx.restore(); }

  if(!asleep){
    const hood = Math.max(0, Math.sin(bounceTime*0.7));
    if(hood > 0.6){
      const hp = (hood-0.6)/0.4; const hx = 54*coil, hy = -6;
      ctx.save(); ctx.globalAlpha = hp*0.85; ctx.fillStyle = colors.body;
      ctx.beginPath(); ctx.moveTo(hx,hy); ctx.quadraticCurveTo(hx+10,hy-16-hp*8,hx+24,hy-6-hp*4); ctx.quadraticCurveTo(hx+14,hy+2,hx+8,hy+8); ctx.quadraticCurveTo(hx+16,hy+6-hp,hx+18,hy+2-hp*8); ctx.quadraticCurveTo(hx+4,hy+6,hx,hy); ctx.closePath(); ctx.fill();
      ctx.restore();
    }
  }

  const headX = 62*coil+16, headY = -2; const headR = (13+4*coil) * (1+j*0.3);
  ctx.save(); ctx.translate(headX, headY); ctx.rotate(0.12);
  ctx.beginPath(); ctx.ellipse(0,0,headR*1.15,headR*0.78,0,0,Math.PI*2); ctx.fillStyle = colors.body; ctx.fill();
  ctx.restore();

  const closedEyes = asleep; const eyeX = headX+headR*0.5, eyeY2 = headY-headR*0.35;
  if(closedEyes){ ctx.strokeStyle='#2a2a1a'; ctx.lineWidth=2; ctx.lineCap='round'; ctx.beginPath(); ctx.moveTo(eyeX-5,eyeY2); ctx.quadraticCurveTo(eyeX,eyeY2+4,eyeX+5,eyeY2); ctx.stroke(); }
  else {
    ctx.beginPath(); ctx.ellipse(eyeX,eyeY2,headR*0.26,headR*0.3,0,0,Math.PI*2); ctx.fillStyle = sp.eyeType==='slit' ? '#ffd23f' : '#fff'; ctx.fill();
    ctx.beginPath(); ctx.ellipse(eyeX+(annoyed?0:0.6), eyeY2, headR*0.08, headR*0.24, 0, 0, Math.PI*2); ctx.fillStyle='#1a1208'; ctx.fill();
  }
  if(annoyed && !closedEyes){ ctx.strokeStyle='rgba(0,0,0,0.4)'; ctx.lineWidth=2; ctx.beginPath(); ctx.moveTo(eyeX-6,eyeY2-8); ctx.lineTo(eyeX+6,eyeY2-4); ctx.stroke(); }

  ctx.fillStyle = 'rgba(0,0,0,0.35)'; ctx.beginPath(); ctx.arc(headX+headR*0.85, headY-2, 1.4, 0, Math.PI*2); ctx.fill();

  const mouthX = headX+headR*0.6; const mouthY = headY+headR*0.55;
  ctx.strokeStyle='#2a2a1a'; ctx.lineWidth=1.6; ctx.lineCap='round'; ctx.beginPath();
  if(asleep){ ctx.moveTo(headX+3,mouthY+1); ctx.lineTo(headX+11,mouthY+1); } else if(annoyed){ ctx.moveTo(headX+2,mouthY+3); ctx.quadraticCurveTo(headX+8,mouthY-2,headX+14,mouthY+1); } else { ctx.moveTo(headX+2,mouthY); ctx.quadraticCurveTo(headX+8,mouthY+4,headX+14,mouthY); } ctx.stroke();
  if(!asleep && !annoyed && Math.sin(bounceTime*2.6) > 0.65){ ctx.strokeStyle='#c73c5a'; ctx.lineWidth=1.4; ctx.beginPath(); ctx.moveTo(headX+headR*1.05, headY+4); ctx.lineTo(headX+headR*1.45, headY+4); ctx.lineTo(headX+headR*1.65, headY); ctx.moveTo(headX+headR*1.45, headY+4); ctx.lineTo(headX+headR*1.65, headY+8); ctx.stroke(); }

  drawPrestigeHalo(ctx, headY-headR-10, headR*0.8, 5, opts.prestige || 0);
  drawReptileActionOverlays(ctx, baseSpecies, opts, t, headX, headY, headR, mouthX, mouthY); ctx.restore();
}

function drawTurtleCreature(ctx, speciesKey, stage, opts={}){
  let baseSpecies = speciesKey; if(speciesKey === 'hybrid' && opts.hybridDNA) baseSpecies = opts.hybridDNA.base;
  const sp = SPECIES[baseSpecies] || SPECIES['turtle']; const colors = opts.colors || sp; const scale = STAGE_SCALE[stage]; const j = juvenile(stage);
  const asleep = opts.asleep; const sad = opts.sad; const action = opts.action; const yaw = opts.yaw || 0;
  const annoyed = sad || (action && action.type==='refuse') || (opts.prestige > 0 && !asleep);
  const t = computeSharedTransform(opts); const bounce = (asleep || action) ? 0 : Math.sin(bounceTime*1.2)*2;
  const ext = asleep ? 0.2 : 1;

  ctx.save(); ctx.translate(180+t.extraTX, 205+bounce+t.extraTY);
  if(opts.prestige > 0 && !asleep) ctx.translate(0, -Math.abs(Math.sin(bounceTime*2)) * 10 - (opts.prestige * 5));
  ctx.rotate(t.extraRotate); ctx.scale(scale*t.extraScaleX*t.pulseScale*Math.cos(yaw), scale*t.extraScaleY*t.pulseScale);

  drawPrestigeAura(ctx, 0, 100, opts.prestige || 0);

  [[-32,18],[32,18],[-30,48],[30,48]].forEach(([lx,ly])=>{
    ctx.save(); ctx.globalAlpha = 0.25+0.75*ext; ctx.translate(lx*ext, ly);
    ctx.beginPath(); ctx.ellipse(0,0,12,9,0,0,Math.PI*2); ctx.fillStyle=colors.pattern; ctx.fill();
    ctx.fillStyle=colors.ear; for(let c=-1;c<=1;c++){ ctx.beginPath(); ctx.arc(c*4, 7, 2, 0, Math.PI*2); ctx.fill(); }
    ctx.restore();
  });

  ctx.save(); ctx.globalAlpha = 0.25+0.75*ext;
  ctx.beginPath(); ctx.moveTo(0,52); ctx.lineTo(-6*ext,68); ctx.lineTo(6*ext,68); ctx.closePath(); ctx.fillStyle=colors.pattern; ctx.fill();
  ctx.restore();

  ctx.beginPath(); ctx.ellipse(0,28,48,38,0,0,Math.PI*2); ctx.fillStyle=colors.pattern; ctx.fill();
  ctx.beginPath(); ctx.ellipse(0,28,40,31,0,0,Math.PI*2); ctx.fillStyle=colors.body; ctx.fill();
  ctx.strokeStyle=colors.pattern; ctx.lineWidth=2;
  [[0,4],[-20,22],[20,22],[0,26],[-18,44],[18,44],[0,50]].forEach(([sx,sy])=>{
    ctx.save(); ctx.translate(sx,sy); ctx.beginPath();
    for(let i=0;i<6;i++){ const a=(i/6)*Math.PI*2; const px=Math.cos(a)*9, py=Math.sin(a)*7; if(i===0) ctx.moveTo(px,py); else ctx.lineTo(px,py); }
    ctx.closePath(); ctx.stroke(); ctx.restore();
  });

  ctx.save(); ctx.globalAlpha = 0.3+0.7*ext;
  drawTaperedPath(ctx, [ {x:38*ext, y:4, r:11}, {x:52*ext, y:-6, r:9} ], colors.body);

  const headCX = 60*ext, headCY = -10*ext, headR = 12*(1+j*0.3);
  ctx.beginPath(); ctx.ellipse(headCX, headCY, headR, headR*0.85, 0, 0, Math.PI*2); ctx.fillStyle=colors.body; ctx.fill();

  const closedEyes = asleep; const eyeCX = headCX+3, eyeCY = headCY-3;
  if(closedEyes){ ctx.strokeStyle='#2d4c2b'; ctx.lineWidth=2; ctx.beginPath(); ctx.moveTo(eyeCX-4,eyeCY); ctx.quadraticCurveTo(eyeCX,eyeCY+3,eyeCX+4,eyeCY); ctx.stroke(); }
  else { ctx.beginPath(); ctx.arc(eyeCX,eyeCY,4,0,Math.PI*2); ctx.fillStyle='#fff'; ctx.fill(); ctx.beginPath(); ctx.arc(eyeCX+(annoyed?0:0.8),eyeCY,2.2,0,Math.PI*2); ctx.fillStyle='#2d4c2b'; ctx.fill(); }
  if(annoyed && !closedEyes){ ctx.strokeStyle='rgba(0,0,0,0.4)'; ctx.lineWidth=2; ctx.beginPath(); ctx.moveTo(eyeCX-5,eyeCY-7); ctx.lineTo(eyeCX+4,eyeCY-4); ctx.stroke(); }

  ctx.strokeStyle='#2d4c2b'; ctx.lineWidth=2; ctx.lineCap='round'; ctx.beginPath();
  if(annoyed){ ctx.moveTo(headCX-4,headCY+8); ctx.quadraticCurveTo(headCX+2,headCY+4,headCX+8,headCY+7); } else { ctx.moveTo(headCX-4,headCY+6); ctx.quadraticCurveTo(headCX+2,headCY+10,headCX+8,headCY+6); }
  ctx.stroke();
  ctx.restore();

  drawPrestigeHalo(ctx, headCY-18, 14, 5, opts.prestige || 0);
  drawReptileActionOverlays(ctx, baseSpecies, opts, t, headCX, headCY, headR, headCX+9, headCY+7);
  ctx.restore();
}

function drawGeckoCreature(ctx, speciesKey, stage, opts={}){
  let baseSpecies = speciesKey; if(speciesKey === 'hybrid' && opts.hybridDNA) baseSpecies = opts.hybridDNA.base;
  const sp = SPECIES[baseSpecies] || SPECIES['gecko']; const colors = opts.colors || sp; const scale = STAGE_SCALE[stage]; const j = juvenile(stage);
  const asleep = opts.asleep; const sad = opts.sad; const action = opts.action; const yaw = opts.yaw || 0;
  const annoyed = sad || (action && action.type==='refuse') || (opts.prestige > 0 && !asleep);
  const t = computeSharedTransform(opts); const bounce = (asleep || action) ? 0 : Math.sin(bounceTime*2)*3;

  ctx.save(); ctx.translate(180+t.extraTX, 210+bounce+t.extraTY);
  if(opts.prestige > 0 && !asleep) ctx.translate(0, -Math.abs(Math.sin(bounceTime*2)) * 10 - (opts.prestige * 5));
  ctx.rotate(t.extraRotate); ctx.scale(scale*t.extraScaleX*t.pulseScale*Math.cos(yaw), scale*t.extraScaleY*t.pulseScale);

  if (opts.prestige > 0) {
    const auraR = 80 + Math.sin(bounceTime * 5) * 10; const grad = ctx.createRadialGradient(0, 10, auraR * 0.3, 0, 10, auraR);
    let a1 = 'rgba(255,200,0,0.7)', a2 = 'rgba(255,100,0,0)';
    if(opts.prestige === 2) { a1 = 'rgba(0,200,255,0.7)'; a2 = 'rgba(0,50,255,0)'; } else if(opts.prestige === 3) { a1 = 'rgba(200,0,255,0.7)'; a2 = 'rgba(100,0,255,0)'; } else if(opts.prestige >= 4) { a1 = `hsla(${(bounceTime*60)%360},100%,55%,0.8)`; a2 = 'rgba(0,0,0,0)'; } else { a1 = 'rgba(255,0,50,0.8)'; a2 = 'rgba(0,0,0,0)'; }
    grad.addColorStop(0, a1); grad.addColorStop(1, a2); ctx.fillStyle = grad; ctx.beginPath(); ctx.arc(0, 10, auraR, 0, Math.PI * 2); ctx.fill();
  }

  drawTaperedPath(ctx, [ { x:-40*(1-j*0.2), y:6, r:5 }, { x:-68*(1-j*0.2), y:-2, r:9 }, { x:-92*(1-j*0.2), y:4, r:6 } ], colors.body);
  [[-28,26,-1],[18,26,-1],[-28,-24,1],[18,-24,1]].forEach(([lx,ly])=>{ ctx.beginPath(); ctx.ellipse(lx, ly, 10, 7, 0, 0, Math.PI*2); ctx.fillStyle = colors.body; ctx.fill(); ctx.fillStyle = colors.pattern; for(let toe=-1; toe<=1; toe++){ ctx.beginPath(); ctx.arc(lx+toe*4, ly+ (ly>0?8:-8), 1.6, 0, Math.PI*2); ctx.fill(); } });
  ctx.beginPath(); ctx.ellipse(-4, 0, 46, 24, 0, 0, Math.PI*2); ctx.fillStyle = colors.body; ctx.fill();
  ctx.fillStyle = colors.pattern; [[-38,-6],[-20,10],[0,-10],[18,8],[-60,-1],[-78,3],[8,-2],[-30,3]].forEach(([sx,sy])=>{ ctx.beginPath(); ctx.ellipse(sx, sy, 3.4, 2.6, Math.random(), 0, Math.PI*2); ctx.fill(); });
  ctx.beginPath(); ctx.ellipse(-4, 10, 30, 10, 0, 0, Math.PI*2); ctx.fillStyle = 'rgba(255,255,255,0.35)'; ctx.fill();

  const headX = 44, headY = -2; const headR = 22*(1+j*0.3);
  ctx.beginPath(); ctx.ellipse(headX, headY, headR, headR*0.8, 0, 0, Math.PI*2); ctx.fillStyle = colors.body; ctx.fill();
  ctx.fillStyle = colors.pattern; [[headX-6,headY-6],[headX+6,headY+4]].forEach(([sx,sy])=>{ ctx.beginPath(); ctx.ellipse(sx,sy,2.6,2,0.4,0,Math.PI*2); ctx.fill(); });

  const closedEyes = asleep; const eyeY2 = headY-6, eyeDX2 = headR*0.42;
  if(closedEyes){
    ctx.strokeStyle='#3a2a1a'; ctx.lineWidth=2; ctx.lineCap='round';
    ctx.beginPath(); ctx.moveTo(headX+eyeDX2-7,eyeY2); ctx.quadraticCurveTo(headX+eyeDX2,eyeY2+5,headX+eyeDX2+7,eyeY2); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(headX-eyeDX2-7,eyeY2); ctx.quadraticCurveTo(headX-eyeDX2,eyeY2+5,headX-eyeDX2+7,eyeY2); ctx.stroke();
  } else {
    [-1,1].forEach(dir=>{
      ctx.beginPath(); ctx.arc(headX+dir*eyeDX2, eyeY2, headR*0.4, 0, Math.PI*2); ctx.fillStyle='#2a1f10'; ctx.fill();
      ctx.beginPath(); ctx.ellipse(headX+dir*eyeDX2, eyeY2, headR*0.36, headR*0.36, 0, 0, Math.PI*2); ctx.fillStyle='#e0a83a'; ctx.fill();
      ctx.beginPath(); ctx.ellipse(headX+dir*eyeDX2+(annoyed?0:0.5), eyeY2+(annoyed?2:0), headR*0.08, headR*0.32, 0, 0, Math.PI*2); ctx.fillStyle='#1a1208'; ctx.fill();
      ctx.beginPath(); ctx.arc(headX+dir*eyeDX2-headR*0.14, eyeY2-headR*0.14, headR*0.09, 0, Math.PI*2); ctx.fillStyle='rgba(255,255,255,0.85)'; ctx.fill();
    });
  }

  if(annoyed && !closedEyes){ ctx.strokeStyle='rgba(0,0,0,0.35)'; ctx.lineWidth=2; [-1,1].forEach(dir=>{ ctx.beginPath(); ctx.moveTo(headX+dir*eyeDX2-6, eyeY2-12); ctx.lineTo(headX+dir*eyeDX2+6, eyeY2-8); ctx.stroke(); }); }

  const mouthX = headX+18; const mouthY = headY+13;
  ctx.strokeStyle='#3a2a1a'; ctx.lineWidth=1.6; ctx.lineCap='round'; ctx.beginPath();
  if(asleep){ ctx.moveTo(mouthX-6,mouthY); ctx.lineTo(mouthX+4,mouthY); } else if(annoyed){ ctx.moveTo(mouthX-8,mouthY+3); ctx.quadraticCurveTo(mouthX,mouthY-3,mouthX+8,mouthY+1); } else { ctx.moveTo(mouthX-8,mouthY-1); ctx.quadraticCurveTo(mouthX,mouthY+4,mouthX+8,mouthY-1); } ctx.stroke();

  if (opts.prestige >= 3 && !asleep) { ctx.save(); const haloY = headY - headR - 10 + Math.sin(bounceTime * 2) * 5; ctx.strokeStyle = opts.prestige >= 4 ? `hsla(${(bounceTime*60)%360},100%,60%,0.85)` : 'rgba(255, 215, 0, 0.8)'; ctx.lineWidth = 4; ctx.beginPath(); ctx.ellipse(headX, haloY, headR * 0.8, 6, 0, 0, Math.PI * 2); ctx.stroke(); ctx.restore(); }
  drawReptileActionOverlays(ctx, baseSpecies, opts, t, headX, headY, headR, mouthX, mouthY); ctx.restore();
}

function drawSlimeCreature(ctx, speciesKey, stage, opts={}){
  let baseSpecies = speciesKey; if(speciesKey === 'hybrid' && opts.hybridDNA) baseSpecies = opts.hybridDNA.base;
  const sp = SPECIES[baseSpecies] || SPECIES['slime']; const colors = opts.colors || sp; const scale = STAGE_SCALE[stage]; const j = juvenile(stage);
  const asleep = opts.asleep; const sad = opts.sad; const action = opts.action; const yaw = opts.yaw || 0;
  const annoyed = sad || (action && action.type==='refuse') || (opts.prestige > 0 && !asleep);
  const t = computeSharedTransform(opts); const wobble = (asleep || action) ? 0 : Math.sin(bounceTime*2.4)*6;

  ctx.save(); ctx.translate(180+t.extraTX, 235+t.extraTY);
  if(opts.prestige > 0 && !asleep) ctx.translate(0, -Math.abs(Math.sin(bounceTime*2)) * 10 - (opts.prestige * 5));
  ctx.rotate(t.extraRotate); ctx.scale(scale*t.extraScaleX*t.pulseScale*Math.cos(yaw), scale*t.extraScaleY*t.pulseScale);

  if (opts.prestige > 0) {
    const auraR = 85 + Math.sin(bounceTime * 5) * 10; const grad = ctx.createRadialGradient(0, 0, auraR * 0.3, 0, 0, auraR);
    let a1 = 'rgba(255,200,0,0.7)', a2 = 'rgba(255,50,0,0)';
    if(opts.prestige === 2) { a1 = 'rgba(0,200,255,0.7)'; a2 = 'rgba(0,50,255,0)'; } else if(opts.prestige === 3) { a1 = 'rgba(200,0,255,0.7)'; a2 = 'rgba(100,0,255,0)'; } else if(opts.prestige >= 4) { a1 = `hsla(${(bounceTime*60)%360},100%,55%,0.8)`; a2 = 'rgba(0,0,0,0)'; }
    grad.addColorStop(0, a1); grad.addColorStop(1, a2); ctx.fillStyle = grad; ctx.beginPath(); ctx.arc(0, 0, auraR, 0, Math.PI * 2); ctx.fill();
  }

  const squish = asleep ? 0.85 : 1 + Math.sin(bounceTime*2.4)*0.05;
  const bodyR = 62;
  ctx.beginPath();
  ctx.moveTo(-bodyR, 10 + wobble*0.2);
  ctx.bezierCurveTo(-bodyR, -bodyR*squish, bodyR, -bodyR*squish, bodyR, 10 + wobble*0.2);
  ctx.quadraticCurveTo(bodyR*0.7, 34+wobble, 0, 30+wobble*0.6);
  ctx.quadraticCurveTo(-bodyR*0.7, 34+wobble, -bodyR, 10 + wobble*0.2);
  ctx.closePath();
  const grad2 = ctx.createLinearGradient(0,-bodyR,0,30);
  grad2.addColorStop(0, 'rgba(255,255,255,0.5)'); grad2.addColorStop(0.4, colors.body); grad2.addColorStop(1, colors.pattern);
  ctx.fillStyle = grad2; ctx.globalAlpha = 0.88; ctx.fill(); ctx.globalAlpha = 1;
  ctx.lineWidth = 3; ctx.strokeStyle = 'rgba(255,255,255,0.4)'; ctx.stroke();

  ctx.fillStyle = 'rgba(255,255,255,0.35)';
  [[-20,-10,6],[16,-24,4],[-6,4,5]].forEach(([bx,by,br])=>{ ctx.beginPath(); ctx.arc(bx,by,br,0,Math.PI*2); ctx.fill(); });

  const eyeY = -6, eyeDX = 18, eyeR = 8*(1+j*0.35); const closedEyes = asleep;
  if(closedEyes){
    ctx.strokeStyle='#1a3a2a'; ctx.lineWidth=3; ctx.lineCap='round';
    [-1,1].forEach(dir=>{ ctx.beginPath(); ctx.moveTo(dir*eyeDX-6,eyeY); ctx.quadraticCurveTo(dir*eyeDX,eyeY+5,dir*eyeDX+6,eyeY); ctx.stroke(); });
  } else {
    [-1,1].forEach(dir=>{
      ctx.beginPath(); ctx.arc(dir*eyeDX,eyeY,eyeR,0,Math.PI*2); ctx.fillStyle='#fff'; ctx.fill();
      ctx.beginPath(); ctx.arc(dir*eyeDX+(annoyed?0:1.5), eyeY+(annoyed?2:1), eyeR*0.55,0,Math.PI*2); ctx.fillStyle='#1a3a2a'; ctx.fill();
    });
  }
  if(annoyed && !closedEyes){ ctx.strokeStyle='rgba(0,0,0,0.35)'; ctx.lineWidth=2.5; [-1,1].forEach(dir=>{ ctx.beginPath(); ctx.moveTo(dir*eyeDX-8,eyeY-14); ctx.lineTo(dir*eyeDX+8,eyeY-9); ctx.stroke(); }); }

  ctx.strokeStyle='#1a3a2a'; ctx.lineWidth=2.5; ctx.lineCap='round'; ctx.beginPath();
  if(asleep){ ctx.moveTo(-5,10); ctx.lineTo(5,10); } else if(annoyed){ ctx.moveTo(-8,13); ctx.quadraticCurveTo(0,7,8,11); } else { ctx.moveTo(-8,9); ctx.quadraticCurveTo(0,17,8,9); }
  ctx.stroke();

  if (opts.prestige >= 3 && !asleep) { ctx.save(); const haloY = -bodyR - 14 + Math.sin(bounceTime * 2) * 5; ctx.strokeStyle = opts.prestige >= 4 ? `hsla(${(bounceTime*60)%360},100%,60%,0.85)` : 'rgba(255, 215, 0, 0.8)'; ctx.lineWidth = 4; ctx.beginPath(); ctx.ellipse(0, haloY, 40, 7, 0, 0, Math.PI * 2); ctx.stroke(); ctx.restore(); }

  drawReptileActionOverlays(ctx, baseSpecies, opts, t, 0, eyeY, 40, 0, 20);
  ctx.restore();
}

function juvenile(stage){ return { baby:1, child:0.55, teen:0.2, adult:0 }[stage] || 0; }
function drawPrestigeAura(ctx, cy, r, prestige){
  if(prestige <= 0) return;
  const auraR = r + Math.sin(bounceTime * 5) * 10; const grad = ctx.createRadialGradient(0, cy, auraR * 0.3, 0, cy, auraR);
  let a1 = 'rgba(255,200,0,0.7)', a2 = 'rgba(255,100,0,0)';
  if(prestige === 2) { a1 = 'rgba(0,200,255,0.7)'; a2 = 'rgba(0,50,255,0)'; }
  else if(prestige === 3) { a1 = 'rgba(200,0,255,0.7)'; a2 = 'rgba(100,0,255,0)'; }
  else if(prestige >= 4) { a1 = `hsla(${(bounceTime*60)%360},100%,55%,0.8)`; a2 = 'rgba(0,0,0,0)'; }
  grad.addColorStop(0, a1); grad.addColorStop(1, a2); ctx.fillStyle = grad; ctx.beginPath(); ctx.arc(0, cy, auraR, 0, Math.PI * 2); ctx.fill();
}
function drawPrestigeHalo(ctx, haloY, rx, ry, prestige){
  if(prestige < 3) return;
  ctx.save(); const y = haloY + Math.sin(bounceTime * 2) * 5;
  ctx.strokeStyle = prestige >= 4 ? `hsla(${(bounceTime*60)%360},100%,60%,0.85)` : 'rgba(255, 215, 0, 0.8)'; ctx.lineWidth = 4;
  ctx.beginPath(); ctx.ellipse(0, y, rx, ry, 0, 0, Math.PI * 2); ctx.stroke(); ctx.restore();
}

function drawAlienCreature(ctx, speciesKey, stage, opts={}){
  let baseSpecies = speciesKey; if(speciesKey === 'hybrid' && opts.hybridDNA) baseSpecies = opts.hybridDNA.base;
  const sp = SPECIES[baseSpecies] || SPECIES['alien']; const colors = opts.colors || sp; const scale = STAGE_SCALE[stage]; const j = juvenile(stage);
  const asleep = opts.asleep; const sad = opts.sad; const action = opts.action; const yaw = opts.yaw || 0;
  const annoyed = sad || (action && action.type==='refuse') || (opts.prestige > 0 && !asleep);
  const t = computeSharedTransform(opts); const bounce = (asleep || action) ? 0 : Math.sin(bounceTime*2)*4;
  const legShrink = 1 - j*0.35;

  ctx.save(); ctx.translate(180+t.extraTX, 210+bounce+t.extraTY);
  if(opts.prestige > 0 && !asleep) ctx.translate(0, -Math.abs(Math.sin(bounceTime*2)) * 10 - (opts.prestige * 5));
  ctx.rotate(t.extraRotate); ctx.scale(scale*t.extraScaleX*t.pulseScale*Math.cos(yaw), scale*t.extraScaleY*t.pulseScale);

  drawPrestigeAura(ctx, 20, 95, opts.prestige || 0);

  ctx.beginPath(); ctx.ellipse(0, 58, 20, 28, 0, 0, Math.PI*2); ctx.fillStyle = colors.body; ctx.fill();
  ctx.beginPath(); ctx.ellipse(0, 62, 12, 16, 0, 0, Math.PI*2); ctx.fillStyle = colors.pattern; ctx.globalAlpha = 0.3; ctx.fill(); ctx.globalAlpha = 1;

  [-1,1].forEach(dir=>{
    ctx.beginPath(); ctx.moveTo(dir*16, 42); ctx.quadraticCurveTo(dir*38, 42+13*legShrink, dir*30, 42+42*legShrink); ctx.lineWidth=7; ctx.strokeStyle=colors.body; ctx.lineCap='round'; ctx.stroke();
    ctx.beginPath(); ctx.moveTo(dir*13, 42+40*legShrink); ctx.lineTo(dir*18, 42+64*legShrink); ctx.lineWidth=6; ctx.strokeStyle=colors.body; ctx.lineCap='round'; ctx.stroke();
  });

  ctx.beginPath(); ctx.moveTo(-16,18); ctx.lineTo(16,18); ctx.lineTo(11,38); ctx.lineTo(-11,38); ctx.closePath(); ctx.fillStyle = colors.body; ctx.fill();

  ctx.save(); ctx.translate(0,18); ctx.scale(1+j*0.15,1+j*0.15); ctx.translate(0,-18);

  ctx.strokeStyle = colors.body; ctx.lineWidth = 3; ctx.lineCap = 'round';
  [-1,1].forEach(dir=>{ ctx.save(); ctx.translate(dir*14, -64); ctx.beginPath(); ctx.moveTo(0,0); ctx.quadraticCurveTo(dir*16,-12,dir*11,-28); ctx.stroke(); ctx.beginPath(); ctx.arc(dir*11,-28,5,0,Math.PI*2); ctx.fillStyle=colors.ear; ctx.fill(); ctx.restore(); });

  const closedEyes = asleep;
  ctx.beginPath();
  ctx.moveTo(0,-70); ctx.bezierCurveTo(36,-70, 44,-22, 28,14); ctx.bezierCurveTo(18,30, -18,30, -28,14); ctx.bezierCurveTo(-44,-22, -36,-70, 0,-70); ctx.closePath();
  ctx.fillStyle = colors.body; ctx.fill();

  const eyeY = -18, eyeDX = 16;
  if(closedEyes){
    ctx.strokeStyle='#0a1f0a'; ctx.lineWidth=3; ctx.lineCap='round';
    [-1,1].forEach(dir=>{ ctx.save(); ctx.translate(dir*eyeDX, eyeY); ctx.rotate(dir*0.3); ctx.beginPath(); ctx.moveTo(-11,0); ctx.quadraticCurveTo(0,6,11,0); ctx.stroke(); ctx.restore(); });
  } else {
    [-1,1].forEach(dir=>{
      ctx.save(); ctx.translate(dir*eyeDX, eyeY); ctx.rotate(dir*0.35);
      ctx.beginPath(); ctx.ellipse(0,0,14,8.5,0,0,Math.PI*2); ctx.fillStyle='#0a1f0a'; ctx.fill();
      ctx.beginPath(); ctx.ellipse(-3+(annoyed?0:0), -2,4,2.5,0,0,Math.PI*2); ctx.fillStyle='rgba(255,255,255,0.6)'; ctx.fill();
      ctx.restore();
    });
  }
  if(annoyed && !closedEyes){ ctx.strokeStyle='rgba(0,0,0,0.4)'; ctx.lineWidth=2.5; [-1,1].forEach(dir=>{ ctx.beginPath(); ctx.moveTo(dir*eyeDX-13, eyeY-14); ctx.lineTo(dir*eyeDX+9, eyeY-8); ctx.stroke(); }); }

  ctx.strokeStyle='#3a5a2a'; ctx.lineWidth=2; ctx.lineCap='round'; ctx.beginPath();
  if(asleep){ ctx.moveTo(-5,13); ctx.lineTo(5,13); } else if(annoyed){ ctx.moveTo(-6,16); ctx.quadraticCurveTo(0,10,6,14); } else { ctx.moveTo(-6,12); ctx.quadraticCurveTo(0,17,6,12); }
  ctx.stroke();
  ctx.restore();

  drawPrestigeHalo(ctx, -95, 30, 6, opts.prestige || 0);
  drawReptileActionOverlays(ctx, baseSpecies, opts, t, 0, eyeY, 40, 0, 14);
  ctx.restore();
}

function drawRobotCreature(ctx, speciesKey, stage, opts={}){
  let baseSpecies = speciesKey; if(speciesKey === 'hybrid' && opts.hybridDNA) baseSpecies = opts.hybridDNA.base;
  const sp = SPECIES[baseSpecies] || SPECIES['robot']; const colors = opts.colors || sp; const scale = STAGE_SCALE[stage]; const j = juvenile(stage);
  const asleep = opts.asleep; const sad = opts.sad; const action = opts.action; const yaw = opts.yaw || 0;
  const annoyed = sad || (action && action.type==='refuse') || (opts.prestige > 0 && !asleep);
  const t = computeSharedTransform(opts); const bounce = (asleep || action) ? 0 : Math.sin(bounceTime*1.6)*3;

  function roundRect(x,y,w,h,r){ ctx.beginPath(); ctx.moveTo(x+r,y); ctx.arcTo(x+w,y,x+w,y+h,r); ctx.arcTo(x+w,y+h,x,y+h,r); ctx.arcTo(x,y+h,x,y,r); ctx.arcTo(x,y,x+w,y,r); ctx.closePath(); }

  ctx.save(); ctx.translate(180+t.extraTX, 200+bounce+t.extraTY);
  if(opts.prestige > 0 && !asleep) ctx.translate(0, -Math.abs(Math.sin(bounceTime*2)) * 10 - (opts.prestige * 5));
  ctx.rotate(t.extraRotate); ctx.scale(scale*t.extraScaleX*t.pulseScale*Math.cos(yaw), scale*t.extraScaleY*t.pulseScale);

  drawPrestigeAura(ctx, 40, 95, opts.prestige || 0);

  const bw = 60*(1-j*0.18), bh = 54*(1-j*0.22);
  roundRect(-bw/2,30,bw,bh,10); ctx.fillStyle = colors.body; ctx.fill(); ctx.strokeStyle=colors.pattern; ctx.lineWidth=2; ctx.stroke();
  const chestOn = Math.sin(bounceTime*4) > 0.3;
  ctx.beginPath(); ctx.arc(0,30+bh*0.45,6,0,Math.PI*2); ctx.fillStyle = chestOn ? colors.ear : colors.pattern; if(chestOn){ ctx.shadowColor = colors.ear; ctx.shadowBlur = 10; } ctx.fill(); ctx.shadowBlur = 0;

  const armLen = 38*(1-j*0.3), legLen = 22*(1-j*0.35);
  [-1,1].forEach(dir=>{ roundRect(dir>0?bw/2:-bw/2-8, 38, 8, armLen, 4); ctx.fillStyle=colors.pattern; ctx.fill(); ctx.beginPath(); ctx.arc(dir*(bw/2+4), 38+armLen, 7, 0, Math.PI*2); ctx.fillStyle=colors.body; ctx.fill(); });
  [-1,1].forEach(dir=>{ roundRect(dir*18-6, 30+bh, 12, legLen, 3); ctx.fillStyle=colors.pattern; ctx.fill(); });

  roundRect(-9,4,18,28,3); ctx.fillStyle = colors.pattern; ctx.fill();

  ctx.strokeStyle=colors.pattern; ctx.lineWidth=3; ctx.lineCap='round';
  ctx.beginPath(); ctx.moveTo(0,-36); ctx.lineTo(0,-54); ctx.stroke();
  const tipOn = Math.sin(bounceTime*6) > 0.4;
  ctx.beginPath(); ctx.arc(0,-54,5,0,Math.PI*2); ctx.fillStyle = tipOn ? colors.ear : 'rgba(0,0,0,0.3)'; if(tipOn){ ctx.shadowColor = colors.ear; ctx.shadowBlur = 10; } ctx.fill(); ctx.shadowBlur = 0;

  ctx.save(); ctx.translate(0,-14); ctx.scale(1+j*0.2,1+j*0.2); ctx.translate(0,14);
  roundRect(-26,-36,52,44,8); ctx.fillStyle = colors.body; ctx.fill(); ctx.strokeStyle=colors.pattern; ctx.lineWidth=2; ctx.stroke();
  roundRect(-20,-30,40,32,5); ctx.fillStyle='#0d1520'; ctx.fill();

  const closedEyes = asleep; const eyeY = -14, eyeDX = 10;
  if(closedEyes){
    ctx.strokeStyle = colors.ear; ctx.lineWidth = 2; [-1,1].forEach(dir=>{ ctx.beginPath(); ctx.moveTo(dir*eyeDX-5,eyeY); ctx.lineTo(dir*eyeDX+5,eyeY); ctx.stroke(); });
  } else {
    [-1,1].forEach(dir=>{
      ctx.fillStyle='#1c2530'; ctx.fillRect(dir*eyeDX-6, eyeY-4, 12, 8);
      ctx.fillStyle = colors.ear; ctx.shadowColor = colors.ear; ctx.shadowBlur = 8;
      ctx.fillRect(dir*eyeDX-3+(annoyed?0:1), eyeY-2, 6, 4); ctx.shadowBlur = 0;
    });
  }
  ctx.strokeStyle = colors.ear; ctx.lineWidth = 1.5;
  for(let i=-1;i<=1;i++){ ctx.beginPath(); ctx.moveTo(-8, 0+i*3); ctx.lineTo(8, 0+i*3); ctx.stroke(); }
  ctx.restore();

  drawPrestigeHalo(ctx, -62, 22, 5, opts.prestige || 0);
  drawReptileActionOverlays(ctx, baseSpecies, opts, t, 0, eyeY, 26, 0, 0);
  ctx.restore();
}

function drawGolemCreature(ctx, speciesKey, stage, opts={}){
  let baseSpecies = speciesKey; if(speciesKey === 'hybrid' && opts.hybridDNA) baseSpecies = opts.hybridDNA.base;
  const sp = SPECIES[baseSpecies] || SPECIES['golem']; const colors = opts.colors || sp; const scale = STAGE_SCALE[stage]; const j = juvenile(stage);
  const asleep = opts.asleep; const sad = opts.sad; const action = opts.action; const yaw = opts.yaw || 0;
  const annoyed = sad || (action && action.type==='refuse') || (opts.prestige > 0 && !asleep);
  const t = computeSharedTransform(opts); const bounce = (asleep || action) ? 0 : Math.sin(bounceTime*1.4)*2;

  function crystal(cx,cy,w,h,rot,fill){ ctx.save(); ctx.translate(cx,cy); ctx.rotate(rot); ctx.beginPath(); ctx.moveTo(0,-h/2); ctx.lineTo(w/2,0); ctx.lineTo(0,h/2); ctx.lineTo(-w/2,0); ctx.closePath(); ctx.fillStyle=fill; ctx.fill(); ctx.strokeStyle='rgba(255,255,255,0.5)'; ctx.lineWidth=1; ctx.stroke(); ctx.restore(); }
  function hexBlock(cx,cy,w,h,rot,fill){ ctx.save(); ctx.translate(cx,cy); ctx.rotate(rot||0); ctx.beginPath(); ctx.moveTo(-w*0.3,-h/2); ctx.lineTo(w*0.3,-h/2); ctx.lineTo(w/2,0); ctx.lineTo(w*0.3,h/2); ctx.lineTo(-w*0.3,h/2); ctx.lineTo(-w/2,0); ctx.closePath(); ctx.fillStyle=fill; ctx.fill(); ctx.strokeStyle='rgba(255,255,255,0.5)'; ctx.lineWidth=1.5; ctx.stroke(); ctx.restore(); }

  ctx.save(); ctx.translate(180+t.extraTX, 200+bounce+t.extraTY);
  if(opts.prestige > 0 && !asleep) ctx.translate(0, -Math.abs(Math.sin(bounceTime*2)) * 10 - (opts.prestige * 5));
  ctx.rotate(t.extraRotate); ctx.scale(scale*t.extraScaleX*t.pulseScale*Math.cos(yaw), scale*t.extraScaleY*t.pulseScale);

  drawPrestigeAura(ctx, 55, 95, opts.prestige || 0);

  const torsoH = 60*(1-j*0.15);
  [-1,1].forEach(dir=>{ hexBlock(dir*22, 84+torsoH*0.3, 20, 32*(1-j*0.3), 0, colors.pattern); });
  hexBlock(0, 32+torsoH/2, 66*(1-j*0.1), torsoH, 0, colors.body);
  crystal(0, 25+torsoH/2, 30, 34*(1-j*0.15), 0, colors.pattern);
  [-1,1].forEach(dir=>{ hexBlock(dir*44, 32+torsoH/2, 20, 46*(1-j*0.2), dir*0.15, colors.body); });
  hexBlock(0, 20, 30, 22, 0, colors.body);
  ctx.save(); ctx.translate(0,-4); ctx.scale(1+j*0.22,1+j*0.22); ctx.translate(0,4);
  hexBlock(0, -4, 50, 44, 0, colors.body);
  crystal(0, -4, 24, 24, Math.PI/4, colors.pattern);

  const closedEyes = asleep; const eyeY = -4, eyeDX = 12;
  const glow = 0.6 + Math.sin(bounceTime*2)*0.3;
  if(closedEyes){
    ctx.strokeStyle='rgba(20,20,40,0.8)'; ctx.lineWidth=2; [-1,1].forEach(dir=>{ ctx.beginPath(); ctx.moveTo(dir*eyeDX-5,eyeY); ctx.lineTo(dir*eyeDX+5,eyeY); ctx.stroke(); });
  } else {
    [-1,1].forEach(dir=>{ ctx.save(); ctx.shadowColor = '#ffffff'; ctx.shadowBlur = 10*glow; ctx.beginPath(); ctx.arc(dir*eyeDX, eyeY, 6, 0, Math.PI*2); ctx.fillStyle = 'rgba(30,20,50,0.9)'; ctx.fill(); ctx.beginPath(); ctx.arc(dir*eyeDX, eyeY, 3.2, 0, Math.PI*2); ctx.fillStyle = '#ffffff'; ctx.globalAlpha = glow; ctx.fill(); ctx.restore(); });
  }
  if(annoyed && !closedEyes){ ctx.strokeStyle='rgba(0,0,0,0.4)'; ctx.lineWidth=2.5; [-1,1].forEach(dir=>{ ctx.beginPath(); ctx.moveTo(dir*eyeDX-9, eyeY-14); ctx.lineTo(dir*eyeDX+9, eyeY-9); ctx.stroke(); }); }

  ctx.strokeStyle='rgba(20,20,40,0.8)'; ctx.lineWidth=2.5; ctx.lineCap='round'; ctx.beginPath();
  if(asleep){ ctx.moveTo(-5,16); ctx.lineTo(5,16); } else if(annoyed){ ctx.moveTo(-7,19); ctx.quadraticCurveTo(0,13,7,17); } else { ctx.moveTo(-7,15); ctx.quadraticCurveTo(0,20,7,15); }
  ctx.stroke();

  const sp2 = Math.sin(bounceTime*2 + 1);
  if(sp2 > 0.7){ ctx.save(); ctx.globalAlpha = (sp2-0.7)/0.3; ctx.fillStyle='rgba(255,255,255,0.9)'; ctx.beginPath(); ctx.arc(-14,-14,2,0,Math.PI*2); ctx.fill(); ctx.restore(); }
  ctx.restore();

  drawPrestigeHalo(ctx, -34, 22, 5, opts.prestige || 0);
  drawReptileActionOverlays(ctx, baseSpecies, opts, t, 0, eyeY, 24, 0, 16);
  ctx.restore();
}

function drawKrakenCreature(ctx, speciesKey, stage, opts={}){
  let baseSpecies = speciesKey; if(speciesKey === 'hybrid' && opts.hybridDNA) baseSpecies = opts.hybridDNA.base;
  const sp = SPECIES[baseSpecies] || SPECIES['kraken']; const colors = opts.colors || sp; const scale = STAGE_SCALE[stage]; const j = juvenile(stage);
  const asleep = opts.asleep; const sad = opts.sad; const action = opts.action; const yaw = opts.yaw || 0;
  const annoyed = sad || (action && action.type==='refuse') || (opts.prestige > 0 && !asleep);
  const t = computeSharedTransform(opts); const bounce = (asleep || action) ? 0 : Math.sin(bounceTime*2)*5;
  const tentLen = 1 - j*0.35;

  ctx.save(); ctx.translate(180+t.extraTX, 175+bounce+t.extraTY);
  if(opts.prestige > 0 && !asleep) ctx.translate(0, -Math.abs(Math.sin(bounceTime*2)) * 10 - (opts.prestige * 5));
  ctx.rotate(t.extraRotate); ctx.scale(scale*t.extraScaleX*t.pulseScale*Math.cos(yaw), scale*t.extraScaleY*t.pulseScale);

  drawPrestigeAura(ctx, 30, 100, opts.prestige || 0);

  const tentCount = 5;
  for(let i=0;i<tentCount;i++){
    const spread = (i/(tentCount-1) - 0.5) * 2.4;
    const sway = asleep ? 0 : Math.sin(bounceTime*2.4 + i)*14;
    ctx.beginPath(); ctx.moveTo(spread*14, 40);
    ctx.bezierCurveTo(spread*30+sway, 40+35*tentLen, spread*14-sway, 40+60*tentLen, spread*40+sway*1.3, 40+92*tentLen);
    ctx.lineWidth = 11-i; ctx.strokeStyle = colors.body; ctx.lineCap='round'; ctx.stroke();
    ctx.beginPath(); ctx.arc(spread*40+sway*1.3, 40+92*tentLen, (11-i)*0.45, 0, Math.PI*2); ctx.fillStyle = colors.pattern; ctx.fill();
  }

  ctx.beginPath(); ctx.ellipse(0, 0, 52, 60, 0, 0, Math.PI*2); ctx.fillStyle = colors.body; ctx.fill();
  ctx.fillStyle = colors.pattern; ctx.globalAlpha = 0.5;
  [[-22,-16,7],[18,-4,6],[-8,20,6],[20,26,5]].forEach(([sx,sy,sr])=>{ ctx.beginPath(); ctx.arc(sx,sy,sr,0,Math.PI*2); ctx.fill(); });
  ctx.globalAlpha = 1;

  const closedEyes = asleep; const eyeY = -8, eyeDX = 19, eyeR = 11*(1+j*0.2);
  if(closedEyes){
    ctx.strokeStyle='#160a2a'; ctx.lineWidth=3; ctx.lineCap='round';
    [-1,1].forEach(dir=>{ ctx.beginPath(); ctx.moveTo(dir*eyeDX-9,eyeY); ctx.quadraticCurveTo(dir*eyeDX,eyeY+6,dir*eyeDX+9,eyeY); ctx.stroke(); });
  } else {
    [-1,1].forEach(dir=>{
      ctx.beginPath(); ctx.ellipse(dir*eyeDX, eyeY, eyeR, eyeR*1.3, 0, 0, Math.PI*2); ctx.fillStyle='#e8dcff'; ctx.fill();
      ctx.beginPath(); ctx.ellipse(dir*eyeDX+(annoyed?0:1.5), eyeY+(annoyed?2:1), 3, eyeR*1.1, 0, 0, Math.PI*2); ctx.fillStyle='#160a2a'; ctx.fill();
    });
  }
  if(annoyed && !closedEyes){ ctx.strokeStyle='rgba(0,0,0,0.4)'; ctx.lineWidth=2.5; [-1,1].forEach(dir=>{ ctx.beginPath(); ctx.moveTo(dir*eyeDX-12, eyeY-18); ctx.lineTo(dir*eyeDX+10, eyeY-12); ctx.stroke(); }); }

  ctx.strokeStyle='#160a2a'; ctx.lineWidth=2.5; ctx.lineCap='round'; ctx.beginPath();
  if(asleep){ ctx.moveTo(-6,26); ctx.lineTo(6,26); } else if(annoyed){ ctx.moveTo(-9,30); ctx.quadraticCurveTo(0,22,9,28); } else { ctx.moveTo(-9,24); ctx.quadraticCurveTo(0,34,9,24); }
  ctx.stroke();

  if(!asleep){
    const kb = (bounceTime*0.5) % 1;
    if(kb < 0.3){ const p = kb/0.3; ctx.save(); ctx.globalAlpha = (1-p)*0.5; ctx.fillStyle = 'rgba(200,200,255,0.7)'; ctx.beginPath(); ctx.arc(0, 40+p*20, 2+p*4, 0, Math.PI*2); ctx.fill(); ctx.restore(); }
  }

  drawPrestigeHalo(ctx, -66, 34, 7, opts.prestige || 0);
  drawReptileActionOverlays(ctx, baseSpecies, opts, t, 0, eyeY, 40, 0, 22);
  ctx.restore();
}

function drawYetiCreature(ctx, speciesKey, stage, opts={}){
  let baseSpecies = speciesKey; if(speciesKey === 'hybrid' && opts.hybridDNA) baseSpecies = opts.hybridDNA.base;
  const sp = SPECIES[baseSpecies] || SPECIES['yeti']; const colors = opts.colors || sp; const scale = STAGE_SCALE[stage]; const j = juvenile(stage);
  const asleep = opts.asleep; const sad = opts.sad; const action = opts.action; const yaw = opts.yaw || 0;
  const annoyed = sad || (action && action.type==='refuse') || (opts.prestige > 0 && !asleep);
  const t = computeSharedTransform(opts); const bounce = (asleep || action) ? 0 : Math.sin(bounceTime*1.6)*3;
  const limbShrink = 1 - j*0.3;

  ctx.save(); ctx.translate(180+t.extraTX, 195+bounce+t.extraTY);
  if(opts.prestige > 0 && !asleep) ctx.translate(0, -Math.abs(Math.sin(bounceTime*2)) * 10 - (opts.prestige * 5));
  ctx.rotate(t.extraRotate); ctx.scale(scale*t.extraScaleX*t.pulseScale*Math.cos(yaw), scale*t.extraScaleY*t.pulseScale);

  drawPrestigeAura(ctx, 50, 105, opts.prestige || 0);

  [-1,1].forEach(dir=>{ ctx.beginPath(); ctx.ellipse(dir*22, 90+18*limbShrink, 16, 20*limbShrink, 0, 0, Math.PI*2); ctx.fillStyle = colors.body; ctx.fill(); ctx.beginPath(); ctx.ellipse(dir*22, 90+32*limbShrink, 18, 10, 0, 0, Math.PI*2); ctx.fillStyle = '#fff'; ctx.fill(); });

  [-1,1].forEach(dir=>{
    ctx.beginPath(); ctx.moveTo(dir*36, 30); ctx.quadraticCurveTo(dir*62, 30+40*limbShrink, dir*46, 30+90*limbShrink); ctx.lineWidth=20; ctx.strokeStyle=colors.body; ctx.lineCap='round'; ctx.stroke();
    ctx.beginPath(); ctx.ellipse(dir*46, 30+92*limbShrink, 12, 9, 0, 0, Math.PI*2); ctx.fillStyle=colors.body; ctx.fill();
  });

  ctx.beginPath(); ctx.moveTo(-46,90); ctx.quadraticCurveTo(-52,20,-24,4); ctx.quadraticCurveTo(0,-6,24,4); ctx.quadraticCurveTo(52,20,46,90); ctx.quadraticCurveTo(0,104,-46,90); ctx.closePath();
  ctx.fillStyle = colors.body; ctx.fill();
  ctx.beginPath(); ctx.ellipse(0,60,26,32,0,0,Math.PI*2); ctx.fillStyle=colors.pattern; ctx.globalAlpha=0.35; ctx.fill(); ctx.globalAlpha=1;

  ctx.fillStyle = colors.ear;
  for(let i=0;i<7;i++){ const ang=(i/6)*Math.PI - Math.PI/2; const ex = Math.sin(ang)*48, ey=40+Math.cos(ang)*46; ctx.beginPath(); ctx.moveTo(ex,ey); ctx.lineTo(ex+6,ey-10); ctx.lineTo(ex-2,ey-4); ctx.closePath(); ctx.fill(); }

  ctx.save(); ctx.translate(0,-18); ctx.scale(1+j*0.22,1+j*0.22); ctx.translate(0,18);
  const headR = 30;
  ctx.beginPath(); ctx.arc(0,-18,headR,0,Math.PI*2); ctx.fillStyle=colors.body; ctx.fill();
  ctx.beginPath(); ctx.ellipse(0,-30,26,10,0,0,Math.PI*2); ctx.fillStyle=colors.body; ctx.fill();

  const closedEyes = asleep; const eyeY=-22, eyeDX=12;
  if(closedEyes){
    ctx.strokeStyle='#3a4a5a'; ctx.lineWidth=2.5; ctx.lineCap='round';
    [-1,1].forEach(dir=>{ ctx.beginPath(); ctx.moveTo(dir*eyeDX-6,eyeY); ctx.quadraticCurveTo(dir*eyeDX,eyeY+5,dir*eyeDX+6,eyeY); ctx.stroke(); });
  } else {
    [-1,1].forEach(dir=>{ ctx.beginPath(); ctx.arc(dir*eyeDX,eyeY,6,0,Math.PI*2); ctx.fillStyle='#1a2a3a'; ctx.fill();
      ctx.beginPath(); ctx.arc(dir*eyeDX+(annoyed?0:1), eyeY+(annoyed?1:0),2.2,0,Math.PI*2); ctx.fillStyle='rgba(255,255,255,0.8)'; ctx.fill(); });
  }
  ctx.strokeStyle='rgba(0,0,0,0.25)'; ctx.lineWidth=3; [-1,1].forEach(dir=>{ ctx.beginPath(); ctx.moveTo(dir*eyeDX-8,eyeY-9); ctx.lineTo(dir*eyeDX+6,eyeY-6); ctx.stroke(); });
  if(annoyed && !closedEyes){ ctx.strokeStyle='rgba(0,0,0,0.4)'; ctx.lineWidth=2.5; [-1,1].forEach(dir=>{ ctx.beginPath(); ctx.moveTo(dir*eyeDX-8,eyeY-12); ctx.lineTo(dir*eyeDX+6,eyeY-9); ctx.stroke(); }); }

  ctx.strokeStyle='#3a4a5a'; ctx.lineWidth=2.5; ctx.lineCap='round'; ctx.beginPath();
  if(asleep){ ctx.moveTo(-5,-2); ctx.lineTo(5,-2); } else if(annoyed){ ctx.moveTo(-7,1); ctx.quadraticCurveTo(0,-5,7,-1); } else { ctx.moveTo(-7,-4); ctx.quadraticCurveTo(0,3,7,-4); }
  ctx.stroke();
  ctx.restore();

  if(!asleep){
    const bp2 = (bounceTime*0.4) % 1;
    if(bp2 < 0.4){ const p = bp2/0.4; ctx.save(); ctx.globalAlpha = (1-p)*0.6; ctx.fillStyle = 'rgba(220,240,255,0.9)'; ctx.beginPath(); ctx.arc(14, -6-p*10, 2+p*5, 0, Math.PI*2); ctx.fill(); ctx.restore(); }
  }

  drawPrestigeHalo(ctx, -56, 26, 6, opts.prestige || 0);
  drawReptileActionOverlays(ctx, baseSpecies, opts, t, 0, eyeY, headR, 0, -4);
  ctx.restore();
}

function drawPhoenixCreature(ctx, speciesKey, stage, opts={}){
  let baseSpecies = speciesKey; if(speciesKey === 'hybrid' && opts.hybridDNA) baseSpecies = opts.hybridDNA.base;
  const sp = SPECIES[baseSpecies] || SPECIES['phoenix']; const colors = opts.colors || sp; const scale = STAGE_SCALE[stage]; const j = juvenile(stage);
  const asleep = opts.asleep; const sad = opts.sad; const action = opts.action; const yaw = opts.yaw || 0;
  const annoyed = sad || (action && action.type==='refuse') || (opts.prestige > 0 && !asleep);
  const t = computeSharedTransform(opts); const bounce = (asleep || action) ? 0 : Math.sin(bounceTime*1.8)*6;
  const legShrink = 1 - j*0.35;

  ctx.save(); ctx.translate(180+t.extraTX, 190+bounce+t.extraTY);
  if(opts.prestige > 0 && !asleep) ctx.translate(0, -Math.abs(Math.sin(bounceTime*2)) * 10 - (opts.prestige * 5));
  ctx.rotate(t.extraRotate); ctx.scale(scale*t.extraScaleX*t.pulseScale*Math.cos(yaw), scale*t.extraScaleY*t.pulseScale);

  drawPrestigeAura(ctx, -10, 130, opts.prestige || 0);
  const emberGlow = ctx.createRadialGradient(0,-10,20,0,-10,140);
  emberGlow.addColorStop(0, asleep ? 'rgba(255,140,40,0.12)' : 'rgba(255,140,40,0.22)'); emberGlow.addColorStop(1,'rgba(255,80,20,0)');
  ctx.fillStyle = emberGlow; ctx.beginPath(); ctx.arc(0,-10,140,0,Math.PI*2); ctx.fill();

  function flameGrad(x0,y0,x1,y1){ const g = ctx.createLinearGradient(x0,y0,x1,y1); g.addColorStop(0,'#ffd23f'); g.addColorStop(0.45,colors.body); g.addColorStop(1,'rgba(200,30,30,0)'); return g; }

  const tailSway = asleep ? 0 : Math.sin(bounceTime*1.4)*0.12;
  for(let i=-2;i<=2;i++){
    const spread = i*0.22 + tailSway*(1-Math.abs(i)*0.2);
    const len = 72 - Math.abs(i)*8;
    ctx.save(); ctx.rotate(spread);
    ctx.beginPath(); ctx.moveTo(-4,40); ctx.quadraticCurveTo(6,40+len*0.5, i*6,40+len);
    ctx.quadraticCurveTo(-2,40+len*0.6,4,40); ctx.closePath();
    ctx.fillStyle = flameGrad(0,45,0,40+len); ctx.fill();
    ctx.restore();
  }

  const wingFlap = asleep ? 0.05 : 0.18+Math.sin(bounceTime*2.6)*0.14;
  [-1,1].forEach(dir=>{
    ctx.save(); ctx.translate(dir*16,-2); ctx.rotate(dir*(0.35+wingFlap));
    [0,1,2].forEach(layer=>{
      const l = 70 - layer*14, w = 34 - layer*6;
      ctx.beginPath(); ctx.moveTo(0,0);
      ctx.quadraticCurveTo(dir*l*0.6,-w*0.3-layer*4,dir*l,6+layer*10);
      ctx.quadraticCurveTo(dir*l*0.5,w*0.4+layer*8,dir*8,10+layer*6);
      ctx.closePath();
      ctx.fillStyle = flameGrad(0,0,dir*l,10); ctx.globalAlpha = 1-layer*0.18; ctx.fill(); ctx.globalAlpha=1;
    });
    ctx.restore();
  });

  [-1,1].forEach(dir=>{
    ctx.beginPath(); ctx.moveTo(dir*7,58); ctx.lineTo(dir*7,58+26*legShrink); ctx.lineWidth=4; ctx.strokeStyle=colors.ear; ctx.lineCap='round'; ctx.stroke();
    for(let c=-1;c<=1;c++){ ctx.beginPath(); ctx.moveTo(dir*7,58+26*legShrink); ctx.lineTo(dir*7+c*6,58+34*legShrink); ctx.lineWidth=2.5; ctx.strokeStyle=colors.ear; ctx.lineCap='round'; ctx.stroke(); }
  });

  ctx.beginPath(); ctx.moveTo(0,-28); ctx.bezierCurveTo(26,-20,30,20,16,52); ctx.quadraticCurveTo(0,64,-16,52); ctx.bezierCurveTo(-30,20,-26,-20,0,-28); ctx.closePath();
  const bodyGrad = ctx.createLinearGradient(0,-28,0,60); bodyGrad.addColorStop(0,'#ffd23f'); bodyGrad.addColorStop(0.5,colors.body); bodyGrad.addColorStop(1,colors.pattern);
  ctx.fillStyle = bodyGrad; ctx.fill();
  ctx.strokeStyle='rgba(255,255,255,0.5)'; ctx.lineWidth=1.5;
  for(let r=0;r<3;r++){ ctx.beginPath(); ctx.arc(0,10+r*14,20-r*4,0.3*Math.PI,0.7*Math.PI); ctx.stroke(); }

  drawTaperedPath(ctx, [ {x:2,y:-26,r:12}, {x:6,y:-36,r:9}, {x:10,y:-46,r:7} ], colors.body);

  const headCX = 13, headCY = -56, headR = 16*(1+j*0.25);
  ctx.fillStyle = colors.ear;
  [0,1,2,3].forEach(i=>{
    const a = -0.3 - i*0.35;
    ctx.save(); ctx.translate(headCX-4,headCY-6); ctx.rotate(a);
    ctx.beginPath(); ctx.moveTo(0,0); ctx.quadraticCurveTo(-6,-14-i*4,3-i*2,-30-i*5); ctx.quadraticCurveTo(5,-14-i*3,8,0); ctx.closePath();
    const cg = ctx.createLinearGradient(0,0,0,-30-i*5); cg.addColorStop(0,colors.ear); cg.addColorStop(1,'rgba(255,80,40,0.15)');
    ctx.fillStyle = cg; ctx.fill(); ctx.restore();
  });

  ctx.beginPath(); ctx.arc(headCX,headCY,headR,0,Math.PI*2); ctx.fillStyle = colors.body; ctx.fill();
  ctx.beginPath(); ctx.moveTo(headCX+headR-2,headCY-2); ctx.quadraticCurveTo(headCX+headR+14,headCY,headCX+headR+2,headCY+5); ctx.quadraticCurveTo(headCX+headR+8,headCY+2,headCX+headR-4,headCY+4); ctx.closePath();
  ctx.fillStyle = '#ffd23f'; ctx.fill(); ctx.strokeStyle='rgba(180,100,0,0.5)'; ctx.lineWidth=1; ctx.stroke();

  const closedEyes = asleep; const eyeCX = headCX+3, eyeCY = headCY-3;
  if(closedEyes){
    ctx.strokeStyle='#7a2010'; ctx.lineWidth=2; ctx.lineCap='round';
    ctx.beginPath(); ctx.moveTo(eyeCX-4,eyeCY); ctx.quadraticCurveTo(eyeCX,eyeCY+4,eyeCX+4,eyeCY); ctx.stroke();
  } else {
    ctx.beginPath(); ctx.ellipse(eyeCX,eyeCY,5,6,0,0,Math.PI*2); ctx.fillStyle='#ffd23f'; ctx.fill();
    ctx.beginPath(); ctx.ellipse(eyeCX+(annoyed?0:0.6),eyeCY+(annoyed?0.6:0),1.6,4.2,0,0,Math.PI*2); ctx.fillStyle='#2a0a05'; ctx.fill();
  }
  if(annoyed && !closedEyes){ ctx.strokeStyle='rgba(0,0,0,0.4)'; ctx.lineWidth=2; ctx.beginPath(); ctx.moveTo(eyeCX-6,eyeCY-8); ctx.lineTo(eyeCX+5,eyeCY-5); ctx.stroke(); }

  if(!asleep){
    for(let i=0;i<4;i++){
      const ph = ((bounceTime*0.4)+i*0.27) % 1; const ex = -20+i*14 + Math.sin(bounceTime*2+i)*8; const ey = 30 - ph*140;
      ctx.save(); ctx.globalAlpha = (1-ph)*0.7; ctx.fillStyle = i%2? '#ffd23f' : colors.body; ctx.beginPath(); ctx.arc(ex,ey,2.5-ph*1.5,0,Math.PI*2); ctx.fill(); ctx.restore();
    }
  }

  drawPrestigeHalo(ctx, headCY-30, 20, 5, opts.prestige || 0);
  drawReptileActionOverlays(ctx, baseSpecies, opts, t, headCX, headCY, headR, headCX+10, headCY+8);
  ctx.restore();
}

function drawDragonCreature(ctx, speciesKey, stage, opts={}){
  let baseSpecies = speciesKey; if(speciesKey === 'hybrid' && opts.hybridDNA) baseSpecies = opts.hybridDNA.base;
  const sp = SPECIES[baseSpecies] || SPECIES['dragon']; const colors = opts.colors || sp; const scale = STAGE_SCALE[stage]; const j = juvenile(stage);
  const asleep = opts.asleep; const sad = opts.sad; const action = opts.action; const yaw = opts.yaw || 0;
  const annoyed = sad || (action && action.type==='refuse') || (opts.prestige > 0 && !asleep);
  const t = computeSharedTransform(opts); const bounce = (asleep || action) ? 0 : Math.sin(bounceTime*1.6)*3;
  const legShrink = 1 - j*0.3;

  ctx.save(); ctx.translate(180+t.extraTX, 200+bounce+t.extraTY);
  if(opts.prestige > 0 && !asleep) ctx.translate(0, -Math.abs(Math.sin(bounceTime*2)) * 10 - (opts.prestige * 5));
  ctx.rotate(t.extraRotate); ctx.scale(scale*t.extraScaleX*t.pulseScale*Math.cos(yaw), scale*t.extraScaleY*t.pulseScale);

  drawPrestigeAura(ctx, 20, 105, opts.prestige || 0);

  const tailSway = asleep ? 0 : Math.sin(bounceTime*1.3)*8;
  ctx.beginPath(); ctx.moveTo(-30,36); ctx.quadraticCurveTo(-66,50+tailSway,-84,26+tailSway);
  ctx.lineWidth=13; ctx.strokeStyle=colors.body; ctx.lineCap='round'; ctx.stroke();
  ctx.save(); ctx.translate(-84,26+tailSway); ctx.rotate(-0.3);
  ctx.beginPath(); ctx.moveTo(0,-9); ctx.lineTo(13,0); ctx.lineTo(0,9); ctx.lineTo(4,0); ctx.closePath(); ctx.fillStyle=colors.pattern; ctx.fill();
  ctx.restore();

  [[-22,40],[18,44]].forEach(([lx,ly])=>{
    [-1,1].forEach(dir=>{ ctx.save(); ctx.translate(lx+dir*5, ly); ctx.beginPath(); ctx.ellipse(0,10*legShrink,9,18*legShrink,0,0,Math.PI*2); ctx.fillStyle=colors.body; ctx.fill();
      ctx.beginPath(); ctx.ellipse(0,24*legShrink,10,7,0,0,Math.PI*2); ctx.fillStyle=colors.pattern; ctx.fill(); ctx.restore(); });
  });

  const wingFlap = asleep ? 0.05 : 0.1+Math.sin(bounceTime*2)*0.08;
  [-1,1].forEach(dir=>{ ctx.save(); ctx.translate(dir*10,-2); ctx.rotate(dir*(0.55+wingFlap));
    ctx.beginPath(); ctx.moveTo(0,0); ctx.quadraticCurveTo(dir*44,-28,dir*52,10); ctx.quadraticCurveTo(dir*26,4,dir*10,18); ctx.quadraticCurveTo(dir*18,6,0,0); ctx.closePath();
    ctx.fillStyle='rgba(127,216,160,0.6)'; ctx.fill(); ctx.strokeStyle=colors.pattern; ctx.lineWidth=1.5; ctx.stroke();
    ctx.restore(); });

  ctx.beginPath(); ctx.ellipse(-6,20,36,24,0,0,Math.PI*2); ctx.fillStyle=colors.body; ctx.fill();
  ctx.fillStyle=colors.pattern; ctx.globalAlpha=0.5;
  [[-22,10],[-4,4],[14,12],[-12,24],[6,24]].forEach(([sx,sy])=>{ ctx.save(); ctx.translate(sx,sy); ctx.rotate(0.3); ctx.beginPath(); ctx.moveTo(0,-3); ctx.lineTo(3,0); ctx.lineTo(0,3); ctx.lineTo(-3,0); ctx.closePath(); ctx.fill(); ctx.restore(); });
  ctx.globalAlpha=1;

  ctx.fillStyle=colors.pattern;
  [-16,-4,8,20].forEach((sx,i)=>{ ctx.beginPath(); ctx.moveTo(sx-5,0); ctx.lineTo(sx,-12-(i%2)*3); ctx.lineTo(sx+5,0); ctx.closePath(); ctx.fill(); });

  drawTaperedPath(ctx, [ {x:22,y:0,r:12}, {x:32,y:-14,r:9}, {x:40,y:-28,r:7} ], colors.body);

  ctx.save(); ctx.translate(40,-28); ctx.scale(1+j*0.25,1+j*0.25); ctx.translate(-40,28);
  const headCX=46, headCY=-38, headR=15;
  ctx.beginPath(); ctx.ellipse(headCX,headCY,headR,headR*0.85,0,0,Math.PI*2); ctx.fillStyle=colors.body; ctx.fill();
  ctx.beginPath(); ctx.ellipse(headCX+13,headCY+4,9,6,0,0,Math.PI*2); ctx.fillStyle=colors.body; ctx.fill();

  ctx.fillStyle=colors.pattern;
  [-1,1].forEach(dir=>{ ctx.beginPath(); ctx.moveTo(headCX-2,headCY-11+dir*4); ctx.lineTo(headCX-13,headCY-22+dir*6); ctx.lineTo(headCX-5,headCY-9+dir*4); ctx.closePath(); ctx.fill(); });

  const closedEyes = asleep; const eyeCX=headCX+4, eyeCY=headCY-4;
  if(closedEyes){ ctx.strokeStyle='#2a1a10'; ctx.lineWidth=2; ctx.beginPath(); ctx.moveTo(eyeCX-4,eyeCY); ctx.quadraticCurveTo(eyeCX,eyeCY+3,eyeCX+4,eyeCY); ctx.stroke(); }
  else { ctx.beginPath(); ctx.ellipse(eyeCX,eyeCY,4,3,0,0,Math.PI*2); ctx.fillStyle='#ffe066'; ctx.fill();
    ctx.beginPath(); ctx.ellipse(eyeCX+(annoyed?0:0.6),eyeCY,1,3,0,0,Math.PI*2); ctx.fillStyle='#2a0a05'; ctx.fill(); }
  if(annoyed && !closedEyes){ ctx.strokeStyle='rgba(0,0,0,0.4)'; ctx.lineWidth=2; ctx.beginPath(); ctx.moveTo(eyeCX-6,eyeCY-6); ctx.lineTo(eyeCX+4,eyeCY-4); ctx.stroke(); }

  if(!asleep){
    const ph=(bounceTime*0.5)%1;
    if(ph<0.4){ const p=ph/0.4; ctx.save(); ctx.globalAlpha=(1-p)*0.5; ctx.fillStyle='rgba(180,180,180,0.7)'; ctx.beginPath(); ctx.arc(headCX+20,headCY+6-p*10,2+p*4,0,Math.PI*2); ctx.fill(); ctx.restore(); }
  }
  ctx.restore();

  drawPrestigeHalo(ctx, headCY-22, 16, 5, opts.prestige || 0);
  drawReptileActionOverlays(ctx, baseSpecies, opts, t, headCX, headCY, headR, headCX+13, headCY+8);
  ctx.restore();
}

function drawPandaCreature(ctx, speciesKey, stage, opts={}){
  let baseSpecies = speciesKey; if(speciesKey === 'hybrid' && opts.hybridDNA) baseSpecies = opts.hybridDNA.base;
  const sp = SPECIES[baseSpecies] || SPECIES['panda']; const colors = opts.colors || sp; const scale = STAGE_SCALE[stage]; const j = juvenile(stage);
  const asleep = opts.asleep; const sad = opts.sad; const action = opts.action; const yaw = opts.yaw || 0;
  const annoyed = sad || (action && action.type==='refuse') || (opts.prestige > 0 && !asleep);
  const t = computeSharedTransform(opts); const bounce = (asleep || action) ? 0 : Math.sin(bounceTime*1.6)*3;
  const bodyShrink = 1 - j*0.2;

  ctx.save(); ctx.translate(180+t.extraTX, 210+bounce+t.extraTY);
  if(opts.prestige > 0 && !asleep) ctx.translate(0, -Math.abs(Math.sin(bounceTime*2)) * 10 - (opts.prestige * 5));
  ctx.rotate(t.extraRotate); ctx.scale(scale*t.extraScaleX*t.pulseScale*Math.cos(yaw), scale*t.extraScaleY*t.pulseScale);

  drawPrestigeAura(ctx, 20, 105, opts.prestige || 0);

  [-1,1].forEach(dir=>{ ctx.beginPath(); ctx.ellipse(dir*30,50+14*bodyShrink,16,20*bodyShrink,dir*0.15,0,Math.PI*2); ctx.fillStyle=colors.ear; ctx.fill(); });
  ctx.beginPath(); ctx.ellipse(0,36,44*bodyShrink,38*bodyShrink,0,0,Math.PI*2); ctx.fillStyle=colors.body; ctx.fill();
  [-1,1].forEach(dir=>{ ctx.beginPath(); ctx.ellipse(dir*38*bodyShrink,24,13,24*bodyShrink,dir*0.25,0,Math.PI*2); ctx.fillStyle=colors.ear; ctx.fill(); });

  if(!asleep){
    ctx.save(); ctx.translate(18,14); ctx.rotate(0.5+Math.sin(bounceTime*1.5)*0.05);
    ctx.beginPath(); ctx.moveTo(0,0); ctx.lineTo(0,-34); ctx.lineWidth=4; ctx.strokeStyle='#8fbf6a'; ctx.lineCap='round'; ctx.stroke();
    ctx.fillStyle='#6fa84a'; [-10,-20,-30].forEach(y=>{ ctx.beginPath(); ctx.ellipse(-4,y,7,3,0.3,0,Math.PI*2); ctx.fill(); });
    ctx.restore();
  }

  ctx.save(); ctx.translate(0,-22); ctx.scale(1+j*0.2,1+j*0.2); ctx.translate(0,22);
  const headR=30;
  ctx.beginPath(); ctx.arc(0,-22,headR,0,Math.PI*2); ctx.fillStyle=colors.body; ctx.fill();
  [-1,1].forEach(dir=>{ ctx.beginPath(); ctx.arc(dir*22,-46,12,0,Math.PI*2); ctx.fillStyle=colors.ear; ctx.fill(); });

  const closedEyes = asleep;
  ctx.fillStyle=colors.pattern;
  [-1,1].forEach(dir=>{ ctx.save(); ctx.translate(dir*13,-24); ctx.rotate(dir*0.15); ctx.beginPath(); ctx.ellipse(0,0,9,12,0,0,Math.PI*2); ctx.fill(); ctx.restore(); });

  [-1,1].forEach(dir=>{
    if(closedEyes){ ctx.strokeStyle='#fff'; ctx.lineWidth=2; ctx.beginPath(); ctx.moveTo(dir*13-4,-24); ctx.quadraticCurveTo(dir*13,-20,dir*13+4,-24); ctx.stroke(); }
    else { ctx.beginPath(); ctx.arc(dir*13,-24,5,0,Math.PI*2); ctx.fillStyle='#fff'; ctx.fill();
      ctx.beginPath(); ctx.arc(dir*13+(annoyed?0:1),-23,2.6,0,Math.PI*2); ctx.fillStyle='#1a1a1a'; ctx.fill(); }
  });
  if(annoyed && !closedEyes){ ctx.strokeStyle='rgba(0,0,0,0.4)'; ctx.lineWidth=2; [-1,1].forEach(dir=>{ ctx.beginPath(); ctx.moveTo(dir*13-6,-32); ctx.lineTo(dir*13+5,-29); ctx.stroke(); }); }

  ctx.fillStyle='#2a2a2a'; ctx.beginPath(); ctx.ellipse(0,-10,4,3,0,0,Math.PI*2); ctx.fill();
  ctx.strokeStyle='#2a2a2a'; ctx.lineWidth=2; ctx.lineCap='round'; ctx.beginPath();
  if(asleep){ ctx.moveTo(-5,-6); ctx.lineTo(5,-6); } else if(annoyed){ ctx.moveTo(-7,-3); ctx.quadraticCurveTo(0,-8,7,-4); } else { ctx.moveTo(-7,-7); ctx.quadraticCurveTo(0,-1,7,-7); }
  ctx.stroke();
  ctx.restore();

  drawPrestigeHalo(ctx, -60, 24, 6, opts.prestige || 0);
  drawReptileActionOverlays(ctx, baseSpecies, opts, t, 0, -24, headR, 0, -8);
  ctx.restore();
}

function drawUnicornCreature(ctx, speciesKey, stage, opts={}){
  let baseSpecies = speciesKey; if(speciesKey === 'hybrid' && opts.hybridDNA) baseSpecies = opts.hybridDNA.base;
  const sp = SPECIES[baseSpecies] || SPECIES['unicorn']; const colors = opts.colors || sp; const scale = STAGE_SCALE[stage]; const j = juvenile(stage);
  const asleep = opts.asleep; const sad = opts.sad; const action = opts.action; const yaw = opts.yaw || 0;
  const annoyed = sad || (action && action.type==='refuse') || (opts.prestige > 0 && !asleep);
  const t = computeSharedTransform(opts); const bounce = (asleep || action) ? 0 : Math.sin(bounceTime*1.6)*3;
  const legShrink = 1 - j*0.3;

  ctx.save(); ctx.translate(180+t.extraTX, 195+bounce+t.extraTY);
  if(opts.prestige > 0 && !asleep) ctx.translate(0, -Math.abs(Math.sin(bounceTime*2)) * 10 - (opts.prestige * 5));
  ctx.rotate(t.extraRotate); ctx.scale(scale*t.extraScaleX*t.pulseScale*Math.cos(yaw), scale*t.extraScaleY*t.pulseScale);

  drawPrestigeAura(ctx, 30, 105, opts.prestige || 0);

  const tailSway = asleep ? 0 : Math.sin(bounceTime*1.8)*10;
  ctx.strokeStyle = colors.pattern; ctx.lineCap='round';
  [0,1,2].forEach(i=>{ ctx.lineWidth = 6-i; ctx.beginPath(); ctx.moveTo(-32,30); ctx.quadraticCurveTo(-50-i*4, 50+tailSway*0.5, -46+i*4-tailSway*0.3, 78+i*8); ctx.stroke(); });

  [[-16,54],[14,58]].forEach(([lx])=>{
    [-1,1].forEach(dir=>{ ctx.save(); ctx.translate(lx+dir*6,30); ctx.beginPath(); ctx.moveTo(-4,0); ctx.lineTo(-3,32*legShrink); ctx.lineTo(3,32*legShrink); ctx.lineTo(4,0); ctx.closePath(); ctx.fillStyle=colors.body; ctx.fill();
      ctx.beginPath(); ctx.ellipse(0,34*legShrink,5,3,0,0,Math.PI*2); ctx.fillStyle='#3a2a20'; ctx.fill(); ctx.restore(); });
  });

  ctx.beginPath(); ctx.ellipse(-10,30,34,20,0,0,Math.PI*2); ctx.fillStyle=colors.body; ctx.fill();

  drawTaperedPath(ctx, [ {x:14,y:14,r:15}, {x:24,y:-6,r:12}, {x:30,y:-28,r:9} ], colors.body);
  ctx.strokeStyle = colors.pattern; ctx.lineCap='round';
  [0,1,2,3].forEach(i=>{ ctx.lineWidth=4; ctx.beginPath(); ctx.moveTo(24-i*2,-24+i*8); ctx.quadraticCurveTo(10-i*3,-16+i*9,6-i*4,-4+i*10); ctx.stroke(); });

  ctx.save(); ctx.translate(30,-28); ctx.scale(1+j*0.3,1+j*0.3); ctx.translate(-30,28);
  const headCX=34, headCY=-40, headR=13;
  ctx.beginPath(); ctx.ellipse(headCX,headCY,headR,headR*0.85,0,0,Math.PI*2); ctx.fillStyle=colors.body; ctx.fill();
  ctx.beginPath(); ctx.ellipse(headCX+11,headCY+5,7,5,0,0,Math.PI*2); ctx.fillStyle='#f1f2f6'; ctx.fill();

  ctx.save(); ctx.translate(headCX-2,headCY-13); ctx.rotate(-0.3);
  ctx.beginPath(); ctx.moveTo(-4,0); ctx.lineTo(0,-26); ctx.lineTo(4,0); ctx.closePath();
  const hg = ctx.createLinearGradient(0,0,0,-26); hg.addColorStop(0,colors.pattern); hg.addColorStop(1,'#fff8d6');
  ctx.fillStyle=hg; ctx.fill();
  ctx.strokeStyle='rgba(255,255,255,0.6)'; ctx.lineWidth=1; [0.3,0.55,0.8].forEach(pp=>{ ctx.beginPath(); ctx.moveTo(-3+3*pp,-1-24*pp); ctx.lineTo(3-3*pp,-3-24*pp); ctx.stroke(); });
  ctx.restore();
  if(!asleep){ const tw=Math.sin(bounceTime*3); if(tw>0.55){ ctx.save(); ctx.globalAlpha=tw; ctx.fillStyle='#fff'; ctx.beginPath(); ctx.arc(headCX-2,headCY-38,2.4,0,Math.PI*2); ctx.fill(); ctx.restore(); } }

  const closedEyes = asleep; const eyeCX=headCX+2, eyeCY=headCY-2;
  if(closedEyes){ ctx.strokeStyle='#7a5a80'; ctx.lineWidth=2; ctx.beginPath(); ctx.moveTo(eyeCX-4,eyeCY); ctx.quadraticCurveTo(eyeCX,eyeCY+3,eyeCX+4,eyeCY); ctx.stroke(); }
  else { ctx.beginPath(); ctx.arc(eyeCX,eyeCY,4,0,Math.PI*2); ctx.fillStyle='#fff'; ctx.fill(); ctx.beginPath(); ctx.arc(eyeCX+(annoyed?0:0.8),eyeCY+(annoyed?0.5:0),2.2,0,Math.PI*2); ctx.fillStyle='#4a3a5a'; ctx.fill(); }
  if(annoyed && !closedEyes){ ctx.strokeStyle='rgba(0,0,0,0.4)'; ctx.lineWidth=2; ctx.beginPath(); ctx.moveTo(eyeCX-5,eyeCY-7); ctx.lineTo(eyeCX+4,eyeCY-4); ctx.stroke(); }

  ctx.fillStyle=colors.body; ctx.beginPath(); ctx.moveTo(headCX-6,headCY-10); ctx.lineTo(headCX-2,headCY-20); ctx.lineTo(headCX+2,headCY-10); ctx.closePath(); ctx.fill();
  ctx.restore();

  drawPrestigeHalo(ctx, headCY-38, 16, 5, opts.prestige || 0);
  drawReptileActionOverlays(ctx, baseSpecies, opts, t, headCX, headCY, headR, headCX+11, headCY+8);
  ctx.restore();
}

function drawCatlikeCreature(ctx, speciesKey, stage, opts={}){
  let baseSpecies = speciesKey; if(speciesKey === 'hybrid' && opts.hybridDNA) baseSpecies = opts.hybridDNA.base;
  const sp = SPECIES[baseSpecies] || SPECIES['cat']; const colors = opts.colors || sp; const scale = STAGE_SCALE[stage]; const j = juvenile(stage);
  const asleep = opts.asleep; const sad = opts.sad; const action = opts.action; const yaw = opts.yaw || 0;
  const annoyed = sad || (action && action.type==='refuse') || (opts.prestige > 0 && !asleep);
  const t = computeSharedTransform(opts); const bounce = (asleep || action) ? 0 : Math.sin(bounceTime*1.8)*3;
  const earSpecies = speciesKey==='hybrid' && opts.hybridDNA ? opts.hybridDNA.ears : baseSpecies;
  const tailSpecies = speciesKey==='hybrid' && opts.hybridDNA ? opts.hybridDNA.tail : baseSpecies;
  const legShrink = 1 - j*0.3;
  const build = {
    cat:{rx:30,ry:32,standing:false}, dog:{rx:34,ry:30,standing:false},
    fox:{rx:28,ry:30,standing:false}, fennec:{rx:19,ry:21,standing:false},
    cheetah:{rx:32,ry:20,standing:true}
  }[baseSpecies] || {rx:30,ry:30,standing:false};
  const cy = build.standing ? 26 : 30;

  ctx.save(); ctx.translate(180+t.extraTX, 205+bounce+t.extraTY);
  if(opts.prestige > 0 && !asleep) ctx.translate(0, -Math.abs(Math.sin(bounceTime*2)) * 10 - (opts.prestige * 5));
  ctx.rotate(t.extraRotate); ctx.scale(scale*t.extraScaleX*t.pulseScale*Math.cos(yaw), scale*t.extraScaleY*t.pulseScale);

  drawPrestigeAura(ctx, 20, 95, opts.prestige || 0);

  if(build.standing){
    [[-18,cy+24],[16,cy+28]].forEach(([lx,ly])=>{ [-1,1].forEach(dir=>{ ctx.save(); ctx.translate(lx+dir*4, ly); ctx.beginPath(); ctx.ellipse(0,10*legShrink,7,16*legShrink,0,0,Math.PI*2); ctx.fillStyle=colors.body; ctx.fill(); ctx.restore(); }); });
  } else {
    [-1,1].forEach(dir=>{ ctx.beginPath(); ctx.ellipse(dir*14, cy+20, 8, 12, 0,0,Math.PI*2); ctx.fillStyle=colors.body; ctx.fill(); });
  }

  ctx.save(); ctx.translate(0, cy);
  drawTail(ctx, tailSpecies, colors, {bodyRX:build.rx,bodyRY:build.ry,tailScale:1-j*0.15}, stage);
  ctx.restore();

  const torsoRX = build.rx*(1-j*0.08), torsoRY = build.ry*(1+j*0.18);
  ctx.beginPath(); ctx.ellipse(0,cy,torsoRX,torsoRY,0,0,Math.PI*2); ctx.fillStyle=colors.body; ctx.fill();
  ctx.beginPath(); ctx.ellipse(0,cy+torsoRY*0.15,torsoRX*0.55,torsoRY*0.5,0,0,Math.PI*2); ctx.fillStyle='rgba(255,255,255,0.35)'; ctx.fill();
  if(baseSpecies==='cheetah'){ ctx.fillStyle=colors.pattern; [[-10,-4],[10,2],[-4,10],[6,-8],[0,4]].forEach(([sx,sy])=>{ ctx.beginPath(); ctx.arc(sx,cy+sy,2.4,0,Math.PI*2); ctx.fill(); }); }

  const headY = build.standing ? -4 : -6;
  ctx.save(); ctx.translate(0,headY); ctx.scale(1+j*0.28,1+j*0.28); ctx.translate(0,-headY);
  const headR = build.standing?22:25;
  ctx.save(); ctx.translate(0,headY); drawEars(ctx, earSpecies, colors, {headR, earScale:1}, stage); ctx.restore();
  ctx.beginPath(); ctx.arc(0,headY,headR,0,Math.PI*2); ctx.fillStyle=colors.body; ctx.fill();

  const closedEyes = asleep; const eyeY=headY-2, eyeDX=10;
  if(closedEyes){ ctx.strokeStyle='#3a2a20'; ctx.lineWidth=2.5; ctx.lineCap='round'; [-1,1].forEach(dir=>{ ctx.beginPath(); ctx.moveTo(dir*eyeDX-6,eyeY); ctx.quadraticCurveTo(dir*eyeDX,eyeY+5,dir*eyeDX+6,eyeY); ctx.stroke(); }); }
  else {
    [-1,1].forEach(dir=>{
      ctx.beginPath();
      if(sp.eyeType==='slit'){ ctx.ellipse(dir*eyeDX,eyeY,6,7.7,0,0,Math.PI*2); ctx.fillStyle='#fff'; ctx.fill(); ctx.fillStyle='#2a2a2a'; ctx.fillRect(dir*eyeDX-1.5,eyeY-5,3,10); }
      else { ctx.arc(dir*eyeDX,eyeY,6,0,Math.PI*2); ctx.fillStyle='#fff'; ctx.fill(); ctx.beginPath(); ctx.arc(dir*eyeDX+(annoyed?0:1),eyeY+(annoyed?1:0),3.4,0,Math.PI*2); ctx.fillStyle='#2a2a2a'; ctx.fill(); }
    });
  }
  if(annoyed && !closedEyes){ ctx.strokeStyle='rgba(0,0,0,0.4)'; ctx.lineWidth=2.5; [-1,1].forEach(dir=>{ ctx.beginPath(); ctx.moveTo(dir*eyeDX-8,eyeY-9); ctx.lineTo(dir*eyeDX+8,eyeY-5); ctx.stroke(); }); }

  if(baseSpecies!=='cat'){
    ctx.beginPath(); ctx.ellipse(0,headY+10,12,9,0,0,Math.PI*2);
    ctx.fillStyle = baseSpecies==='fox' ? '#fff8ee' : baseSpecies==='cheetah' ? '#f39c12' : 'rgba(255,255,255,0.6)';
    ctx.fill();
  }
  if(baseSpecies==='cheetah' && !closedEyes){ ctx.strokeStyle=colors.pattern; ctx.lineWidth=2; [-1,1].forEach(dir=>{ ctx.beginPath(); ctx.moveTo(dir*eyeDX*0.8,eyeY+6); ctx.quadraticCurveTo(dir*eyeDX*0.3,eyeY+12,dir*4,eyeY+10); ctx.stroke(); }); }

  ctx.fillStyle='#3a2a20'; ctx.beginPath(); ctx.ellipse(0,headY+8,3,2.2,0,0,Math.PI*2); ctx.fill();
  ctx.strokeStyle='#3a2a20'; ctx.lineWidth=2.2; ctx.lineCap='round'; ctx.beginPath();
  if(asleep){ ctx.moveTo(-5,headY+12); ctx.lineTo(5,headY+12); } else if(annoyed){ ctx.moveTo(-7,headY+15); ctx.quadraticCurveTo(0,headY+10,7,headY+14); } else { ctx.moveTo(-7,headY+11); ctx.quadraticCurveTo(0,headY+17,7,headY+11); }
  ctx.stroke();

  if(baseSpecies==='cat' && !closedEyes){ ctx.strokeStyle='rgba(60,40,30,0.45)'; ctx.lineWidth=1.3; [-1,1].forEach(dir=>{ for(let i=-1;i<=1;i++){ ctx.beginPath(); ctx.moveTo(dir*18,headY+8+i*4); ctx.lineTo(dir*32,headY+3+i*5); ctx.stroke(); } }); }
  if(baseSpecies==='cat' && !asleep && !annoyed && Math.sin(bounceTime*1.5)>0.9){ ctx.save(); ctx.globalAlpha=0.7; ctx.fillStyle='rgba(180,120,255,0.8)'; ctx.font='10px sans-serif'; ctx.fillText('♪',18,headY-2); ctx.restore(); }
  ctx.restore();

  drawPrestigeHalo(ctx, headY-42, 18, 5, opts.prestige || 0);
  drawReptileActionOverlays(ctx, baseSpecies, opts, t, 0, headY-8, headR, 0, headY+14);
  ctx.restore();
}

function drawLionCreature(ctx, speciesKey, stage, opts={}){
  let baseSpecies = speciesKey; if(speciesKey === 'hybrid' && opts.hybridDNA) baseSpecies = opts.hybridDNA.base;
  const sp = SPECIES[baseSpecies] || SPECIES['lion']; const colors = opts.colors || sp; const scale = STAGE_SCALE[stage]; const j = juvenile(stage);
  const asleep = opts.asleep; const sad = opts.sad; const action = opts.action; const yaw = opts.yaw || 0;
  const annoyed = sad || (action && action.type==='refuse') || (opts.prestige > 0 && !asleep);
  const t = computeSharedTransform(opts); const bounce = (asleep || action) ? 0 : Math.sin(bounceTime*1.6)*3;
  const earSpecies = speciesKey==='hybrid' && opts.hybridDNA ? opts.hybridDNA.ears : baseSpecies;
  const tailSpecies = speciesKey==='hybrid' && opts.hybridDNA ? opts.hybridDNA.tail : baseSpecies;
  const legShrink = 1-j*0.3;

  ctx.save(); ctx.translate(180+t.extraTX, 205+bounce+t.extraTY);
  if(opts.prestige > 0 && !asleep) ctx.translate(0, -Math.abs(Math.sin(bounceTime*2)) * 10 - (opts.prestige * 5));
  ctx.rotate(t.extraRotate); ctx.scale(scale*t.extraScaleX*t.pulseScale*Math.cos(yaw), scale*t.extraScaleY*t.pulseScale);

  drawPrestigeAura(ctx, 24, 100, opts.prestige || 0);

  ctx.save(); ctx.translate(0,46);
  drawTail(ctx, tailSpecies, colors, {bodyRX:38,bodyRY:24,tailScale:1-j*0.15}, stage);
  ctx.restore();

  [[-20,44],[18,48]].forEach(([lx,ly])=>{ [-1,1].forEach(dir=>{ ctx.save(); ctx.translate(lx+dir*5,ly); ctx.beginPath(); ctx.ellipse(0,10*legShrink,8,18*legShrink,0,0,Math.PI*2); ctx.fillStyle=colors.body; ctx.fill(); ctx.restore(); }); });

  const torsoRX=38*(1-j*0.05), torsoRY=24*(1+j*0.2);
  ctx.beginPath(); ctx.ellipse(0,26,torsoRX,torsoRY,0,0,Math.PI*2); ctx.fillStyle=colors.body; ctx.fill();
  ctx.beginPath(); ctx.ellipse(0,26+torsoRY*0.2,torsoRX*0.55,torsoRY*0.5,0,0,Math.PI*2); ctx.fillStyle='rgba(255,255,255,0.3)'; ctx.fill();

  ctx.save(); ctx.translate(0,-4); ctx.scale(1+j*0.25,1+j*0.25); ctx.translate(0,4);
  const headR=26;
  ctx.save(); ctx.translate(0,-4); drawEars(ctx, earSpecies, colors, {headR, earScale:1}, stage); ctx.restore();
  ctx.beginPath(); ctx.arc(0,-4,headR,0,Math.PI*2); ctx.fillStyle=colors.body; ctx.fill();

  const closedEyes=asleep; const eyeY=-6, eyeDX=11;
  if(closedEyes){ ctx.strokeStyle='#5a3a10'; ctx.lineWidth=2.5; ctx.lineCap='round'; [-1,1].forEach(dir=>{ ctx.beginPath(); ctx.moveTo(dir*eyeDX-6,eyeY); ctx.quadraticCurveTo(dir*eyeDX,eyeY+5,dir*eyeDX+6,eyeY); ctx.stroke(); }); }
  else { [-1,1].forEach(dir=>{ ctx.beginPath(); ctx.arc(dir*eyeDX,eyeY,6,0,Math.PI*2); ctx.fillStyle='#fff'; ctx.fill(); ctx.beginPath(); ctx.arc(dir*eyeDX+(annoyed?0:1),eyeY+(annoyed?1:0),3.4,0,Math.PI*2); ctx.fillStyle='#2a2a2a'; ctx.fill(); }); }
  if(annoyed && !closedEyes){ ctx.strokeStyle='rgba(0,0,0,0.4)'; ctx.lineWidth=2.5; [-1,1].forEach(dir=>{ ctx.beginPath(); ctx.moveTo(dir*eyeDX-8,eyeY-9); ctx.lineTo(dir*eyeDX+8,eyeY-5); ctx.stroke(); }); }

  ctx.beginPath(); ctx.ellipse(0,6,15,11,0,0,Math.PI*2); ctx.fillStyle='#f39c12'; ctx.fill();

  ctx.fillStyle='#3a2a20'; ctx.beginPath(); ctx.ellipse(0,4,3,2.2,0,0,Math.PI*2); ctx.fill();
  ctx.strokeStyle='#3a2a20'; ctx.lineWidth=2.2; ctx.lineCap='round'; ctx.beginPath();
  if(asleep){ ctx.moveTo(-5,8); ctx.lineTo(5,8); } else if(annoyed){ ctx.moveTo(-7,11); ctx.quadraticCurveTo(0,6,7,10); } else { ctx.moveTo(-7,7); ctx.quadraticCurveTo(0,13,7,7); }
  ctx.stroke();
  ctx.restore();

  if(!asleep && Math.sin(bounceTime*0.8) > 0.85){ ctx.save(); ctx.globalAlpha=0.6; ctx.font='14px sans-serif'; ctx.fillText('💨', 20, -8); ctx.restore(); }

  drawPrestigeHalo(ctx, -50, 20, 5, opts.prestige || 0);
  drawReptileActionOverlays(ctx, baseSpecies, opts, t, 0, -14, headR, 0, 8);
  ctx.restore();
}

function drawPrimateCreature(ctx, speciesKey, stage, opts={}){
  let baseSpecies = speciesKey; if(speciesKey === 'hybrid' && opts.hybridDNA) baseSpecies = opts.hybridDNA.base;
  const sp = SPECIES[baseSpecies] || SPECIES['monkey']; const colors = opts.colors || sp; const scale = STAGE_SCALE[stage]; const j = juvenile(stage);
  const asleep = opts.asleep; const sad = opts.sad; const action = opts.action; const yaw = opts.yaw || 0;
  const annoyed = sad || (action && action.type==='refuse') || (opts.prestige > 0 && !asleep);
  const t = computeSharedTransform(opts); const bounce = (asleep || action) ? 0 : Math.sin(bounceTime*1.8)*4;
  const earSpecies = speciesKey==='hybrid' && opts.hybridDNA ? opts.hybridDNA.ears : baseSpecies;
  const tailSpecies = speciesKey==='hybrid' && opts.hybridDNA ? opts.hybridDNA.tail : baseSpecies;
  const limbShrink = 1-j*0.3;

  ctx.save(); ctx.translate(180+t.extraTX, 205+bounce+t.extraTY);
  if(opts.prestige > 0 && !asleep) ctx.translate(0, -Math.abs(Math.sin(bounceTime*2)) * 10 - (opts.prestige * 5));
  ctx.rotate(t.extraRotate); ctx.scale(scale*t.extraScaleX*t.pulseScale*Math.cos(yaw), scale*t.extraScaleY*t.pulseScale);

  drawPrestigeAura(ctx, 20, 100, opts.prestige || 0);

  ctx.save(); ctx.translate(0,30);
  drawTail(ctx, tailSpecies, colors, {bodyRX:26,bodyRY:30,tailScale:1-j*0.1}, stage);
  ctx.restore();

  const armSwing = asleep?0:Math.sin(bounceTime*1.5)*6;
  [-1,1].forEach(dir=>{ ctx.beginPath(); ctx.moveTo(dir*20,10); ctx.quadraticCurveTo(dir*34,30+armSwing*dir, dir*24,58*limbShrink); ctx.lineWidth=9; ctx.strokeStyle=colors.body; ctx.lineCap='round'; ctx.stroke();
    ctx.beginPath(); ctx.arc(dir*24,58*limbShrink,7,0,Math.PI*2); ctx.fillStyle=colors.pattern; ctx.fill(); });
  [-1,1].forEach(dir=>{ ctx.beginPath(); ctx.moveTo(dir*10,40); ctx.lineTo(dir*16,60*limbShrink); ctx.lineWidth=10; ctx.strokeStyle=colors.body; ctx.lineCap='round'; ctx.stroke(); });

  ctx.beginPath(); ctx.ellipse(0,30,26,28,0,0,Math.PI*2); ctx.fillStyle=colors.body; ctx.fill();
  ctx.beginPath(); ctx.ellipse(0,34,15,17,0,0,Math.PI*2); ctx.fillStyle=colors.pattern; ctx.globalAlpha=0.5; ctx.fill(); ctx.globalAlpha=1;

  ctx.save(); ctx.translate(0,-4); ctx.scale(1+j*0.28,1+j*0.28); ctx.translate(0,4);
  const headR=24;
  ctx.save(); ctx.translate(0,-4); drawEars(ctx, earSpecies, colors, {headR, earScale:1}, stage); ctx.restore();
  ctx.beginPath(); ctx.arc(0,-4,headR,0,Math.PI*2); ctx.fillStyle=colors.body; ctx.fill();
  if(baseSpecies==='monkey'){ ctx.fillStyle=colors.pattern; ctx.beginPath(); ctx.ellipse(0,-2,headR*0.8,headR*0.7,0,0,Math.PI*2); ctx.fill(); }
  if(baseSpecies==='lemur'){ ctx.fillStyle='#f5f5f0'; ctx.beginPath(); ctx.ellipse(0,0,headR*0.75,headR*0.65,0,0,Math.PI*2); ctx.fill(); }

  const closedEyes=asleep; const eyeY=-6, eyeDX=10;
  if(closedEyes){ ctx.strokeStyle='#3a2a20'; ctx.lineWidth=2.5; ctx.lineCap='round'; [-1,1].forEach(dir=>{ ctx.beginPath(); ctx.moveTo(dir*eyeDX-6,eyeY); ctx.quadraticCurveTo(dir*eyeDX,eyeY+5,dir*eyeDX+6,eyeY); ctx.stroke(); }); }
  else { [-1,1].forEach(dir=>{ ctx.beginPath(); ctx.arc(dir*eyeDX,eyeY,6,0,Math.PI*2); ctx.fillStyle= baseSpecies==='lemur'?'#f1c40f':'#fff'; ctx.fill(); ctx.beginPath(); ctx.arc(dir*eyeDX+(annoyed?0:1),eyeY+(annoyed?1:0),3.4,0,Math.PI*2); ctx.fillStyle='#2a2a2a'; ctx.fill(); }); }
  if(annoyed && !closedEyes){ ctx.strokeStyle='rgba(0,0,0,0.4)'; ctx.lineWidth=2.5; [-1,1].forEach(dir=>{ ctx.beginPath(); ctx.moveTo(dir*eyeDX-8,eyeY-9); ctx.lineTo(dir*eyeDX+8,eyeY-5); ctx.stroke(); }); }

  ctx.fillStyle='#3a2a20'; ctx.beginPath(); ctx.ellipse(0,4,3,2.2,0,0,Math.PI*2); ctx.fill();
  ctx.strokeStyle='#3a2a20'; ctx.lineWidth=2.2; ctx.lineCap='round'; ctx.beginPath();
  if(asleep){ ctx.moveTo(-5,8); ctx.lineTo(5,8); } else if(annoyed){ ctx.moveTo(-7,11); ctx.quadraticCurveTo(0,6,7,10); } else { ctx.moveTo(-7,7); ctx.quadraticCurveTo(0,13,7,7); }
  ctx.stroke();
  ctx.restore();

  drawPrestigeHalo(ctx, -46, 18, 5, opts.prestige || 0);
  drawReptileActionOverlays(ctx, baseSpecies, opts, t, 0, -14, headR, 0, 8);
  ctx.restore();
}

function drawPigCreature(ctx, speciesKey, stage, opts={}){
  let baseSpecies = speciesKey; if(speciesKey === 'hybrid' && opts.hybridDNA) baseSpecies = opts.hybridDNA.base;
  const sp = SPECIES[baseSpecies] || SPECIES['pig']; const colors = opts.colors || sp; const scale = STAGE_SCALE[stage]; const j = juvenile(stage);
  const asleep = opts.asleep; const sad = opts.sad; const action = opts.action; const yaw = opts.yaw || 0;
  const annoyed = sad || (action && action.type==='refuse') || (opts.prestige > 0 && !asleep);
  const t = computeSharedTransform(opts); const bounce = (asleep || action) ? 0 : Math.sin(bounceTime*1.8)*3;
  const earSpecies = speciesKey==='hybrid' && opts.hybridDNA ? opts.hybridDNA.ears : baseSpecies;
  const tailSpecies = speciesKey==='hybrid' && opts.hybridDNA ? opts.hybridDNA.tail : baseSpecies;
  const legShrink = 1-j*0.3;

  ctx.save(); ctx.translate(180+t.extraTX, 205+bounce+t.extraTY);
  if(opts.prestige > 0 && !asleep) ctx.translate(0, -Math.abs(Math.sin(bounceTime*2)) * 10 - (opts.prestige * 5));
  ctx.rotate(t.extraRotate); ctx.scale(scale*t.extraScaleX*t.pulseScale*Math.cos(yaw), scale*t.extraScaleY*t.pulseScale);

  drawPrestigeAura(ctx, 22, 95, opts.prestige || 0);

  ctx.save(); ctx.translate(0,44);
  drawTail(ctx, tailSpecies, colors, {bodyRX:32,bodyRY:30,tailScale:1-j*0.15}, stage);
  ctx.restore();

  [[-18,48],[16,50]].forEach(([lx,ly])=>{ ctx.save(); ctx.translate(lx,ly); ctx.beginPath(); ctx.ellipse(0,6*legShrink,9,14*legShrink,0,0,Math.PI*2); ctx.fillStyle=colors.body; ctx.fill(); ctx.restore(); });

  const torsoRX=34*(1-j*0.05), torsoRY=30*(1+j*0.15);
  ctx.beginPath(); ctx.ellipse(0,28,torsoRX,torsoRY,0,0,Math.PI*2); ctx.fillStyle=colors.body; ctx.fill();

  ctx.save(); ctx.translate(0,-6); ctx.scale(1+j*0.28,1+j*0.28); ctx.translate(0,6);
  const headR=25;
  ctx.save(); ctx.translate(0,-6); drawEars(ctx, earSpecies, colors, {headR, earScale:1}, stage); ctx.restore();
  ctx.beginPath(); ctx.arc(0,-6,headR,0,Math.PI*2); ctx.fillStyle=colors.body; ctx.fill();

  const closedEyes=asleep; const eyeY=-8, eyeDX=10;
  if(closedEyes){ ctx.strokeStyle='#3a2a20'; ctx.lineWidth=2.5; ctx.lineCap='round'; [-1,1].forEach(dir=>{ ctx.beginPath(); ctx.moveTo(dir*eyeDX-6,eyeY); ctx.quadraticCurveTo(dir*eyeDX,eyeY+5,dir*eyeDX+6,eyeY); ctx.stroke(); }); }
  else { [-1,1].forEach(dir=>{ ctx.beginPath(); ctx.arc(dir*eyeDX,eyeY,5.5,0,Math.PI*2); ctx.fillStyle='#fff'; ctx.fill(); ctx.beginPath(); ctx.arc(dir*eyeDX+(annoyed?0:1),eyeY+(annoyed?1:0),3.2,0,Math.PI*2); ctx.fillStyle='#2a2a2a'; ctx.fill(); }); }
  if(annoyed && !closedEyes){ ctx.strokeStyle='rgba(0,0,0,0.4)'; ctx.lineWidth=2.5; [-1,1].forEach(dir=>{ ctx.beginPath(); ctx.moveTo(dir*eyeDX-8,eyeY-9); ctx.lineTo(dir*eyeDX+8,eyeY-5); ctx.stroke(); }); }

  ctx.beginPath(); ctx.ellipse(0,10,16,12,0,0,Math.PI*2); ctx.fillStyle=colors.ear; ctx.fill();
  ctx.fillStyle='#2a2a2a'; ctx.beginPath(); ctx.arc(-5,8,2.5,0,Math.PI*2); ctx.fill(); ctx.beginPath(); ctx.arc(5,8,2.5,0,Math.PI*2); ctx.fill();
  ctx.restore();

  drawPrestigeHalo(ctx, -48, 18, 5, opts.prestige || 0);
  drawReptileActionOverlays(ctx, baseSpecies, opts, t, 0, -18, headR, 0, 10);
  ctx.restore();
}

function drawBunnyCreature(ctx, speciesKey, stage, opts={}){
  let baseSpecies = speciesKey; if(speciesKey === 'hybrid' && opts.hybridDNA) baseSpecies = opts.hybridDNA.base;
  const sp = SPECIES[baseSpecies] || SPECIES['bunny']; const colors = opts.colors || sp; const scale = STAGE_SCALE[stage]; const j = juvenile(stage);
  const asleep = opts.asleep; const sad = opts.sad; const action = opts.action; const yaw = opts.yaw || 0;
  const annoyed = sad || (action && action.type==='refuse') || (opts.prestige > 0 && !asleep);
  const t = computeSharedTransform(opts); const bounce = (asleep || action) ? 0 : Math.sin(bounceTime*2)*3;
  const earSpecies = speciesKey==='hybrid' && opts.hybridDNA ? opts.hybridDNA.ears : baseSpecies;
  const tailSpecies = speciesKey==='hybrid' && opts.hybridDNA ? opts.hybridDNA.tail : baseSpecies;

  ctx.save(); ctx.translate(180+t.extraTX, 205+bounce+t.extraTY);
  if(opts.prestige > 0 && !asleep) ctx.translate(0, -Math.abs(Math.sin(bounceTime*2)) * 10 - (opts.prestige * 5));
  ctx.rotate(t.extraRotate); ctx.scale(scale*t.extraScaleX*t.pulseScale*Math.cos(yaw), scale*t.extraScaleY*t.pulseScale);

  drawPrestigeAura(ctx, 20, 95, opts.prestige || 0);

  ctx.save(); ctx.translate(0,44);
  drawTail(ctx, tailSpecies, colors, {bodyRX:26,bodyRY:30,tailScale:1}, stage);
  ctx.restore();

  [-1,1].forEach(dir=>{ ctx.beginPath(); ctx.ellipse(dir*16,56,10,16,dir*0.2,0,Math.PI*2); ctx.fillStyle=colors.body; ctx.fill(); });
  [-1,1].forEach(dir=>{ ctx.beginPath(); ctx.ellipse(dir*12,44,6,9,0,0,Math.PI*2); ctx.fillStyle=colors.body; ctx.fill(); });

  const torsoRX=27*(1-j*0.05), torsoRY=30*(1+j*0.2);
  ctx.beginPath(); ctx.ellipse(0,26,torsoRX,torsoRY,0,0,Math.PI*2); ctx.fillStyle=colors.body; ctx.fill();
  ctx.beginPath(); ctx.ellipse(0,32,torsoRX*0.5,torsoRY*0.45,0,0,Math.PI*2); ctx.fillStyle='rgba(255,255,255,0.4)'; ctx.fill();

  ctx.save(); ctx.translate(0,-10); ctx.scale(1+j*0.3,1+j*0.3); ctx.translate(0,10);
  const headR=24;
  ctx.save(); ctx.translate(0,-10); drawEars(ctx, earSpecies, colors, {headR, earScale:1}, stage); ctx.restore();
  ctx.beginPath(); ctx.arc(0,-10,headR,0,Math.PI*2); ctx.fillStyle=colors.body; ctx.fill();

  const closedEyes=asleep; const eyeY=-12, eyeDX=10;
  if(closedEyes){ ctx.strokeStyle='#3a2a20'; ctx.lineWidth=2.5; ctx.lineCap='round'; [-1,1].forEach(dir=>{ ctx.beginPath(); ctx.moveTo(dir*eyeDX-6,eyeY); ctx.quadraticCurveTo(dir*eyeDX,eyeY+5,dir*eyeDX+6,eyeY); ctx.stroke(); }); }
  else { [-1,1].forEach(dir=>{ ctx.beginPath(); ctx.arc(dir*eyeDX,eyeY,6,0,Math.PI*2); ctx.fillStyle='#fff'; ctx.fill(); ctx.beginPath(); ctx.arc(dir*eyeDX+(annoyed?0:1),eyeY+(annoyed?1:0),3.4,0,Math.PI*2); ctx.fillStyle='#2a2a2a'; ctx.fill(); }); }
  if(annoyed && !closedEyes){ ctx.strokeStyle='rgba(0,0,0,0.4)'; ctx.lineWidth=2.5; [-1,1].forEach(dir=>{ ctx.beginPath(); ctx.moveTo(dir*eyeDX-8,eyeY-9); ctx.lineTo(dir*eyeDX+8,eyeY-5); ctx.stroke(); }); }

  ctx.fillStyle='#3a2a20'; ctx.beginPath(); ctx.ellipse(0,-2,3,2.2,0,0,Math.PI*2); ctx.fill();
  ctx.strokeStyle='#3a2a20'; ctx.lineWidth=2.2; ctx.lineCap='round'; ctx.beginPath();
  if(asleep){ ctx.moveTo(-5,2); ctx.lineTo(5,2); } else if(annoyed){ ctx.moveTo(-7,5); ctx.quadraticCurveTo(0,0,7,4); } else { ctx.moveTo(-7,1); ctx.quadraticCurveTo(0,7,7,1); }
  ctx.stroke();
  if(!annoyed && !asleep){ ctx.fillStyle='#fff'; ctx.fillRect(-4,7,3.5,6); ctx.fillRect(0.5,7,3.5,6); ctx.strokeStyle='rgba(0,0,0,0.15)'; ctx.lineWidth=0.5; ctx.strokeRect(-4,7,3.5,6); ctx.strokeRect(0.5,7,3.5,6); }
  if(!asleep){ const twitch=Math.sin(bounceTime*10)*0.5+0.5; ctx.fillStyle='rgba(255,180,190,0.6)'; ctx.beginPath(); ctx.ellipse(0,-2,2+twitch*0.8,1.5,0,0,Math.PI*2); ctx.fill(); }
  ctx.restore();

  drawPrestigeHalo(ctx, -58, 18, 5, opts.prestige || 0);
  drawReptileActionOverlays(ctx, baseSpecies, opts, t, 0, -20, headR, 0, -2);
  ctx.restore();
}

function drawRedpandaCreature(ctx, speciesKey, stage, opts={}){
  let baseSpecies = speciesKey; if(speciesKey === 'hybrid' && opts.hybridDNA) baseSpecies = opts.hybridDNA.base;
  const sp = SPECIES[baseSpecies] || SPECIES['redpanda']; const colors = opts.colors || sp; const scale = STAGE_SCALE[stage]; const j = juvenile(stage);
  const asleep = opts.asleep; const sad = opts.sad; const action = opts.action; const yaw = opts.yaw || 0;
  const annoyed = sad || (action && action.type==='refuse') || (opts.prestige > 0 && !asleep);
  const t = computeSharedTransform(opts); const bounce = (asleep || action) ? 0 : Math.sin(bounceTime*1.8)*3;
  const earSpecies = speciesKey==='hybrid' && opts.hybridDNA ? opts.hybridDNA.ears : baseSpecies;
  const tailSpecies = speciesKey==='hybrid' && opts.hybridDNA ? opts.hybridDNA.tail : baseSpecies;

  ctx.save(); ctx.translate(180+t.extraTX, 210+bounce+t.extraTY);
  if(opts.prestige > 0 && !asleep) ctx.translate(0, -Math.abs(Math.sin(bounceTime*2)) * 10 - (opts.prestige * 5));
  ctx.rotate(t.extraRotate); ctx.scale(scale*t.extraScaleX*t.pulseScale*Math.cos(yaw), scale*t.extraScaleY*t.pulseScale);

  drawPrestigeAura(ctx, 18, 90, opts.prestige || 0);

  ctx.save(); ctx.translate(10,40);
  drawTail(ctx, tailSpecies, colors, {bodyRX:30,bodyRY:26,tailScale:1-j*0.1}, stage);
  ctx.restore();

  [-1,1].forEach(dir=>{ ctx.beginPath(); ctx.ellipse(dir*22,52,10,14,0,0,Math.PI*2); ctx.fillStyle='#2a2a2a'; ctx.fill(); });

  const torsoRX=28*(1-j*0.05), torsoRY=28*(1+j*0.15);
  ctx.beginPath(); ctx.ellipse(0,26,torsoRX,torsoRY,0,0,Math.PI*2); ctx.fillStyle=colors.body; ctx.fill();
  ctx.beginPath(); ctx.ellipse(0,32,torsoRX*0.35,torsoRY*0.3,0,0,Math.PI*2); ctx.fillStyle='#2a2a2a'; ctx.fill();

  ctx.save(); ctx.translate(0,-6); ctx.scale(1+j*0.28,1+j*0.28); ctx.translate(0,6);
  const headR=24;
  ctx.save(); ctx.translate(0,-6); drawEars(ctx, earSpecies, colors, {headR, earScale:1}, stage); ctx.restore();
  ctx.beginPath(); ctx.arc(0,-6,headR,0,Math.PI*2); ctx.fillStyle='#f5f5f0'; ctx.fill();

  const closedEyes=asleep; const eyeY=-8, eyeDX=10;
  ctx.fillStyle=colors.pattern; [-1,1].forEach(dir=>{ ctx.beginPath(); ctx.ellipse(dir*(eyeDX+2), eyeY+2, 12, 7, dir*0.2, 0, Math.PI*2); ctx.fill(); });
  if(closedEyes){ ctx.strokeStyle='#3a2a20'; ctx.lineWidth=2.5; ctx.lineCap='round'; [-1,1].forEach(dir=>{ ctx.beginPath(); ctx.moveTo(dir*eyeDX-6,eyeY); ctx.quadraticCurveTo(dir*eyeDX,eyeY+5,dir*eyeDX+6,eyeY); ctx.stroke(); }); }
  else { [-1,1].forEach(dir=>{ ctx.beginPath(); ctx.arc(dir*eyeDX,eyeY,6,0,Math.PI*2); ctx.fillStyle='#fff'; ctx.fill(); ctx.beginPath(); ctx.arc(dir*eyeDX+(annoyed?0:1),eyeY+(annoyed?1:0),3.4,0,Math.PI*2); ctx.fillStyle='#2a2a2a'; ctx.fill(); }); }
  if(annoyed && !closedEyes){ ctx.strokeStyle='rgba(0,0,0,0.4)'; ctx.lineWidth=2.5; [-1,1].forEach(dir=>{ ctx.beginPath(); ctx.moveTo(dir*eyeDX-8,eyeY-9); ctx.lineTo(dir*eyeDX+8,eyeY-5); ctx.stroke(); }); }

  ctx.fillStyle='#3a2a20'; ctx.beginPath(); ctx.ellipse(0,2,3,2.2,0,0,Math.PI*2); ctx.fill();
  ctx.strokeStyle='#3a2a20'; ctx.lineWidth=2.2; ctx.lineCap='round'; ctx.beginPath();
  if(asleep){ ctx.moveTo(-5,6); ctx.lineTo(5,6); } else if(annoyed){ ctx.moveTo(-7,9); ctx.quadraticCurveTo(0,4,7,8); } else { ctx.moveTo(-7,5); ctx.quadraticCurveTo(0,11,7,5); }
  ctx.stroke();
  ctx.restore();

  drawPrestigeHalo(ctx, -46, 18, 5, opts.prestige || 0);
  drawReptileActionOverlays(ctx, baseSpecies, opts, t, 0, -14, headR, 0, 4);
  ctx.restore();
}

function drawBirdCreature(ctx, speciesKey, stage, opts={}){
  let baseSpecies = speciesKey; if(speciesKey === 'hybrid' && opts.hybridDNA) baseSpecies = opts.hybridDNA.base;
  const sp = SPECIES[baseSpecies] || SPECIES['penguin']; const colors = opts.colors || sp; const scale = STAGE_SCALE[stage]; const j = juvenile(stage);
  const asleep = opts.asleep; const sad = opts.sad; const action = opts.action; const yaw = opts.yaw || 0;
  const annoyed = sad || (action && action.type==='refuse') || (opts.prestige > 0 && !asleep);
  const t = computeSharedTransform(opts); const bounce = (asleep || action) ? 0 : Math.sin(bounceTime*1.6)*3;
  const earSpecies = speciesKey==='hybrid' && opts.hybridDNA ? opts.hybridDNA.ears : baseSpecies;
  const tailSpecies = speciesKey==='hybrid' && opts.hybridDNA ? opts.hybridDNA.tail : baseSpecies;
  const isOwl = baseSpecies === 'owl';

  ctx.save(); ctx.translate(180+t.extraTX, 205+bounce+t.extraTY);
  if(opts.prestige > 0 && !asleep) ctx.translate(0, -Math.abs(Math.sin(bounceTime*2)) * 10 - (opts.prestige * 5));
  ctx.rotate(t.extraRotate); ctx.scale(scale*t.extraScaleX*t.pulseScale*Math.cos(yaw), scale*t.extraScaleY*t.pulseScale);

  drawPrestigeAura(ctx, 20, 95, opts.prestige || 0);

  ctx.save(); ctx.translate(0,44);
  drawTail(ctx, tailSpecies, colors, {bodyRX:28,bodyRY:36,tailScale:1-j*0.1}, stage);
  ctx.restore();

  [-1,1].forEach(dir=>{ ctx.beginPath(); ctx.ellipse(dir*10,58,8,5,0,0,Math.PI*2); ctx.fillStyle=colors.ear; ctx.fill(); });
  const flap = asleep?0.05:0.15+Math.sin(bounceTime*2.4)*0.1;
  [-1,1].forEach(dir=>{ ctx.save(); ctx.translate(dir*24,10); ctx.rotate(dir*(0.4+flap)); ctx.beginPath(); ctx.ellipse(0,15,7,22,0,0,Math.PI*2); ctx.fillStyle = isOwl?colors.pattern:colors.body; ctx.fill(); ctx.restore(); });

  const torsoRX=26*(1-j*0.05), torsoRY=34*(1+j*0.1);
  ctx.beginPath(); ctx.ellipse(0,22,torsoRX,torsoRY,0,0,Math.PI*2); ctx.fillStyle=colors.body; ctx.fill();
  ctx.beginPath(); ctx.ellipse(0,22+torsoRY*0.15,torsoRX*0.72,torsoRY*0.72,0,0,Math.PI*2); ctx.fillStyle=colors.pattern; ctx.fill();

  ctx.save(); ctx.translate(0,-14); ctx.scale(1+j*0.25,1+j*0.25); ctx.translate(0,14);
  const headR=23;
  ctx.save(); ctx.translate(0,-14); drawEars(ctx, earSpecies, colors, {headR, earScale:1}, stage); ctx.restore();
  ctx.beginPath(); ctx.arc(0,-14,headR,0,Math.PI*2); ctx.fillStyle=colors.body; ctx.fill();

  const closedEyes=asleep; const eyeY=-16, eyeDX = isOwl?12:9;
  if(isOwl && !closedEyes){ ctx.fillStyle=colors.pattern; [-1,1].forEach(dir=>{ ctx.beginPath(); ctx.arc(dir*eyeDX,eyeY,eyeDX*1.3,0,Math.PI*2); ctx.fill(); }); }
  if(closedEyes){ ctx.strokeStyle='#2a2a20'; ctx.lineWidth=2.5; ctx.lineCap='round'; [-1,1].forEach(dir=>{ ctx.beginPath(); ctx.moveTo(dir*eyeDX-6,eyeY); ctx.quadraticCurveTo(dir*eyeDX,eyeY+5,dir*eyeDX+6,eyeY); ctx.stroke(); }); }
  else { [-1,1].forEach(dir=>{ ctx.beginPath(); ctx.arc(dir*eyeDX,eyeY,isOwl?9:6,0,Math.PI*2); ctx.fillStyle='#fff'; ctx.fill(); ctx.beginPath(); ctx.arc(dir*eyeDX+(annoyed?0:1),eyeY+(annoyed?1:0),isOwl?5:3.4,0,Math.PI*2); ctx.fillStyle='#2a2a2a'; ctx.fill(); }); }
  if(annoyed && !closedEyes){ ctx.strokeStyle='rgba(0,0,0,0.4)'; ctx.lineWidth=2.5; [-1,1].forEach(dir=>{ ctx.beginPath(); ctx.moveTo(dir*eyeDX-8,eyeY-11); ctx.lineTo(dir*eyeDX+8,eyeY-7); ctx.stroke(); }); }

  ctx.fillStyle=colors.ear; ctx.beginPath(); ctx.moveTo(-6,-4); ctx.lineTo(6,-4); ctx.lineTo(0,6); ctx.closePath(); ctx.fill();
  ctx.restore();

  drawPrestigeHalo(ctx, -56, 18, 5, opts.prestige || 0);
  drawReptileActionOverlays(ctx, baseSpecies, opts, t, 0, -28, headR, 0, -8);
  ctx.restore();
}

function drawGopherCreature(ctx, speciesKey, stage, opts={}){
  let baseSpecies = speciesKey; if(speciesKey === 'hybrid' && opts.hybridDNA) baseSpecies = opts.hybridDNA.base;
  const sp = SPECIES[baseSpecies] || SPECIES['gopher']; const colors = opts.colors || sp; const scale = STAGE_SCALE[stage]; const j = juvenile(stage);
  const asleep = opts.asleep; const sad = opts.sad; const action = opts.action; const yaw = opts.yaw || 0;
  const annoyed = sad || (action && action.type==='refuse') || (opts.prestige > 0 && !asleep);
  const t = computeSharedTransform(opts); const bounce = (asleep || action) ? 0 : Math.sin(bounceTime*2)*3;
  const legShrink = 1 - j*0.3;

  ctx.save(); ctx.translate(180+t.extraTX, 205+bounce+t.extraTY);
  if(opts.prestige > 0 && !asleep) ctx.translate(0, -Math.abs(Math.sin(bounceTime*2)) * 10 - (opts.prestige * 5));
  ctx.rotate(t.extraRotate); ctx.scale(scale*t.extraScaleX*t.pulseScale*Math.cos(yaw), scale*t.extraScaleY*t.pulseScale);

  drawPrestigeAura(ctx, 20, 95, opts.prestige || 0);

  [-1,1].forEach(dir=>{ ctx.beginPath(); ctx.ellipse(dir*16, 58*legShrink+2, 9, 8, 0,0,Math.PI*2); ctx.fillStyle=colors.ear; ctx.fill(); });

  const torsoR = 32*(1+j*0.1);
  ctx.beginPath(); ctx.ellipse(0,32,torsoR,torsoR*0.98,0,0,Math.PI*2); ctx.fillStyle=colors.body; ctx.fill();
  ctx.beginPath(); ctx.ellipse(0,38,torsoR*0.55,torsoR*0.55,0,0,Math.PI*2); ctx.fillStyle=colors.pattern; ctx.fill();

  const armWave = asleep?0:Math.sin(bounceTime*3)*3;
  [-1,1].forEach(dir=>{ ctx.beginPath(); ctx.ellipse(dir*22, 14+armWave, 7, 9, dir*0.3,0,Math.PI*2); ctx.fillStyle=colors.body; ctx.fill(); });

  ctx.save(); ctx.translate(0,-6); ctx.scale(1+j*0.3,1+j*0.3); ctx.translate(0,6);
  const headR = 27;
  ctx.fillStyle=colors.ear;
  [-1,1].forEach(dir=>{ ctx.beginPath(); ctx.arc(dir*headR*0.7, -6-headR*0.7, 8, 0, Math.PI*2); ctx.fill(); });
  ctx.beginPath(); ctx.arc(0,-6,headR,0,Math.PI*2); ctx.fillStyle=colors.body; ctx.fill();

  const closedEyes=asleep; const eyeY=-8, eyeDX=12;
  if(closedEyes){ ctx.strokeStyle='#2a2a30'; ctx.lineWidth=2.5; ctx.lineCap='round'; [-1,1].forEach(dir=>{ ctx.beginPath(); ctx.moveTo(dir*eyeDX-7,eyeY); ctx.quadraticCurveTo(dir*eyeDX,eyeY+5,dir*eyeDX+7,eyeY); ctx.stroke(); }); }
  else {
    [-1,1].forEach(dir=>{
      ctx.beginPath(); ctx.arc(dir*eyeDX, eyeY, 8, 0, Math.PI*2); ctx.fillStyle='#fff'; ctx.fill();
      ctx.beginPath(); ctx.arc(dir*eyeDX+(annoyed?0:1.5), eyeY+(annoyed?1.5:1), 5, 0, Math.PI*2); ctx.fillStyle='#2a2a30'; ctx.fill();
      ctx.beginPath(); ctx.arc(dir*eyeDX-2, eyeY-2, 1.6, 0, Math.PI*2); ctx.fillStyle='rgba(255,255,255,0.9)'; ctx.fill();
    });
  }
  if(annoyed && !closedEyes){ ctx.strokeStyle='rgba(0,0,0,0.4)'; ctx.lineWidth=2.5; [-1,1].forEach(dir=>{ ctx.beginPath(); ctx.moveTo(dir*eyeDX-9,eyeY-11); ctx.lineTo(dir*eyeDX+9,eyeY-6); ctx.stroke(); }); }

  ctx.fillStyle='#3a2a20'; ctx.beginPath(); ctx.ellipse(0,4,3,2.2,0,0,Math.PI*2); ctx.fill();
  if(!closedEyes){ ctx.strokeStyle='rgba(60,50,45,0.4)'; ctx.lineWidth=1.2; [-1,1].forEach(dir=>{ for(let i=-1;i<=1;i++){ ctx.beginPath(); ctx.moveTo(dir*10,8+i*3); ctx.lineTo(dir*24,6+i*5); ctx.stroke(); } }); }

  ctx.strokeStyle='#3a2a20'; ctx.lineWidth=2; ctx.lineCap='round'; ctx.beginPath();
  if(asleep){ ctx.moveTo(-5,10); ctx.lineTo(5,10); } else if(annoyed){ ctx.moveTo(-6,13); ctx.quadraticCurveTo(0,9,6,12); } else { ctx.moveTo(-8,9); ctx.quadraticCurveTo(0,17,8,9); }
  ctx.stroke();
  if(!asleep && !annoyed){ ctx.fillStyle='#fff'; ctx.fillRect(-4,9,3.2,6); ctx.fillRect(0.8,9,3.2,6); ctx.strokeStyle='rgba(0,0,0,0.15)'; ctx.lineWidth=0.5; ctx.strokeRect(-4,9,3.2,6); ctx.strokeRect(0.8,9,3.2,6); }
  ctx.restore();

  drawPrestigeHalo(ctx, -46, 20, 5, opts.prestige || 0);
  drawReptileActionOverlays(ctx, baseSpecies, opts, t, 0, -14, headR, 0, 4);
  ctx.restore();
}

function drawBearCreature(ctx, speciesKey, stage, opts={}){
  let baseSpecies = speciesKey; if(speciesKey === 'hybrid' && opts.hybridDNA) baseSpecies = opts.hybridDNA.base;
  const sp = SPECIES[baseSpecies] || SPECIES['bear']; const colors = opts.colors || sp; const scale = STAGE_SCALE[stage]; const j = juvenile(stage);
  const asleep = opts.asleep; const sad = opts.sad; const action = opts.action; const yaw = opts.yaw || 0;
  const annoyed = sad || (action && action.type==='refuse') || (opts.prestige > 0 && !asleep);
  const t = computeSharedTransform(opts); const bounce = (asleep || action) ? 0 : Math.sin(bounceTime*1.6)*3;
  const legShrink = 1 - j*0.3;

  ctx.save(); ctx.translate(180+t.extraTX, 205+bounce+t.extraTY);
  if(opts.prestige > 0 && !asleep) ctx.translate(0, -Math.abs(Math.sin(bounceTime*2)) * 10 - (opts.prestige * 5));
  ctx.rotate(t.extraRotate); ctx.scale(scale*t.extraScaleX*t.pulseScale*Math.cos(yaw), scale*t.extraScaleY*t.pulseScale);

  drawPrestigeAura(ctx, 22, 100, opts.prestige || 0);

  ctx.save(); ctx.translate(0,60); ctx.beginPath(); ctx.arc(0,0,7,0,Math.PI*2); ctx.fillStyle=colors.body; ctx.fill(); ctx.restore();

  [-1,1].forEach(dir=>{ ctx.beginPath(); ctx.ellipse(dir*18, 56*legShrink+4, 11, 12*legShrink, 0,0,Math.PI*2); ctx.fillStyle=colors.ear; ctx.fill(); });
  const armSwing = asleep?0:Math.sin(bounceTime*1.4)*3;
  [-1,1].forEach(dir=>{ ctx.beginPath(); ctx.ellipse(dir*34, 24+armSwing*dir, 10, 16, dir*0.15,0,Math.PI*2); ctx.fillStyle=colors.body; ctx.fill(); });

  const torsoRX = 34*(1-j*0.03), torsoRY = 32*(1+j*0.15);
  ctx.beginPath(); ctx.ellipse(0,26,torsoRX,torsoRY,0,0,Math.PI*2); ctx.fillStyle=colors.body; ctx.fill();
  ctx.beginPath(); ctx.ellipse(0,32,torsoRX*0.5,torsoRY*0.45,0,0,Math.PI*2); ctx.fillStyle=colors.pattern; ctx.fill();

  ctx.save(); ctx.translate(0,-8); ctx.scale(1+j*0.28,1+j*0.28); ctx.translate(0,8);
  const headR = 27;
  ctx.fillStyle=colors.ear;
  [-1,1].forEach(dir=>{ ctx.beginPath(); ctx.arc(dir*headR*0.72,-8-headR*0.68,11,0,Math.PI*2); ctx.fill(); });
  ctx.beginPath(); ctx.arc(0,-8,headR,0,Math.PI*2); ctx.fillStyle=colors.body; ctx.fill();

  const closedEyes = asleep; const eyeY=-10, eyeDX=11;
  if(closedEyes){ ctx.strokeStyle='#3a2818'; ctx.lineWidth=2.5; ctx.lineCap='round'; [-1,1].forEach(dir=>{ ctx.beginPath(); ctx.moveTo(dir*eyeDX-6,eyeY); ctx.quadraticCurveTo(dir*eyeDX,eyeY+5,dir*eyeDX+6,eyeY); ctx.stroke(); }); }
  else { [-1,1].forEach(dir=>{ ctx.beginPath(); ctx.arc(dir*eyeDX,eyeY,5.5,0,Math.PI*2); ctx.fillStyle='#fff'; ctx.fill(); ctx.beginPath(); ctx.arc(dir*eyeDX+(annoyed?0:1),eyeY+(annoyed?1:0),3.2,0,Math.PI*2); ctx.fillStyle='#2a2018'; ctx.fill(); }); }
  if(annoyed && !closedEyes){ ctx.strokeStyle='rgba(0,0,0,0.4)'; ctx.lineWidth=2.5; [-1,1].forEach(dir=>{ ctx.beginPath(); ctx.moveTo(dir*eyeDX-8,eyeY-9); ctx.lineTo(dir*eyeDX+8,eyeY-5); ctx.stroke(); }); }

  ctx.beginPath(); ctx.ellipse(0,10,14,10,0,0,Math.PI*2); ctx.fillStyle=colors.pattern; ctx.fill();
  ctx.fillStyle='#3a2818'; ctx.beginPath(); ctx.ellipse(0,7,3.4,2.6,0,0,Math.PI*2); ctx.fill();
  ctx.strokeStyle='#3a2818'; ctx.lineWidth=2.2; ctx.lineCap='round'; ctx.beginPath();
  if(asleep){ ctx.moveTo(-5,13); ctx.lineTo(5,13); } else if(annoyed){ ctx.moveTo(-6,15); ctx.quadraticCurveTo(0,11,6,14); } else { ctx.moveTo(-6,11); ctx.quadraticCurveTo(0,16,6,11); }
  ctx.stroke();
  ctx.restore();

  drawPrestigeHalo(ctx, -52, 20, 5, opts.prestige || 0);
  drawReptileActionOverlays(ctx, baseSpecies, opts, t, 0, -18, headR, 0, 8);
  ctx.restore();
}

function drawWolfCreature(ctx, speciesKey, stage, opts={}){
  let baseSpecies = speciesKey; if(speciesKey === 'hybrid' && opts.hybridDNA) baseSpecies = opts.hybridDNA.base;
  const sp = SPECIES[baseSpecies] || SPECIES['wolf']; const colors = opts.colors || sp; const scale = STAGE_SCALE[stage]; const j = juvenile(stage);
  const asleep = opts.asleep; const sad = opts.sad; const action = opts.action; const yaw = opts.yaw || 0;
  const annoyed = sad || (action && action.type==='refuse') || (opts.prestige > 0 && !asleep);
  const t = computeSharedTransform(opts); const bounce = (asleep || action) ? 0 : Math.sin(bounceTime*1.6)*3;
  const legShrink = 1-j*0.3;

  ctx.save(); ctx.translate(180+t.extraTX, 205+bounce+t.extraTY);
  if(opts.prestige > 0 && !asleep) ctx.translate(0, -Math.abs(Math.sin(bounceTime*2)) * 10 - (opts.prestige * 5));
  ctx.rotate(t.extraRotate); ctx.scale(scale*t.extraScaleX*t.pulseScale*Math.cos(yaw), scale*t.extraScaleY*t.pulseScale);

  drawPrestigeAura(ctx, 22, 100, opts.prestige || 0);

  const tailSway = asleep?0:Math.sin(bounceTime*1.3)*4;
  ctx.beginPath(); ctx.moveTo(-30,40); ctx.quadraticCurveTo(-58,52+tailSway,-64,26+tailSway);
  ctx.lineWidth=15; ctx.strokeStyle=colors.body; ctx.lineCap='round'; ctx.stroke();
  ctx.beginPath(); ctx.arc(-64,26+tailSway,9,0,Math.PI*2); ctx.fillStyle=colors.pattern; ctx.fill();

  [[-18,44],[16,48]].forEach(([lx,ly])=>{ [-1,1].forEach(dir=>{ ctx.save(); ctx.translate(lx+dir*5,ly); ctx.beginPath(); ctx.ellipse(0,10*legShrink,7,17*legShrink,0,0,Math.PI*2); ctx.fillStyle=colors.body; ctx.fill(); ctx.restore(); }); });

  const torsoRX=34*(1-j*0.05), torsoRY=22*(1+j*0.2);
  ctx.beginPath(); ctx.ellipse(0,26,torsoRX,torsoRY,0,0,Math.PI*2); ctx.fillStyle=colors.body; ctx.fill();
  ctx.beginPath(); ctx.ellipse(0,26+torsoRY*0.25,torsoRX*0.5,torsoRY*0.5,0,0,Math.PI*2); ctx.fillStyle=colors.pattern; ctx.fill();

  ctx.save(); ctx.translate(0,-4); ctx.scale(1+j*0.26,1+j*0.26); ctx.translate(0,4);
  const headR=23;
  ctx.fillStyle=colors.ear;
  [-1,1].forEach(dir=>{ ctx.beginPath(); ctx.moveTo(dir*headR*0.6,-4-headR*0.6); ctx.lineTo(dir*headR*1.1,-4-headR*1.5); ctx.lineTo(dir*headR*0.2,-4-headR*0.9); ctx.closePath(); ctx.fill(); });
  ctx.beginPath(); ctx.arc(0,-4,headR,0,Math.PI*2); ctx.fillStyle=colors.body; ctx.fill();

  const closedEyes=asleep; const eyeY=-6, eyeDX=10;
  if(closedEyes){ ctx.strokeStyle='#3a3a40'; ctx.lineWidth=2.5; ctx.lineCap='round'; [-1,1].forEach(dir=>{ ctx.beginPath(); ctx.moveTo(dir*eyeDX-6,eyeY); ctx.quadraticCurveTo(dir*eyeDX,eyeY+5,dir*eyeDX+6,eyeY); ctx.stroke(); }); }
  else { [-1,1].forEach(dir=>{ ctx.beginPath(); ctx.ellipse(dir*eyeDX,eyeY,5.5,7,0,0,Math.PI*2); ctx.fillStyle='#ffd23f'; ctx.fill(); ctx.fillStyle='#2a2a30'; ctx.fillRect(dir*eyeDX-1.4,eyeY-4.5,2.8,9); }); }
  if(annoyed && !closedEyes){ ctx.strokeStyle='rgba(0,0,0,0.4)'; ctx.lineWidth=2.5; [-1,1].forEach(dir=>{ ctx.beginPath(); ctx.moveTo(dir*eyeDX-8,eyeY-9); ctx.lineTo(dir*eyeDX+8,eyeY-5); ctx.stroke(); }); }

  ctx.beginPath(); ctx.ellipse(0,10,11,8,0,0,Math.PI*2); ctx.fillStyle=colors.pattern; ctx.fill();
  ctx.fillStyle='#2a2a30'; ctx.beginPath(); ctx.ellipse(0,7,2.8,2.2,0,0,Math.PI*2); ctx.fill();
  ctx.strokeStyle='#2a2a30'; ctx.lineWidth=2; ctx.lineCap='round'; ctx.beginPath();
  if(asleep){ ctx.moveTo(-4,12); ctx.lineTo(4,12); } else if(annoyed){ ctx.moveTo(-6,14); ctx.quadraticCurveTo(0,9,6,13); } else { ctx.moveTo(-6,10); ctx.quadraticCurveTo(0,15,6,10); }
  ctx.stroke();
  ctx.restore();

  if(!asleep && Math.sin(bounceTime*0.6)>0.9){ ctx.save(); ctx.globalAlpha=0.6; ctx.font='14px sans-serif'; ctx.fillText('🎵', 18, -30); ctx.restore(); }

  drawPrestigeHalo(ctx, -46, 18, 5, opts.prestige || 0);
  drawReptileActionOverlays(ctx, baseSpecies, opts, t, 0, -12, headR, 0, 10);
  ctx.restore();
}

function drawNightDragonCreature(ctx, speciesKey, stage, opts={}){
  let baseSpecies = speciesKey; if(speciesKey === 'hybrid' && opts.hybridDNA) baseSpecies = opts.hybridDNA.base;
  const sp = SPECIES[baseSpecies] || SPECIES['nightdragon']; const colors = opts.colors || sp; const scale = STAGE_SCALE[stage]; const j = juvenile(stage);
  const asleep = opts.asleep; const sad = opts.sad; const action = opts.action; const yaw = opts.yaw || 0;
  const annoyed = sad || (action && action.type==='refuse') || (opts.prestige > 0 && !asleep);
  const t = computeSharedTransform(opts); const bounce = (asleep || action) ? 0 : Math.sin(bounceTime*1.8)*3;

  ctx.save(); ctx.translate(180+t.extraTX, 205+bounce+t.extraTY);
  if(opts.prestige > 0 && !asleep) ctx.translate(0, -Math.abs(Math.sin(bounceTime*2)) * 10 - (opts.prestige * 5));
  ctx.rotate(t.extraRotate); ctx.scale(scale*t.extraScaleX*t.pulseScale*Math.cos(yaw), scale*t.extraScaleY*t.pulseScale);

  drawPrestigeAura(ctx, 20, 95, opts.prestige || 0);

  ctx.beginPath(); ctx.moveTo(20,44); ctx.quadraticCurveTo(46,54,50,34); ctx.lineWidth=9; ctx.strokeStyle=colors.body; ctx.lineCap='round'; ctx.stroke();
  ctx.save(); ctx.translate(50,34); ctx.rotate(-0.4); ctx.beginPath(); ctx.moveTo(0,-9); ctx.lineTo(13,0); ctx.lineTo(0,9); ctx.lineTo(4,0); ctx.closePath(); ctx.fillStyle=colors.pattern; ctx.fill(); ctx.restore();

  const wingTwitch = asleep?0:Math.sin(bounceTime*2)*0.05;
  [-1,1].forEach(dir=>{ ctx.save(); ctx.translate(dir*22,4); ctx.rotate(dir*(0.5+wingTwitch)); ctx.beginPath(); ctx.moveTo(0,0); ctx.quadraticCurveTo(dir*30,-18,dir*36,8); ctx.quadraticCurveTo(dir*18,4,0,0); ctx.closePath(); ctx.fillStyle=colors.pattern; ctx.globalAlpha=0.85; ctx.fill(); ctx.globalAlpha=1; ctx.restore(); });

  [-1,1].forEach(dir=>{ ctx.beginPath(); ctx.ellipse(dir*14,50,8,11,0,0,Math.PI*2); ctx.fillStyle=colors.body; ctx.fill(); });

  const torsoRX=27*(1-j*0.05), torsoRY=30*(1+j*0.18);
  ctx.beginPath(); ctx.ellipse(0,28,torsoRX,torsoRY,0,0,Math.PI*2); ctx.fillStyle=colors.body; ctx.fill();

  ctx.fillStyle=colors.pattern;
  [-14,-2,10].forEach((sy)=>{ ctx.beginPath(); ctx.moveTo(-4,28+sy*0.4); ctx.lineTo(0,28+sy*0.4-8); ctx.lineTo(4,28+sy*0.4); ctx.closePath(); ctx.fill(); });

  ctx.save(); ctx.translate(0,-8); ctx.scale(1+j*0.28,1+j*0.28); ctx.translate(0,8);
  const headR=24;
  ctx.fillStyle=colors.ear;
  [-1,1].forEach(dir=>{ ctx.beginPath(); ctx.moveTo(dir*headR*0.55,-8-headR*0.75); ctx.lineTo(dir*headR*1.05,-8-headR*1.15); ctx.lineTo(dir*headR*0.2,-8-headR*0.95); ctx.closePath(); ctx.fill(); });
  ctx.beginPath(); ctx.arc(0,-8,headR,0,Math.PI*2); ctx.fillStyle=colors.body; ctx.fill();

  const closedEyes=asleep; const eyeY=-10, eyeDX=10;
  if(closedEyes){ ctx.strokeStyle='#1a1a20'; ctx.lineWidth=2.5; ctx.lineCap='round'; [-1,1].forEach(dir=>{ ctx.beginPath(); ctx.moveTo(dir*eyeDX-6,eyeY); ctx.quadraticCurveTo(dir*eyeDX,eyeY+5,dir*eyeDX+6,eyeY); ctx.stroke(); }); }
  else {
    [-1,1].forEach(dir=>{
      ctx.beginPath(); ctx.ellipse(dir*eyeDX,eyeY,7,8,0,0,Math.PI*2); ctx.fillStyle=colors.pattern; ctx.fill();
      ctx.beginPath(); ctx.ellipse(dir*eyeDX+(annoyed?0:1),eyeY+(annoyed?1:0),2,6.5,0,0,Math.PI*2); ctx.fillStyle='#0a1005'; ctx.fill();
    });
  }
  if(annoyed && !closedEyes){ ctx.strokeStyle='rgba(0,0,0,0.5)'; ctx.lineWidth=2.5; [-1,1].forEach(dir=>{ ctx.beginPath(); ctx.moveTo(dir*eyeDX-9,eyeY-11); ctx.lineTo(dir*eyeDX+9,eyeY-6); ctx.stroke(); }); }

  ctx.strokeStyle='#1a1a20'; ctx.lineWidth=2.2; ctx.lineCap='round'; ctx.beginPath();
  if(asleep){ ctx.moveTo(-5,7); ctx.lineTo(5,7); } else if(annoyed){ ctx.moveTo(-7,10); ctx.quadraticCurveTo(0,5,7,9); } else { ctx.moveTo(-7,5); ctx.quadraticCurveTo(0,12,7,5); }
  ctx.stroke();
  if(!asleep && !annoyed && Math.sin(bounceTime*3)>0.7){ ctx.fillStyle='#fff'; ctx.beginPath(); ctx.moveTo(-3,7); ctx.lineTo(-1,12); ctx.lineTo(1,7); ctx.closePath(); ctx.fill(); ctx.beginPath(); ctx.moveTo(3,7); ctx.lineTo(1,12); ctx.lineTo(-1,7); ctx.closePath(); ctx.fill(); }
  ctx.restore();

  drawPrestigeHalo(ctx, -48, 18, 5, opts.prestige || 0);
  drawReptileActionOverlays(ctx, baseSpecies, opts, t, 0, -18, headR, 0, 6);
  ctx.restore();
}

/* ---------- Events & Actions ---------- */
function setupPetDrag(){
  const canvas = document.getElementById('canvas-pet'); if(!canvas) return;
  canvas.addEventListener('pointerdown', (e)=>{ if(!state || state.phase !== 'pet') return; isDraggingPet = true; dragStartX = e.clientX; dragStartYaw = petYawTarget; try{ canvas.setPointerCapture(e.pointerId); }catch(err){} const rh = document.getElementById('rotateHint'); if(rh) rh.classList.add('hidden'); });
  canvas.addEventListener('pointermove', (e)=>{ if(!isDraggingPet) return; const dx = e.clientX - dragStartX; petYawTarget = Math.max(-YAW_MAX, Math.min(YAW_MAX, dragStartYaw + dx*0.012)); });
  ['pointerup','pointercancel','pointerleave'].forEach(evt=>{ canvas.addEventListener(evt, ()=>{ isDraggingPet = false; }); });
}

function spawnSparkles(n=6){ const layer = document.getElementById('bubbleLayer'); if(!layer) return; for(let i=0;i<n;i++){ setTimeout(()=>{ const s = document.createElement('div'); s.className='sparkle'; s.textContent = ['✨','⭐','💫'][Math.floor(Math.random()*3)]; s.style.left = (35+Math.random()*30)+'%'; s.style.bottom = (30+Math.random()*20)+'%'; layer.appendChild(s); setTimeout(()=>s.remove(),1000); }, i*70); } }
function spawnEmojiBurst(emoji, n=6){ const layer = document.getElementById('bubbleLayer'); if(!layer) return; for(let i=0;i<n;i++){ setTimeout(()=>{ const s = document.createElement('div'); s.className='sparkle'; s.textContent = emoji; s.style.left = (15+Math.random()*70)+'%'; s.style.bottom = (25+Math.random()*35)+'%'; layer.appendChild(s); setTimeout(()=>s.remove(),1000); }, i*90); } }
function spawnBubbles(n=10){ const layer = document.getElementById('bubbleLayer'); if(!layer) return; for(let i=0;i<n;i++){ setTimeout(()=>{ const b = document.createElement('div'); b.className='bubble'; const size = 6+Math.random()*14; b.style.width = size+'px'; b.style.height = size+'px'; b.style.left = (20+Math.random()*60)+'%'; b.style.animationDuration = (1+Math.random()*0.8)+'s'; layer.appendChild(b); setTimeout(()=>b.remove(),1900); }, i*60); } }

function showScreen(name){
  if(name !== 'slots' && name !== 'shop' && name !== 'meetup' && name !== 'meetupSelect') lastNonSlotScreen = name;
  Object.entries(el.screens).forEach(([k,node])=>{ 
    if(node) {
      node.classList.toggle('hidden', k !== name);
      node.style.display = (k === name) ? 'flex' : 'none'; 
    }
  });
  const act = document.getElementById('actions'); 
  if(act) {
    act.classList.toggle('hidden', name !== 'pet');
    act.style.display = (name === 'pet') ? 'flex' : 'none';
  }
}

/* ---------- Stat update / decay ---------- */
function clamp(v){ return Math.max(0, Math.min(100, v)); }

function updateGrowth(hours){
  if(hours <= 0 || !state) return; let mult = 1;
  if(state.stats.happiness >= 90) mult = 1.4; else if(state.stats.happiness >= 70) mult = 1.15;
  mult *= Math.pow(1.1, state.prestige || 0);
  state.growthProgress = (state.growthProgress||0) + hours*mult;
}

function applyElapsed(){
  if(!state) state = defaultState();
  if(state.phase !== 'pet') { state.lastUpdate = Date.now(); return; }
  const now = Date.now(); const hours = (now - state.lastUpdate) / 3600000; if(hours <= 0) return;
  const prestigeDecayFactor = Math.pow(0.85, state.prestige || 0); const s = state.stats;
  if(state.sleeping){
    s.energy = clamp(s.energy + SLEEP_ENERGY_GAIN_PER_HOUR*hours);
    s.hunger = clamp(s.hunger - DECAY_PER_HOUR.hunger*hours*SLEEP_DECAY_FACTOR*prestigeDecayFactor);
    s.hygiene = clamp(s.hygiene - DECAY_PER_HOUR.hygiene*hours*SLEEP_DECAY_FACTOR*prestigeDecayFactor);
    s.happiness = clamp(s.happiness - DECAY_PER_HOUR.happiness*hours*SLEEP_DECAY_FACTOR*prestigeDecayFactor);
  } else {
    s.hunger = clamp(s.hunger - DECAY_PER_HOUR.hunger*hours*prestigeDecayFactor);
    s.energy = clamp(s.energy - DECAY_PER_HOUR.energy*hours*prestigeDecayFactor);
    s.hygiene = clamp(s.hygiene - DECAY_PER_HOUR.hygiene*hours*prestigeDecayFactor);
    if(state.pacifier) {
      s.happiness = clamp(s.happiness + PACIFIER_HAPPINESS_PER_HOUR*hours);
    } else {
      let happinessDrop = DECAY_PER_HOUR.happiness*hours*prestigeDecayFactor;
      if(s.hunger<25 || s.hygiene<25 || s.energy<20) happinessDrop *= 1.6;
      s.happiness = clamp(s.happiness - happinessDrop);
    }
  }
  updateGrowth(hours); state.lastUpdate = now;
}

function refreshStatBars(){
  if(!state) return;
  Object.entries(el.fills).forEach(([key,node])=>{
    if(!node) return;
    const v = Math.round(state.stats[key]*10)/10; const vRounded = Math.round(v);
    node.style.width = vRounded+'%'; node.classList.toggle('bad', vRounded<25); node.classList.toggle('mid', vRounded>=25 && vRounded<55);
    if(el.nums[key]) el.nums[key].textContent = v.toFixed(1)+'%';
  });
}

function isNeedy(){ if(!state) return false; const s = state.stats; return s.hunger<25 || s.hygiene<25 || s.happiness<25 || s.energy<15; }

/* ---------- Actions ---------- */
function doPrestige(){
  if(!state) return;
  if(state.sleeping) return toast('Zzz... sover nå 💤'); if(getStage() !== 'adult') return toast('Kjæledyret må være fullvoksent først! 🚫'); if(getGlobalCoins() < 100) return toast('Det koster 100 mynter! 🪙');
  addGlobalCoins(-100); state.prestige = (state.prestige || 0) + 1; state.stats.hunger = 100; state.stats.energy = 100; state.stats.hygiene = 100; state.stats.happiness = 100;
  triggerAction('jump'); SFX.prestige(); spawnSparkles(20); spawnEmojiBurst('✨', 10); toast(`PRESTIGE ${state.prestige}! Mye tøffere nå! ✨`); saveState(); refreshCoinUI(); refreshStatBars();
}
function doFeed(){
  if(!state) return;
  if(state.sleeping) return toast('Zzz... sover nå 💤'); if(state.pacifier) return toast('Har smokk i munnen 🍼'); if(currentAction) return; if(state.stats.hunger >= FULL_HUNGER_THRESHOLD){ triggerAction('refuse'); SFX.refuse(); toast('Stappmett! Vil ikke ha mer 🙅'); return; }
  triggerAction('eat'); SFX.eat(); state.stats.hunger = clamp(state.stats.hunger+30); state.stats.happiness = clamp(state.stats.happiness+8); state.growthProgress = (state.growthProgress||0) + GROWTH_ACTION_BONUS; earnCoins(3); saveState(); setTimeout(()=>{ toast('Nam nam, godt mett! 😋'); spawnSparkles(5); }, ACTION_DURATIONS.eat*0.72);
}
function doPlay(){
  if(!state) return;
  if(state.sleeping) return toast('Zzz... sover nå 💤'); if(currentAction) return; if(state.stats.energy < 10) return toast('For sliten til å leke 😴');
  const variant = PLAY_VARIANTS[Math.floor(Math.random()*PLAY_VARIANTS.length)]; triggerAction('play', variant.key); SFX.play(variant.key); spawnEmojiBurst(variant.emoji); state.stats.happiness = clamp(state.stats.happiness+25); state.stats.energy = clamp(state.stats.energy-7); state.stats.hunger = clamp(state.stats.hunger-8); state.growthProgress = (state.growthProgress||0) + GROWTH_ACTION_BONUS; earnCoins(4); toast('Så gøy! '+variant.emoji); saveState();
}
function doWash(){
  if(!state) return;
  if(state.sleeping) return toast('Zzz... sover nå 💤'); if(currentAction) return;
  triggerAction('wash'); SFX.washStart(); spawnBubbles(14); state.stats.hygiene = clamp(state.stats.hygiene+40); state.stats.happiness = clamp(state.stats.happiness+5); earnCoins(3); saveState(); setTimeout(()=>{ toast('Skinnende ren! 🧼✨'); }, ACTION_DURATIONS.wash*0.8);
}
function doJump(){
  if(!state) return;
  if(state.sleeping) return toast('Zzz... sover nå 💤'); if(currentAction) return; if(state.stats.energy < 8) return toast('For sliten til å hoppe 😴');
  triggerAction('jump'); SFX.jump(); spawnEmojiBurst('✨', 4); state.stats.happiness = clamp(state.stats.happiness+14); state.stats.energy = clamp(state.stats.energy-6); state.stats.hunger = clamp(state.stats.hunger-6); state.growthProgress = (state.growthProgress||0) + GROWTH_ACTION_BONUS; earnCoins(2); toast('Hopp hopp! 🤸'); saveState();
}
function doCycle(){
  if(!state) return;
  if(state.sleeping) return toast('Zzz... sover nå 💤'); if(currentAction) return; if(state.stats.energy < 15) return toast('For sliten til å sykle 😴');
  triggerAction('cycle'); SFX.cycle(); spawnEmojiBurst('🚲', 4); state.stats.happiness = clamp(state.stats.happiness+22); state.stats.energy = clamp(state.stats.energy-14); state.stats.hygiene = clamp(state.stats.hygiene-10); state.stats.hunger = clamp(state.stats.hunger-12); state.growthProgress = (state.growthProgress||0) + GROWTH_ACTION_BONUS*1.3; earnCoins(4); toast('Sykkeltur! 🚲'); saveState();
}
function doBrushTeeth(){
  if(!state) return;
  if(state.sleeping) return toast('Zzz... sover nå 💤'); if(state.pacifier) return toast('Har smokk i munnen 🍼'); if(currentAction) return;
  triggerAction('brush'); SFX.brush(); state.stats.hygiene = clamp(state.stats.hygiene+22); state.stats.happiness = clamp(state.stats.happiness+5); earnCoins(2); saveState(); setTimeout(()=>{ toast('Skinnende rene tenner! 🪥✨'); spawnSparkles(4); }, ACTION_DURATIONS.brush*0.7);
}
function doDrive(){
  if(!state) return;
  if(state.sleeping) return toast('Zzz... sover nå 💤'); if(currentAction) return; if(getStage() !== 'adult') return toast('For lite til å kjøre bil ennå 🚗');
  triggerAction('drive'); SFX.drive(); spawnEmojiBurst('💨', 4); state.stats.happiness = clamp(state.stats.happiness+18); state.stats.energy = clamp(state.stats.energy-8); state.stats.hunger = clamp(state.stats.hunger-6); earnCoins(5); toast('Kjører en tur! 🚗'); saveState(); setTimeout(()=>{ toast('Så gøy tur det var! 🎉'); }, ACTION_DURATIONS.drive-400);
}
function drawCarBody(ctx, progress){
  const wheelRot = progress*Math.PI*16; ctx.save(); ctx.translate(180, 258); ctx.strokeStyle='rgba(255,255,255,0.55)'; ctx.lineWidth=3; ctx.lineCap='round';
  for(let i=0;i<4;i++){ const ly = -22+i*15; const wobble = (progress*420) % 60; ctx.beginPath(); ctx.moveTo(-135-wobble, ly); ctx.lineTo(-165-wobble, ly); ctx.stroke(); ctx.beginPath(); ctx.moveTo(135+wobble, ly); ctx.lineTo(165+wobble, ly); ctx.stroke(); }
  ctx.fillStyle='#e0555f'; ctx.beginPath(); ctx.moveTo(-92,22); ctx.quadraticCurveTo(-92,-32,-48,-38); ctx.lineTo(48,-38); ctx.quadraticCurveTo(92,-32,92,22); ctx.lineTo(92,42); ctx.lineTo(-92,42); ctx.closePath(); ctx.fill(); ctx.strokeStyle='rgba(0,0,0,0.15)'; ctx.lineWidth=2; ctx.stroke();
  ctx.fillStyle='rgba(200,230,255,0.65)'; ctx.beginPath(); ctx.moveTo(-42,-35); ctx.lineTo(42,-35); ctx.lineTo(32,2); ctx.lineTo(-32,2); ctx.closePath(); ctx.fill();
  [-56,56].forEach(wx=>{ ctx.save(); ctx.translate(wx, 42); ctx.rotate(wheelRot); ctx.beginPath(); ctx.arc(0,0,19,0,Math.PI*2); ctx.fillStyle='#2a2a2a'; ctx.fill(); ctx.strokeStyle='#999'; ctx.lineWidth=2.5; for(let s=0;s<4;s++){ ctx.beginPath(); ctx.moveTo(-19,0); ctx.lineTo(19,0); ctx.stroke(); ctx.rotate(Math.PI/4); } ctx.beginPath(); ctx.arc(0,0,4,0,Math.PI*2); ctx.fillStyle='#ccc'; ctx.fill(); ctx.restore(); }); ctx.restore();
}
function doDino(){
  if(!state) return;
  if(state.sleeping) return toast('Zzz... sover nå 💤'); if(currentAction) return;
  triggerAction('dino'); SFX.dinoRoar(); spawnEmojiBurst('🦖', 3); state.stats.happiness = clamp(state.stats.happiness+20); state.stats.energy = clamp(state.stats.energy-6); earnCoins(5); toast('Ri på dinosaur! 🦖'); saveState(); setTimeout(()=>{ toast('For en tur på dinosaur! 🌴'); }, ACTION_DURATIONS.dino-400);
}
function drawDinoBody(ctx, progress){
  const walk = Math.sin(progress*Math.PI*8); ctx.save(); ctx.translate(180, 265+Math.abs(walk)*3); ctx.strokeStyle='rgba(120,90,50,0.35)'; ctx.lineWidth=3; ctx.lineCap='round';
  for(let i=0;i<3;i++){ const dx = -70+i*70; const wobble=(progress*260)%40; ctx.beginPath(); ctx.moveTo(dx-wobble, 58); ctx.lineTo(dx-14-wobble, 58); ctx.stroke(); }
  ctx.fillStyle='#3f9d4a'; ctx.beginPath(); ctx.moveTo(-70,10); ctx.quadraticCurveTo(-140,-6+walk*3,-165,-20+walk*4); ctx.quadraticCurveTo(-140,14,-70,34); ctx.closePath(); ctx.fill();
  [1,-1].forEach(side=>{ ctx.save(); ctx.translate(30*side, 30); ctx.rotate(side*walk*0.25); ctx.fillStyle='#3a8f45'; ctx.beginPath(); ctx.moveTo(-14,0); ctx.lineTo(14,0); ctx.lineTo(10,45); ctx.lineTo(-10,45); ctx.closePath(); ctx.fill(); ctx.fillStyle='#2f7a39'; ctx.beginPath(); ctx.ellipse(0,47,13,7,0,0,Math.PI*2); ctx.fill(); ctx.restore(); });
  ctx.fillStyle='#4caf50'; ctx.beginPath(); ctx.ellipse(0,0,78,44,0,0,Math.PI*2); ctx.fill(); ctx.fillStyle='#eaf7e0'; ctx.beginPath(); ctx.ellipse(6,20,48,20,0,0,Math.PI*2); ctx.fill(); ctx.fillStyle='#2f7a39';
  for(let i=0;i<5;i++){ const sx=-60+i*30, sy=-32+Math.sin(i)*3; ctx.beginPath(); ctx.moveTo(sx-8,sy+8); ctx.lineTo(sx,sy-14); ctx.lineTo(sx+8,sy+8); ctx.closePath(); ctx.fill(); }
  [1,-1].forEach(side=>{ ctx.save(); ctx.translate(46*side, 6); ctx.rotate(side*0.3); ctx.fillStyle='#3f9d4a'; ctx.beginPath(); ctx.ellipse(0,0,8,18,0,0,Math.PI*2); ctx.fill(); ctx.restore(); });
  ctx.save(); ctx.translate(88,-16); ctx.rotate(walk*0.05); ctx.fillStyle='#4caf50'; ctx.beginPath(); ctx.ellipse(0,0,34,26,0,0,Math.PI*2); ctx.fill(); ctx.fillStyle='#eaf7e0'; ctx.beginPath(); ctx.moveTo(-6,10); ctx.quadraticCurveTo(24,16,30,4+Math.abs(walk)*6); ctx.quadraticCurveTo(14,20,-6,20); ctx.closePath(); ctx.fill(); ctx.fillStyle='#fff';
  for(let t=0;t<3;t++){ ctx.beginPath(); ctx.moveTo(6+t*8,12); ctx.lineTo(9+t*8,17); ctx.lineTo(3+t*8,17); ctx.closePath(); ctx.fill(); } ctx.fillStyle='#1c1c1c'; ctx.beginPath(); ctx.arc(6,-10,4,0,Math.PI*2); ctx.fill(); ctx.restore(); ctx.restore();
}
function doToilet(){
  if(!state) return;
  if(state.sleeping) return toast('Zzz... sover nå 💤'); if(state.pacifier) return toast('Har smokk i munnen 🍼'); if(currentAction) return;
  triggerAction('toilet'); SFX.fart(); spawnEmojiBurst('💨', 4); state.stats.happiness = clamp(state.stats.happiness+10); state.stats.hygiene = clamp(state.stats.hygiene-8); earnCoins(2); toast('Fiiuu, mye bedre! 💨'); saveState();
}
function drawToiletOverlay(ctx, progress){
  ctx.save(); ctx.translate(180, 250); ctx.fillStyle='#e8eef2'; ctx.fillRect(-46,-10,92,26); ctx.fillStyle='#d4dde3'; ctx.fillRect(-30,-38,60,30); ctx.fillStyle='#fff'; ctx.beginPath(); ctx.ellipse(0,16,40,18,0,0,Math.PI*2); ctx.fill(); ctx.strokeStyle='rgba(0,0,0,0.12)'; ctx.lineWidth=2; ctx.stroke();
  const puffCount = 4; for(let i=0;i<puffCount;i++){ const p = (progress + i/puffCount) % 1; const alpha = Math.sin(p*Math.PI); ctx.globalAlpha = Math.max(0, alpha*0.8); ctx.font = `${18+p*14}px sans-serif`; ctx.fillText('💨', 30+i*8-20*p, -40-p*40); } ctx.globalAlpha = 1; ctx.restore();
}
function doTogglePacifier(){ if(!state) return; state.pacifier = !state.pacifier; if(state.pacifier){ SFX.pacifierIn(); toast('God og rolig 🍼'); } else { SFX.pacifierOut(); toast('Smokk ut!'); } saveState(); refreshPacifierUI(); }
function refreshPacifierUI(){ const btn = document.getElementById('btn-pacifier'); if(btn && state) btn.classList.toggle('activeToggle', !!state.pacifier); }
function doToggleSleep(){ if(!state) return; state.sleeping = !state.sleeping; if(state.sleeping){ SFX.sleep(); toast('God natt 🌙'); } else { SFX.wake(); toast('God morgen! ☀️'); } saveState(); refreshSleepUI(); }
function refreshSleepUI(){ const overlay = document.getElementById('sleepOverlay'); if(overlay && state) { overlay.classList.toggle('hidden', !state.sleeping); overlay.textContent = state.sleeping ? '💤' : ''; } }

/* ---------- Main loop ---------- */
function tick(){
  if (!state) state = defaultState();
  animFrame++; bounceTime += 0.03; blinkPhase = (blinkPhase+0.01) % 1;
  if(!isDraggingPet) petYawTarget *= 0.93; petYaw += (petYawTarget - petYaw) * 0.25;

  if(Date.now() - lastIncomeTick > INCOME_CHECK_INTERVAL){
    lastIncomeTick = Date.now();
    const earned = collectPassiveIncome();
    if(earned > 0) refreshCoinUI();
  }

  if(state.phase === 'pet'){
    applyElapsed(); refreshStatBars(); const stage = getStage();
    if(lastStageSeen && stage !== lastStageSeen){ SFX.grow(); toast(`${SPECIES[state.species] ? SPECIES[state.species].name : 'Hybriden'} har vokst! 🌱`); spawnSparkles(14); growthPulseUntil = performance.now() + 700; }
    lastStageSeen = stage;

    if(!state.sleeping && !getActionProgress() && Date.now() > nextIdleReactionAt){
      nextIdleReactionAt = Date.now() + 25000 + Math.random()*35000;
      const s = state.stats;
      let emoji = '💭';
      if(s.happiness >= 75) emoji = ['💖','✨','😊'][Math.floor(Math.random()*3)];
      else if(s.hunger <= 40) emoji = '🍽️';
      else if(s.energy <= 30) emoji = '😴';
      else if(s.hygiene <= 40) emoji = '💦';
      else emoji = ['👀','💭','🎶'][Math.floor(Math.random()*3)];
      spawnEmojiBurst(emoji, 1);
    }

    const canvas = document.getElementById('canvas-pet');
    if(canvas) {
      if(canvas.width !== 360) canvas.width = 360; 
      if(canvas.height !== 360) canvas.height = 360;
      
      const ctx = canvas.getContext('2d'); ctx.clearRect(0,0,canvas.width, canvas.height);
      const currentActionProgress = getActionProgress();
      if(currentActionProgress && currentActionProgress.type==='drive') drawCarBody(ctx, currentActionProgress.progress);
      if(currentActionProgress && currentActionProgress.type==='dino') drawDinoBody(ctx, currentActionProgress.progress);

      drawCreature(ctx, state.species, stage, { sad:isNeedy(), asleep:state.sleeping, pacifier:state.pacifier, action:currentActionProgress, yaw:petYaw, equipped:state.equipped, prestige: state.prestige || 0, colors: state.colors, hybridDNA: state.hybridDNA });
      if(currentActionProgress && currentActionProgress.type==='toilet') drawToiletOverlay(ctx, currentActionProgress.progress);
    }

    let nameLabel = `${displayName(state)} • ${STAGE_LABELS[stage]}`; if (state.prestige > 0) nameLabel += ` 🔥${state.prestige}`;
    const pNameEl = document.getElementById('petName');
    if(pNameEl) pNameEl.textContent = nameLabel;
    
    const hours = state.birthTime ? (Date.now()-state.birthTime)/3600000 : 0;
    const aLabelEl = document.getElementById('ageLabel');
    if(aLabelEl) aLabelEl.textContent = formatAge(hours);

    refreshSleepUI(); refreshPacifierUI(); refreshCoinUI(); refreshRoomDecor();
    const bSleep = document.getElementById('btn-sleep');
    if(bSleep) { bSleep.querySelector('.icon').textContent = state.sleeping ? '☀️' : '💤'; bSleep.querySelector('.label').textContent = state.sleeping ? 'Våkne' : 'Sov'; }
    
    const bDrive = document.getElementById('btn-drive'), bPres = document.getElementById('btn-prestige');
    if(bDrive) bDrive.style.display = stage !== 'adult' ? 'none' : 'flex';
    if(bPres) bPres.style.display = stage !== 'adult' ? 'none' : 'flex';

    if(Date.now() - lastEnvUpdate > 30000){ updateEnvironment(); updateClock(); lastEnvUpdate = Date.now(); }
  } else if (state.phase === 'egg') {
    const nameLbl = document.getElementById('eggNameLabel');
    if(nameLbl) nameLbl.textContent = state.species === 'hybrid' ? `Kanskje en ${displayName(state)}?` : `Ruger på en ${displayName(state)}`;
    const lbl = document.getElementById('eggTimerLabel');
    if(lbl) {
      if (state.hatchReadyAt && Date.now() < state.hatchReadyAt) {
        const diff = state.hatchReadyAt - Date.now(); const h = Math.floor(diff / 3600000); const m = Math.floor((diff % 3600000) / 60000);
        lbl.textContent = `Klekker om: ${h}t ${m}m`;
      } else { lbl.textContent = 'Klar! Trykk på egget for å klekke!'; }
    }
  }

  const meetupScreen = document.getElementById('screen-meetup');
  if (meetupScreen && !meetupScreen.classList.contains('hidden')) { renderMeetupCanvas(); }
  requestAnimationFrame(tick);
}

/* ---------- Age display & clock ---------- */
function formatAge(hours){
  const totalMonths = hours/2; const years = Math.floor(totalMonths/12); const months = Math.floor(totalMonths%12);
  if(years > 0) return months>0 ? `${years} år ${months} mnd` : `${years} år`; if(months > 0) return `${months} mnd gammel`;
  const minutes = Math.floor(hours*60); return `${minutes} min gammel`;
}
function updateClock(){
  const now = new Date(); const hour = now.getHours(); const isDay = hour>=6 && hour<20; const hh = String(hour).padStart(2,'0'); const mm = String(now.getMinutes()).padStart(2,'0');
  const cLbl = document.getElementById('clockLabel'); if(cLbl) cLbl.textContent = `${isDay?'☀️':'🌙'} ${hh}:${mm}`;
}
function refreshRoomDecor(){
  if(!state) return;
  const eq = state.equipped || {};
  const rp = document.getElementById('roomPlant'), rp2 = document.getElementById('roomPlant2'), rpst = document.getElementById('roomPoster'), rl = document.getElementById('roomLamp'), rc = document.getElementById('roomClock');
  if(rp) rp.classList.toggle('hidden', eq.plant !== 'plant'); if(rp2) rp2.classList.toggle('hidden', eq.plant2 !== 'plant2');
  if(rpst) rpst.classList.toggle('hidden', eq.poster !== 'poster'); if(rl) rl.classList.toggle('hidden', eq.lamp !== 'lamp');
  if(rc) rc.classList.toggle('hidden', eq.clock !== 'clock');
}

/* ---------- Init ---------- */
function init(){
  if (!state) state = defaultState(); 
  
  ensureNewElementsExist(); buildEggGrid(); setupPetDrag();

  if (!document.getElementById('btn-prestige')) {
    const act = document.getElementById('actions');
    if(act) {
      const pBtn = document.createElement('div'); pBtn.id = 'btn-prestige'; pBtn.className = 'actionBtn';
      pBtn.innerHTML = '<div class="icon">✨</div><div class="label">Prestige</div>'; act.appendChild(pBtn); el.btnPrestige = pBtn; pBtn.addEventListener('click', doPrestige);
    }
  }

  if (!document.getElementById('btn-breed')) {
    const sm = document.getElementById('screen-meetup');
    if(sm) {
      const bBtn = document.createElement('button'); bBtn.id = 'btn-breed';
      bBtn.style.cssText = 'position:absolute; bottom:20px; left:50%; transform:translateX(-50%); padding:12px 24px; font-size:16px; border-radius:20px; border:none; background:#ff477e; color:white; font-weight:bold; cursor:pointer; box-shadow:0 4px 6px rgba(0,0,0,0.3); z-index:10; display:none;';
      bBtn.innerHTML = '🧬 Lag hybrid-egg (100 🪙)'; sm.appendChild(bBtn); el.btnBreed = bBtn; bBtn.addEventListener('click', doBreed);
    }
  }

  const btnConf = document.getElementById('btn-confirmSelect');
  if(btnConf) { btnConf.addEventListener('click', ()=>{ if(!selectedSpecies) return; state.species = selectedSpecies; state.colors = null; state.hybridDNA = null; state.hatchReadyAt = null; state.phase = 'egg'; eggShakeCount = 0; saveState(); showScreen('egg'); initEggScreen(); }); }

  const bFeed = document.getElementById('btn-feed'); if(bFeed) bFeed.addEventListener('click', doFeed);
  const bPlay = document.getElementById('btn-play'); if(bPlay) bPlay.addEventListener('click', doPlay);
  const bWash = document.getElementById('btn-wash'); if(bWash) bWash.addEventListener('click', doWash);
  const bSleep = document.getElementById('btn-sleep'); if(bSleep) bSleep.addEventListener('click', doToggleSleep);
  const bJump = document.getElementById('btn-jump'); if(bJump) bJump.addEventListener('click', doJump);
  const bCycle = document.getElementById('btn-cycle'); if(bCycle) bCycle.addEventListener('click', doCycle);
  const bBrush = document.getElementById('btn-brush'); if(bBrush) bBrush.addEventListener('click', doBrushTeeth);
  const bPacifier = document.getElementById('btn-pacifier'); if(bPacifier) bPacifier.addEventListener('click', doTogglePacifier);
  const bDrive = document.getElementById('btn-drive'); if(bDrive) bDrive.addEventListener('click', doDrive);
  const bDino = document.getElementById('btn-dino'); if(bDino) bDino.addEventListener('click', doDino);
  const bToilet = document.getElementById('btn-toilet'); if(bToilet) bToilet.addEventListener('click', doToilet);

  const bRestart = document.getElementById('btn-restart'); if(bRestart) bRestart.addEventListener('click', ()=>{ renderSlotPicker(true); showScreen('slots'); });
  const bCloseSlots = document.getElementById('btn-closeSlots'); if(bCloseSlots) bCloseSlots.addEventListener('click', ()=> showScreen(lastNonSlotScreen) );
  const bMeetup = document.getElementById('btn-meetup'); if(bMeetup) bMeetup.addEventListener('click', openMeetupSelect);
  const bCloseMeetup = document.getElementById('btn-closeMeetup'); if(bCloseMeetup) bCloseMeetup.addEventListener('click', ()=>{ renderSlotPicker(true); showScreen('slots'); });

  const pName = document.getElementById('petName'); if(pName) pName.addEventListener('click', renamePet);
  const bCoins = document.getElementById('btn-coins'); if(bCoins) bCoins.addEventListener('click', ()=>{ if(state && state.phase !== 'pet'){ return toast('Ingen kjæledyr å pynte ennå 🛍️'); } renderShop(); showScreen('shop'); });
  const bCloseShop = document.getElementById('btn-closeShop'); if(bCloseShop) bCloseShop.addEventListener('click', ()=> showScreen('pet') );

  if (state) {
    applyElapsed(); updateEnvironment(); updateClock();
    const passiveEarned = collectPassiveIncome();
    refreshCoinUI();
    if(passiveEarned > 0) toast(`Mens du var borte: +${passiveEarned} 🪙 fra kjæledyrene dine! 🏠`);
    if(!activeSlot){ renderSlotPicker(false); showScreen('slots'); }
    else if(state.phase === 'pet' && state.species){ showScreen('pet'); lastStageSeen = getStage(); }
    else if(state.phase === 'egg' && state.species){ showScreen('egg'); initEggScreen(); }
    else showScreen('select');
  } else {
    renderSlotPicker(false); showScreen('slots');
  }

  requestAnimationFrame(tick);
}

document.addEventListener('DOMContentLoaded', init); window.addEventListener('beforeunload', saveState); window.addEventListener('pagehide', saveState);
document.addEventListener('visibilitychange', ()=>{ if(document.visibilityState === 'hidden') saveState(); if(document.visibilityState === 'visible') requestWakeLock(); }); setInterval(saveState, 2000);
async function requestWakeLock(){ if(!('wakeLock' in navigator)) return; try{ wakeLock = await navigator.wakeLock.request('screen'); wakeLock.addEventListener('release', ()=>{ wakeLock = null; }); } catch(e){} }
window.addEventListener('load', requestWakeLock);
const acts = document.getElementById('actions'); if(acts) acts.addEventListener('click', ()=>{ if(!wakeLock) requestWakeLock(); });
if('serviceWorker' in navigator){ window.addEventListener('load', ()=> navigator.serviceWorker.register('sw.js').catch(()=>{}) ); }