const graphData = window.SECOND_BRAIN_GRAPH;
const { groups, nodes, edges, sources } = graphData;

const pinnedPositions = {
  "second-brain": [640, 390],
  "career-architecture": [585, 115],
  submodule: [460, 150],
  graphify: [760, 210],
  obsidian: [1040, 340],
  "public-demo": [1030, 610],
  "agent-ladder": [700, 600],
  "llm-wiki": [225, 555],
  raw: [295, 250],
  "wiki-index": [370, 315],
  "secret-boundary": [1110, 690],
};

const state = {
  group: "all",
  query: "",
  selected: nodes[0],
};

const graph = document.getElementById("graph");
const filters = document.getElementById("groupFilters");
const searchInput = document.getElementById("searchInput");
const detailGroup = document.getElementById("detailGroup");
const detailTitle = document.getElementById("detailTitle");
const detailSummary = document.getElementById("detailSummary");
const neighborList = document.getElementById("neighborList");
const resultCount = document.getElementById("resultCount");
const sourceCards = document.getElementById("sourceCards");
const zoomOutButton = document.getElementById("zoomOutButton");
const zoomInButton = document.getElementById("zoomInButton");
const fitButton = document.getElementById("fitButton");
const focusButton = document.getElementById("focusButton");

const graphViewBox = { width: 1280, height: 780 };
const graphPan = {
  minScale: 0.68,
  maxScale: 2.4,
  scale: 0.9,
  x: 0,
  y: 0,
  dragging: false,
  dragStart: null,
  pointerId: null,
};

applyLayout();
const graphBounds = computeGraphBounds();

document.getElementById("metricNodes").textContent = String(nodes.length);
document.getElementById("metricEdges").textContent = String(edges.length);
document.getElementById("metricSources").textContent = String(sources.length);

function applyLayout() {
  Object.entries(pinnedPositions).forEach(([id, [x, y]]) => {
    const item = getNode(id);
    if (!item) return;
    item.x = x;
    item.y = y;
    item.pinned = true;
  });

  Object.keys(groups).forEach((groupKey) => {
    const bucket = nodes.filter((item) => item.group === groupKey && !item.pinned);
    const group = groups[groupKey];
    bucket.forEach((item, index) => {
      const angle = (-Math.PI / 2) + (index / Math.max(bucket.length, 1)) * Math.PI * 2;
      const ring = 70 + (index % 3) * 34;
      item.x = Math.round(group.cx + Math.cos(angle) * ring);
      item.y = Math.round(group.cy + Math.sin(angle) * ring);
    });
  });
}

function getNode(id) {
  return nodes.find((item) => item.id === id);
}

function getNeighbors(id) {
  const ids = new Set();
  edges.forEach((item) => {
    if (item.source === id) ids.add(item.target);
    if (item.target === id) ids.add(item.source);
  });
  return [...ids].map(getNode).filter(Boolean);
}

function matches(item) {
  const groupMatch = state.group === "all" || item.group === state.group;
  const text = [
    item.label,
    item.type,
    item.summary,
    groups[item.group].label,
    ...getNeighbors(item.id).map((neighbor) => neighbor.label),
  ].join(" ").toLowerCase();
  return groupMatch && text.includes(state.query.trim().toLowerCase());
}

function isRelatedToSelection(item) {
  if (!state.selected) return false;
  return item.id === state.selected.id || getNeighbors(state.selected.id).some((neighbor) => neighbor.id === item.id);
}

function edgeTouchesSelection(item) {
  return item.source === state.selected.id || item.target === state.selected.id;
}

function edgeTouchesVisible(item) {
  return matches(getNode(item.source)) || matches(getNode(item.target));
}

function selectNode(item) {
  state.selected = item;
  detailGroup.textContent = `${groups[item.group].label} · ${item.type}`;
  detailTitle.textContent = item.label;
  detailSummary.textContent = item.summary;
  renderNeighbors();
  render();
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function computeGraphBounds() {
  const padding = 90;
  return nodes.reduce((bounds, item) => ({
    minX: Math.min(bounds.minX, item.x - item.weight - padding),
    maxX: Math.max(bounds.maxX, item.x + item.weight + padding),
    minY: Math.min(bounds.minY, item.y - item.weight - padding),
    maxY: Math.max(bounds.maxY, item.y + item.weight + padding),
  }), {
    minX: Infinity,
    maxX: -Infinity,
    minY: Infinity,
    maxY: -Infinity,
  });
}

function getPanRange(axis) {
  const isX = axis === "x";
  const viewportSize = isX ? graphViewBox.width : graphViewBox.height;
  const minBound = isX ? graphBounds.minX : graphBounds.minY;
  const maxBound = isX ? graphBounds.maxX : graphBounds.maxY;
  const margin = 120;
  let min = viewportSize - maxBound * graphPan.scale - margin;
  let max = margin - minBound * graphPan.scale;

  if (min > max) {
    const center = (viewportSize - (minBound + maxBound) * graphPan.scale) / 2;
    min = center - margin;
    max = center + margin;
  }

  return { min, max };
}

function clampPan() {
  graphPan.scale = clamp(graphPan.scale, graphPan.minScale, graphPan.maxScale);
  const rangeX = getPanRange("x");
  const rangeY = getPanRange("y");
  graphPan.x = clamp(graphPan.x, rangeX.min, rangeX.max);
  graphPan.y = clamp(graphPan.y, rangeY.min, rangeY.max);
}

function getGraphPoint(event) {
  const rect = graph.getBoundingClientRect();
  return {
    x: ((event.clientX - rect.left) / rect.width) * graphViewBox.width,
    y: ((event.clientY - rect.top) / rect.height) * graphViewBox.height,
  };
}

function zoomGraph(factor, origin = { x: graphViewBox.width / 2, y: graphViewBox.height / 2 }) {
  const previousScale = graphPan.scale;
  const nextScale = clamp(previousScale * factor, graphPan.minScale, graphPan.maxScale);
  const ratio = nextScale / previousScale;
  graphPan.x = origin.x - ratio * (origin.x - graphPan.x);
  graphPan.y = origin.y - ratio * (origin.y - graphPan.y);
  graphPan.scale = nextScale;
  clampPan();
  updateGraphTransform();
}

function resetGraphView() {
  graphPan.scale = 0.9;
  graphPan.x = 0;
  graphPan.y = 0;
  clampPan();
  updateGraphTransform();
}

function focusSelectedNode() {
  if (!state.selected) return;
  graphPan.scale = Math.max(graphPan.scale, 1.08);
  graphPan.x = (graphViewBox.width / 2 - state.selected.x * graphPan.scale);
  graphPan.y = (graphViewBox.height / 2 - state.selected.y * graphPan.scale);
  clampPan();
  updateGraphTransform();
}

function updateGraphTransform() {
  const viewport = graph.querySelector(".graph-viewport");
  if (!viewport) return;
  viewport.setAttribute("transform", `translate(${graphPan.x} ${graphPan.y}) scale(${graphPan.scale})`);
}

function renderFilters() {
  const all = document.createElement("button");
  all.type = "button";
  all.className = "segment active";
  all.dataset.group = "all";
  all.textContent = "All";
  filters.append(all);

  Object.entries(groups).forEach(([key, group]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "segment";
    button.dataset.group = key;
    button.textContent = group.label;
    filters.append(button);
  });

  filters.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-group]");
    if (!button) return;
    state.group = button.dataset.group;
    filters.querySelectorAll(".segment").forEach((item) => item.classList.toggle("active", item === button));
    render();
  });
}

function renderGraph() {
  graph.textContent = "";
  const fragment = document.createDocumentFragment();
  const viewport = document.createElementNS("http://www.w3.org/2000/svg", "g");
  viewport.classList.add("graph-viewport");

  edges.forEach((item) => {
    const from = getNode(item.source);
    const to = getNode(item.target);
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", from.x);
    line.setAttribute("y1", from.y);
    line.setAttribute("x2", to.x);
    line.setAttribute("y2", to.y);
    line.classList.add("edge");
    if (edgeTouchesSelection(item)) line.classList.add("selected");
    if (!edgeTouchesVisible(item)) line.classList.add("dimmed");
    viewport.append(line);
  });

  nodes.forEach((item) => {
    const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
    group.classList.add("node", `node-${item.type}`);
    if (item.id === state.selected.id) group.classList.add("selected");
    if (isRelatedToSelection(item)) group.classList.add("related");
    if (!matches(item)) group.classList.add("dimmed");
    group.setAttribute("transform", `translate(${item.x}, ${item.y})`);
    group.setAttribute("tabindex", "0");
    group.setAttribute("role", "button");
    group.setAttribute("aria-label", item.label);
    group.addEventListener("click", () => selectNode(item));
    group.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        selectNode(item);
      }
    });

    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("r", item.weight);
    circle.setAttribute("fill", groups[item.group].color);

    const title = document.createElementNS("http://www.w3.org/2000/svg", "text");
    title.setAttribute("text-anchor", "middle");
    title.setAttribute("y", item.weight + 15);
    title.textContent = item.label;

    const type = document.createElementNS("http://www.w3.org/2000/svg", "text");
    type.setAttribute("text-anchor", "middle");
    type.setAttribute("y", item.weight + 29);
    type.classList.add("sub");
    type.textContent = groups[item.group].label;

    if (shouldShowLabel(item)) group.append(circle, title, type);
    else group.append(circle);
    viewport.append(group);
  });

  fragment.append(viewport);
  graph.append(fragment);
  updateGraphTransform();
}

function shouldShowLabel(item) {
  if (item.id === state.selected.id || isRelatedToSelection(item)) return true;
  if (!matches(item)) return false;
  return item.weight >= 20 || state.query.trim().length > 0 || state.group !== "all";
}

function renderNeighbors() {
  neighborList.textContent = "";
  getNeighbors(state.selected.id)
    .sort((a, b) => groups[a.group].label.localeCompare(groups[b.group].label, "ko"))
    .forEach((neighbor) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "neighbor";
      button.innerHTML = `<span>${neighbor.label}</span><small>${groups[neighbor.group].label}</small>`;
      button.addEventListener("click", () => selectNode(neighbor));
      neighborList.append(button);
    });
}

function renderSources() {
  sourceCards.textContent = "";
  sources.forEach((item) => {
    const card = document.createElement("article");
    card.className = "source-card";
    const heading = document.createElement("h3");
    heading.textContent = item.title;
    const summary = document.createElement("p");
    summary.textContent = item.summary;
    const link = document.createElement("a");
    link.href = item.href;
    link.textContent = "Source";
    card.append(heading, summary, link);
    sourceCards.append(card);
  });
}

function render() {
  const visible = nodes.filter(matches);
  resultCount.textContent = `${visible.length} visible`;
  renderGraph();
}

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  render();
});

graph.addEventListener("pointerdown", (event) => {
  if (event.button !== 0) return;
  graphPan.dragging = true;
  graphPan.pointerId = event.pointerId;
  graphPan.dragStart = {
    x: event.clientX,
    y: event.clientY,
    panX: graphPan.x,
    panY: graphPan.y,
  };
  graph.classList.add("panning");
  graph.setPointerCapture(event.pointerId);
});

graph.addEventListener("pointermove", (event) => {
  if (!graphPan.dragging || graphPan.pointerId !== event.pointerId) return;
  const rect = graph.getBoundingClientRect();
  const dx = ((event.clientX - graphPan.dragStart.x) / rect.width) * graphViewBox.width;
  const dy = ((event.clientY - graphPan.dragStart.y) / rect.height) * graphViewBox.height;
  graphPan.x = graphPan.dragStart.panX + dx;
  graphPan.y = graphPan.dragStart.panY + dy;
  clampPan();
  updateGraphTransform();
});

function stopPanning(event) {
  if (graphPan.pointerId !== event.pointerId) return;
  graphPan.dragging = false;
  graphPan.pointerId = null;
  graphPan.dragStart = null;
  graph.classList.remove("panning");
  if (graph.hasPointerCapture(event.pointerId)) graph.releasePointerCapture(event.pointerId);
}

graph.addEventListener("pointerup", stopPanning);
graph.addEventListener("pointercancel", stopPanning);

graph.addEventListener("wheel", (event) => {
  event.preventDefault();
  const factor = event.deltaY < 0 ? 1.12 : 0.89;
  zoomGraph(factor, getGraphPoint(event));
}, { passive: false });

zoomOutButton.addEventListener("click", () => zoomGraph(0.86));
zoomInButton.addEventListener("click", () => zoomGraph(1.16));
fitButton.addEventListener("click", resetGraphView);
focusButton.addEventListener("click", focusSelectedNode);

renderFilters();
renderSources();
selectNode(nodes[0]);
