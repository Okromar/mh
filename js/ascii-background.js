/* ascii-background.js — fond ASCII vivant qui évolue lentement et suit la caméra.
   Autour de la carte M (profil) : zone sombre en ASCII, fondu très progressif crème -> gris -> noir (voile lissé + bords organiques). */
const bc = document.createElement('canvas'); bc.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;pointer-events:none'; wb.prepend(bc);
const bg2 = bc.getContext('2d'), CW = 10, CH = 16, BR = ' ..:-=+*#';
const ZONE_IN = 100, ZONE_OUT = 720, VEIL = 6;   /* px du whiteboard : noir plein jusqu'à ZONE_IN autour de la carte, fondu complet à ZONE_OUT ; VEIL = finesse du voile (px écran par pixel) */
const DQ = 24;                                    /* niveaux de couleur des caractères (assez fins pour ne pas voir de paliers) */
let zx = 0, zy = 0, zhw = 0, zhh = 0, zc, zctx, zimg;
/* CS[q][l] : couleur du caractère de densité l dans une zone de noirceur q (gris moyen, jamais blanc cru) */
const CS = Array.from({ length: DQ }, (_, q) => Array.from({ length: 9 }, (_, l) => { const d = q / (DQ - 1), v = Math.round(17 + d * 150), a = Math.min(.7, l * .03 + d * (.06 + l * .045)); return `rgba(${v},${v},${v},${a.toFixed(3)})`; }));
const bsize = () => {
  const d = devicePixelRatio || 1; bc.width = innerWidth * d; bc.height = innerHeight * d; bg2.setTransform(d, 0, 0, d, 0, 0); bg2.font = '13px "JetBrains Mono",monospace'; bg2.textBaseline = 'top';
  zc = document.createElement('canvas'); zc.width = Math.ceil(innerWidth / VEIL); zc.height = Math.ceil(innerHeight / VEIL); zctx = zc.getContext('2d'); zimg = zctx.createImageData(zc.width, zc.height);
};
bsize(); addEventListener('resize', bsize);

/* noirceur d(wx, wy) en 0..1 : 1 près de la carte M, 0 loin. smootherstep + léger gauchissement lent => aucun contour géométrique visible */
function dens(wx, wy, t) {
  const warp = 60 * (Math.sin(wx * .0031 + t * .11) + Math.sin(wy * .0043 - t * .09) + Math.sin((wx - wy) * .0019 + t * .07));
  const dist = Math.hypot(Math.max(0, Math.abs(wx - zx) - zhw), Math.max(0, Math.abs(wy - zy) - zhh)) + warp;
  const k = Math.min(1, Math.max(0, (dist - ZONE_IN) / (ZONE_OUT - ZONE_IN)));
  return 1 - k * k * k * (k * (k * 6 - 15) + 10);
}

function bg(t) {
  const m = new DOMMatrix(getComputedStyle(world).transform), sc = m.a || 1, W = innerWidth, H = innerHeight;
  const pm = panels.M; if (pm) { zx = pm.offsetLeft + pm.offsetWidth / 2; zy = pm.offsetTop + pm.offsetHeight / 2; zhw = pm.offsetWidth / 2; zhh = pm.offsetHeight / 2; }
  bg2.clearRect(0, 0, W, H);

  /* 1. voile noir lissé : petite image (1 px = VEIL px écran) agrandie avec interpolation bilinéaire => dégradé continu */
  const zw = zc.width, zh = zc.height, px = zimg.data;
  for (let j = 0; j < zh; j++) for (let i = 0; i < zw; i++) {
    const o = (j * zw + i) * 4; px[o] = px[o + 1] = px[o + 2] = 0;
    px[o + 3] = Math.round(dens(((i + .5) * VEIL - m.e) / sc, ((j + .5) * VEIL - m.f) / sc, t) * 252);
  }
  zctx.putImageData(zimg, 0, 0); bg2.imageSmoothingEnabled = true; bg2.imageSmoothingQuality = 'high'; bg2.drawImage(zc, 0, 0, zw * VEIL, zh * VEIL);

  /* 2. caractères ASCII par-dessus */
  for (let y = 0; y < H; y += CH) for (let x = 0; x < W; x += CW) {
    const wx = (x + CW / 2 - m.e) / sc, wy = (y + CH / 2 - m.f) / sc;
    const v = (Math.sin(wx * .0042 + Math.sin(wy * .0031 + t * .15) * 2) + Math.sin(wy * .0053 - t * .12) + Math.sin((wx + wy) * .0021 + t * .1) + Math.sin(Math.hypot(wx, wy) * .0045 - t * .25) + 4) / 8;
    const l = Math.min(8, Math.max(0, (v * v * 12 - 1.5) | 0)); if (l < 1) continue;
    bg2.fillStyle = CS[Math.round(dens(wx, wy, t) * (DQ - 1))][l]; bg2.fillText(BR[l], x, y);
  }
}
