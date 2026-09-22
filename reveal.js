/* bilan-mdph.fr — apparitions douces au défilement.
   Respecte prefers-reduced-motion (voir style.css) : si le visiteur le demande,
   tout apparaît immédiatement, sans animation. */
(function(){
  "use strict";
  var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var items = document.querySelectorAll(".reveal");
  if (!items.length) return;

  if (reduced || !("IntersectionObserver" in window)){
    items.forEach(function(el){ el.classList.add("is-visible"); });
    return;
  }

  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if (entry.isIntersecting){
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });

  items.forEach(function(el, i){
    el.style.setProperty("--reveal-delay", Math.min(i % 6, 5) * 60 + "ms");
    io.observe(el);
  });
})();
