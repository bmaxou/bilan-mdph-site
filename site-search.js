/* bilan-mdph.fr — recherche instantanée + assistant de contenu
   Aucune génération de texte : tout ce qui est affiché est une citation directe
   du contenu déjà écrit sur le site, avec un lien vers la page complète.
   Aucune donnée n'est envoyée à un service externe : tout se passe dans le navigateur. */
(function(){
  "use strict";

  var INDEX_URL = "/essai/content-index.json";
  var STOPWORDS = new Set(("le la les un une des de du et en à au aux ou est sont pour sur par "+
    "avec sans dans ce cet cette ces qui que quoi dont où comment quand pourquoi mon ma mes "+
    "votre vos vous nous on ne pas plus moins tres tres bien fait être avoir a ai as ont il elle "+
    "ils elles leur leurs son sa ses comme aussi si peut peuvent doit doivent afin apres avant "+
    "entre chez").split(" "));

  function stripAccents(s){
    return s.normalize("NFD").replace(/[̀-ͯ]/g, "");
  }
  function normalize(s){
    return stripAccents((s||"").toLowerCase()).replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
  }
  function words(s){
    return normalize(s).split(" ").filter(function(w){ return w.length > 2 && !STOPWORDS.has(w); });
  }

  var DATA = null, LOADING = null;
  function loadIndex(){
    if (DATA) return Promise.resolve(DATA);
    if (LOADING) return LOADING;
    LOADING = fetch(INDEX_URL).then(function(r){ return r.json(); }).then(function(json){
      DATA = json;
      DATA.forEach(function(p){
        p._titleWords = words(p.title);
        var sectionsJoined = p.sections.map(function(s){ return s.heading + " " + s.text; }).join(" ");
        p._textNorm = normalize(p.title + " " + p.description + " " + sectionsJoined);
        p.sections.forEach(function(s){
          s._norm = normalize(s.heading + " " + s.text);
          s._words = words(s.heading + " " + s.text);
        });
      });
      return DATA;
    });
    return LOADING;
  }

  // --- Scoring simple par recouvrement de mots + bonus phrase exacte ---
  function scorePage(page, qWords, qNorm){
    var score = 0;
    qWords.forEach(function(w){
      if (page._titleWords.indexOf(w) !== -1) score += 5;
      var re = new RegExp("\\b" + w, "g");
      var m = page._textNorm.match(re);
      if (m) score += Math.min(m.length, 3);
    });
    if (qNorm.length > 3 && page._textNorm.indexOf(qNorm) !== -1) score += 8;
    return score;
  }
  function scoreSection(section, qWords, qNorm){
    var score = 0;
    qWords.forEach(function(w){
      var re = new RegExp("\\b" + w, "g");
      var m = section._norm.match(re);
      if (m) score += m.length;
    });
    if (qNorm.length > 3 && section._norm.indexOf(qNorm) !== -1) score += 10;
    return score;
  }

  function excerptAround(text, qWords, maxLen){
    maxLen = maxLen || 220;
    var norm = normalize(text);
    var idx = -1;
    for (var i = 0; i < qWords.length && idx === -1; i++){
      idx = norm.indexOf(qWords[i]);
    }
    if (idx === -1) return text.slice(0, maxLen) + (text.length > maxLen ? "…" : "");
    var start = Math.max(0, idx - 80);
    var end = Math.min(text.length, start + maxLen);
    var snippet = text.slice(start, end);
    return (start > 0 ? "…" : "") + snippet + (end < text.length ? "…" : "");
  }

  function highlight(text, qWords){
    var out = text;
    qWords.forEach(function(w){
      if (w.length < 3) return;
      var re = new RegExp("(" + w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "gi");
      out = out.replace(re, "<mark>$1</mark>");
    });
    return out;
  }

  // ---------------------------------------------------------------------
  // Barre de recherche
  // ---------------------------------------------------------------------
  function buildSearchUI(){
    var overlay = document.createElement("div");
    overlay.className = "site-search-overlay";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-label", "Recherche sur le site");
    overlay.hidden = true;
    overlay.innerHTML =
      '<div class="site-search-panel">' +
        '<div class="site-search-head">' +
          '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="8.5" cy="8.5" r="6" stroke="currentColor" stroke-width="1.6"/><path d="M13.3 13.3 18 18" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>' +
          '<input type="text" class="site-search-input" placeholder="Rechercher sur le site (ex. certificat médical, TDAH, prix…)" aria-label="Rechercher sur le site" autocomplete="off">' +
          '<button type="button" class="site-search-close" aria-label="Fermer la recherche">Échap ✕</button>' +
        '</div>' +
        '<div class="site-search-results" aria-live="polite"></div>' +
      '</div>';
    document.body.appendChild(overlay);

    var input = overlay.querySelector(".site-search-input");
    var results = overlay.querySelector(".site-search-results");
    var closeBtn = overlay.querySelector(".site-search-close");

    function open(){
      overlay.hidden = false;
      document.body.classList.add("site-search-lock");
      loadIndex().then(function(){ input.focus(); });
    }
    function close(){
      overlay.hidden = true;
      document.body.classList.remove("site-search-lock");
      input.value = "";
      results.innerHTML = "";
    }

    function render(query){
      var qNorm = normalize(query);
      if (qNorm.length < 2){
        results.innerHTML = '<p class="site-search-hint">Tapez au moins deux lettres pour lancer la recherche.</p>';
        return;
      }
      var qWords = words(query);
      var scored = DATA.map(function(p){ return { page: p, score: scorePage(p, qWords, qNorm) }; })
        .filter(function(r){ return r.score > 0; })
        .sort(function(a, b){ return b.score - a.score; })
        .slice(0, 8);

      if (!scored.length){
        results.innerHTML = '<p class="site-search-hint">Aucun résultat pour « ' + query.replace(/</g,"&lt;") + ' ». Essayez un autre mot-clé.</p>';
        return;
      }
      results.innerHTML = scored.map(function(r){
        var excerpt = excerptAround(r.page.description || (r.page.sections[0] && r.page.sections[0].text) || "", qWords);
        return '<a class="site-search-result" href="' + r.page.url + '">' +
          '<span class="site-search-result-title">' + highlight(r.page.title, qWords) + '</span>' +
          '<span class="site-search-result-excerpt">' + highlight(excerpt, qWords) + '</span>' +
        '</a>';
      }).join("");
    }

    input.addEventListener("input", function(){ render(input.value); });
    closeBtn.addEventListener("click", close);
    overlay.addEventListener("click", function(e){ if (e.target === overlay) close(); });
    document.addEventListener("keydown", function(e){
      if (e.key === "Escape" && !overlay.hidden) close();
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k"){ e.preventDefault(); open(); }
    });

    document.querySelectorAll("[data-site-search-open]").forEach(function(btn){
      btn.addEventListener("click", function(e){ e.preventDefault(); open(); });
    });
  }

  // ---------------------------------------------------------------------
  // Assistant de contenu (retrieval uniquement, aucune génération)
  // ---------------------------------------------------------------------
  function buildAssistantUI(){
    var mounts = document.querySelectorAll("[data-site-assistant]");
    if (!mounts.length) return;

    mounts.forEach(function(mount){
      mount.innerHTML =
        '<form class="site-assistant-form">' +
          '<label class="site-assistant-label" for="site-assistant-q">Posez votre question</label>' +
          '<div class="site-assistant-row">' +
            '<input type="text" id="site-assistant-q" class="site-assistant-input" placeholder="Ex. Comment prouver le retentissement d\'un TDAH pour la MDPH ?" autocomplete="off">' +
            '<button type="submit" class="btn site-assistant-submit">Chercher une réponse</button>' +
          '</div>' +
          '<p class="site-assistant-note">Les réponses reprennent uniquement ce qui est déjà écrit sur ce site. Ce n\'est pas un conseil juridique ni médical.</p>' +
        '</form>' +
        '<div class="site-assistant-answer" aria-live="polite"></div>';

      var form = mount.querySelector(".site-assistant-form");
      var input = mount.querySelector(".site-assistant-input");
      var answerBox = mount.querySelector(".site-assistant-answer");

      form.addEventListener("submit", function(e){
        e.preventDefault();
        var q = input.value.trim();
        if (!q) return;
        answerBox.innerHTML = '<p class="site-assistant-loading">Recherche dans le contenu du site…</p>';
        loadIndex().then(function(){
          var qNorm = normalize(q);
          var qWords = words(q);
          var best = [];
          DATA.forEach(function(p){
            p.sections.forEach(function(s){
              var sc = scoreSection(s, qWords, qNorm);
              if (sc > 0) best.push({ page: p, section: s, score: sc });
            });
          });
          best.sort(function(a, b){ return b.score - a.score; });
          best = best.slice(0, 2);

          if (!best.length){
            answerBox.innerHTML =
              '<div class="site-assistant-empty">' +
                '<p>Je n\'ai rien trouvé d\'assez précis sur ce sujet dans le contenu actuel du site.</p>' +
                '<p>Vous pouvez reformuler, utiliser la recherche, ou poser directement la question au cabinet.</p>' +
              '</div>';
            return;
          }

          answerBox.innerHTML = best.map(function(r){
            var excerpt = excerptAround(r.section.text, qWords, 380);
            return '<div class="site-assistant-result">' +
              '<p class="site-assistant-quote">« ' + highlight(excerpt, qWords) + ' »</p>' +
              '<a class="site-assistant-source" href="' + r.page.url + '">' +
                'Lire la suite — ' + r.page.title + ' · ' + r.section.heading + ' →' +
              '</a>' +
            '</div>';
          }).join("");
        });
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function(){
    buildSearchUI();
    buildAssistantUI();
  });
})();
