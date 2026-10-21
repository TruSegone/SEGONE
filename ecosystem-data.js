// Verified venture and project catalogue. Add entries here; ecosystem.js owns the presentation.
window.SEGONE_ECOSYSTEM = Object.freeze({
  ventures: [
    {
      id: "systems",
      name: "SEGONE SYSTEMS",
      category: "Software engineering",
      accent: "cobalt",
      status: "CORE ENGINEERING FOCUS",
      description: "Custom software, web applications, APIs, and business systems engineered to solve practical problems.",
      cta: "Explore software engineering",
      href: "#capabilities"
    },
    {
      id: "arcade",
      name: "SEGONE ARCADE",
      category: "Gaming & interactive experiences",
      accent: "teal",
      status: "LIVE EXPERIENCE",
      description: "A growing collection of original games and interactive experiences. Three browser-playable games are available now.",
      cta: "Enter SEGONE ARCADE",
      href: "https://segone-arcade.pages.dev/",
      external: true
    },
    {
      id: "ai",
      name: "SEGONE AI",
      category: "Artificial intelligence",
      accent: "violet",
      status: "ACTIVE PROTOTYPE",
      description: "AI-powered applications and intelligent systems, including Sentinel AI, a local-first security operations demonstration using synthetic data.",
      cta: "Inspect Sentinel AI",
      href: "https://github.com/TruSegone/SENTINEL-AI",
      external: true
    },
    {
      id: "black-ambrella",
      name: "BLACK AMBRELLA",
      category: "Music, entertainment & culture",
      accent: "amber",
      status: "INFORMATIONAL LISTING",
      description: "A distinct creative identity exploring music, entertainment, and digital experiences. No public destination is currently verified.",
      cta: "Discuss a creative collaboration",
      href: "#contact"
    },
    {
      id: "labs",
      name: "SEGONE LABS",
      category: "Research & experiments",
      accent: "platinum",
      status: "PROTOTYPE SHOWCASE",
      description: "An evolving space for experiments and technical prototypes. Sentinel AI is the current public project; future work will be added when it is ready to inspect.",
      cta: "Explore verified projects",
      href: "#work"
    }
  ],
  games: [
    {
      id: "neon-drift",
      name: "Neon Drift",
      category: "Arcade survival",
      accent: "cobalt",
      status: "PLAY NOW",
      description: "Steer through shifting neon environments, collect energy, and dodge hazards as each mission gets faster.",
      playUrl: "https://trusegone.github.io/Launch-Neon-Drift-arcade-game/",
      sourceUrl: "https://github.com/TruSegone/Launch-Neon-Drift-arcade-game"
    },
    {
      id: "golf-tap",
      name: "Golf Tap",
      category: "Arcade golf",
      accent: "teal",
      status: "PLAY NOW",
      description: "Aim, charge a shot, and navigate course hazards to sink each hole within the stroke limit.",
      playUrl: "https://trusegone.github.io/Golf-Tap/",
      sourceUrl: "https://github.com/TruSegone/Golf-Tap"
    },
    {
      id: "paper-toss",
      name: "Paper Toss Office",
      category: "Casual skill",
      accent: "amber",
      status: "PLAY NOW",
      description: "Read the airflow, set your aim, and try to land five baskets in ten throws.",
      playUrl: "https://trusegone.github.io/paper-toss-office/",
      sourceUrl: "https://github.com/TruSegone/paper-toss-office"
    }
  ],
  projects: [
    {
      id: "sentinel-ai",
      name: "Sentinel AI",
      category: "AI & security operations",
      status: "ACTIVE PROTOTYPE",
      problem: "Security teams need a clear way to inspect and investigate operational signals without connecting a demo to real infrastructure.",
      description: "A local-first SOC demonstration with synthetic event data, a FastAPI service, deterministic processing, and an analyst console. Response actions change simulation state only; no adapter contacts a real host or network.",
      stack: "FastAPI · React · Vite · SQLite",
      sourceUrl: "https://github.com/TruSegone/SENTINEL-AI"
    }
  ]
});
