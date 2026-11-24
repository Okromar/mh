/* ascii-core.js — outils partagés, alphabet ASCII 5x7, lettres MARKO / CORDI animées, conversion photo -> ASCII */
const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
const START = performance.now() / 1000;   /* début de l'animation d'arrivée */
const rnd = (a, b, c) => { const s = Math.sin(a * 12.9898 + b * 78.233 + c * 37.719) * 43758.5453; return s - Math.floor(s); };
const L = k => k, ORDER = ['M', 'A', 'R', 'K', 'O'], SEQ = ['home', ...ORDER], GAP = 1500;

/* ---------- Lettres ASCII ---------- */
const F = {
  M: ['#...#', '##.##', '#.#.#', '#.#.#', '#...#', '#...#', '#...#'], A: ['.###.', '#...#', '#...#', '#####', '#...#', '#...#', '#...#'],
  R: ['####.', '#...#', '#...#', '####.', '#.#..', '#..#.', '#...#'], K: ['#...#', '#..#.', '#.#..', '##...', '#.#..', '#..#.', '#...#'],
  O: ['.###.', '#...#', '#...#', '#...#', '#...#', '#...#', '.###.'], D: ['####.', '#...#', '#...#', '#...#', '#...#', '#...#', '####.'],
  C: ['.###.', '#...#', '#....', '#....', '#....', '#...#', '.###.'],
  I: ['#####', '..#..', '..#..', '..#..', '..#..', '..#..', '#####']
};
let items = [];
const NOISE = '01#@%&*+=:/<>';
const addArt = (el, word, delay = 0) => items.push({ el, fn: t => {
  const sm = innerWidth < 640, sx = sm ? 2 : 3, sy = sm ? 1 : 2, age = RM ? 99 : t - START; let out = '';
  for (let r = 0; r < 7 * sy; r++) {
    const py = (r / sy) | 0;
    for (let i = 0; i < word.length; i++) {
      for (let c = 0; c < 5 * sx; c++) {
        const rv = delay + .2 + (c / (5 * sx)) * .45 + i * .2 + rnd(c, r + i * 5, 3) * .7;   /* instant où la cellule se "décode" */
        if (age < rv) out += rnd(c, r, (t * 14) | 0) > .5 ? NOISE[Math.floor(rnd(r, c + i, (t * 14) | 0) * NOISE.length)] : ' ';
        else if (F[word[i]][py][(c / sx) | 0] === '#') out += '@#@%'[Math.floor(rnd(c + i * 7, r, (t * 2) | 0) * 4)];
        else out += rnd(c + i * 9, r, (t * 6) | 0) > .985 ? '.' : ' ';
      }
      if (i < word.length - 1) out += sm ? '  ' : '   ';
    }
    out += '\n';
  }
  return out;
}});
ORDER.forEach((k, ki) => {
  const b = document.getElementById('btn-' + k), g = b && b.querySelector('.letter-glyph'); if (!g) return;
  b.setAttribute('aria-label', 'Section ' + k); g.setAttribute('aria-hidden', 'true');
  g.innerHTML = '<pre class="ag ag-m"></pre>'; addArt(g.firstChild, L(k), ki * .2);
});
const h1 = document.querySelector('h1');
if (h1) { h1.setAttribute('aria-label', 'Cordi'); h1.className = 'mt-0'; h1.innerHTML = '<pre class="ag ag-k"></pre>'; addArt(h1.firstChild, 'CORDI', 1); }


const IR = '@%#*+=-:. ';
function toAscii(img) {
  const go = () => { try {
    const cc = 60, rr = Math.max(8, Math.round(cc * img.naturalHeight / img.naturalWidth * .5)), c = document.createElement('canvas'); c.width = cc; c.height = rr;
    const x = c.getContext('2d'); x.drawImage(img, 0, 0, cc, rr); const d = x.getImageData(0, 0, cc, rr).data;
    const grid = Array.from({ length: cc * rr }, (_, i) => Math.round((d[i * 4] * .3 + d[i * 4 + 1] * .59 + d[i * 4 + 2] * .11) / 255 * 9));
    const pre = document.createElement('pre'); pre.className = 'ag'; pre.style.cssText = 'font-size:8px;font-weight:400;margin:0 auto;width:max-content'; img.replaceWith(pre);
    items.push({ el: pre, fn: t => { const sc = ((t * 6) | 0) % rr; let o = ''; for (let r = 0; r < rr; r++) { for (let q = 0; q < cc; q++) { let v = grid[r * cc + q]; if (r === sc) v = Math.max(0, v - 3); else if (rnd(q, r, (t * 4) | 0) > .985) v = Math.max(0, Math.min(9, v + (rnd(r, q, t | 0) > .5 ? 1 : -1))); o += IR[v]; } o += '\n'; } return o; } });
  } catch (e) { img.style.filter = 'grayscale(1) contrast(1.3)'; } };
  img.complete && img.naturalWidth ? go() : img.addEventListener('load', go, { once: true });
}
