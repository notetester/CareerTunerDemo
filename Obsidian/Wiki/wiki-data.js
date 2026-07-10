window.CAREERTUNER_WIKI = (() => {
  const groups = [
    { id: "start", label: "Start Here" },
    { id: "systems", label: "Systems" },
    { id: "concepts", label: "Concepts" },
    { id: "operations", label: "Operations" },
    { id: "history", label: "History" },
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
          ),
        ),
        section("concepts", "Concepts",
          links(
            ["concepts/llm-wiki", "지식을 chat이 아니라 persistent wiki에 누적하는 패턴"],
            ["concepts/graphify", "코드와 문서 관계를 queryable graph로 만드는 계층"],
            ["concepts/obsidian-vault", "사람이 탐색하고 리뷰하는 Markdown IDE"],
          ),
        ),
        section("operations", "Operations",
          links(
            ["operations/ingest-query-lint", "수집, 질문, 건강검진의 반복 workflow"],
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
              ["LLM Wiki", "raw/wiki/schema, ingest/query/lint, index/log 운영 패턴"],
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
            "Graphify는 wiki와 source tree의 구조를 queryable graph로 바꿉니다.",
            "Obsidian은 사람이 graph와 Markdown을 함께 검토하는 표면입니다.",
            "Public Export는 private graph에서 공개 가능한 subset만 CareerTunerDemo로 보냅니다.",
            "Agent Memory Protocol은 source 전체를 읽기 전에 관련 graph와 wiki를 먼저 찾게 합니다.",
          ),
        ),
        section("surprises", "Surprising Links",
          list(
            "공개 demo는 발표용 그림이 아니라 private vault의 sanitized graph projection입니다.",
            "Wiki Log는 사람을 위한 변경 이력이면서 agent가 최근 맥락을 압축해 읽는 timeline입니다.",
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
      ["graph-report", "operations/ingest-query-lint", "concepts/llm-wiki"],
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
      ],
    ),

    page(
      "concepts/llm-wiki",
      "LLM Wiki",
      "concepts",
      "Raw 문서를 질문할 때마다 다시 검색하는 대신, LLM이 persistent Markdown wiki를 계속 갱신하게 하는 지식 운영 패턴입니다.",
      ["concept", "llm-wiki", "persistent-memory"],
      ["operations/ingest-query-lint", "systems/agent-memory-protocol", "concepts/obsidian-vault"],
      [
        section("pattern", "핵심 패턴",
          paragraph("중요한 지식이 chat history에 흩어지지 않고 파일로 축적됩니다. 새 자료와 질문 결과는 index와 log에 연결되고, 다음 agent가 같은 맥락을 재사용합니다."),
          table(
            ["구성", "CareerTuner 역할"],
            [
              ["raw", "원문과 외부 source 색인"],
              ["wiki", "LLM과 사람이 유지하는 synthesis와 runbook"],
              ["AGENTS.md", "agent가 따라야 하는 schema와 workflow"],
              ["wiki/index", "주제 중심 catalog"],
              ["wiki/log", "시간순 operation log"],
            ],
          ),
        ),
        section("need", "CareerTuner에 필요한 이유",
          paragraph("CareerTuner는 backend, frontend, mobile, desktop, AI/ML, demo와 release가 한 repo와 여러 submodule에 걸쳐 있습니다. 매번 전체 문서를 다시 읽으면 비용이 크고 이전 판단이 대화에 묻힙니다."),
          list(
            "중요한 연결과 결정 근거를 다음 작업에 재사용합니다.",
            "서로 다른 repo와 submodule의 책임 경계를 한 index에서 찾습니다.",
            "공개 가능한 지식과 private 원천의 경계를 지속적으로 점검합니다.",
          ),
        ),
        section("units", "운영 단위",
          table(
            ["단위", "수행 내용"],
            [
              ["ingest", "새 자료를 raw에 넣고 Wiki page, index와 log를 갱신"],
              ["query", "재사용 가치가 있는 질문 결과를 새 page로 승격"],
              ["lint", "orphan, stale claim, 공개 경계와 누락 cross-link를 점검"],
            ],
          ),
        ),
      ],
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
      ["systems/careertuner-second-brain", "concepts/llm-wiki", "operations/public-export"],
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
              ["Graph plugin", "특수 시각화", "generated config가 커지므로 꼭 필요한 경우만 도입"],
            ],
          ),
        ),
      ],
    ),

    page(
      "operations/ingest-query-lint",
      "Ingest Query Lint",
      "operations",
      "새 자료를 지식으로 수집하고, 질문 결과를 재사용 가능한 문서로 승격하며, 주기적으로 Wiki 건강 상태를 검사하는 workflow입니다.",
      ["operation", "ingest", "query", "lint"],
      ["concepts/llm-wiki", "systems/agent-memory-protocol", "operations/public-export"],
      [
        section("ingest", "Ingest",
          steps(
            "원문을 주제별 private raw 경로에 저장합니다.",
            "Source index에 출처, 읽은 날짜와 적용 포인트를 남깁니다.",
            "관련 Wiki page를 만들거나 갱신합니다.",
            "Wiki Index에 새 페이지와 요약을 추가합니다.",
            "Wiki Log에 ingest 이력을 기록합니다.",
            "공개 가능한 관계라면 public graph seed를 갱신합니다.",
          ),
        ),
        section("query", "Query",
          steps(
            "Wiki Index와 Graph Report에서 관련 후보를 좁힙니다.",
            "관련 synthesis page를 읽습니다.",
            "모순되거나 오래된 내용은 정본 문서와 source로 확인합니다.",
            "답이 재사용 가치가 있으면 Wiki page로 승격합니다.",
            "Wiki Log에 query 이력을 남깁니다.",
          ),
        ),
        section("lint", "Lint",
          list(
            "Orphan page와 죽은 link",
            "Index에는 있지만 실제 문서가 없는 항목",
            "Raw source만 있고 synthesis가 없는 source",
            "오래된 주장과 정본 문서의 충돌",
            "Public graph의 secret/private boundary 위반",
            "Hub가 아닌 단순 잡음 node가 graph를 지배하는 문제",
          ),
          callout("권장 시점", "큰 PR, 릴리즈와 공개 demo 갱신 전마다 한 번 실행합니다."),
        ),
      ],
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
      ["index", "concepts/llm-wiki", "concepts/graphify"],
      [
        section("timeline", "2026-07-10",
          timeline(
            ["ingest", "Karpathy LLM Wiki", "Raw/wiki/schema, ingest/query/lint와 index/log 패턴을 CareerTuner vault 운영 규칙으로 반영했습니다."],
            ["ingest", "Graphify and Obsidian references", "공식 repo, site, package와 실사용 자료를 읽고 Graphify 개념과 실행 runbook을 만들었습니다."],
            ["query", "CareerTuner second brain architecture", "Private vault와 public demo의 경계를 나누고 agent의 3-layer query rule을 확정했습니다."],
            ["publish", "Portfolio graph and Wiki", "Code-only 추출 수치, 공개 graph와 실제로 읽을 수 있는 Public Wiki를 GitHub Pages에 연결했습니다."],
          ),
        ),
        section("promotion", "결과 문서",
          links(
            ["concepts/llm-wiki", "LLM Wiki 운영 패턴"],
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

  function page(id, title, group, summary, tags, related, sections) {
    return { id, title, group, summary, tags, related, sections, updated: "2026-07-10" };
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
})();
