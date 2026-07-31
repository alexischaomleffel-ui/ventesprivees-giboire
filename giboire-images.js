// Générateur d'illustrations d'architecture — Groupe Giboire
// Produit des scènes SVG déterministes (façades, ciel, végétation) encodées en data-URI,
// dans la palette de la marque. Aucune dépendance réseau.
(function () {
  function rng(seed) {
    let s = 0;
    for (let i = 0; i < seed.length; i++) s = (s * 31 + seed.charCodeAt(i)) >>> 0;
    return function () { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };
  }
  function shade(hex, amt) {
    const n = parseInt(hex.slice(1), 16);
    let r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
    if (amt >= 0) { r += (255 - r) * amt; g += (255 - g) * amt; b += (255 - b) * amt; }
    else { r *= (1 + amt); g *= (1 + amt); b *= (1 + amt); }
    const h = (v) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, "0");
    return "#" + h(r) + h(g) + h(b);
  }

  // Scène façade : ciel dégradé, silhouettes lointaines, 2 immeubles + fenêtres, sol + arbres
  function facade(seed, base) {
    base = base || "#17315d";
    const R = rng(seed + "|f");
    const W = 800, H = 600;
    const skyTop = shade(base, 0.78), skyBot = shade(base, 0.46);
    const far = shade(base, 0.30);
    const mainCol = base, sideCol = R() > 0.5 ? shade(base, 0.16) : shade(base, -0.12);
    const glass = shade(base, 0.55), lit = "#f6c877", coral = "#fc716b";
    const ground = shade(base, 0.62);

    let s = '<svg xmlns="http://www.w3.org/2000/svg" width="' + W + '" height="' + H + '" viewBox="0 0 ' + W + ' ' + H + '">';
    s += '<defs><linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">'
      + '<stop offset="0" stop-color="' + skyTop + '"/><stop offset="1" stop-color="' + skyBot + '"/></linearGradient></defs>';
    s += '<rect width="' + W + '" height="' + H + '" fill="url(#sky)"/>';
    // soleil
    s += '<circle cx="' + (120 + R() * 520) + '" cy="' + (70 + R() * 70) + '" r="46" fill="' + shade(coral, 0.35) + '" opacity="0.55"/>';
    // silhouettes lointaines
    let x = -20;
    while (x < W + 40) {
      const bw = 60 + R() * 70, bh = 120 + R() * 150;
      s += '<rect x="' + x + '" y="' + (H - 150 - bh) + '" width="' + bw + '" height="' + bh + '" rx="4" fill="' + far + '" opacity="0.55"/>';
      x += bw + 8;
    }
    // sol
    s += '<rect x="0" y="' + (H - 150) + '" width="' + W + '" height="150" fill="' + ground + '"/>';

    function building(bx, bw, bh, col, cols, rows) {
      const by = H - 150 - bh;
      let g = '<g>';
      g += '<rect x="' + bx + '" y="' + by + '" width="' + bw + '" height="' + (bh + 12) + '" rx="10" fill="' + col + '"/>';
      const pad = 18, gap = 12;
      const cw = (bw - pad * 2 - gap * (cols - 1)) / cols;
      const chH = 26, rgap = 16;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const wx = bx + pad + c * (cw + gap);
          const wy = by + 26 + r * (chH + rgap);
          if (wy + chH > by + bh - 10) continue;
          const on = R() > 0.68;
          g += '<rect x="' + wx.toFixed(1) + '" y="' + wy.toFixed(1) + '" width="' + cw.toFixed(1) + '" height="' + chH + '" rx="3" fill="' + (on ? lit : glass) + '" opacity="' + (on ? 0.95 : 0.82) + '"/>';
        }
      }
      // entrée / bandeau corail occasionnel
      if (R() > 0.55) g += '<rect x="' + (bx + pad) + '" y="' + (by + bh - 6) + '" width="' + (bw - pad * 2) + '" height="6" rx="3" fill="' + coral + '"/>';
      g += '</g>';
      return g;
    }

    const sideH = 200 + R() * 120, mainH = 330 + R() * 120;
    const sideLeft = R() > 0.5;
    if (sideLeft) {
      s += building(70, 210, sideH, sideCol, 3, 6);
      s += building(320, 300, mainH, mainCol, 4, 8);
    } else {
      s += building(220, 300, mainH, mainCol, 4, 8);
      s += building(560, 200, sideH, sideCol, 3, 6);
    }
    // arbres
    const nTrees = 2 + Math.floor(R() * 3);
    for (let i = 0; i < nTrees; i++) {
      const tx = 40 + R() * (W - 80), ty = H - 150 + 30 + R() * 60, tr = 26 + R() * 18;
      s += '<circle cx="' + tx.toFixed(0) + '" cy="' + ty.toFixed(0) + '" r="' + tr.toFixed(0) + '" fill="' + shade("#3f6f4a", (R() - 0.5) * 0.4) + '"/>';
      s += '<rect x="' + (tx - 4).toFixed(0) + '" y="' + ty.toFixed(0) + '" width="8" height="' + (tr + 14).toFixed(0) + '" fill="' + shade(ground, -0.25) + '"/>';
    }
    s += '</svg>';
    return "url(\"data:image/svg+xml," + encodeURIComponent(s) + "\")";
  }

  window.GIBOIRE_IMG = { facade: facade };
})();
