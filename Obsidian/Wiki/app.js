const wikiData = window.CAREERTUNER_WIKI;
const { groups, pages } = wikiData;

const wikiSearch = document.getElementById("wikiSearch");
const wikiNav = document.getElementById("wikiNav");
const wikiArticle = document.getElementById("wikiArticle");
const visiblePageCount = document.getElementById("visiblePageCount");
const breadcrumb = document.getElementById("breadcrumb");
const tocNav = document.getElementById("tocNav");
const relatedPages = document.getElementById("relatedPages");
const openSidebar = document.getElementById("openSidebar");
const closeSidebar = document.getElementById("closeSidebar");
const sidebarBackdrop = document.getElementById("sidebarBackdrop");

const pageById = new Map(pages.map((page) => [page.id, page]));
const groupById = new Map(groups.map((group) => [group.id, group]));

const state = {
  query: "",
  pageId: "index",
  sectionId: "",
};

function parseHash() {
  let raw = "";
  try {
    raw = decodeURIComponent(window.location.hash.slice(1));
  } catch (_error) {
    raw = window.location.hash.slice(1);
  }

  const [requestedPage = "index", requestedSection = ""] = raw.split("::");
  const valid = pageById.has(requestedPage);
  return {
    pageId: valid ? requestedPage : "index",
    sectionId: requestedSection,
    valid,
  };
}

function getSearchText(page) {
  return [
    page.title,
    page.summary,
    groupById.get(page.group)?.label,
    ...(page.tags || []),
    JSON.stringify(page.sections),
  ].join(" ").toLowerCase();
}

function matchesSearch(page) {
  return getSearchText(page).includes(state.query.trim().toLowerCase());
}

function renderNavigation() {
  wikiNav.textContent = "";
  const visiblePages = pages.filter(matchesSearch);
  visiblePageCount.textContent = String(visiblePages.length);

  if (!visiblePages.length) {
    const empty = document.createElement("p");
    empty.className = "nav-empty";
    empty.textContent = "검색 조건과 일치하는 공개 문서가 없습니다.";
    wikiNav.append(empty);
    return;
  }

  groups.forEach((group) => {
    const groupPages = visiblePages.filter((page) => page.group === group.id);
    if (!groupPages.length) return;

    const section = document.createElement("section");
    section.className = "nav-group";
    const heading = document.createElement("h2");
    heading.textContent = group.label;
    section.append(heading);

    groupPages.forEach((page) => {
      const link = document.createElement("a");
      link.href = `#${page.id}`;
      link.classList.toggle("active", page.id === state.pageId);
      if (page.id === state.pageId) link.setAttribute("aria-current", "page");

      const title = document.createElement("strong");
      title.textContent = page.title;
      const summary = document.createElement("small");
      summary.textContent = page.summary;
      link.append(title, summary);
      section.append(link);
    });

    wikiNav.append(section);
  });
}

function renderArticle(page) {
  const group = groupById.get(page.group);
  breadcrumb.textContent = `Wiki / ${group.label} / ${page.title}`;
  document.title = `${page.title} | CareerTuner Public Wiki`;

  wikiArticle.innerHTML = `
    <header class="article-header">
      <p class="page-kicker">${escapeHtml(group.label)}</p>
      <h1>${escapeHtml(page.title)}</h1>
      <p class="article-summary">${escapeHtml(page.summary)}</p>
      <div class="article-meta">
        <time datetime="${escapeAttribute(page.updated)}">Updated ${escapeHtml(page.updated)}</time>
        ${(page.tags || []).map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}
      </div>
    </header>
    ${page.sections.map((section) => `
      <section id="section-${escapeAttribute(section.id)}" class="article-section">
        <h2>${escapeHtml(section.title)}</h2>
        ${section.blocks.map(renderBlock).join("")}
      </section>
    `).join("")}
  `;
}

function renderBlock(block) {
  if (block.type === "paragraph") {
    return `<p>${escapeHtml(block.text)}</p>`;
  }

  if (block.type === "list" || block.type === "steps") {
    const tag = block.type === "steps" ? "ol" : "ul";
    return `<${tag}>${block.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</${tag}>`;
  }

  if (block.type === "code") {
    return `
      <div class="code-block">
        <span class="code-label">${escapeHtml(block.language)}</span>
        <pre><code>${escapeHtml(block.value)}</code></pre>
      </div>
    `;
  }

  if (block.type === "table") {
    return `
      <div class="table-wrap">
        <table class="doc-table">
          <thead><tr>${block.headers.map((header) => `<th>${escapeHtml(header)}</th>`).join("")}</tr></thead>
          <tbody>${block.rows.map((row) => `<tr>${row.map((cell) => `<td>${escapeHtml(cell)}</td>`).join("")}</tr>`).join("")}</tbody>
        </table>
      </div>
    `;
  }

  if (block.type === "callout") {
    const tone = block.tone === "warning" ? " warning" : "";
    return `
      <aside class="doc-callout${tone}">
        <strong>${escapeHtml(block.title)}</strong>
        <p>${escapeHtml(block.text)}</p>
      </aside>
    `;
  }

  if (block.type === "links") {
    return `
      <div class="page-links">
        ${block.items.map(([pageId, summary]) => {
          const target = pageById.get(pageId);
          if (!target) return "";
          return `<a href="#${escapeAttribute(target.id)}"><strong>${escapeHtml(target.title)}</strong><span>${escapeHtml(summary)}</span></a>`;
        }).join("")}
      </div>
    `;
  }

  if (block.type === "timeline") {
    return `
      <div class="timeline">
        ${block.items.map(([type, title, summary]) => `
          <article class="timeline-entry">
            <time datetime="2026-07-10">2026-07-10 · ${escapeHtml(type)}</time>
            <h3>${escapeHtml(title)}</h3>
            <p>${escapeHtml(summary)}</p>
          </article>
        `).join("")}
      </div>
    `;
  }

  return "";
}

function renderTableOfContents(page) {
  tocNav.textContent = "";
  page.sections.forEach((section) => {
    const link = document.createElement("a");
    link.href = `#${page.id}::${section.id}`;
    link.textContent = section.title;
    tocNav.append(link);
  });
}

function renderRelatedPages(page) {
  relatedPages.textContent = "";
  const ids = new Set(page.related || []);
  pages.forEach((candidate) => {
    if ((candidate.related || []).includes(page.id)) ids.add(candidate.id);
  });
  ids.delete(page.id);

  [...ids]
    .map((id) => pageById.get(id))
    .filter(Boolean)
    .slice(0, 7)
    .forEach((target) => {
      const link = document.createElement("a");
      link.href = `#${target.id}`;
      const title = document.createElement("strong");
      title.textContent = target.title;
      const group = document.createElement("small");
      group.textContent = groupById.get(target.group)?.label || "Wiki";
      link.append(title, group);
      relatedPages.append(link);
    });
}

function renderCurrentLocation({ scroll = true } = {}) {
  const locationState = parseHash();
  state.pageId = locationState.pageId;
  state.sectionId = locationState.sectionId;
  const page = pageById.get(state.pageId);

  renderNavigation();
  renderArticle(page);
  renderTableOfContents(page);
  renderRelatedPages(page);

  requestAnimationFrame(() => {
    const target = state.sectionId ? document.getElementById(`section-${state.sectionId}`) : null;
    if (target) {
      target.scrollIntoView({ block: "start" });
      return;
    }
    if (scroll) window.scrollTo({ top: 0, behavior: "auto" });
    wikiArticle.focus({ preventScroll: true });
  });
}

function openMobileSidebar() {
  document.body.classList.add("sidebar-open");
}

function closeMobileSidebar() {
  document.body.classList.remove("sidebar-open");
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replaceAll("`", "&#096;");
}

wikiSearch.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderNavigation();
});

wikiNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeMobileSidebar();
});

openSidebar.addEventListener("click", openMobileSidebar);
closeSidebar.addEventListener("click", closeMobileSidebar);
sidebarBackdrop.addEventListener("click", closeMobileSidebar);

window.addEventListener("hashchange", () => renderCurrentLocation());

if (!window.location.hash || !parseHash().valid) {
  window.history.replaceState(null, "", "#index");
}

renderCurrentLocation({ scroll: false });
