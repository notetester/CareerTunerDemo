window.CAREERTUNER_WIKI = (() => {
  const groups = [
    { id: "start", label: "Start Here" },
    { id: "systems", label: "Systems" },
    { id: "concepts", label: "Concepts" },
    { id: "operations", label: "Operations" },
    { id: "history", label: "History" },
  ];

  const LLM_WIKI_SOURCE = [
    source("Andrej Karpathy · LLM Wiki", "https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f"),
  ];

  const pages = [
    page(
      "index",
      "Wiki Index",
      "start",
      "CareerTuner second brain의 공개 문서 진입점입니다. 시스템, 개념, 반복 절차와 Graphify 보고서를 한곳에서 탐색합니다.",
      ["wiki-index", "second-brain", "portfolio"],
      ["systems/careertuner-second-brain", "systems/agent-memory-protocol", "graph-report"],
      [
        section("role", "이 Wiki의 역할",
          callout("원본 vault가 아니라 공개 projection입니다", "private Obsidian vault에서 합성한 지식 중 구조와 운영 방식을 설명할 수 있는 부분만 공개합니다."),
          paragraph("이 문서는 그래프의 노드 이름만 나열하는 색인이 아닙니다. 각 개념의 목적, 연결 관계, 반복 절차와 공개 경계를 실제 본문으로 읽을 수 있게 구성했습니다."),
          table(
            ["계층", "역할", "공개 화면"],
            [
              ["raw", "원문과 외부 source를 보관하는 private 입력 계층", "직접 공개하지 않음"],
              ["wiki", "사람과 agent가 읽는 합성 Markdown", "이 Public Wiki에 선별 투영"],
              ["graphify-out", "관계 graph, report, query data", "Second Brain graph로 축약"],
              ["source", "제품 코드와 정본 문서", "코드 경로와 구조만 공개"],
            ],
          ),
        ),
        section("systems", "Systems",
          links(
            ["systems/careertuner-second-brain", "전체 second brain 구조와 private/public 계층"],
            ["systems/agent-memory-protocol", "agent가 graph, wiki, source를 읽는 우선순위"],
            ["systems/llm-wiki-architecture", "query-time retrieval 위에 persistent synthesis를 두는 구조"],
            ["systems/wiki-schema", "page, provenance와 다중 문서 갱신을 통제하는 계약"],
          ),
        ),
        section("concepts", "Concepts",
          links(
            ["concepts/llm-wiki", "지식을 chat이 아니라 persistent wiki에 누적하는 패턴"],
            ["concepts/compounding-knowledge", "이전 탐색과 비교 결과를 다음 작업에 복리로 남기는 원리"],
            ["concepts/wiki-index-log", "내용 지도와 시간 지도를 분리하는 navigation 계약"],
            ["concepts/graphify", "코드와 문서 관계를 queryable graph로 만드는 계층"],
            ["concepts/obsidian-vault", "사람이 탐색하고 리뷰하는 Markdown IDE"],
          ),
        ),
        section("operations", "Operations",
          links(
            ["operations/ingest-query-lint", "수집, 질문, 건강검진의 반복 workflow"],
            ["operations/llm-wiki-ingest", "source impact를 여러 page에 통합하는 ingest runbook"],
            ["operations/llm-wiki-query", "graph, wiki, source 순으로 검증하고 결과를 승격하는 query"],
            ["operations/llm-wiki-lint", "구조, 최신성, provenance와 공개 경계를 검사하는 lint"],
            ["operations/wiki-search-tooling", "index와 rg에서 hybrid local search까지 확장하는 기준"],
            ["operations/obsidian-knowledge-workflow", "capture, review, graph, metadata와 발표를 잇는 흐름"],
            ["operations/graphify-runbook", "Graphify 설치, 실행, 산출물과 secret 검사"],
            ["operations/public-export", "private vault에서 공개 demo로 내보내는 경계"],
          ),
        ),
      ],
    ),

    page(
      "graph-report",
      "Second Brain Graph Report",
      "start",
      "Graphify graph를 사람이 빠르게 읽을 수 있도록 hub, bridge, 의외의 연결과 agent 시작 순서를 압축한 공개 보고서입니다.",
      ["graph-report", "graphify", "agent-context"],
      ["concepts/graphify", "systems/agent-memory-protocol", "operations/public-export"],
      [
        section("hubs", "Hub Nodes",
          table(
            ["Hub", "역할"],
            [
              ["CareerTuner Second Brain", "raw source, wiki, graph query와 public demo를 연결하는 최상위 구조"],
              ["LLM Wiki", "raw를 persistent synthesis로 컴파일하고 query 결과를 다시 축적하는 운영 패턴"],
              ["Compounding Knowledge", "cross-link, 비교, 모순 검토를 다음 작업의 출발점으로 만드는 원리"],
              ["Graphify", "graph data, report, query server와 public subset export의 중심"],
              ["Obsidian Vault", "사람이 읽고 검토하는 Markdown IDE"],
              ["Agent Memory Protocol", "agent가 graph/wiki/source를 탐색하는 우선순위"],
              ["Public Export", "private vault에서 GitHub Pages로 내보낼 때의 경계"],
            ],
          ),
        ),
        section("bridges", "Bridge Links",
          list(
            "LLM Wiki는 raw, wiki, agent schema를 하나의 지속 지식 흐름으로 묶습니다.",
            "Wiki Schema와 provenance는 여러 page의 합성을 원문 source까지 추적하게 합니다.",
            "Search ladder는 index와 keyword 검색에서 Graphify와 선택적 qmd/MCP로 확장합니다.",
            "Graphify는 wiki와 source tree의 구조를 queryable graph로 바꿉니다.",
            "Obsidian은 사람이 graph와 Markdown을 검토하고 Web Clipper, Dataview와 Marp를 연결하는 표면입니다.",
            "Public Export는 private graph에서 공개 가능한 subset만 CareerTunerDemo로 보냅니다.",
            "Agent Memory Protocol은 source 전체를 읽기 전에 관련 graph와 wiki를 먼저 찾게 합니다.",
          ),
        ),
        section("surprises", "Surprising Links",
          list(
            "공개 demo는 발표용 그림이 아니라 private vault의 sanitized graph projection입니다.",
            "Wiki Log는 사람을 위한 변경 이력이면서 agent가 최근 맥락을 압축해 읽는 timeline입니다.",
            "좋은 query 결과는 발표로만 소비되지 않고 canonical Wiki page로 돌아가 다음 분석 비용을 줄입니다.",
            "Hybrid/vector search는 시작 조건이 아니라 index 검색 누락이 반복될 때 선택하는 확장 계층입니다.",
            "Graphify 산출물에는 source entity와 로컬 경로가 섞일 수 있으므로 원본 graph를 그대로 공개하지 않습니다.",
          ),
          callout("Graph는 정본이 아닙니다", "graph와 wiki는 탐색 범위를 좁히는 계층입니다. 현재 구현 상태는 런타임 source와 모듈 README를 최종 기준으로 확인합니다.", "warning"),
        ),
        section("start", "Agent Starting Order",
          steps(
            "Wiki Index에서 관련 synthesis page 후보를 찾습니다.",
            "Graph Report에서 hub, bridge와 공개 경계를 확인합니다.",
            "Wiki Log에서 최근 ingest와 query 이력을 확인합니다.",
            "관련 Wiki 본문을 읽은 다음 필요한 정본 문서와 source로 내려갑니다.",
          ),
        ),
      ],
    ),

    page(
      "systems/careertuner-second-brain",
      "CareerTuner Second Brain",
      "systems",
      "프로젝트 문서, AI/ML 실험 경계, 릴리즈 판단과 공개 demo를 하나의 지속 갱신 지식 계층으로 묶는 시스템입니다.",
      ["system", "second-brain", "architecture"],
      ["systems/agent-memory-protocol", "concepts/obsidian-vault", "concepts/graphify", "concepts/llm-wiki"],
      [
        section("goal", "목표",
          paragraph("Agent가 매번 source tree를 처음부터 읽는 비용을 줄이고, 팀원과 AI agent가 Obsidian과 웹 demo에서 같은 프로젝트 구조를 볼 수 있게 합니다."),
          callout("읽기를 줄이는 시스템이 아닙니다", "축적된 맥락으로 어떤 source를 읽어야 하는지 먼저 좁혀, 실제 정본 확인을 더 빠르고 일관되게 만드는 시스템입니다."),
        ),
        section("flow", "Knowledge Flow",
          code("text", "raw/ source material\n  -> wiki/ synthesized Markdown\n  -> graphify-out/ graph, report, public seed data\n  -> CareerTunerDemo/Obsidian public viewers"),
        ),
        section("layers", "Private and Public Layers",
          table(
            ["계층", "내용", "운영 원칙"],
            [
              ["Private raw", "원문, 웹 source, 세부 참고 자료", "필요한 경우에만 agent가 확인"],
              ["Private wiki", "사람이 읽는 synthesis와 runbook", "index/log와 cross-link를 지속 갱신"],
              ["Private graph", "Graphify 산출물과 query report", "민감 entity와 로컬 경로를 검토"],
              ["Public graph", "제품과 코드 관계의 축약 graph", "CareerTunerDemo에서 시각화"],
              ["Public wiki", "공개 가능한 합성 문서", "이 Wiki에서 본문 단위로 열람"],
            ],
          ),
        ),
        section("decisions", "핵심 판단",
          list(
            "Obsidian은 사람이 탐색하고 리뷰하는 지식 IDE입니다.",
            "Graphify는 구조와 관계를 빠르게 찾는 queryable memory입니다.",
            "LLM Wiki는 raw source를 persistent wiki로 컴파일하는 운영 패턴입니다.",
            "CareerTunerDemo는 심사용 공개 projection이며 원본 vault가 아닙니다.",
          ),
        ),
      ],
    ),

    page(
      "systems/agent-memory-protocol",
      "Agent Memory Protocol",
      "systems",
      "Coding agent가 CareerTuner 작업 전에 graph와 wiki를 두 번째 뇌처럼 사용하도록 정한 탐색·저장 규칙입니다.",
      ["system", "agent-memory", "query-rule"],
      ["graph-report", "systems/llm-wiki-architecture", "systems/wiki-schema", "operations/llm-wiki-query"],
      [
        section("priority", "읽기 우선순위",
          steps(
            "Wiki Index에서 관련 synthesis page 후보를 찾습니다.",
            "Graph Report에서 hub, bridge와 public/private boundary를 확인합니다.",
            "Wiki Log에서 최근 ingest/query/lint 이력을 확인합니다.",
            "관련 Wiki 문서에서 설명과 결정 근거를 읽습니다.",
            "원문 확인이 필요한 경우에만 private raw source를 읽습니다.",
            "구현 변경이나 정본 확인이 필요할 때 CareerTuner source로 내려갑니다.",
          ),
        ),
        section("promotion", "Query 결과 저장",
          paragraph("한 번의 답변이 이후 작업에서도 재사용될 수 있다면 chat history에만 남기지 않고 용도에 맞는 지식 파일로 승격합니다."),
          table(
            ["결과 유형", "저장 위치"],
            [
              ["구조 설명", "wiki/systems"],
              ["개념 설명", "wiki/concepts"],
              ["반복 절차", "wiki/operations"],
              ["공개 가능한 관계", "graphify-out/public"],
              ["실행 이력", "wiki/log"],
            ],
          ),
        ),
        section("rules", "금지와 검증",
          list(
            "공개 demo에 private raw source를 복사하지 않습니다.",
            "API key, credential, local path와 private endpoint를 공개 graph에 넣지 않습니다.",
            "Graphify cache와 무거운 generated output을 검토 없이 커밋하지 않습니다.",
            "Wiki 요약을 정본으로 오해하지 않습니다.",
          ),
          callout("최종 기준", "런타임 구현 상태는 source code와 backend/frontend/module README가 최종 기준입니다.", "warning"),
        ),
        section("accumulation", "축적 규칙",
          list(
            "새 source는 요약 한 장이 아니라 영향을 받는 system, concept와 operation page 전체에 통합합니다.",
            "반복 가치가 있는 query 결과는 canonical page를 갱신하거나 새 page로 승격합니다.",
            "Source의 주장, CareerTuner 적용 판단과 현재 구현 사실을 구분합니다.",
            "불확실한 부분은 추측으로 채우지 않고 data gap과 다음 확인 source로 남깁니다.",
          ),
        ),
      ],
    ),

    page(
      "systems/llm-wiki-architecture",
      "LLM Wiki Architecture",
      "systems",
      "Query-time retrieval 위에 raw, wiki와 schema의 지속 합성 계층을 두어 반복 분석이 파일과 link로 축적되게 하는 구조입니다.",
      ["system", "llm-wiki", "architecture", "rag"],
      ["concepts/llm-wiki", "systems/wiki-schema", "concepts/compounding-knowledge", "operations/llm-wiki-ingest"],
      [
        section("difference", "RAG와의 차이",
          table(
            ["항목", "Query-time RAG", "Persistent LLM Wiki"],
            [
              ["기본 단위", "검색된 chunk", "상호 연결된 page"],
              ["합성 시점", "질문마다 다시 수행", "ingest와 중요한 query 때 저장"],
              ["모순 처리", "현재 답변 안에서 비교", "관련 page와 stale claim을 지속 갱신"],
              ["누적성", "session 종료 후 사라지기 쉬움", "Git으로 추적되는 artifact"],
              ["사람의 역할", "질문과 결과 검토", "source 큐레이션, 방향 설정과 review"],
            ],
          ),
          callout("둘 중 하나만 고르는 구조가 아닙니다", "검색과 RAG는 후보 source를 찾고, Wiki는 반복할 가치가 있는 해석을 유지합니다."),
        ),
        section("layers", "세 계층",
          table(
            ["계층", "책임", "변경 원칙"],
            [
              ["Raw sources", "article, paper, image, data와 project 문서", "원문을 immutable input으로 보존"],
              ["Wiki", "summary, entity, concept, comparison과 runbook", "새 source와 query 결과로 계속 갱신"],
              ["Schema", "folder, frontmatter, ingest/query/lint 계약", "실패와 반복 작업을 반영해 공진화"],
            ],
          ),
        ),
        section("mapping", "CareerTuner Mapping",
          table(
            ["역할", "경로", "결과"],
            [
              ["Raw", "docs/obsidian-vault/raw", "외부 원문과 source index"],
              ["Wiki", "docs/obsidian-vault/wiki", "system, concept와 operation synthesis"],
              ["Schema", "docs/obsidian-vault/AGENTS.md", "agent 읽기·갱신·공개 계약"],
              ["Graph", "docs/obsidian-vault/graphify-out", "hub, bridge, query와 report"],
              ["Public projection", "CareerTunerDemo/Obsidian", "검토된 portfolio graph와 Wiki"],
            ],
          ),
        ),
        section("versioning", "Versioning and Collaboration",
          paragraph("Wiki는 Markdown Git repository이므로 diff, history, branch, review와 rollback을 그대로 사용합니다. 하나의 source가 여러 page를 수정해도 의미 있는 한 commit으로 검토할 수 있고, 잘못된 synthesis는 원문과 diff를 근거로 보정할 수 있습니다."),
        ),
        section("authority", "정본 경계",
          callout("Wiki는 탐색 계층입니다", "CareerTuner의 현재 구현은 source code와 책임 문서가 최종 기준입니다. Wiki와 graph는 이전 판단을 재사용하고 읽을 source를 좁히지만 정본을 대체하지 않습니다.", "warning"),
        ),
      ],
      LLM_WIKI_SOURCE,
    ),

    page(
      "systems/wiki-schema",
      "Wiki Schema",
      "systems",
      "Agent가 일반 요약 chatbot이 아니라 provenance와 cross-link를 유지하는 knowledge maintainer로 동작하게 만드는 실행 계약입니다.",
      ["system", "schema", "governance", "provenance"],
      ["systems/llm-wiki-architecture", "operations/llm-wiki-ingest", "operations/llm-wiki-query", "operations/llm-wiki-lint"],
      [
        section("classes", "Page Classes",
          table(
            ["분류", "답하는 질문", "예시"],
            [
              ["Systems", "개념과 절차가 어떻게 연결되는가?", "Second brain architecture, agent protocol"],
              ["Concepts", "반복해서 참조할 원리와 해석은 무엇인가?", "LLM Wiki, compounding knowledge"],
              ["Operations", "어떤 순서와 검증으로 실행하는가?", "Ingest, query, lint, public export"],
            ],
          ),
        ),
        section("frontmatter", "Frontmatter Contract",
          code("yaml", "tags:\n  - ct/<category>\nstatus: active\nupdated: YYYY-MM-DD\nsource_count: 1\nsources:\n  - raw/<topic>/<source>.md"),
          list(
            "status는 active, review 또는 deprecated로 관리합니다.",
            "source_count와 sources는 합성 결과를 raw 근거까지 추적합니다.",
            "Public projection에는 private path 전문 대신 검토된 source label과 공개 URL만 표시합니다.",
          ),
        ),
        section("update", "Multi-page Update Contract",
          steps(
            "새 source의 핵심 주장, entity와 concept를 찾습니다.",
            "기존 page와 일치·보강·충돌하는 내용을 구분합니다.",
            "영향받는 기존 page와 필요한 새 page를 함께 갱신합니다.",
            "Cross-link, index, source metadata와 log를 같은 변경에서 갱신합니다.",
            "공개 가능한 관계만 graph와 Public Wiki에 승격합니다.",
          ),
          callout("10~15 page는 목표 숫자가 아닙니다", "한 source가 그만큼 많은 page에 영향을 줄 수 있다는 예시입니다. 관련 영향을 놓치지 않되 중복 page를 만들지 않습니다."),
        ),
        section("links", "Link and Query Contract",
          list(
            "모든 page는 index entry와 관련 문서 link를 가집니다.",
            "같은 개념을 여러 곳에서 재정의하지 않고 canonical page로 연결합니다.",
            "새 source가 과거 주장을 바꾸면 모순과 최신 판단을 추적할 수 있게 합니다.",
            "재사용할 query 결과는 page, source metadata, index와 log로 함께 승격합니다.",
          ),
        ),
        section("index-log", "Index and Log Contract",
          table(
            ["파일", "책임"],
            [
              ["wiki/index.md", "category, link, 한 줄 요약과 연결 주제를 가진 content catalog"],
              ["wiki/log.md", "날짜, operation과 결과를 가진 parseable timeline"],
            ],
          ),
        ),
      ],
      LLM_WIKI_SOURCE,
    ),

    page(
      "concepts/llm-wiki",
      "LLM Wiki",
      "concepts",
      "Raw 검색에 머물지 않고 source와 중요한 질문 결과를 상호 연결된 Markdown으로 지속 갱신하는 knowledge management pattern입니다.",
      ["concept", "llm-wiki", "persistent-memory", "compounding"],
      ["systems/llm-wiki-architecture", "systems/wiki-schema", "concepts/compounding-knowledge", "operations/ingest-query-lint"],
      [
        section("difference", "핵심 차이",
          paragraph("일반적인 RAG는 질문할 때 relevant chunk를 찾고 그 자리에서 관계를 합성합니다. LLM Wiki는 ingest와 중요한 query 시점에 비교, cross-link, contradiction과 판단을 page로 저장합니다. 다음 agent는 이미 축적된 synthesis에서 시작하고, 근거가 부족하거나 최신 구현이 중요할 때 source로 내려갑니다."),
          callout("Persistent, compounding artifact", "지식은 chat history에 흩어지지 않고 source와 질문이 늘어날수록 함께 깊어지는 파일 집합으로 남습니다."),
        ),
        section("components", "CareerTuner 구성",
          table(
            ["구성", "CareerTuner 역할"],
            [
              ["raw", "원문과 외부 source 색인"],
              ["wiki", "Agent가 유지하고 사람이 검토하는 systems, concepts와 operations"],
              ["AGENTS.md", "agent가 따라야 하는 schema, 읽기 순서와 공개 경계"],
              ["wiki/index", "주제 중심 catalog"],
              ["wiki/log", "시간순 operation log"],
              ["graphify-out", "코드·문서 관계를 구조적으로 질의하는 graph memory"],
              ["CareerTunerDemo", "검토된 지식을 보여주는 portfolio projection"],
            ],
          ),
        ),
        section("need", "CareerTuner에 필요한 이유",
          paragraph("CareerTuner는 backend, frontend, mobile, desktop, AI/ML, demo와 release가 한 repo와 여러 submodule에 걸쳐 있습니다. 매번 전체 문서를 다시 읽으면 비용이 크고 이전 판단이 대화에 묻힙니다."),
          list(
            "기능과 source 위치, 정본 문서와 현재 구현의 차이를 연결합니다.",
            "Release 산출물, CI와 배포 경로를 반복 조사하지 않게 합니다.",
            "AI raw artifact, 분석 보고서와 재현 script의 저장소 경계를 유지합니다.",
            "공개 가능한 portfolio 정보와 제외해야 할 credential을 구분합니다.",
            "다음 agent가 먼저 읽을 source 범위를 좁힙니다.",
          ),
        ),
        section("units", "운영 단위",
          table(
            ["단위", "수행 내용"],
            [
              ["Ingest", "Immutable raw를 보관하고 영향을 받는 여러 page와 index/log를 통합 갱신"],
              ["Query", "Graph와 Wiki로 후보를 좁혀 citation 가능한 답을 만들고 결과를 승격"],
              ["Lint", "Contradiction, stale claim, orphan, data gap과 공개 경계를 검사"],
            ],
          ),
        ),
        section("roles", "사람과 Agent의 역할",
          table(
            ["주체", "책임"],
            [
              ["사람", "Source 선택, 우선순위와 질문 설정, 중요한 synthesis와 공개 여부 검토"],
              ["Agent", "요약, 비교, cross-link, 다중 page 일관성 갱신과 bookkeeping"],
              ["Source code와 정본 문서", "실제 구현 상태와 팀 합의의 최종 근거"],
              ["Obsidian과 Git", "사람의 탐색·review, diff, history와 rollback"],
            ],
          ),
        ),
        section("scope", "선택적으로 적용",
          paragraph("개인 기록, research, 책·강의 학습, competitive analysis, due diligence와 팀 문서처럼 시간이 흐르며 source가 쌓이는 영역에 적용할 수 있습니다. 작은 주제는 index와 몇 개 page면 충분하고, image handling, vector search나 slide output은 필요가 생길 때만 추가합니다."),
        ),
      ],
      LLM_WIKI_SOURCE,
    ),

    page(
      "concepts/compounding-knowledge",
      "Compounding Knowledge",
      "concepts",
      "이전에 지불한 탐색·비교 비용을 검토된 연결과 판단으로 보존해 다음 작업의 출발점으로 재사용하는 원리입니다.",
      ["concept", "compounding", "agent-memory", "memex"],
      ["concepts/llm-wiki", "operations/llm-wiki-query", "operations/llm-wiki-lint", "systems/agent-memory-protocol"],
      [
        section("assets", "무엇이 축적되는가",
          list(
            "여러 문서에 흩어진 동일 entity와 concept의 연결",
            "새 source가 기존 주장을 강화하거나 반박한 기록",
            "반복 질문에서 재사용할 comparison과 decision context",
            "Source code, 정본 문서와 public projection 사이의 경계",
            "아직 근거가 부족한 data gap과 다음 조사 질문",
          ),
        ),
        section("economics", "유지보수 비용의 역전",
          paragraph("전통 Wiki는 page가 늘수록 cross-reference, summary와 stale claim을 사람이 정리해야 해 bookkeeping 비용이 가치보다 커지기 쉽습니다. Agent는 한 source의 영향을 여러 page에서 찾아 일관되게 수정하고 사람이 읽을 diff를 만들 수 있어 유지보수 한계 비용을 낮춥니다."),
          callout("판단은 자동화하지 않습니다", "사람이 source 신뢰도, 중요한 연결과 공개 범위를 결정하고, agent가 반복 파일 관리와 후보 관계 발견을 맡습니다."),
        ),
        section("effects", "CareerTuner의 복리 효과",
          steps(
            "Release 산출물 종류와 CI 경로를 다음 작업에서 재사용합니다.",
            "AI/ML raw artifact, 분석 보고서와 재현 script의 경계를 유지합니다.",
            "Graph와 Wiki로 관련 module과 정본 문서를 좁힌 뒤 source를 확인합니다.",
            "중요한 query 결과를 다시 Wiki에 반영해 같은 분석의 반복을 줄입니다.",
            "검토된 내부 지식을 public portfolio evidence로 투영합니다.",
          ),
        ),
        section("memex", "Associative Trails",
          paragraph("이 패턴은 Vannevar Bush의 Memex가 제안한 개인 지식 저장소와 associative trail의 문제의식에 가깝습니다. 문서 자체뿐 아니라 연결이 자산이고, Wiki link와 Graphify edge가 그 trail을 구현하며 source와 Git history가 검증 가능성을 제공합니다."),
        ),
        section("guardrails", "실패 방지",
          list(
            "Page 수를 성과로 보지 않고 재사용 가능한 연결과 근거를 우선합니다.",
            "Wiki를 정본처럼 취급하지 않고 구현 상태를 source에서 검증합니다.",
            "모순을 억지로 합치지 않고 source별 주장과 현재 판단을 구분합니다.",
            "자동 생성 결과를 검토 없이 공개하지 않습니다.",
          ),
        ),
      ],
      LLM_WIKI_SOURCE,
    ),

    page(
      "concepts/wiki-index-log",
      "Wiki Index and Log",
      "concepts",
      "현재 지식의 내용 지도인 index와 지식이 변한 시간 지도인 append-only log를 분리해 agent와 사람의 탐색을 안정화합니다.",
      ["concept", "wiki-index", "wiki-log", "navigation"],
      ["systems/wiki-schema", "operations/llm-wiki-query", "operations/wiki-search-tooling", "operations/llm-wiki-lint"],
      [
        section("responsibility", "서로 다른 책임",
          table(
            ["파일", "답하는 질문", "구조", "갱신 시점"],
            [
              ["index.md", "무엇이 있고 어디서 읽는가?", "category, link, summary, connections", "page 생성·이동·의미 변경 시"],
              ["log.md", "무엇을 언제 왜 처리했는가?", "date, operation, title, source, results", "ingest/query/lint/publish 완료 시"],
            ],
          ),
        ),
        section("index", "Index Contract",
          list(
            "안정된 category로 모든 synthesis page를 분류합니다.",
            "제목 반복이 아닌, 그 page가 답하는 질문을 한 줄로 설명합니다.",
            "관련 개념을 적어 전체 Wiki를 읽지 않고 후보를 좁히게 합니다.",
            "Deprecated page는 숨기지 않고 status와 대체 page를 표시합니다.",
          ),
          paragraph("원문의 경험칙으로는 약 100개 source와 수백 page 수준에서도 잘 정리된 index가 유용할 수 있습니다. 보장된 한계가 아니라 search infrastructure를 너무 일찍 도입하지 말라는 운영 기준입니다."),
        ),
        section("log", "Log Contract",
          code("text", "## [YYYY-MM-DD] ingest | Source title\n## [YYYY-MM-DD] query | Question or result\n## [YYYY-MM-DD] lint | Scope\n## [YYYY-MM-DD] publish | Target"),
          list(
            "완료된 과거 entry의 의미를 조용히 수정하지 않고 correction entry를 남깁니다.",
            "Source와 결과 page를 적어 변경 diff를 빠르게 추적합니다.",
            "일관된 heading으로 사람이 읽는 timeline과 단순 도구 parsing을 동시에 지원합니다.",
          ),
        ),
        section("navigation", "Agent Navigation",
          steps(
            "Index에서 질문과 가까운 page를 고릅니다.",
            "Log에서 해당 영역의 최근 ingest와 lint를 확인합니다.",
            "Page의 provenance와 link를 따라 근거 범위를 좁힙니다.",
            "정보가 없거나 오래되었으면 raw와 정본 source를 확인합니다.",
            "재사용 결과는 page와 index에, 실행 사실은 log에 반영합니다.",
          ),
        ),
      ],
      LLM_WIKI_SOURCE,
    ),

    page(
      "concepts/graphify",
      "Graphify",
      "concepts",
      "Code와 문서에서 구조를 추출해 persistent knowledge graph로 저장하고, agent가 프로젝트 맥락을 빠르게 질의하도록 돕는 도구입니다.",
      ["concept", "graphify", "knowledge-graph"],
      ["operations/graphify-runbook", "graph-report", "concepts/llm-wiki"],
      [
        section("behavior", "확인한 동작",
          list(
            "공식 패키지명은 graphifyy이고 CLI 명령은 graphify입니다.",
            "주요 산출물은 graph data, GRAPH_REPORT와 graph viewer입니다.",
            "Obsidian/wiki, SVG, GraphML과 query server 흐름을 지원합니다.",
            "팀 workflow에서는 incremental update, graph merge와 query command가 중요합니다.",
          ),
        ),
        section("career-tuner", "CareerTuner 적용",
          steps(
            "Private vault의 raw, wiki와 source 범위에서 Graphify를 실행합니다.",
            "Graph Report를 agent의 첫 구조 context로 사용합니다.",
            "전체 graph data는 queryable memory로 사용합니다.",
            "공개 가능한 subset만 CareerTunerDemo graph로 투영합니다.",
          ),
          callout("실제 추출 증거", "현재 포트폴리오 graph에는 API 키 없이 code-only AST 추출로 얻은 2,870 code files, 26,886 nodes, 91,616 edges의 집계가 반영돼 있습니다."),
        ),
        section("caution", "모델과 공개 경계",
          paragraph("Graphify 실행은 설정에 따라 외부 모델/API를 사용할 수 있습니다. Secret과 model credential을 repo에 남기지 않고, raw source가 외부로 전송될 수 있는지 실행 환경을 먼저 확인합니다."),
          callout("원본 graph는 공개하지 않습니다", "Source entity, private note와 로컬 절대경로가 섞일 수 있으므로 public subset을 별도로 만들고 secret pattern 검사를 수행합니다.", "warning"),
        ),
      ],
    ),

    page(
      "concepts/obsidian-vault",
      "Obsidian Vault",
      "concepts",
      "CareerTuner 지식 계층을 사람이 직접 탐색하고 리뷰하는 Markdown IDE이며, graph와 curated index를 함께 사용하는 표면입니다.",
      ["concept", "obsidian", "human-review"],
      ["systems/careertuner-second-brain", "concepts/llm-wiki", "operations/obsidian-knowledge-workflow", "operations/public-export"],
      [
        section("principles", "Vault 원칙",
          list(
            "메인 CareerTuner repo 루트를 Obsidian Vault로 열 수 있습니다.",
            "장기 맥락, 결정 로그와 작업별 읽기 지도는 별도 vault submodule에 둡니다.",
            "정본 문서를 복제하지 않고 link, 읽기 순서와 synthesis를 유지합니다.",
            "공개 demo는 vault 원본이 아니라 sanitized projection입니다.",
          ),
        ),
        section("navigation", "Graph와 Index의 역할",
          paragraph("Graph View는 전체 구조와 예상하지 못한 관계를 찾는 데 유용합니다. 노드가 많아질수록 안정적인 시작점은 curated hub, Wiki Index와 최근 Log입니다."),
          table(
            ["표면", "가장 잘하는 일"],
            [
              ["Graph View", "전체 관계, hub와 bridge 발견"],
              ["Wiki Index", "주제별 정돈된 문서 진입"],
              ["Wiki Log", "최근 ingest와 결정의 시간순 파악"],
              ["Search", "정확한 용어, 파일과 태그 탐색"],
            ],
          ),
        ),
        section("plugins", "Plugin 방향",
          table(
            ["Plugin", "적용 목적", "운영 기준"],
            [
              ["Dataview", "frontmatter 기반 table과 review queue", "팀 공통 schema가 안정된 뒤 사용"],
              ["Homepage", "Wiki Index를 시작점으로 고정", "공통 진입점을 단순화"],
              ["Web Clipper", "웹 source를 raw에 수집", "출처와 읽은 날짜를 함께 기록"],
              ["Marp", "검토된 Wiki를 Markdown slide로 변환", "발표본과 canonical knowledge를 분리"],
              ["Graph plugin", "특수 시각화", "generated config가 커지므로 꼭 필요한 경우만 도입"],
            ],
          ),
        ),
        section("images", "Source and Images",
          list(
            "Clipper로 수집한 원문에 URL, author, captured date와 적용 범위를 남깁니다.",
            "분석에 중요한 외부 image는 고정 attachment folder에 local copy로 보존할 수 있습니다.",
            "Agent는 Markdown text를 먼저 읽고 문맥상 중요한 image 파일을 개별 확인합니다.",
            "Image license와 public export 가능 여부는 source 수집과 별도로 검토합니다.",
          ),
        ),
        section("review", "Review Surface",
          list(
            "Index와 curated system page를 안정된 기본 navigation으로 사용합니다.",
            "Graph View에서 hub, bridge, orphan과 예상하지 못한 연결을 찾습니다.",
            "Dataview로 status, updated, source_count와 tag 기반 review queue를 만듭니다.",
            "Git diff와 history로 agent의 다중 page 수정 이유를 검토하고 필요하면 rollback합니다.",
          ),
          callout("Dense graph의 한계", "노드가 많아질수록 graph만으로 정답 문서를 찾기 어렵습니다. Index와 검색이 진입점을 맡고 graph는 관계 탐색을 맡습니다."),
        ),
      ],
      LLM_WIKI_SOURCE,
    ),

    page(
      "operations/ingest-query-lint",
      "Ingest Query Lint",
      "operations",
      "Source 수집, 검증된 질문 처리, 결과 재축적과 knowledge health check를 하나의 반복 가능한 흐름으로 연결하는 orchestration page입니다.",
      ["operation", "ingest", "query", "lint"],
      ["operations/llm-wiki-ingest", "operations/llm-wiki-query", "operations/llm-wiki-lint", "concepts/llm-wiki"],
      [
        section("flow", "Workflow",
          code("text", "new source\n  -> ingest: raw 보존 + 여러 page 통합\n  -> query: graph/wiki/source로 검증된 답 생성\n  -> promote: 재사용 결과를 Wiki에 저장\n  -> lint: 구조·최신성·공개 경계 점검\n  -> index/log/public projection 갱신"),
        ),
        section("summary", "세 작업의 책임",
          table(
            ["작업", "핵심 책임", "완료 증거"],
            [
              ["Ingest", "Raw 보존, 영향 분석과 여러 page 통합", "Provenance, index와 log"],
              ["Query", "Graph/wiki/source 순으로 검증된 답 생성", "Citation과 재사용 결과 승격"],
              ["Lint", "구조, 최신성, 근거와 공개 경계 검사", "발견 항목, 조치와 남은 gap"],
            ],
          ),
        ),
        section("exit", "공통 Exit Criteria",
          list(
            "Source와 결과 page를 양방향으로 추적할 수 있습니다.",
            "Index, log, link와 frontmatter가 실제 파일과 일치합니다.",
            "구현 사실은 담당 정본 source로 확인했습니다.",
            "Public projection은 credential과 private raw를 포함하지 않습니다.",
            "다음 agent가 같은 분석을 처음부터 반복하지 않아도 됩니다.",
          ),
          callout("권장 주기", "큰 ingest, architecture PR, release와 public demo 갱신 전마다 lint를 실행합니다."),
        ),
      ],
      LLM_WIKI_SOURCE,
    ),

    page(
      "operations/llm-wiki-ingest",
      "LLM Wiki Ingest",
      "operations",
      "Source를 raw 폴더에 추가하는 데서 끝내지 않고 기존 지식 전체에 미치는 영향을 분석해 Wiki에 통합하는 runbook입니다.",
      ["operation", "ingest", "provenance", "human-review"],
      ["systems/wiki-schema", "operations/llm-wiki-query", "operations/llm-wiki-lint", "operations/public-export"],
      [
        section("input", "Input Preparation",
          steps(
            "Source의 원본 위치, 저자, 수집 날짜와 사용 조건을 확인합니다.",
            "Credential, 개인정보와 비공개 endpoint 포함 여부를 분류합니다.",
            "원문을 주제별 raw 경로에 가능한 한 그대로 저장합니다.",
            "외부 링크만 보관하면 source index에 provenance와 적용 포인트를 남깁니다.",
            "Hash, URL, title과 log로 중복 ingest인지 확인합니다.",
          ),
        ),
        section("impact", "Impact Analysis",
          list(
            "새 entity, concept와 반복 가능한 operation을 찾습니다.",
            "기존 page를 강화하는 주장과 충돌하는 주장을 구분합니다.",
            "Source가 답하지 못한 data gap과 후속 질문을 기록합니다.",
            "갱신할 기존 page, 새 page와 link만 추가할 page를 목록화합니다.",
            "현재 구현 사실은 실제 source에서 다시 확인할 항목으로 분리합니다.",
          ),
        ),
        section("integration", "Integration Steps",
          steps(
            "Source를 설명하는 canonical concept 또는 system page를 갱신합니다.",
            "영향받는 기존 page의 주장, 표, cross-link와 provenance를 갱신합니다.",
            "기존 page로 설명할 수 없는 재사용 지식만 새 page로 만듭니다.",
            "Index와 log를 실제 결과 page에 맞게 갱신합니다.",
            "공개할 관계는 사람의 review와 secret scan 후 graph와 Public Wiki에 투영합니다.",
          ),
          callout("한 source, 여러 page", "원문의 10~15 page 예시는 영향 범위를 놓치지 말라는 뜻입니다. 숫자를 채우려고 중복 문서를 만들지 않습니다."),
        ),
        section("modes", "Review Modes",
          table(
            ["모드", "적합한 자료", "Trade-off"],
            [
              ["One-by-one + human review", "Architecture, 팀 결정, 공개 자료", "느리지만 강조점과 모순을 즉시 교정"],
              ["Batch ingest", "형식이 일정하고 위험이 낮은 대량 자료", "빠르지만 중복과 오합성 검토 비용 증가"],
            ],
          ),
          paragraph("CareerTuner의 정본, architecture, release와 portfolio source는 one-by-one review가 기본입니다. 반복 benchmark raw는 aggregate artifact를 만든 뒤 검토된 요약을 ingest합니다."),
        ),
        section("done", "Done Criteria",
          list(
            "Raw source와 provenance를 추적할 수 있습니다.",
            "관련 기존 page와 필요한 새 page가 모두 갱신됐습니다.",
            "Source 주장, 적용 판단과 현재 구현 사실이 구분됩니다.",
            "Dead link와 orphan이 없고 index/log가 결과와 일치합니다.",
            "Public projection에 credential, private raw와 local path가 없습니다.",
          ),
        ),
      ],
      LLM_WIKI_SOURCE,
    ),

    page(
      "operations/llm-wiki-query",
      "LLM Wiki Query",
      "operations",
      "축적된 synthesis로 탐색 범위를 줄이고 필요한 근거까지 내려가 검증한 뒤, 가치 있는 답을 다시 지식으로 승격하는 절차입니다.",
      ["operation", "query", "citation", "promotion"],
      ["systems/agent-memory-protocol", "concepts/wiki-index-log", "operations/wiki-search-tooling", "concepts/compounding-knowledge"],
      [
        section("ladder", "3-layer Query",
          steps(
            "Graphify report와 graph에서 hub, bridge와 관련 문서 후보를 찾습니다.",
            "Wiki Index, 최근 Log와 관련 system/concept/operation page를 읽습니다.",
            "구현 최신성, 수치, 충돌이나 보안 판단이 필요하면 raw와 source code로 내려갑니다.",
          ),
          callout("시간에 민감한 정보", "Release, dependency, API와 운영 상태는 Wiki page가 있어도 현재 source를 다시 검증합니다.", "warning"),
        ),
        section("answer", "Answer Contract",
          list(
            "결론과 근거를 구분하고 중요한 주장을 source까지 추적할 수 있게 합니다.",
            "Source끼리 충돌하면 하나를 지우지 않고 차이와 현재 판단을 설명합니다.",
            "Wiki가 답하지 못하는 부분을 추측으로 채우지 않고 data gap으로 표시합니다.",
            "질문에 맞춰 Markdown, comparison table, chart, Marp deck 또는 canvas를 선택합니다.",
          ),
        ),
        section("promotion", "Result Promotion",
          paragraph("다른 작업에서도 다시 물을 가능성이 높거나, 여러 source를 비교해 새 연결을 만들었거나, architecture·release·public boundary를 바꾼 결과는 chat에서 끝내지 않습니다."),
          steps(
            "기존 canonical page가 있는지 먼저 찾습니다.",
            "System, concept 또는 operation 책임에 맞게 갱신하거나 새 page를 만듭니다.",
            "Source metadata, cross-link와 index를 갱신합니다.",
            "Query 목적과 결과 page를 log에 남깁니다.",
          ),
        ),
        section("checklist", "Query Checklist",
          list(
            "질문의 시간 범위와 정본 책임 문서를 식별했는가?",
            "Index와 graph로 후보를 좁혔는가?",
            "Citation이 실제 결론을 뒷받침하는가?",
            "결과를 page로 남길 재사용 가치가 있는가?",
            "공개 답변이면 private boundary를 다시 확인했는가?",
          ),
        ),
      ],
      LLM_WIKI_SOURCE,
    ),

    page(
      "operations/llm-wiki-lint",
      "LLM Wiki Lint",
      "operations",
      "Markdown 문법을 넘어 지식의 구조, 최신성, 근거와 공개 경계를 점검하는 health check입니다.",
      ["operation", "lint", "governance", "security"],
      ["operations/llm-wiki-ingest", "operations/llm-wiki-query", "systems/wiki-schema", "operations/public-export"],
      [
        section("structure", "Structural Checks",
          list(
            "Index entry와 실제 파일 사이의 누락",
            "존재하지 않는 상대 Markdown link와 orphan page",
            "같은 개념을 중복 정의하는 competing canonical page",
            "Status, updated, source_count와 sources 누락 또는 불일치",
            "Log가 가리키는 source나 결과 page의 부재",
          ),
        ),
        section("knowledge", "Knowledge Checks",
          list(
            "여러 page가 같은 사실을 다르게 설명하는 contradiction",
            "최신 source가 대체했지만 남아 있는 stale claim",
            "반복 언급되지만 canonical page가 없는 important concept",
            "Source 근거 없이 확정적으로 적힌 inference",
            "정본 문서나 current code와 Wiki summary의 충돌",
            "조사 가능한 data gap과 다음 source 후보",
          ),
        ),
        section("public", "Public and Security Checks",
          list(
            "API key, token, password, DB account와 private endpoint",
            "Local absolute path, 개인 계정과 private repository detail",
            "Raw model request/response와 benchmark artifact 전문",
            "팀 내부 판단과 PR 전 review memo",
            "여러 공개 node와 문맥을 결합했을 때 새로 드러나는 민감 정보",
          ),
        ),
        section("priority", "Priority",
          table(
            ["등급", "조건", "처리"],
            [
              ["P0", "Credential 또는 개인정보 노출", "공개 중단, 제거·회전 후 재검증"],
              ["P1", "정본과 충돌해 잘못된 작업 유도", "즉시 source 확인 후 갱신"],
              ["P2", "Dead link, orphan, metadata 불일치", "같은 lint pass에서 수정"],
              ["P3", "보강 가능한 data gap", "Review queue에 기록"],
            ],
          ),
        ),
        section("output", "Lint Output",
          paragraph("Lint 결과는 범위, 발견 항목, 근거, 조치와 남은 gap을 포함합니다. 문제가 없어도 검사 범위와 자동 검사의 한계를 log에 남기고, 중요한 gap은 구체적인 다음 query와 source 후보로 바꿉니다."),
        ),
      ],
      LLM_WIKI_SOURCE,
    ),

    page(
      "operations/wiki-search-tooling",
      "Wiki Search and Tooling",
      "operations",
      "Index와 투명한 keyword 검색에서 시작해 실제 recall 병목이 생길 때 graph와 local hybrid search로 확장하는 search ladder입니다.",
      ["operation", "search", "qmd", "mcp"],
      ["concepts/wiki-index-log", "concepts/graphify", "operations/llm-wiki-query", "operations/obsidian-knowledge-workflow"],
      [
        section("ladder", "Search Ladder",
          steps(
            "Wiki Index의 category, summary와 connection을 읽습니다.",
            "Keyword, tag, title과 source path를 rg로 검색합니다.",
            "Graphify report와 graph query로 hub와 bridge를 찾습니다.",
            "후보 page를 읽고 필요하면 raw와 main repo source로 내려갑니다.",
            "누락과 broad scan이 반복될 때 local hybrid search를 도입합니다.",
          ),
        ),
        section("commands", "Transparent Defaults",
          code("powershell", "rg -n \"release|desktop|mobile\" wiki graphify-out/GRAPH_REPORT.md\nrg -n \"^sources:|raw/llm-wiki\" wiki\nrg -n \"^## \\[\" wiki/log.md"),
          paragraph("이 방식은 dependency가 없고 어떤 문장을 근거로 후보를 골랐는지 path와 diff로 설명하기 쉽습니다."),
        ),
        section("qmd", "Optional qmd Layer",
          paragraph("원문은 Markdown용 local search 선택지로 qmd를 제안합니다. BM25 keyword search, vector similarity와 LLM re-ranking을 결합하고 CLI와 MCP interface를 제공해 agent가 local Wiki를 질의할 수 있습니다."),
          list(
            "Index와 rg가 관련 page를 반복해서 놓칠 때",
            "수백 page에서 synonym과 의미 기반 검색이 필요할 때",
            "동일 broad scan이 반복돼 비용이 커질 때",
            "Local-only index와 rebuild 절차를 팀이 유지할 수 있을 때 평가합니다.",
          ),
          callout("현재는 도입 기준만 고정합니다", "Package version, cache 위치, rebuild command와 MCP permission을 검토하지 않은 채 dependency부터 추가하지 않습니다."),
        ),
        section("outputs", "Output Tools",
          table(
            ["목적", "기본 형식", "선택 도구"],
            [
              ["지속 지식", "Markdown page/table", "Obsidian, Dataview"],
              ["구조 탐색", "Graph/report", "Graphify, Graph View"],
              ["발표", "Markdown slide", "Marp"],
              ["수치 비교", "Chart", "재현 가능한 plotting script"],
              ["자유 배치 관계", "Canvas", "Obsidian Canvas 또는 public viewer"],
            ],
          ),
          paragraph("Presentation, chart와 canvas는 canonical knowledge가 아닙니다. 재사용 결론과 source는 Wiki에 남기고 각 산출물이 이를 참조합니다."),
        ),
      ],
      LLM_WIKI_SOURCE,
    ),

    page(
      "operations/obsidian-knowledge-workflow",
      "Obsidian Knowledge Workflow",
      "operations",
      "Agent가 Wiki를 갱신하고 사람이 Obsidian에서 capture, link, graph, metadata와 diff를 실시간 검토하는 운영 흐름입니다.",
      ["operation", "obsidian", "capture", "review"],
      ["concepts/obsidian-vault", "operations/llm-wiki-ingest", "operations/wiki-search-tooling", "operations/public-export"],
      [
        section("capture", "Capture",
          list(
            "Obsidian Web Clipper로 web article을 Markdown raw source로 수집할 수 있습니다.",
            "Source URL, author, captured date와 사용 범위를 함께 남깁니다.",
            "분석에 중요한 image는 외부 URL에만 의존하지 않고 고정 attachment folder로 내려받습니다.",
            "Image license와 public export 가능 여부를 별도로 검토합니다.",
          ),
          paragraph("Agent가 inline image를 text와 동시에 완전히 이해한다고 가정하지 않습니다. 먼저 Markdown을 읽고 필요한 image 파일을 개별적으로 확인합니다."),
        ),
        section("review", "Review",
          steps(
            "Wiki Index를 Homepage로 사용해 category를 탐색합니다.",
            "Ingest diff와 갱신된 page의 강조점, 모순과 provenance를 검토합니다.",
            "Graph View에서 hub, bridge와 orphan 후보를 확인합니다.",
            "Dataview로 status, updated, source_count와 tag 기반 review queue를 만듭니다.",
            "잘못된 synthesis는 source 근거와 함께 agent에게 보정을 요청합니다.",
          ),
        ),
        section("present", "Present and Publish",
          list(
            "Marp는 검토된 Wiki 내용을 slide deck으로 투영할 때 사용합니다.",
            "Dataview 결과는 local review aid이며 public site에는 재현 가능한 정적 data를 export합니다.",
            "Public graph와 Wiki는 private vault를 복사하지 않고 secret scan을 통과한 projection만 배포합니다.",
            "Local workspace state, cache와 개인 plugin 설정은 Git에 포함하지 않습니다.",
          ),
        ),
        section("git", "Git Collaboration",
          paragraph("Wiki는 Markdown repository이므로 branch, commit diff, PR review, history와 rollback을 사용합니다. Agent의 대량 수정도 source ingest 하나의 의미 단위로 묶어 검토하고, raw source 변경과 synthesis 변경을 구분합니다."),
        ),
      ],
      LLM_WIKI_SOURCE,
    ),

    page(
      "operations/graphify-runbook",
      "Graphify Runbook",
      "operations",
      "Graphify 설치, code-only 추출, Wiki/Obsidian 갱신, 산출물 관리와 공개 전 secret 검사를 위한 실행 절차입니다.",
      ["operation", "graphify", "runbook"],
      ["concepts/graphify", "operations/public-export", "graph-report"],
      [
        section("install", "설치와 확인",
          code("powershell", "python -m pip install graphifyy\ngraphify --help"),
          paragraph("도구를 로컬 환경과 분리하려면 uv tool 또는 pipx 기반 설치를 선택할 수 있습니다. 실제 옵션은 설치된 버전의 help와 공식 문서를 우선합니다."),
        ),
        section("run", "실행 후보",
          code("powershell", "graphify update . --wiki --obsidian --update\n\n# 범위를 좁힌 갱신\ngraphify update raw wiki --wiki --obsidian --update"),
          paragraph("포트폴리오 집계는 API 키 없이 code-only AST 추출로 별도 실행했습니다. 원본 graph는 크기와 로컬 경로 때문에 그대로 공개하지 않았습니다."),
        ),
        section("artifacts", "산출물 정책",
          table(
            ["산출물", "커밋", "이유"],
            [
              ["GRAPH_REPORT", "예", "agent와 사람이 읽는 핵심 요약"],
              ["graph data", "조건부", "private 내용과 파일 크기를 먼저 확인"],
              ["public graph subset", "예", "공개 demo에 쓰는 sanitized data"],
              ["generated graph viewer", "아니오", "재생성 가능하고 무거움"],
              ["cache/export", "아니오", "재생성 가능하고 diff noise가 큼"],
            ],
          ),
        ),
        section("query", "Query와 Secret Check",
          code("powershell", "graphify query \"CareerTuner release flow\"\npython -m graphify.serve graphify-out/graph.json"),
          code("powershell", "rg -n \"API_KEY|SECRET|PASSWORD|TOKEN|client_secret|C:\\\\Users|AppData\" graphify-out wiki raw"),
          callout("Private graph와 public graph를 분리합니다", "MCP/HTTP query server를 agent와 연결할 때도 공개 subset과 원본 graph의 접근 경계를 따로 유지합니다.", "warning"),
        ),
      ],
    ),

    page(
      "operations/public-export",
      "Public Export",
      "operations",
      "Private Obsidian vault의 구조와 판단 맥락을 CareerTunerDemo에 안전하게 투영하기 위한 공개 기준과 배포 workflow입니다.",
      ["operation", "public-export", "security-boundary"],
      ["systems/careertuner-second-brain", "concepts/graphify", "operations/ingest-query-lint"],
      [
        section("allowed", "공개할 수 있는 것",
          list(
            "제품 구조와 사용자 흐름",
            "기술 스택과 모듈 경계",
            "AI/ML pipeline의 공개 가능한 역할 설명",
            "Graphify, Obsidian과 LLM Wiki 운영 구조",
            "Agent가 graph, wiki와 source를 읽는 공개 protocol",
            "민감값을 제거한 코드 경로와 추출 집계",
          ),
        ),
        section("excluded", "공개하지 않는 것",
          list(
            "Secret, credential, local path와 실제 private endpoint",
            "Raw model output과 benchmark artifact 원문",
            "Private repo 내부 파일 전문",
            "PR 전 리뷰 메모와 팀 내부 민감 판단",
            "외부 글의 전문 복사본",
          ),
          callout("Default deny", "공개 여부가 애매한 원천은 먼저 private에 두고, 사람이 검토한 설명과 관계만 public projection으로 승격합니다.", "warning"),
        ),
        section("routes", "현재 공개 경로",
          code("text", "https://notetester.github.io/CareerTunerDemo/Obsidian/\nhttps://notetester.github.io/CareerTunerDemo/Obsidian/SecondBrain/\nhttps://notetester.github.io/CareerTunerDemo/Obsidian/Wiki/"),
          table(
            ["경로", "역할"],
            [
              ["Knowledge Map", "제품, 기술, 운영 키워드 관계를 전체 graph로 탐색"],
              ["Second Brain", "Graphify 추출 집계와 코드/wiki 관계를 포트폴리오 관점에서 탐색"],
              ["Public Wiki", "합성 지식을 문서 본문, 목차와 관련 페이지로 열람"],
            ],
          ),
        ),
        section("workflow", "Export Workflow",
          steps(
            "Private vault에서 Wiki와 graph seed를 갱신합니다.",
            "Public-safe graph data와 공개 문서 범위를 정합니다.",
            "CareerTunerDemo 정적 viewer와 Wiki를 갱신합니다.",
            "Secret pattern과 잘못된 private link를 검사합니다.",
            "Demo repo PR을 병합하고 GitHub Pages에서 최종 검증합니다.",
          ),
        ),
      ],
    ),

    page(
      "log",
      "Wiki Log",
      "history",
      "Second brain에 어떤 원천을 수집했고 어떤 구조적 판단을 Wiki로 승격했는지 보여주는 공개 operation timeline입니다.",
      ["wiki-log", "timeline", "ingest"],
      ["index", "concepts/llm-wiki", "systems/llm-wiki-architecture", "operations/llm-wiki-ingest"],
      [
        section("timeline", "2026-07-10",
          timeline(
            ["ingest", "Karpathy LLM Wiki full integration", "한 장 요약 수준의 초기 ingest를 보완해 architecture, schema, compounding, index/log, ingest/query/lint, search와 Obsidian workflow를 canonical page로 분리했습니다."],
            ["ingest", "Karpathy LLM Wiki", "Raw/wiki/schema, ingest/query/lint와 index/log 패턴을 CareerTuner vault 운영 규칙으로 반영했습니다."],
            ["ingest", "Graphify and Obsidian references", "공식 repo, site, package와 실사용 자료를 읽고 Graphify 개념과 실행 runbook을 만들었습니다."],
            ["query", "CareerTuner second brain architecture", "Private vault와 public demo의 경계를 나누고 agent의 3-layer query rule을 확정했습니다."],
            ["publish", "Portfolio graph and Wiki", "Code-only 추출 수치, 공개 graph와 실제로 읽을 수 있는 Public Wiki를 GitHub Pages에 연결했습니다."],
          ),
        ),
        section("promotion", "결과 문서",
          links(
            ["systems/llm-wiki-architecture", "Persistent Wiki와 RAG의 차이, 3계층 mapping"],
            ["systems/wiki-schema", "Page, provenance, cross-link와 update 계약"],
            ["concepts/llm-wiki", "LLM Wiki 운영 패턴"],
            ["concepts/compounding-knowledge", "지식 축적의 유지보수 원리"],
            ["concepts/wiki-index-log", "Content index와 chronological log"],
            ["operations/llm-wiki-ingest", "Source impact 기반 ingest runbook"],
            ["operations/llm-wiki-query", "Citation과 결과 승격을 포함한 query"],
            ["operations/llm-wiki-lint", "구조, 최신성, 근거와 공개 lint"],
            ["operations/wiki-search-tooling", "Index, rg, Graphify와 선택적 qmd"],
            ["operations/obsidian-knowledge-workflow", "Capture, human review와 presentation"],
            ["concepts/graphify", "Graphify 개념과 공개 경계"],
            ["operations/graphify-runbook", "설치, 실행과 산출물 정책"],
            ["systems/careertuner-second-brain", "전체 second brain architecture"],
            ["systems/agent-memory-protocol", "Agent query 순서"],
            ["operations/public-export", "Public demo export 기준"],
          ),
        ),
      ],
    ),
  ];

  return {
    meta: {
      title: "CareerTuner Public Wiki",
      updated: "2026-07-10",
      source: "docs/obsidian-vault/wiki",
      visibility: "portfolio-public",
    },
    groups,
    pages,
  };

  function page(id, title, group, summary, tags, related, sections, sources = []) {
    return { id, title, group, summary, tags, related, sections, sources, updated: "2026-07-10" };
  }

  function section(id, title, ...blocks) {
    return { id, title, blocks };
  }

  function paragraph(text) {
    return { type: "paragraph", text };
  }

  function list(...items) {
    return { type: "list", items };
  }

  function steps(...items) {
    return { type: "steps", items };
  }

  function code(language, value) {
    return { type: "code", language, value };
  }

  function table(headers, rows) {
    return { type: "table", headers, rows };
  }

  function callout(title, text, tone = "info") {
    return { type: "callout", title, text, tone };
  }

  function links(...items) {
    return { type: "links", items };
  }

  function timeline(...items) {
    return { type: "timeline", items };
  }

  function source(label, url) {
    return { label, url };
  }
})();
