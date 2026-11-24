/* ascii-live.js — bandeau de code qui s'écrit tout seul + boucle d'animation principale */
const hud = document.createElement('pre');
hud.id = 'ascii-hud';
hero.append(hud);

const code = [
  'def scan(plc, cycle_ms=10):',
  '    for rung in plc.ladder:',
  '        if rung.read().fault:',
  '            raise Alarm(rung.id)',
  '    return OK  # zéro défaut',
  '',
  'marko.mount(bench).diagnose()',
  'marko.document(norm="IEC 61131")',
  'marko.deliver(on_time=True)'
];
let shown = [''], li = 0, ci = 0;
const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');

function type() {
  if (ci >= code[li].length) {
    if (++ci > code[li].length + 8) {
      shown.push('');
      li = (li + 1) % code.length;
      ci = 0;
      if (shown.length > 4) shown.shift();
    }
  } else {
    shown[shown.length - 1] = code[li].slice(0, ++ci);
  }
  hud.innerHTML = shown.map((s, i) => {
    const l = '  ' + esc(s) + (i === shown.length - 1 ? '█' : '');
    return i === shown.length - 1 ? `<span class="hl">${l}</span>` : l;
  }).join('\n');
}

/* ---------- Boucle principale ---------- */
let la = 0, lb = 0, lc = 0;
function loop(ts) {
  if (ts - la > 70) { la = ts; type(); }
  if (ts - lc > (busy || drag ? 40 : 110)) { lc = ts; bg(ts / 1000); }
  if (ts - lb > 85) {
    lb = ts;
    items = items.filter(i => i.el.isConnected);
    items.forEach(i => { i.el.textContent = i.fn(ts / 1000); });
  }
  requestAnimationFrame(loop);
}
if (RM) {
  items.forEach(i => { i.el.textContent = i.fn(0); });
  bg(0);
} else {
  requestAnimationFrame(loop);
}
