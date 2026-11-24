/* whiteboard.js — grand tableau infini : panneaux dispersés autour de l'accueil, caméra zoom-out / zoom-in, navigation, clavier */
const hero = document.querySelector('main');
const wb = document.createElement('div');
const world = document.createElement('div');

wb.id = 'wb';
world.id = 'world';
world.innerHTML = '';
wb.append(world);
document.body.prepend(wb);
world.append(hero);
hero.style.cssText += ';position:absolute;margin:0;max-width:none;flex:none;padding-left:0;padding-right:0';

const panels = {};
function fill(k) {
  const s = contentData[currentLang].sections[k];
  if (!s) return;
  const m = contentData[currentLang].meta || {};
  panels[k].innerHTML = `
    <div class="wb-head">
      <span class="wb-badge">${L(k)}</span>
      <div>
        <div class="wb-sub">Section ${s.number} · ${s.subtitle}</div>
        <h3>${s.title}</h3>
      </div>
      <button class="wb-home" onclick="closeDrawer()">Accueil</button>
    </div>
    <div class="wb-body">${s.html}</div>
    <div class="wb-foot">
      <button onclick="prevLetter()">← ${m.prev || 'Précédent'}</button>
      <button onclick="nextLetter()">${m.next || 'Suivant'} →</button>
    </div>
  `;
  const im = panels[k].querySelector('#avatar-img');
  if (im) toAscii(im);
  if (window.lucide) lucide.createIcons();
}

ORDER.forEach(k => {
  const p = document.createElement('article');
  p.className = 'wb-panel';
  p.id = 'panel-' + k;
  world.append(p);
  panels[k] = p;
  fill(k);
});

const SLOT = { M: [-1, -.55], A: [-1.1, .45], R: [.1, 1], K: [1.05, .33], O: [.95, -.6] };
function layout() {
  const HW = Math.min(980, innerWidth - 24);
  const PW = Math.min(640, innerWidth - 32);
  hero.style.width = HW + 'px';
  const hh = hero.offsetHeight;
  hero.style.left = -HW / 2 + 'px';
  hero.style.top = -hh / 2 + 'px';
  /* Les cartes réelles peuvent être plus larges que PW (le CSS .wb-card-full les force à 96vw) : on mesure leur vraie taille,
     sinon elles débordent sur l'accueil. */
  ORDER.forEach(k => { panels[k].style.width = PW + 'px'; });
  const PWm = Math.max(PW, ...ORDER.map(k => panels[k].offsetWidth));
  const PHm = Math.max(720, ...ORDER.map(k => panels[k].offsetHeight));
  const dx = HW / 2 + GAP + PWm / 2;
  const dy = hh / 2 + GAP + PHm / 2;
  ORDER.forEach(k => {
    const p = panels[k];
    const [sx, sy] = SLOT[k];
    const cx = sx * dx;
    const cy = sy * dy;
    p.style.left = cx - p.offsetWidth / 2 + 'px';
    p.style.top = cy - p.offsetHeight / 2 + 'px';
  });
}

/* ---------- Caméra : dézoome, glisse, rezoome ---------- */
let cam = { x: 0, y: 0, s: 1 }, cur = 'home', busy = false, pending = null;
const tf = c => `translate(${innerWidth / 2 - c.x * c.s}px,${innerHeight / 2 - c.y * c.s + 10}px) scale(${c.s})`;
const rect = k => {
  const e = k === 'home' ? hero : panels[k];
  return { x: e.offsetLeft + e.offsetWidth / 2, y: e.offsetTop + e.offsetHeight / 2, w: e.offsetWidth, h: e.offsetHeight };
};

function mark(k) {
  document.querySelectorAll('#wb-nav button').forEach(b => b.classList.toggle('on', b.dataset.go === k));
  ORDER.forEach(l => {
    const b = document.getElementById('btn-' + l);
    if (b) b.classList.toggle('active-letter', l === k);
  });
}

function go(k, instant) {
  if (busy && !instant) { pending = k; return; }
  cur = k;
  mark(k);
  if (k !== 'home') currentSectionKey = k;
  const r = rect(k);
  const s = Math.min(1, (innerWidth - 32) / r.w, (innerHeight - 190) / r.h);
  const to = { x: r.x, y: r.y, s };
  if (instant || RM) {
    cam = to;
    world.style.transform = tf(to);
    return;
  }
  const dist = Math.hypot(to.x - cam.x, to.y - cam.y);
  if (dist < 2 && Math.abs(to.s - cam.s) < .01) return;
  const mid = {
    x: (cam.x + to.x) / 2,
    y: (cam.y + to.y) / 2,
    s: Math.max(.08, Math.min(.45, cam.s, to.s, innerWidth * .9 / (dist + 1400)))
  };
  const from = tf(cam);
  cam = to;
  world.style.transform = tf(to);
  busy = true;
  world.animate(
    [{ transform: from }, { transform: tf(mid), offset: .42 }, { transform: tf(to) }],
    { duration: 1500, easing: 'cubic-bezier(.5,0,.2,1)' }
  ).onfinish = () => {
    busy = false;
    if (pending) {
      const p = pending;
      pending = null;
      go(p);
    }
  };
}

const step = d => go(SEQ[Math.max(0, Math.min(SEQ.length - 1, SEQ.indexOf(cur) + d))]);
window.openSection = k => go(k);
window.closeDrawer = () => go('home');
window.prevLetter = () => step(-1);
window.nextLetter = () => step(1);

const sl = window.setLanguage;
if (sl) {
  window.setLanguage = function () {
    const r = sl.apply(this, arguments);
    ORDER.forEach(fill);
    layout();
    go(cur, true);
    return r;
  };
}

const nav = document.createElement('div');
nav.id = 'wb-nav';
nav.innerHTML = SEQ.map(k => `<button data-go="${k}" onclick="openSection('${k}'==='home'?'home':'${k}')">${k === 'home' ? 'Accueil' : L(k)}</button>`).join('');
document.body.append(nav);

let drag = null;
wb.addEventListener('pointerdown', e => {
  if (busy || e.target.closest('.wb-panel,main,button,a')) return;
  drag = { x: e.clientX, y: e.clientY };
  wb.setPointerCapture(e.pointerId);
});
wb.addEventListener('pointermove', e => {
  if (!drag) return;
  cam.x -= (e.clientX - drag.x) / cam.s;
  cam.y -= (e.clientY - drag.y) / cam.s;
  drag = { x: e.clientX, y: e.clientY };
  world.style.transform = tf(cam);
});
wb.addEventListener('pointerup', () => { drag = null; });

addEventListener('keydown', e => {
  if (e.metaKey || e.ctrlKey || e.altKey || (e.target.closest('.wb-body')?.matches(':focus-within') && e.key.startsWith('Arrow'))) return;
  const k = e.key.toUpperCase();
  const kk = k === 'C' ? 'K' : k === 'K' ? '' : k;
  if (kk.length === 1 && ORDER.includes(kk)) go(kk);
  else if (e.key === 'Escape') go('home');
  else if (e.key === 'ArrowRight') step(1);
  else if (e.key === 'ArrowLeft') step(-1);
});

const re = () => { layout(); go(cur, true); };
addEventListener('resize', re);
addEventListener('load', re);
if (document.fonts) document.fonts.ready.then(re);
re();
