window.SECOND_BRAIN_GRAPH = {
  meta: {
    name: "CareerTuner Second Brain",
    updated: "2026-07-10",
    visibility: "public-safe",
  },
  groups: {
    hub: { label: "Hub", color: "#4fd1c5", cx: 640, cy: 390 },
    wiki: { label: "Wiki", color: "#f2c14e", cx: 295, cy: 250 },
    concept: { label: "Concept", color: "#79a7ff", cx: 225, cy: 555 },
    graph: { label: "Graph", color: "#b794f4", cx: 760, cy: 210 },
    obsidian: { label: "Obsidian", color: "#8bd17c", cx: 1040, cy: 340 },
    agent: { label: "Agent", color: "#fb7185", cx: 700, cy: 600 },
    workflow: { label: "Workflow", color: "#f59e0b", cx: 455, cy: 610 },
    public: { label: "Public", color: "#5eead4", cx: 1030, cy: 610 },
    project: { label: "Project", color: "#c084fc", cx: 585, cy: 115 },
  },
  nodes: [
    node("second-brain", "CareerTuner Second Brain", "hub", "system", 34, "raw source, wiki synthesis, graph query, public demo를 연결하는 장기 맥락 시스템입니다."),
    node("raw", "Raw Sources", "wiki", "layer", 22, "원문, 웹 source 색인, 수정하지 않는 근거 자료를 보관합니다."),
    node("llm-wiki", "LLM Wiki", "concept", "concept", 28, "LLM이 raw 자료를 persistent Markdown wiki로 계속 갱신하는 운영 패턴입니다."),
    node("schema", "AGENTS Schema", "agent", "protocol", 18, "agent가 wiki를 어떻게 유지할지 알려주는 규칙 문서입니다."),
    node("wiki-index", "wiki/index.md", "wiki", "index", 24, "content-oriented catalog입니다. agent와 사람이 query 시작점으로 사용합니다."),
    node("wiki-log", "wiki/log.md", "wiki", "log", 20, "ingest, query, lint 이력을 시간순으로 남기는 append-only log입니다."),
    node("graphify", "Graphify", "graph", "tool", 30, "code/docs/media에서 graph를 만들고 queryable memory를 제공하는 도구입니다."),
    node("graph-json", "graph.json", "graph", "artifact", 22, "Graphify의 persistent graph artifact입니다. private/public을 분리해 다룹니다."),
    node("graph-report", "GRAPH_REPORT.md", "graph", "artifact", 24, "hub, bridge, surprising link를 사람이 읽는 형태로 정리한 graph report입니다."),
    node("obsidian", "Obsidian Vault", "obsidian", "tool", 28, "Markdown wiki를 사람이 탐색하고 graph view로 보는 IDE 역할입니다."),
    node("graph-view", "Graph View", "obsidian", "view", 16, "전체 연결 구조를 시각적으로 확인하는 Obsidian view입니다."),
    node("public-demo", "Public Demo Viewer", "public", "projection", 26, "CareerTunerDemo/Obsidian/SecondBrain에 공개 가능한 subset을 보여주는 정적 viewer입니다."),
    node("agent-ladder", "3-layer Query Rule", "agent", "protocol", 25, "graph query, wiki search, raw/source reading 순서로 agent 탐색 비용을 줄입니다."),
    node("codex", "Codex", "agent", "agent", 15, "CareerTuner 작업 전 graph/wiki를 먼저 읽는 coding agent 중 하나입니다."),
    node("claude-code", "Claude Code", "agent", "agent", 15, "Graphify와 Obsidian memory를 함께 사용할 수 있는 coding agent 중 하나입니다."),
    node("ingest", "Ingest", "workflow", "operation", 19, "새 source를 raw에 넣고 wiki/index/log/graph를 갱신합니다."),
    node("query", "Query", "workflow", "operation", 19, "wiki와 graph를 먼저 읽고 필요한 경우 source로 내려가 답을 합성합니다."),
    node("lint", "Lint", "workflow", "operation", 18, "orphan, stale claim, missing link, public boundary 위반을 점검합니다."),
    node("public-export", "Public Export", "public", "operation", 21, "private vault에서 공개 가능한 구조만 demo repo로 내보냅니다."),
    node("secret-boundary", "Secret Boundary", "public", "policy", 22, "API key, local path, endpoint, raw output, 내부 판단 메모를 공개 제외합니다."),
    node("career-architecture", "CareerTuner Architecture", "project", "domain", 23, "Spring API, React SPA, AI/ML, release 산출물의 정본 구조입니다."),
    node("submodule", "Private Submodule", "project", "storage", 20, "비공개 Obsidian submodule을 main repo의 docs/obsidian-vault pointer로 고정합니다."),
    node("mcp", "MCP / HTTP Query", "graph", "interface", 16, "Graphify graph를 agent tool처럼 조회할 수 있는 장기 확장 경로입니다."),
  ],
  edges: [
    edge("second-brain", "raw", "contains"),
    edge("second-brain", "llm-wiki", "pattern"),
    edge("second-brain", "graphify", "uses"),
    edge("second-brain", "obsidian", "uses"),
    edge("second-brain", "public-demo", "projects"),
    edge("second-brain", "agent-ladder", "governs"),
    edge("raw", "llm-wiki", "feeds"),
    edge("llm-wiki", "schema", "requires"),
    edge("llm-wiki", "wiki-index", "maintains"),
    edge("llm-wiki", "wiki-log", "records"),
    edge("llm-wiki", "ingest", "operation"),
    edge("llm-wiki", "query", "operation"),
    edge("llm-wiki", "lint", "operation"),
    edge("graphify", "graph-json", "writes"),
    edge("graphify", "graph-report", "writes"),
    edge("graphify", "mcp", "serves"),
    edge("graph-json", "agent-ladder", "supports"),
    edge("graph-report", "agent-ladder", "supports"),
    edge("obsidian", "graph-view", "visualizes"),
    edge("obsidian", "wiki-index", "opens"),
    edge("public-demo", "public-export", "built-by"),
    edge("public-export", "secret-boundary", "enforces"),
    edge("public-export", "graph-json", "sanitizes"),
    edge("agent-ladder", "codex", "guides"),
    edge("agent-ladder", "claude-code", "guides"),
    edge("agent-ladder", "wiki-index", "starts-at"),
    edge("query", "career-architecture", "narrows"),
    edge("career-architecture", "submodule", "links"),
    edge("submodule", "obsidian", "stores"),
  ],
  sources: [
    source("Karpathy LLM Wiki", "raw/wiki/schema, ingest/query/lint, index/log 패턴을 vault 기본 구조로 채택했습니다.", "https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f"),
    source("Graphify", "graph.json, GRAPH_REPORT, Obsidian/wiki export, query server를 agent memory 계층으로 배치했습니다.", "https://github.com/safishamsi/graphify"),
    source("Graphify PyPI", "공식 패키지 graphifyy와 CLI graphify 설치 경로를 runbook에 반영했습니다.", "https://pypi.org/project/graphifyy/"),
    source("Obsidian agent patterns", "agent가 vault schema, index, log를 읽고 유지하는 방식을 참고했습니다.", "https://github.com/Ar9av/obsidian-wiki"),
    source("Public boundary", "비공개 원본과 공개 projection을 분리해 GitHub Pages에는 sanitized graph만 배포합니다.", "https://graphify.net/"),
  ],
};

function node(id, label, group, type, weight, summary) {
  return { id, label, group, type, weight, summary };
}

function edge(source, target, kind) {
  return { source, target, kind };
}

function source(title, summary, href) {
  return { title, summary, href };
}
