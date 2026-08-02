(function () {
  "use strict";

  const SECTIONS = [
    { id: "profil",      navKey: "nav.profil" },
    { id: "experiences", navKey: "nav.experiences" },
    { id: "formation",   navKey: "nav.formation" },
    { id: "competences", navKey: "nav.competences" },
    { id: "projets",     navKey: "nav.projets" },
    { id: "contact",     navKey: "nav.contact" }
  ];

  let lang = localStorage.getItem("cv-lang") || "fr";

  // ---- utilitaires -----------------------------------------------------
  function t(field) {
    // Accepte soit une chaîne simple, soit un objet { fr, en }
    if (field == null) return "";
    if (typeof field === "string") return field;
    return field[lang] || field.fr || "";
  }

  function label(key) {
    return (CV_DATA.i18n[lang] && CV_DATA.i18n[lang][key]) || key;
  }

  function el(tag, className, html) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (html != null) node.innerHTML = html;
    return node;
  }

  // ---- rendu : rail de navigation --------------------------------------
  function renderRail() {
    const railTabs = document.getElementById("railTabs");
    railTabs.innerHTML = "";
    SECTIONS.forEach((s, i) => {
      const li = document.createElement("li");
      const btn = document.createElement("button");
      btn.dataset.target = s.id;
      btn.innerHTML = `<span class="idx mono">${String(i).padStart(2, "0")}</span><span class="label">${label(s.navKey)}</span>`;
      btn.addEventListener("click", () => {
        document.getElementById(s.id).scrollIntoView({ behavior: "smooth", block: "start" });
      });
      li.appendChild(btn);
      railTabs.appendChild(li);
    });
  }

  // ---- rendu : hero / profil --------------------------------------------
  function renderProfile() {
    const p = CV_DATA.profile;
    document.getElementById("fullName").textContent = p.fullName;
    document.getElementById("role").textContent = t(p.role);
    document.getElementById("bio").textContent = t(p.bio);
    document.getElementById("lastUpdate").textContent = CV_DATA.lastUpdate;

    const metaList = document.getElementById("metaList");
    metaList.innerHTML = "";
    p.meta.forEach((m) => {
      const li = document.createElement("li");
      const text = t(m);
      li.innerHTML = m.href
        ? `<a href="${m.href}" target="_blank" rel="noopener">${text}</a>`
        : text;
      metaList.appendChild(li);
    });
  }

  // ---- rendu : une entrée de timeline (expériences / formation) --------
  function renderTimeline(containerId, items) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";
    items.forEach((item) => {
      const entry = el("div", "entry");
      entry.appendChild(el("div", "period mono", t(item.period)));

      const body = el("div", "body");
      body.appendChild(el("h3", null, t(item.title)));
      body.appendChild(el("p", "org", item.org));
      body.appendChild(el("p", null, t(item.description)));

      if (item.tags && item.tags.length) {
        const tagList = el("ul", "tags");
        item.tags.forEach((tag) => tagList.appendChild(el("li", null, tag)));
        body.appendChild(tagList);
      }
      entry.appendChild(body);
      container.appendChild(entry);
    });
  }

  // ---- rendu : compétences (ledger) -------------------------------------
  function renderSkills() {
    const container = document.getElementById("skillsLedger");
    container.innerHTML = "";
    CV_DATA.skills.forEach((group) => {
      const groupEl = el("div", "ledger-group");
      groupEl.appendChild(el("h3", null, t(group.category)));
      group.items.forEach((item) => {
        const row = el("div", "skill-row");
        row.appendChild(el("span", "label", t(item.label)));
        const scale = el("div", "scale");
        const fill = el("div", "fill");
        fill.style.width = "0%";
        fill.dataset.value = item.value;
        scale.appendChild(fill);
        row.appendChild(scale);
        row.appendChild(el("span", "value mono", item.value + "%"));
        groupEl.appendChild(row);
      });
      container.appendChild(groupEl);
    });
    requestAnimationFrame(() => {
      document.querySelectorAll(".skill-row .fill").forEach((f) => {
        f.style.transition = "width 0.6s ease";
        f.style.width = f.dataset.value + "%";
      });
    });
  }

  // ---- rendu : projets ---------------------------------------------------
  function renderProjects() {
    const container = document.getElementById("projectsList");
    container.innerHTML = "";
    CV_DATA.projects.forEach((proj) => {
      const card = el("div", "project-card");
      card.appendChild(el("h3", null, t(proj.title)));
      card.appendChild(el("p", null, t(proj.description)));
      if (proj.link) {
        const a = document.createElement("a");
        a.href = proj.link.href;
        a.textContent = t(proj.link.label);
        if (proj.link.href.startsWith("http")) {
          a.target = "_blank";
          a.rel = "noopener";
        }
        card.appendChild(a);
      }
      container.appendChild(card);
    });
  }

  // ---- rendu : contact -----------------------------------------------
  function renderContact() {
    const container = document.getElementById("contactLinks");
    container.innerHTML = "";
    CV_DATA.contact.links.forEach((c) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = c.href;
      a.textContent = c.label;
      li.appendChild(a);
      container.appendChild(li);
    });
  }

  // ---- textes de l'interface (data-i18n) --------------------------------
  function renderI18nStrings() {
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      node.textContent = label(node.dataset.i18n);
    });
  }

  // ---- switch de langue ---------------------------------------------
  function setLang(next) {
    lang = next;
    localStorage.setItem("cv-lang", lang);
    document.documentElement.lang = lang;
    document.querySelectorAll(".lang-stamp span[data-active]").forEach((s) => {
      s.classList.toggle("on", s.dataset.active === lang);
    });
    renderAll();
  }

  function initLangToggle() {
    const btn = document.getElementById("langToggle");
    document.querySelectorAll(".lang-stamp span[data-active]").forEach((s) => {
      s.classList.toggle("on", s.dataset.active === lang);
    });
    btn.addEventListener("click", () => setLang(lang === "fr" ? "en" : "fr"));
  }

  // ---- scrollspy : met en surbrillance l'onglet actif -------------------
  function initScrollSpy() {
    const sections = SECTIONS.map((s) => document.getElementById(s.id));
    const buttons = () => document.querySelectorAll(".rail-tabs button");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            buttons().forEach((b) =>
              b.classList.toggle("active", b.dataset.target === entry.target.id)
            );
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => s && observer.observe(s));
  }

  // ---- point d'entrée -----------------------------------------------
  function renderAll() {
    renderRail();
    renderProfile();
    renderI18nStrings();
    renderTimeline("experiencesList", CV_DATA.experiences);
    renderTimeline("formationList", CV_DATA.formation);
    renderSkills();
    renderProjects();
    renderContact();
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.documentElement.lang = lang;
    renderAll();
    initLangToggle();
    initScrollSpy();
  });
})();
