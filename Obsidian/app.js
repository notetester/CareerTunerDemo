const areas = {
  hub: { label: "Hub", color: "#4fd1c5" },
  product: { label: "Product", color: "#f2c14e" },
  engineering: { label: "Engineering", color: "#79a7ff" },
  ai: { label: "AI/ML", color: "#b794f4" },
  release: { label: "Release", color: "#fb7185" },
  review: { label: "Review", color: "#8bd17c" },
};

const nodes = [
  {
    id: "career-tuner",
    title: "CareerTuner",
    area: "hub",
    x: 530,
    y: 320,
    radius: 28,
    summary:
      "채용공고를 단순 저장하는 앱이 아니라, 지원 건 단위로 스펙·학습·면접 준비를 조정하는 AI 취업 전략 플랫폼입니다.",
    points: [
      "지원 건 중심으로 공고, 이력, 분석, 학습 과제, 면접 대비를 묶습니다.",
      "공개 데모는 백엔드 없이 mock 데이터와 PWA 셸로 핵심 사용자 흐름을 확인할 수 있게 구성했습니다.",
      "내부 Obsidian vault는 정본 문서와 결정 로그를 연결하고, 이 공개본은 민감 자료를 제거한 요약 지도입니다.",
    ],
  },
  {
    id: "application-case",
    title: "지원 건 모델",
    area: "product",
    x: 205,
    y: 170,
    summary:
      "핵심 단위는 채용공고가 아니라 사용자가 실제 지원을 준비하는 하나의 application case입니다.",
    points: [
      "공고 분석 결과와 사용자 프로필을 결합해 적합도, 강점, 보완점을 제공합니다.",
      "학습 과제와 준비 상태를 같은 흐름에서 추적해 다음 행동이 끊기지 않게 설계했습니다.",
      "모바일과 데스크톱 모두 반복 방문에 맞춘 정보 밀도와 PWA 사용성을 고려했습니다.",
    ],
  },
  {
    id: "public-demo",
    title: "공개 데모",
    area: "product",
    x: 275,
    y: 470,
    summary:
      "CareerTunerDemo는 비공개 소스 저장소의 정적 산출물만 배포하는 공개 GitHub Pages repo입니다.",
    points: [
      "로그인, 대시보드, 취업 분석, 적합도 분석 흐름을 서버 없이 브라우저에서 체험할 수 있습니다.",
      "데모 데이터는 가상 데이터이며 새로고침 후 초기화되는 형태로 공개 안전성을 확보했습니다.",
      "이 Obsidian 공개 뷰어도 같은 Pages 하위 경로에 고정해 심사자가 한 링크에서 확인하게 했습니다.",
    ],
  },
  {
    id: "backend",
    title: "Spring API",
    area: "engineering",
    x: 805,
    y: 150,
    summary:
      "백엔드는 Spring Boot, Java, MyBatis 기반 REST API로 구성되고 응답 envelope와 계층 경계를 통일합니다.",
    points: [
      "controller, service, mapper, domain 계층을 기준으로 기능별 경계를 유지합니다.",
      "영속성은 MyBatis mapper와 XML을 사용해 SQL 흐름을 명확하게 관리합니다.",
      "사용자 기능과 관리자 기능이 같은 릴리스 기준 안에서 함께 검토되도록 문서화했습니다.",
    ],
  },
  {
    id: "frontend",
    title: "React PWA",
    area: "engineering",
    x: 865,
    y: 340,
    summary:
      "프런트엔드는 React, Vite, TypeScript, Tailwind 기반 SPA이며 공개 데모는 sanitized build로 배포됩니다.",
    points: [
      "Vite base path를 GitHub Pages 경로에 맞춰 빌드하고 PWA 설치 경험을 제공합니다.",
      "데모 모드는 mock 데이터와 서버 호출 차단을 전제로 공개 가능한 사용자 흐름만 보여줍니다.",
      "타입체크와 static build, 민감정보 패턴 검사를 배포 파이프라인에 포함했습니다.",
    ],
  },
  {
    id: "ai-pipeline",
    title: "AI 파이프라인",
    area: "ai",
    x: 170,
    y: 320,
    summary:
      "AI 기능은 공고 분석, 커리어 전략, 첨삭, 면접 대비를 각 모듈로 나누고 산출물 경계를 따로 둡니다.",
    points: [
      "AI raw output과 반복 benchmark artifact는 본체 repo에 누적하지 않는 정책을 세웠습니다.",
      "사람이 읽는 보고서와 기계 산출물을 별도 서브모듈로 분리해 본체 오염을 줄였습니다.",
      "모델 실험, fallback, provider 변경 이력을 문서와 README로 추적하는 구조입니다.",
    ],
  },
  {
    id: "career-llm",
    title: "Career Strategy LLM",
    area: "ai",
    x: 415,
    y: 105,
    summary:
      "C 영역은 사용자 스펙과 목표 공고를 바탕으로 준비 전략과 보완 과제를 생성하는 자체 LLM 축입니다.",
    points: [
      "validator, runner, helper는 재현 가능한 본체 경로에 두고 대형 결과물은 artifact 저장소로 분리했습니다.",
      "심사 관점에서는 AI가 단순 답변 생성이 아니라 지원 전략의 의사결정 보조로 쓰인다는 점이 핵심입니다.",
      "문서화된 경계를 통해 실험 산출물 증가와 제품 코드 변경을 분리합니다.",
    ],
  },
  {
    id: "correction-llm",
    title: "Correction LLM",
    area: "ai",
    x: 450,
    y: 540,
    summary:
      "E 영역은 자기소개서와 답변 문장을 교정·개선하는 LLM 모듈로, 이력서/면접 준비 흐름과 연결됩니다.",
    points: [
      "첨삭 모델은 사용자 문맥과 채용공고 요구사항을 함께 반영하는 방향으로 정리했습니다.",
      "README와 model card를 통해 현재 위치와 실행 범위를 추적합니다.",
      "공개본에는 원문 데이터나 내부 실험 결과가 아닌 기능 축과 가치만 요약했습니다.",
    ],
  },
  {
    id: "release",
    title: "릴리즈 산출물",
    area: "release",
    x: 855,
    y: 515,
    summary:
      "웹 데모, 모바일 앱, 데스크톱 압축본·설치본·포터블 실행파일까지 다양한 사용 환경을 배포 대상으로 잡았습니다.",
    points: [
      "GitHub Actions로 sanitized frontend demo를 CareerTunerDemo Pages에 자동 반영합니다.",
      "Android, iOS, desktop release workflow를 분리해 플랫폼별 산출물을 관리합니다.",
      "데스크톱 포터블 모드는 실행 파일 주변 데이터 폴더를 우선 고려해 설치본 설정과 충돌하지 않게 설계했습니다.",
    ],
  },
  {
    id: "ownership",
    title: "팀 경계",
    area: "review",
    x: 665,
    y: 505,
    summary:
      "기능별 수직 분담과 공통 영역 변경 기준을 문서화해 여러 사람이 같은 repo에서 작업할 때 충돌을 줄입니다.",
    points: [
      "공통 라우팅, DB 구조, 인증, API envelope, 공통 프롬프트 구조는 팀 합의 대상입니다.",
      "개인 브랜치에서 작업하고 dev로 PR을 보내는 절차를 기준으로 운영합니다.",
      "서브모듈 pointer 변경은 원본 repo commit과 본체 repo commit을 분리해 추적합니다.",
    ],
  },
  {
    id: "private-vault",
    title: "Internal Vault",
    area: "review",
    x: 610,
    y: 210,
    summary:
      "비공개 Obsidian vault는 상세 노트, 결정 로그, 내부 자료를 보관하는 원본이고 이 화면은 공개용 추출본입니다.",
    points: [
      "공개 제외 자료는 vault에 남겨 정보 손실 없이 유지합니다.",
      "외부 공개가 필요한 내용은 별도 HTML로 재작성해 민감 링크와 raw output을 제거합니다.",
      "향후 공개 범위가 넓어지면 이 하위 경로만 확장하면 됩니다.",
    ],
  },
];

const edges = [
  ["career-tuner", "application-case", "strong"],
  ["career-tuner", "public-demo", "strong"],
  ["career-tuner", "backend", "normal"],
  ["career-tuner", "frontend", "normal"],
  ["career-tuner", "ai-pipeline", "strong"],
  ["career-tuner", "release", "normal"],
  ["career-tuner", "ownership", "normal"],
  ["career-tuner", "private-vault", "normal"],
  ["application-case", "ai-pipeline", "normal"],
  ["application-case", "frontend", "normal"],
  ["ai-pipeline", "career-llm", "normal"],
  ["ai-pipeline", "correction-llm", "normal"],
  ["frontend", "public-demo", "normal"],
  ["frontend", "release", "normal"],
  ["backend", "frontend", "normal"],
  ["release", "public-demo", "normal"],
  ["ownership", "private-vault", "normal"],
];

const state = {
  area: "all",
  query: "",
  selected: nodes[0],
};

const graph = document.getElementById("graph");
const cards = document.getElementById("cards");
const filters = document.getElementById("areaFilters");
const searchInput = document.getElementById("searchInput");
const detailArea = document.getElementById("detailArea");
const detailTitle = document.getElementById("detailTitle");
const detailBody = document.getElementById("detailBody");
const detailPoints = document.getElementById("detailPoints");
const resultCount = document.getElementById("resultCount");

document.getElementById("metricNodes").textContent = String(nodes.length);
document.getElementById("metricEdges").textContent = String(edges.length);
document.getElementById("metricAreas").textContent = String(Object.keys(areas).length);

function matches(node) {
  const areaMatch = state.area === "all" || node.area === state.area;
  const haystack = [node.title, areas[node.area].label, node.summary, ...node.points].join(" ").toLowerCase();
  return areaMatch && haystack.includes(state.query.trim().toLowerCase());
}

function getNode(id) {
  return nodes.find((node) => node.id === id);
}

function selectNode(node) {
  state.selected = node;
  detailArea.textContent = areas[node.area].label;
  detailTitle.textContent = node.title;
  detailBody.textContent = node.summary;
  detailPoints.textContent = "";
  node.points.forEach((point) => {
    const item = document.createElement("li");
    item.textContent = point;
    detailPoints.append(item);
  });
  render();
}

function renderFilters() {
  const all = document.createElement("button");
  all.type = "button";
  all.className = "segment active";
  all.dataset.area = "all";
  all.textContent = "All";
  filters.append(all);

  Object.entries(areas).forEach(([key, area]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "segment";
    button.dataset.area = key;
    button.textContent = area.label;
    filters.append(button);
  });

  filters.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-area]");
    if (!button) return;
    state.area = button.dataset.area;
    filters.querySelectorAll(".segment").forEach((item) => item.classList.toggle("active", item === button));
    render();
  });
}

function renderGraph() {
  graph.textContent = "";
  const fragment = document.createDocumentFragment();

  edges.forEach(([fromId, toId, strength]) => {
    const from = getNode(fromId);
    const to = getNode(toId);
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", from.x);
    line.setAttribute("y1", from.y);
    line.setAttribute("x2", to.x);
    line.setAttribute("y2", to.y);
    line.classList.add("edge");
    if (strength === "strong") line.classList.add("strong");
    if (!matches(from) && !matches(to)) line.classList.add("dimmed");
    fragment.append(line);
  });

  nodes.forEach((node) => {
    const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
    group.classList.add("node");
    if (node.id === state.selected.id) group.classList.add("selected");
    if (!matches(node)) group.classList.add("dimmed");
    group.setAttribute("transform", `translate(${node.x}, ${node.y})`);
    group.setAttribute("tabindex", "0");
    group.setAttribute("role", "button");
    group.setAttribute("aria-label", node.title);
    group.addEventListener("click", () => selectNode(node));
    group.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        selectNode(node);
      }
    });

    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("r", node.radius || 20);
    circle.setAttribute("fill", areas[node.area].color);

    const title = document.createElementNS("http://www.w3.org/2000/svg", "text");
    title.setAttribute("text-anchor", "middle");
    title.setAttribute("y", (node.radius || 20) + 24);
    title.textContent = node.title;

    const area = document.createElementNS("http://www.w3.org/2000/svg", "text");
    area.setAttribute("text-anchor", "middle");
    area.setAttribute("y", (node.radius || 20) + 41);
    area.classList.add("sub");
    area.textContent = areas[node.area].label;

    group.append(circle, title, area);
    fragment.append(group);
  });

  graph.append(fragment);
}

function renderCards() {
  cards.textContent = "";
  const visible = nodes.filter(matches);
  resultCount.textContent = `${visible.length} visible`;

  if (!visible.length) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = "검색 조건과 일치하는 공개 카드가 없습니다.";
    cards.append(empty);
    return;
  }

  visible.forEach((node) => {
    const card = document.createElement("article");
    card.className = "card";
    card.tabIndex = 0;
    card.innerHTML = `
      <h3>${node.title}</h3>
      <p>${node.summary}</p>
      <span class="tag">${areas[node.area].label}</span>
    `;
    card.addEventListener("click", () => selectNode(node));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        selectNode(node);
      }
    });
    cards.append(card);
  });
}

function render() {
  renderGraph();
  renderCards();
}

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  render();
});

renderFilters();
selectNode(nodes[0]);
