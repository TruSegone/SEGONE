(() => {
  const data = window.SEGONE_ECOSYSTEM;
  if (!data) return;
  const inDirectory = location.pathname.includes('/ventures');
  const resolveHref = href => {
    if (!inDirectory) return href;
    return href.startsWith('#') ? `../${href}` : href;
  };
  const linkAttrs = (href, external = false) => `href="${resolveHref(href)}"${external ? ' target="_blank" rel="noopener noreferrer"' : ''}`;

  const renderVenture = (venture, index) => `
    <article class="venture-card venture--${venture.accent}">
      <div class="venture-card-top"><span class="mono">0${index + 1} / ECOSYSTEM</span><span class="status-badge">${venture.status}</span></div>
      <p class="venture-category">${venture.category}</p>
      <h3>${venture.name}</h3>
      <p class="venture-description">${venture.description}</p>
      <a class="venture-link" ${linkAttrs(venture.href, venture.external)}>${venture.cta}<span aria-hidden="true">↗</span></a>
    </article>`;

  document.querySelectorAll('[data-venture-feature]').forEach(target => {
    target.innerHTML = data.ventures.map(renderVenture).join('');
  });
  document.querySelectorAll('[data-venture-directory]').forEach(target => {
    target.innerHTML = data.ventures.map(renderVenture).join('');
  });
  document.querySelectorAll('[data-game-showcase]').forEach(target => {
    target.innerHTML = data.games.map((game, index) => `
      <article class="game-card game--${game.accent}">
        <div class="game-art" aria-hidden="true"><span class="mono">ARCADE / 0${index + 1}</span><span class="game-art-mark">${game.id === 'neon-drift' ? 'ND' : game.id === 'golf-tap' ? 'GT' : 'PT'}</span><span class="game-art-line"></span></div>
        <div class="game-card-body"><div class="game-meta"><span class="status-badge">${game.status}</span><span class="mono">${game.category}</span></div>
          <h3>${game.name}</h3><p>${game.description}</p>
          <div class="game-actions"><a class="button button-primary" ${linkAttrs(game.playUrl, true)}>Play now <span aria-hidden="true">↗</span></a><a class="source-link" ${linkAttrs(game.sourceUrl, true)}>Source</a></div>
        </div>
      </article>`).join('');
  });
  document.querySelectorAll('[data-project-showcase]').forEach(target => {
    target.innerHTML = data.projects.map(project => `
      <article class="project-card">
        <div class="project-card-top"><span class="mono">PROJECT / ${project.id.toUpperCase()}</span><span class="status-badge">${project.status}</span></div>
        <p class="venture-category">${project.category}</p><h3>${project.name}</h3>
        <p class="project-problem"><strong>Problem</strong>${project.problem}</p>
        <p>${project.description}</p><p class="project-stack"><span class="mono">VERIFIED STACK</span>${project.stack}</p>
        <a class="venture-link" ${linkAttrs(project.sourceUrl, true)}>View public repository<span aria-hidden="true">↗</span></a>
      </article>`).join('');
  });
})();
