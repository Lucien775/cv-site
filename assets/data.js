const CV_DATA = {

  lastUpdate: "2026-07",

  profile: {
    fullName: "Lucien Coudert",
    role: {
      fr: "Etudiant en 5A à Polytech Sorbonne - MAIN",
      en: "Final-year student at Polytech Sorbonne — Applied Mathematics for Computer Science (MAIN)"
    },
    bio: {
      fr: "En dernière année à Polytech Sorbonne, spécialisation Mathématiques Appliquées à l'Informatique et au Numérique (MAIN), je recherche un stage de fin d'études de 6 mois à partir de mars 2027. Idéalement autour de l'analyse de données sportives et de la performance, avec la cybersécurité comme second terrain d'intérêt. Ce site détaille mes expériences, mes compétences techniques et les projets sur lesquels j'ai travaillé.",
      en: "In my final year at Polytech Sorbonne, specializing in Applied Mathematics for Computer Science and Digital Technology (MAIN), I'm looking for a 6-month graduation internship starting March 2027. Ideally in sports data and performance analysis, with cybersecurity as a secondary interest. This site details my experience, technical skills, and past projects."
    },
    meta: [
      { icon: "📍", fr: "Chelles, France", en: "Chelles, France" },
      { icon: "✓", fr: "Disponible à partir de Mars 2027", en: "Available from Mars 2027" },
      { icon: "in", fr: "linkedin.com/in/lucien-coudert", en: "linkedin.com/in/lucien-coudert", href: "https://www.linkedin.com/in/lucien-coudert" },
      { icon: "gh", fr: "github.com/lucien-coudert", en: "github.com/lucien-coudert", href: "https://github.com/Lucien775" }
    ]
  },

  // ------------------------------------------------------------------
  // EXPÉRIENCES PROFESSIONNELLES
  // ------------------------------------------------------------------
  experiences: [
    {
      period: { fr: "Mai 2026 - Juin 2026", en: "May 2026 - June 2026" },
      title: { fr: "Stagiaire de recherche au LIP6", en: "Research Intern at LIP6" },
      org: "Laboratoire d'informatique de Paris 6 (LIP6)",
      description: {
        fr: "Extension d'une méthode d'accumulation en précision mixte pour l'inférence de réseaux de neurones, initialement validée sur des perceptrons multicouches (MLP), aux architectures transformers, utilisées notamment dans les LLM. Objectif : réduire le coût de calcul tout en maîtrisant l'erreur numérique, sur des architectures plus complexes que celles de l'étude d'origine.",
        en: "Extended a mixed-precision accumulation method for neural network inference, originally validated on multilayer perceptrons (MLPs), to transformer architectures, used notably in LLMs. Goal: reduce computational cost while controlling numerical error, on architectures more complex than those in the original study."
      },
      tags: ["Deep Learning", "Numerical Computing", "Research", "Transformers"]
    },
    {
      period: { fr: "Juin 2025", en: "June 2025" },
      title: { fr: "Stagiaire chez Valeo", en: "Intern at Valeo" },
      org: "Valeo",
      description: {
        fr: "Conception d'outils de surveillance réseau pour un véhicule équipé d'ADAS (PC embarqué, capteurs, caméras, écran). Suivi de la latence et de la bande passante sur les différents types de liaisons (HDMI, Wi-Fi, Ethernet, bus CAN) afin d'identifier les points critiques du réseau embarqué. En complément, prototypage de l'intégration de bandes LED dans le véhicule.",
        en: "Built network monitoring tools for a vehicle equipped with ADAS (onboard PC, sensors, cameras, display). Tracked latency and bandwidth across the different link types (HDMI, Wi-Fi, Ethernet, CAN bus) to identify critical points in the embedded network. Also prototyped the integration of LED strips into the vehicle."
      },
      tags: ["Python", "Embedded Networks", "Latency Analysis", "Software Integration"]
    },
    {
      period: { fr: "Juin 2023", en: "June 2023" },
      title: { fr: "Stagiaire chez Air France", en: "Intern at Air France" },
      org: "Air France",
      description: {
        fr: "Conception d'un outil Excel (tableau + macro VBA) permettant de suivre l'état réel d'un stock de pièces détachées sans réinventaire complet, en croisant les données du système d'information avec les entrées manuelles. Intégration de photos des pièces pour évaluer leur état et leur réutilisation potentielle, puis ajout de fonctionnalités supplémentaires pour étendre l'usage de l'outil.",
        en: "Built an Excel tool (spreadsheet + VBA macro) to track real-time stock status for spare parts without a full re-inventory, by cross-referencing information-system data with manual entries. Added photo integration to assess part condition and reuse potential, then extended the tool with additional features."
      },
      tags: ["Excel", "VBA", "Automation", "Data Management"]
    },
  ],

  // ------------------------------------------------------------------
  // FORMATION ACADÉMIQUE
  // ------------------------------------------------------------------
  formation: [
    {
      period: { fr: "2024 — 2027", en: "2024 — 2027" },
      title: { fr: "Diplôme d'ingénieur — Mathématiques Appliquées à l'Informatique et au Numérique (MAIN)", en: "Engineering Degree — Applied Mathematics for Computer Science and Digital Technology (MAIN)" },
      org: "Polytech Sorbonne, Paris",
      description: {
        fr: "Spécialisation en mathématiques appliquées à l'informatique et au numérique. Diplôme en cours d'obtention (fin prévue en 2027).",
        en: "Specialization in applied mathematics for computer science and digital technology. Degree in progress (expected 2027)."
      },
      tags: []
    },
    {
      period: { fr: "2022 — 2024", en: "2022 — 2024" },
      title: { fr: "Cycle préparatoire intégré — PEIP A", en: "Integrated Preparatory Track — PEIP A" },
      org: "Polytech Sorbonne, Paris",
      description: {
        fr: "Cycle préparatoire intégré aux écoles Polytech, avec un tronc commun couvrant mathématiques, informatique, chimie, mécanique, physique, électronique, géosciences et anglais.",
        en: "Preparatory track integrated into the Polytech engineering schools, with a shared core curriculum covering mathematics, computer science, chemistry, mechanics, physics, electronics, earth sciences, and English."
      },
      tags: []
    },
    {
      period: { fr: "2019 — 2022", en: "2019 — 2022" },
      title: { fr: "Baccalauréat général — Spécialité mathématiques et sciences de l'ingénieur", en: "French Baccalauréat — Mathematics and Engineering Sciences track" },
      org: "Lycée Gaston Bachelard, Chelles",
      description: {
        fr: "Mention Très Bien.",
        en: "Highest honors (\"Mention Très Bien\")."
      },
      tags: []
    }
  ],

  // ------------------------------------------------------------------
  // COMPÉTENCES — regroupées par catégorie, valeur de 0 à 100
  // ------------------------------------------------------------------
  skills: [
    {
      category: { fr: "Data & Intelligence Artificielle", en: "Data & Artificial Intelligence" },
      items: [
        { label: { fr: "Python", en: "Python" }, value: 85 },
        { label: { fr: "Machine Learning / Deep Learning", en: "Machine Learning / Deep Learning" }, value: 68 },
        { label: { fr: "Analyse de données & statistiques", en: "Data analysis & statistics" }, value: 70 },
        { label: { fr: "Interprétabilité des modèles", en: "Model interpretability" }, value: 55 },
        { label: { fr: "Web scraping", en: "Web scraping" }, value: 65 }
      ]
    },
    {
      category: { fr: "Cybersécurité", en: "Cybersecurity" },
      items: [
        { label: { fr: "Sécurité informatique — fondamentaux", en: "Information security fundamentals" }, value: 55 },
        { label: { fr: "Sécurité et Machine Learning", en: "Machine Learning security" }, value: 40 },
        { label: { fr: "Analyse de malware & forensic numérique", en: "Malware analysis & digital forensics" }, value: 40 },
        { label: { fr: "Cryptographie & sécurité du code", en: "Cryptography & secure coding" }, value: 45 }
      ]
    },
    {
      category: { fr: "Informatique & Systèmes", en: "Computer Science & Systems" },
      items: [
        { label: {fr: "C", en : "C"}, value: 80},
        { label: { fr: "C++ / Programmation orientée objet", en: "C++ / Object-oriented programming" }, value: 60 },
        { label: { fr: "Architecture des ordinateurs & systèmes", en: "Computer architecture & systems" }, value: 55 },
        { label: { fr: "Bases de données / SQL", en: "Databases / SQL" }, value: 60 },
        { label: { fr: "PostgreSQL & SQLAlchemy", en: "PostgreSQL & SQLAlchemy" }, value: 60 },
        { label: { fr: "Docker", en: "Docker" }, value: 55 },
        { label: { fr: "Calcul haute performance & algorithmique avancée", en: "High-performance computing & advanced algorithms" }, value: 55 }
      ]
    },
    {
      category: { fr: "Mathématiques appliquées", en: "Applied Mathematics" },
      items: [
        { label: { fr: "Optimisation numérique", en: "Numerical optimization" }, value: 65 },
        { label: { fr: "Probabilités & processus stochastiques", en: "Probability & stochastic processes" }, value: 60 },
        { label: { fr: "Analyse numérique (EDO / EDP)", en: "Numerical analysis (ODE / PDE)" }, value: 60 }
      ]
    },
    {
      category: { fr: "Outils", en: "Tools" },
      items: [
        { label: { fr: "Excel / VBA", en: "Excel / VBA" }, value: 60 },
        { label: { fr: "Git", en: "Git" }, value: 70 },
        { label: { fr: "NumPy / Pandas", en: "NumPy / Pandas" }, value: 80 },
        { label: { fr: "PyTorch", en: "PyTorch" }, value: 80 }
      ]
    },
    {
      category: { fr: "Langues", en: "Languages" },
      items: [
        { label: { fr: "Français (natif)", en: "French (native)" }, value: 100 },
        { label: { fr: "Anglais (courant)", en: "English (fluent)" }, value: 85 },
        { label: { fr: "Italien (en apprentissage — Erasmus à Rome)", en: "Italian (learning — Erasmus in Rome)" }, value: 25 },
        { label: { fr: "Allemand (notions scolaires)", en: "German (basic, school level)" }, value: 30 }
      ]
    },
  ],

  // ------------------------------------------------------------------
  // PROJETS
  // ------------------------------------------------------------------
  projects: [
    {
      title: { fr: "Modèle prédictif de Health Score sectoriel pour MongoDB", en: "Sector-Level Health Score Prediction Model for MongoDB" },
      description: {
        fr: "Développement d'un modèle prédictif estimant l'évolution du Health Score de comptes clients à un horizon donné, à partir d'une approche multi-niveaux combinant données macroéconomiques, indicateurs sectoriels et variables internes. Agrégation des prédictions individuelles en indicateurs synthétiques par secteur, pondérés selon le poids de chaque compte. Attention particulière portée à l'interprétabilité des résultats pour en faire un outil exploitable dans un contexte décisionnel.",
        en: "Built a predictive model estimating account Health Score evolution over a given horizon, using a multi-level approach combining macroeconomic data, sector indicators, and account-specific variables. Aggregated individual predictions into sector-level synthetic indicators, weighted by each account's relative importance. Placed particular emphasis on result interpretability to deliver a genuinely usable decision-making tool."
      },
      link: { href: "#", label: { fr: "Projet industriel - Code non disponible", en: "Industrial project - Code not available" } }
    },
    {
      title: { fr: "Comparaison de précisions et d'architectures pour l'inférence GPT", en: "Precision & Architecture Comparison for GPT Inference" },
      description: {
        fr: "Comparaison de plusieurs variantes de précision et d'architecture d'un modèle GPT, à partir d'un checkpoint entraîné et d'un jeu de données textuelles. Construction de plusieurs modèles chargés depuis le même checkpoint, puis mesure de leur erreur de prédiction sur des lots de texte. Projet reposant notamment sur la librairie mptorch. Réalisé dans le cadre de mon stage de recherche au LIP6 sur l'extension aux transformers d'une méthode d'accumulation en précision mixte.",
        en: "Compared several precision and architecture variants of a GPT model, using a trained checkpoint and a text dataset. Built several models loaded from the same checkpoint, then measured their prediction error on text batches. This project relies in particular on the mptorch library. Carried out as part of my research internship at LIP6 on extending a mixed-precision accumulation method to transformer architectures."
      },
      link: { href: "https://github.com/Lucien775/test_gpt_mp", label: { fr: "Dépôt GitHub", en: "Repository GitHub" } }
    },
    {
      title: { fr: "Water Polo Reference — base de données statistiques du water polo international", en: "Water Polo Reference — International Water Polo Stats Database" },
      description: {
        fr: "Conception d'une base de données statistiques pour le water polo international, sur le modèle de Basketball-Reference — un sport qui ne disposait jusqu'ici d'aucune plateforme centralisée de ce type. Mise en place d'un pipeline complet, de la rétro-ingénierie d'une API non documentée (scraping) jusqu'à une base relationnelle PostgreSQL, avec schéma versionné (DBML), chargement idempotent et environnement conteneurisé (Docker). Pipeline fonctionnel sur la Coupe du Monde U16 Femmes 2026 ; la couche de visualisation reste à développer.",
        en: "Built a statistical database for international water polo, modeled after Basketball-Reference — a sport that had no centralized platform of this kind until now. Designed a complete pipeline, from reverse-engineering an undocumented API (scraping) to a relational PostgreSQL database, with a versioned schema (DBML), idempotent data loading, and a containerized environment (Docker). The pipeline is functional for the 2026 U16 Women's World Championship; the visualization layer is still to be built."
      },
      link: { href: "https://github.com/Lucien775/waterpolo-reference", label: { fr: "Dépôt GitHub", en: "Repository GitHub" } }
    },
    {
      title: { fr: "GPT from scratch en C++ (En Cours)", en: "GPT from Scratch in C++ (In Progress)" },
      description: {
        fr: "Projet personnel visant à recréer un petit modèle de langage de type GPT-2 entièrement from scratch en C++, sans framework de deep learning. Implémentation manuelle des briques fondamentales du modèle (mécanisme d'attention, couches du transformer, rétropropagation), dans un objectif de compréhension approfondie du fonctionnement interne des architectures de type GPT.",
        en: "Personal project recreating a small GPT-2-style language model entirely from scratch in C++, without any deep learning framework. Manually implemented the model's core building blocks (attention mechanism, transformer layers, backpropagation) to gain a deep understanding of how GPT-style architectures work under the hood."
      },
      link: { href: "https://github.com/Lucien775/gpt_from_scratch_cpp", label: { fr: "Dépôt GitHub", en: "Repository GitHub" } }
    },
  ],
    


  // ------------------------------------------------------------------
  // CONTACT
  // ------------------------------------------------------------------
  contact: {
    links: [
      { label: "lucien.coudert.pro@sfr.fr", href: "mailto:lucien.coudert.pro@sfr.fr" },
      { label: "+33 6 33 72 08 15", href: "tel:+33633720815" },
      { label: "linkedin.com/in/lucien-coudert", href: "https://www.linkedin.com/in/lucien-coudert"},
      { label: "github.com/lucien-coudert", href: "https://github.com/Lucien775" }
    ]
  },

  // ------------------------------------------------------------------
  // LIBELLÉS DE L'INTERFACE (titres de section, footer, etc.)
  // ------------------------------------------------------------------
  i18n: {
    fr: {
      "experiences.title": "Expériences professionnelles",
      "formation.title": "Formation académique",
      "competences.title": "Compétences",
      "projets.title": "Projets",
      "contact.title": "Contact",
      "contact.lead": "Pour me contacter:",
      "contact.download": "↓ Télécharger le CV (PDF)",
      "footer.note": "Site personnel — code source disponible sur demande.",
      "nav.profil": "Profil",
      "nav.experiences": "Expériences",
      "nav.formation": "Formation",
      "nav.competences": "Compétences",
      "nav.projets": "Projets",
      "nav.contact": "Contact"
    },
    en: {
      "experiences.title": "Professional Experience",
      "formation.title": "Academic Background",
      "competences.title": "Skills",
      "projets.title": "Projects",
      "contact.title": "Contact",
      "contact.lead": "To contact me:",
      "contact.download": "↓ Download CV (PDF)",
      "footer.note": "Personal site — source code available on request.",
      "nav.profil": "Profile",
      "nav.experiences": "Experience",
      "nav.formation": "Education",
      "nav.competences": "Skills",
      "nav.projets": "Projects",
      "nav.contact": "Contact"
    }
  }
};
