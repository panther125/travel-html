/* =========================================================
   盗墓笔记 · 纪年档案 — interactions
   - decade-gap scroll-linked door (close → wait → open)
   - reveal on scroll
   - mobile nav toggle
   all gated behind prefers-reduced-motion
   ========================================================= */
(function () {
  "use strict";

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- mobile nav toggle ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var links = document.getElementById("nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      toggle.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    // close on link click (mobile)
    links.addEventListener("click", function (e) {
      if (e.target.closest("a") && window.innerWidth <= 720) {
        links.classList.remove("is-open");
        toggle.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------- reveal on scroll ---------- */
  var reveals = document.querySelectorAll(".reveal");
  if (reduce || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  }

  /* ---------- decade gap: the ten-year passage ---------- */
  var gap = document.getElementById("decade");
  if (!gap) return;

  var tallies = gap.querySelectorAll(".tally__year");
  var N = tallies.length; // 9 years: 2006..2014

  if (reduce) {
    // static: door shut, all years dim-but-even, no scroll binding
    gap.style.setProperty("--seam", "0");
    tallies.forEach(function (t, i) {
      t.classList.toggle("is-now", i === Math.floor(N / 2));
    });
    return;
  }

  var ticking = false;

  function update() {
    var r = gap.getBoundingClientRect();
    var vh = window.innerHeight;
    var total = r.height - vh;
    var passed = Math.min(Math.max(vh - r.top, 0), total);
    var p = total > 0 ? passed / total : 0; // 0 → 1 across the gap

    // the door already closed at the 2005 entry — it stays shut through
    // the ten years, then opens only as 2015 arrives.
    var s = p < 0.72 ? 0 : (p - 0.72) / 0.28;
    if (s > 1) s = 1;
    gap.style.setProperty("--seam", s.toFixed(4));

    // year tally: 2006..2014 distributed across the waiting stretch
    var tStart = 0.05, tEnd = 0.70;
    var span = tEnd - tStart;
    var idx = span > 0 ? Math.floor(((p - tStart) / span) * N) : 0;
    if (idx < 0) idx = 0;
    if (idx > N - 1) idx = N - 1;
    tallies.forEach(function (t, i) {
      t.classList.toggle("is-now", i === idx);
    });

    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", update);
  update();
})();
