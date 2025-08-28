import { useEffect, useRef } from "react";

export default function BubblesBackground({
  count = 60,                 // عدد الفقاعات
  minRadius = 2,
  maxRadius = 6,
  speed = 0.6,                // السرعة العامة
  color = "rgba(255,255,255,0.35)",
  respectReducedMotion = true // إيقاف الحركة لو المستخدم مفعّل reduce-motion
}) {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const bubblesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    const dpr = Math.max(1, window.devicePixelRatio || 1);

    // احترام تقليل الحركة
    const reduceMotion =
      respectReducedMotion &&
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // قياسات الكانفس حسب حجم الأب (السكشن)
    function resizeToParent() {
      const parent = canvas.parentElement || document.body;
      const w = Math.max(1, parent.clientWidth);
      const h = Math.max(1, parent.clientHeight);

      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";

      // نخلي الرسم بوحدات CSS px
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // جدّد الفقاعات بالمقاسات الجديدة
      bubblesRef.current = makeBubbles(w, h);
    }

    function makeBubbles(cw, ch) {
      return Array.from({ length: count }).map(() => ({
        x: Math.random() * cw,
        y: Math.random() * ch,
        r: Math.random() * (maxRadius - minRadius) + minRadius,
        vy: -(Math.random() * 0.6 + 0.2) * speed, // لأعلى
        vx: (Math.random() - 0.5) * 0.2,          // انحراف بسيط
        alpha: Math.random() * 0.5 + 0.25,
      }));
    }

    function draw() {
      const cw = canvas.width / dpr;
      const ch = canvas.height / dpr;

      // مسح بمقاس الكانفس الفعلي (Retina-safe)
      ctx.clearRect(0, 0, cw, ch);

      const bubbles = bubblesRef.current;

      for (const b of bubbles) {
        // تحديث الموضع
        b.x += b.vx;
        b.y += b.vy;

        // إعادة التدوير لو خرجت من أعلى أو الأطراف
        if (b.y + b.r < 0) {
          b.y = ch + b.r;
          b.x = Math.random() * cw;
        }
        if (b.x < -20) b.x = cw + 20;
        if (b.x > cw + 20) b.x = -20;

        // توهّج بسيط
        const grd = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r * 1.4);
        grd.addColorStop(0, color);
        grd.addColorStop(1, "rgba(255,255,255,0)");
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r * 1.4, 0, Math.PI * 2);
        ctx.fill();

        // جسم الفقاعة
        ctx.globalAlpha = b.alpha;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      rafRef.current = requestAnimationFrame(draw);
    }

    // راقب حجم الأب
    let ro;
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(() => {
        resizeToParent();
      });
      ro.observe(canvas.parentElement || document.body);
    } else {
      // fallback
      resizeToParent();
      window.addEventListener("resize", resizeToParent);
    }

    // ابدأ الأنيميشن إن لم يكن reduce-motion
    if (!reduceMotion) {
      resizeToParent();
      rafRef.current = requestAnimationFrame(draw);
    } else {
      // لو reduce-motion، نظّف الكانفس فقط
      resizeToParent();
      const cw = canvas.width / dpr;
      const ch = canvas.height / dpr;
      ctx.clearRect(0, 0, cw, ch);
    }

    // تنظيف
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (ro) ro.disconnect();
      else window.removeEventListener("resize", resizeToParent);
    };
  }, [count, minRadius, maxRadius, speed, color, respectReducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
