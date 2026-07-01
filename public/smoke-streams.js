// Smoke streams — canvas background. Paints slow drifting cyan/blue plumes.
(function () {
  if (window.__samiaSmokeInit) return;
  window.__samiaSmokeInit = true;

  const canvas = document.getElementById("samia-smoke-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let W = 0, H = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);

  function resize() {
    W = canvas.clientWidth;
    H = canvas.clientHeight;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize();
  window.addEventListener("resize", resize);

  const N = 22;
  const parts = Array.from({ length: N }, () => spawn());

  function spawn() {
    return {
      x: Math.random() * W,
      y: H + Math.random() * H * 0.4,
      r: 80 + Math.random() * 180,
      vx: (Math.random() - 0.5) * 0.25,
      vy: -0.15 - Math.random() * 0.35,
      hue: 200 + Math.random() * 40,
      life: 0,
      max: 800 + Math.random() * 800,
    };
  }

  function step() {
    ctx.clearRect(0, 0, W, H);
    ctx.globalCompositeOperation = "lighter";
    for (const p of parts) {
      p.x += p.vx;
      p.y += p.vy;
      p.life += 1;
      const t = p.life / p.max;
      const alpha = Math.max(0, Math.sin(t * Math.PI)) * 0.18;
      const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
      grad.addColorStop(0, `hsla(${p.hue}, 95%, 60%, ${alpha})`);
      grad.addColorStop(1, `hsla(${p.hue}, 95%, 40%, 0)`);
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
      if (p.life > p.max || p.y < -p.r) Object.assign(p, spawn());
    }
    requestAnimationFrame(step);
  }
  step();
})();
