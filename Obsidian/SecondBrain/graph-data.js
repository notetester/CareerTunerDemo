window.SECOND_BRAIN_GRAPH = (() => {
  const groups = {
    hub: { label: "Hub", color: "#4fd1c5", cx: 640, cy: 390 },
    product: { label: "Product", color: "#f2c14e", cx: 250, cy: 190 },
    backend: { label: "Backend", color: "#5eead4", cx: 960, cy: 190 },
    frontend: { label: "Frontend", color: "#79a7ff", cx: 330, cy: 585 },
    admin: { label: "Admin", color: "#60a5fa", cx: 560, cy: 665 },
    ai: { label: "AI", color: "#b794f4", cx: 815, cy: 575 },
    ml: { label: "ML", color: "#c084fc", cx: 1045, cy: 620 },
    data: { label: "Data", color: "#8bd17c", cx: 1090, cy: 390 },
    release: { label: "Release", color: "#fb7185", cx: 690, cy: 130 },
    docs: { label: "Docs", color: "#a3e635", cx: 455, cy: 115 },
    wiki: { label: "Wiki", color: "#f59e0b", cx: 135, cy: 410 },
    ops: { label: "Ops", color: "#f97316", cx: 850, cy: 740 },
  };

  const nodes = [
    n("career-tuner", "CareerTuner", "hub", "portfolio-root", 36, "채용공고, 지원자 스펙, AI 분석, 면접, 첨삭, 릴리즈 산출물을 하나의 지원 건 중심으로 묶은 AI 취업 전략 플랫폼입니다.", ["지원 건이 제품·DB·AI 파이프라인의 중심 단위입니다.", "백엔드, 프런트, 관리자, ML 실험, 데모 배포가 같은 repo와 submodule graph 안에서 연결됩니다.", "이 공개 화면은 API 키와 계정값을 제외하고 내부 코드 구조를 포트폴리오 증거로 드러냅니다."], "README.md", ["application-case", "spring-api", "react-spa", "ai-orchestrator", "graphify-extract", "obsidian-wiki", "web-demo"]),
    n("portfolio-graph", "Portfolio Knowledge Graph", "hub", "public-view", 30, "CareerTunerDemo에 공개하는 포트폴리오용 wiki/Graphify 시각화입니다.", ["단순 개념도가 아니라 실제 문서·코드 경로·Graphify 추출 수치를 함께 보여줍니다.", "검색, 그룹 필터, 상세 패널, wiki/code 카드로 리뷰어가 구조를 따라갈 수 있습니다.", "민감값은 제외하지만 기술 구조와 구현 범위는 적극적으로 공개합니다."], "CareerTunerDemo/Obsidian/SecondBrain", ["career-tuner", "graphify-extract", "wiki-index", "architecture-doc", "code-map"]),
    n("code-map", "Code Map", "hub", "curated-graph", 26, "Graphify code-only AST 결과를 사람이 읽기 좋은 포트폴리오 graph로 압축한 지도입니다.", ["원본 graph.json은 75MB 규모라 public demo에는 요약 graph만 싣습니다.", "절대경로와 환경값을 제거하고 repo-relative 경로와 집계 수치를 사용합니다.", "실제 추출 수치와 curated node를 같이 노출해 과장 없이 강점을 보여줍니다."], "Obsidian/SecondBrain/graph-data.js", ["graphify-extract", "backend-graph", "frontend-graph", "ml-graph"]),

    n("application-case", "지원 건", "product", "core-domain", 28, "CareerTuner의 핵심 업무 단위입니다. 한 기업·직무·공고 조합에 공고 분석, 기업 분석, 적합도, 면접, 첨삭 기록이 모입니다.", ["공고 여러 개를 묶는 단위가 아니라 같은 공고 revision과 분석 이력을 관리합니다.", "archived_at/deleted_at으로 보관과 삭제를 분리합니다.", "사용자 화면과 관리자 운영 화면의 기준이 됩니다."], "docs/ARCHITECTURE.md", ["applicationcase-api", "job-posting", "analysis-run", "soft-delete", "dashboard"]),
    n("job-posting", "공고문/Revision", "product", "input", 20, "텍스트, URL, PDF, 이미지 공고를 지원 건에 붙이고 revision으로 관리합니다.", ["텍스트 저장, 파일 추출, 실패 재시도, 검수 확정 흐름이 있습니다.", "공고 분석과 기업 분석의 출발점입니다.", "worker와 백엔드 API가 함께 다루는 범위입니다."], "backend/src/main/java/com/careertuner/applicationcase/service/ApplicationCaseExtractionWorker.java", ["job-posting-worker", "jobanalysis-api", "applicationcase-api"]),
    n("company-analysis", "기업 분석", "product", "analysis", 20, "공고와 웹 근거를 바탕으로 기업 현황과 출처 메타데이터를 분리해 다루는 분석 영역입니다.", ["검색 호출은 플래그로 게이트됩니다.", "근거 URL, 확인 시점, 재조회 권장 시점을 저장할 수 있습니다.", "관리자 화면에서 출처 메타데이터 보정이 가능합니다."], "backend/src/main/java/com/careertuner/companyanalysis", ["web-search", "evidence-gate", "admin-application"]),
    n("fit-analysis", "적합도 분석", "product", "analysis", 26, "C 영역 핵심 기능입니다. 요구조건과 사용자 스펙을 비교해 점수, 신뢰도, 지원 판단, 액션 보드를 만듭니다.", ["Evidence gate와 skill alias normalizer로 근거 없는 매칭을 줄입니다.", "사용자 상세 화면과 관리자 검토 화면이 짝으로 존재합니다.", "학습 과제와 톤별 전략까지 연결됩니다."], "backend/src/main/java/com/careertuner/fitanalysis/service/FitAnalysisServiceImpl.java", ["evidence-gate", "career-strategy-llm", "fit-analysis-ui", "admin-fit-analysis", "fit-analysis-table"]),
    n("strategy", "지원 전략", "product", "output", 18, "공고와 사용자 역량 차이를 바탕으로 지원 방향, 어필 포인트, 보완 우선순위를 제안합니다.", ["Career Strategy LLM과 연결됩니다.", "학습 과제, 예상 질문, 액션 보드로 이어집니다."], "ml/career-strategy-llm/README.md", ["career-strategy-llm", "learning-task", "interview-prep"]),
    n("learning-task", "학습 과제", "product", "output", 16, "부족 역량을 보완하기 위한 학습·자격증·프로젝트 과제를 지원 건 안에 생성합니다.", ["대시보드와 액션 보드에서 완료 상태를 추적합니다.", "분석 결과를 실제 행동으로 바꾸는 장치입니다."], "backend/src/main/java/com/careertuner/fitanalysis/dto/FitAnalysisLearningTaskResponse.java", ["fit-analysis", "dashboard"]),
    n("interview-prep", "AI 면접", "product", "feature", 21, "지원 건의 공고·스펙·전략을 바탕으로 예상 질문과 모의면접 흐름을 제공합니다.", ["텍스트 면접, 답변 평가, 향후 음성/비언어 분석으로 확장됩니다.", "면접 agent orchestrator와 자체 fine-tune 실험이 연결됩니다."], "backend/src/main/java/com/careertuner/interview/service/InterviewAgentOrchestrator.java", ["interview-finetune", "nonverbal", "interview-ui"]),
    n("correction", "AI 첨삭", "product", "feature", 20, "자기소개서와 답변 문장을 공고 요구사항과 사용자 맥락에 맞춰 개선하는 기능입니다.", ["E correction LLM과 백엔드 correction API가 연결됩니다.", "관리자 성공/실패 이력 화면이 운영 증거가 됩니다."], "ml/correction-llm/README.md", ["correction-llm", "correction-api", "admin-correction", "correction-ui"]),
    n("dashboard", "대시보드", "product", "screen", 18, "지원 현황, 최근 AI 분석, 부족 역량, 오늘의 할 일, 크레딧을 모아 보여주는 요약 화면입니다.", ["독립 도메인이 아니라 여러 도메인의 요약입니다.", "mock demo와 관리자 홈 모두에서 체감되는 화면입니다."], "frontend/src/app/pages/Dashboard.tsx", ["dashboard-ui", "career-analysis", "billing"]),
    n("career-analysis", "장기 취업 분석", "product", "analysis", 18, "여러 지원 건을 종합해 반복 강점, 약점, 직무별 준비도, 추천 방향을 도출합니다.", ["분석 fingerprint 캐시와 재생성 흐름이 있습니다.", "C 영역의 장기 포트폴리오 증거입니다."], "backend/src/main/resources/mapper/analysis", ["analysis-run", "admin-analytics", "career-strategy-llm"]),
    n("billing", "구독/크레딧", "product", "business", 18, "AI 기능 사용권, 크레딧, 환불 정책, 관리자 환불 처리를 관리합니다.", ["기능별 benefit policy와 actionKey 기반 차감 검증을 둡니다.", "포트폴리오에서는 수익화·운영 도메인 구현 범위를 보여줍니다."], "backend/src/main/java/com/careertuner/billing/service/BillingPolicyService.java", ["billing-api", "payment-credit", "admin-refunds"]),
    n("support", "고객센터/챗봇", "product", "support", 17, "FAQ, 공지, 문의, 챗봇, 미답변 질문을 관리하는 사용자/관리자 지원 도메인입니다.", ["프런트 기능 모듈과 백엔드 support mapper/controller가 함께 존재합니다.", "운영형 SaaS 포트폴리오에서 제품 완성도를 보여줍니다."], "frontend/src/features/support/pages/SupportHomePage.tsx", ["support-api", "support-ui", "admin-support"]),

    n("spring-api", "Spring API", "backend", "stack", 28, "Spring Boot 4.1, Java 21, MyBatis, MySQL 8 기반 REST API 서버입니다.", ["모든 컨트롤러는 /api/** 하위입니다.", "응답은 ApiResponse envelope를 사용합니다.", "Graphify backend 추출: 1,787 code files, 13,548 nodes, 47,689 edges."], "backend/README.md", ["api-response", "mybatis", "security-config", "auth-api", "applicationcase-api", "fitanalysis-api"]),
    n("api-response", "ApiResponse envelope", "backend", "contract", 16, "모든 REST 응답을 success/code/message/data 형식으로 감싸는 공통 계약입니다.", ["프런트와 관리자 화면이 같은 오류·성공 처리 구조를 공유합니다."], "backend/src/main/java/com/careertuner/common/web/ApiResponse.java", ["spring-api", "react-spa"]),
    n("security-config", "SecurityConfig", "backend", "security", 18, "JWT/stateless 인증, 공개 엔드포인트, CORS, SSE 디스패치 허용 같은 공통 보안 경계를 담당합니다.", ["공통 영역이라 변경 시 영향 범위를 크게 봅니다.", "민감값은 환경변수로 주입하고 공개 데모에는 값 자체를 싣지 않습니다."], "backend/src/main/java/com/careertuner/common/config/SecurityConfig.java", ["auth-api", "spring-api"]),
    n("mybatis", "MyBatis Mapper", "backend", "persistence", 22, "CareerTuner의 영속성 접근 방식입니다. JPA 없이 @Mapper 인터페이스와 XML mapper를 사용합니다.", ["SQL 흐름이 명시적이라 팀 분담과 리뷰에 유리합니다.", "도메인별 mapper XML과 Java mapper가 대응됩니다."], "backend/src/main/resources/mapper", ["schema", "fit-analysis-table", "application-case-table"]),
    n("auth-api", "Auth API", "backend", "api", 18, "회원가입, 로그인, refresh 회전, logout, me, 이메일 인증, OAuth callback을 담당합니다.", ["JWT access와 opaque refresh token을 분리합니다.", "seed 계정은 개발/데모 검증용으로 문서화돼 있습니다."], "backend/src/main/java/com/careertuner/auth/service/AuthServiceImpl.java", ["security-config", "users"]),
    n("applicationcase-api", "Application Case API", "backend", "api", 24, "지원 건 생성, 목록, 상세, 수정, soft delete, 공고문 저장과 추출 상태를 다룹니다.", ["CareerTuner 핵심 작업공간 API입니다.", "공고문 추출 worker, B 분석, 관리자 상세와 연결됩니다."], "backend/src/main/java/com/careertuner/applicationcase/service/ApplicationCaseServiceImpl.java", ["application-case", "job-posting", "jobanalysis-api", "admin-application"]),
    n("jobanalysis-api", "Job/Company Analysis API", "backend", "api", 20, "공고 분석과 기업 분석 생성·조회·이력·검수 확정을 담당합니다.", ["자체 규칙, 로컬 LLM, 웹 근거, fallback 경로가 연결됩니다."], "backend/src/main/java/com/careertuner/applicationcase/service/BAnalysisGenerationService.java", ["company-analysis", "web-search", "ai-usage-log"]),
    n("fitanalysis-api", "Fit Analysis API", "backend", "api", 23, "지원 건별 적합도 분석 생성, 조회, 이력, 학습 과제 토글을 담당합니다.", ["C 영역의 가장 중요한 사용자 API입니다.", "관리자 분석 검토 API와 같은 데이터 모델을 공유합니다."], "backend/src/main/java/com/careertuner/fitanalysis/controller/FitAnalysisController.java", ["fit-analysis", "evidence-gate", "admin-fit-analysis"]),
    n("correction-api", "Correction API", "backend", "api", 17, "자기소개서/답변 첨삭 요청과 결과 이력을 다룹니다.", ["E correction LLM과 관리자 첨삭 로그가 연결됩니다."], "backend/src/main/resources/mapper/correction/CorrectionMapper.xml", ["correction", "correction-llm"]),
    n("billing-api", "Billing API", "backend", "api", 18, "구독 플랜, 사용권, 차감 미리보기, 환불 요청과 관리자 환불 처리를 담당합니다.", ["AI 기능의 비용·사용권·환불 고지를 제품화합니다."], "backend/src/main/java/com/careertuner/billing", ["billing", "admin-refunds", "payment-credit"]),
    n("support-api", "Support API", "backend", "api", 17, "공지, FAQ, 문의, 챗봇 FAQ, 미답변 질문 mapper와 controller를 포함합니다.", ["사용자 지원과 관리자 운영의 연결 지점입니다."], "backend/src/main/resources/mapper/support", ["support", "support-ui", "admin-support"]),
    n("jackson-convention", "Jackson 3 Convention", "backend", "guardrail", 16, "Spring Boot 4 환경에서 Jackson 3 ObjectMapper 사용 규칙을 테스트로 고정합니다.", ["직접 new ObjectMapper와 Jackson 2 import를 차단합니다."], "backend/src/test/java/com/careertuner/JacksonUsageConventionTests.java", ["spring-api"]),

    n("react-spa", "React SPA", "frontend", "stack", 27, "React 18, Vite 6, TypeScript, Tailwind v4 기반 사용자/관리자 반응형 SPA입니다.", ["Graphify frontend/src 추출: 571 code files, 4,448 nodes, 13,356 edges.", "사용자와 관리자 화면을 한 앱에서 관리합니다.", "mock demo, PWA, Capacitor 패키징이 같은 dist를 공유합니다."], "frontend/README.md", ["routes", "mock-registry", "admin-ui", "pwa-capacitor"]),
    n("routes", "Routes", "frontend", "routing", 18, "사용자 라우트와 관리자 라우트를 연결하는 SPA 진입 구조입니다.", ["라우팅은 공통 영향이 큰 영역입니다.", "공개 demo와 404 fallback에서도 중요합니다."], "frontend/src/app/routes.ts", ["react-spa", "admin-ui"]),
    n("app-layout", "App Layout", "frontend", "ui", 16, "Header, Footer, Root, 공통 UI primitive를 통해 제품 경험을 구성합니다.", ["Figma Make 초안을 점진적으로 기능 모듈 구조로 옮깁니다."], "frontend/src/app/components", ["react-spa", "responsive"]),
    n("mock-registry", "Mock Registry", "frontend", "demo", 22, "백엔드 없이 데모와 APK를 자체완결로 실행하게 하는 mock API registry입니다.", ["로그인은 아무 값이나 통과하고 데모 데이터가 채워집니다.", "웹 데모와 Android APK의 핵심 포트폴리오 장치입니다."], "frontend/src/app/lib/mock", ["web-demo", "android-apk", "dashboard-ui", "admin-ui"]),
    n("dashboard-ui", "Dashboard UI", "frontend", "screen", 17, "지원 현황, 최근 분석, 할 일, 크레딧을 보여주는 사용자 요약 화면입니다.", ["mock demo에서 제품 첫 인상을 담당합니다."], "frontend/src/app/pages/Dashboard.tsx", ["dashboard", "mock-registry"]),
    n("fit-analysis-ui", "Fit Analysis UI", "frontend", "screen", 20, "적합도 분석 결과, 비교 매트릭스, 액션 보드, 톤별 전략을 보여주는 사용자 화면입니다.", ["C 영역 백엔드와 포트폴리오 핵심 흐름입니다."], "frontend/src/features/applications/types/analysis.ts", ["fit-analysis", "fitanalysis-api"]),
    n("interview-ui", "Interview UI", "frontend", "screen", 16, "AI 면접 시작, 진행, 결과 확인 사용자 흐름을 담당합니다.", ["향후 음성/비언어 분석 확장과 연결됩니다."], "frontend/src/app/pages", ["interview-prep", "interview-finetune"]),
    n("correction-ui", "Correction UI", "frontend", "screen", 16, "첨삭 기능을 지원 건 상세와 독립 첨삭 흐름에 연결합니다.", ["E correction LLM 결과를 사용자 경험으로 보여줍니다."], "frontend/src/app/pages", ["correction", "correction-api"]),
    n("support-ui", "Support UI", "frontend", "feature", 17, "고객센터, FAQ, 공지, 문의, 챗봇 페이지를 사용자 기능으로 제공합니다.", ["운영형 서비스의 완성도를 보여주는 기능군입니다."], "frontend/src/features/support/pages/SupportHomePage.tsx", ["support", "support-api"]),
    n("admin-ui", "Admin UI", "admin", "surface", 24, "같은 React 앱 안에서 /admin/** 라우트로 운영자 화면을 제공합니다.", ["사용자 기능 완료 기준에 관리자 화면/API를 포함합니다.", "목록, 검색, 상세, 메모, 상태 변경 등 운영 패턴을 반복합니다."], "frontend/src/admin/routes.ts", ["admin-application", "admin-fit-analysis", "admin-analytics", "admin-correction", "admin-refunds", "admin-support"]),
    n("admin-application", "Admin Application Cases", "admin", "feature", 17, "지원 건 운영 목록·상세·상태 변경·B 분석 이력을 확인합니다.", ["사용자 지원 건 API의 운영 짝입니다."], "frontend/src/admin", ["applicationcase-api", "jobanalysis-api"]),
    n("admin-fit-analysis", "Admin Fit Analysis", "admin", "feature", 19, "적합도 분석 목록, 상세, 스냅샷, 품질 플래그, 운영 메모를 다룹니다.", ["C 영역 분석 품질을 운영자가 검토할 수 있습니다."], "backend/src/main/java/com/careertuner/admin", ["fit-analysis", "fitanalysis-api", "admin-analytics"]),
    n("admin-analytics", "Admin Analytics", "admin", "feature", 18, "장기 분석 실행 이력, 품질 큐, 사용자별 타임라인, 운영 메모를 다룹니다.", ["분석 결과를 운영 가능한 제품으로 만드는 영역입니다."], "backend/src/main/resources/mapper/analysis", ["career-analysis", "ai-usage-log"]),
    n("admin-correction", "Admin Correction", "admin", "feature", 16, "첨삭 성공 이력과 실패 로그를 운영자가 확인합니다.", ["E 영역 운영 가시성을 제공합니다."], "backend/src/main/resources/mapper/correction/CorrectionMapper.xml", ["correction", "correction-api"]),
    n("admin-refunds", "Admin Refunds", "admin", "feature", 16, "환불 요청의 자동 판정 근거와 승인/거절 흐름을 제공합니다.", ["구독제와 AI 사용권이 실제 운영 정책으로 연결됩니다."], "backend/src/main/java/com/careertuner/billing", ["billing", "billing-api"]),
    n("admin-support", "Admin Support", "admin", "feature", 16, "공지, FAQ, 문의, 챗봇 미답변 질문을 운영자가 관리합니다.", ["고객지원 도메인의 운영 표면입니다."], "backend/src/main/resources/mapper/support", ["support", "support-api"]),
    n("pwa-capacitor", "PWA + Capacitor", "frontend", "mobile", 19, "반응형 웹에서 PWA, Android/iOS 패키징으로 확장하는 모바일 전략입니다.", ["같은 React dist를 웹과 앱 산출물이 공유합니다.", "푸시, 딥링크, 네이티브 설정 화면이 준비돼 있습니다."], "frontend/MOBILE_BUILD.md", ["android-apk", "ios-build", "mobile-native"]),
    n("mobile-native", "Native Bridge", "frontend", "mobile", 16, "Capacitor 기반 카메라, 푸시, 딥링크, 앱잠금, haptics 같은 플랫폼 기능을 캡슐화합니다.", ["웹과 앱의 경계를 platform 모듈로 분리합니다."], "frontend/src/platform", ["pwa-capacitor"]),
    n("responsive", "Responsive UX", "frontend", "ux", 16, "3열 작업공간을 모바일에서 1열, drawer, 접이식 카드로 접는 UX 원칙입니다.", ["포트폴리오에서 모바일 대응성을 설명하는 근거입니다."], "docs/planning/모바일 고려.md", ["react-spa", "pwa-capacitor"]),

    n("ai-orchestrator", "AI Orchestrator", "ai", "pipeline", 26, "사용자 요청을 인테이크 대화, planner, 병렬 도메인 호출, SSE 진행 상황으로 자동 준비하는 AI 파이프라인입니다.", ["프로필, 공고, 적합도, 자소서, 면접, 커뮤니티 영역을 동적으로 실행합니다.", "fallback과 skip으로 일부 미완이어도 완주하는 구조입니다."], "docs/AI_ORCHESTRATOR.md", ["autoprep", "provider-dispatcher", "prompt-templates", "ai-usage-log"]),
    n("autoprep", "Auto Prep", "ai", "workflow", 19, "한 줄 요청에서 부족 정보를 수집하고 필요한 파트를 선택해 자동 준비를 실행합니다.", ["백엔드 ai/autoprep와 프런트 features/autoprep가 연결됩니다."], "backend/src/main/java/com/careertuner/ai/autoprep", ["ai-orchestrator", "react-spa"]),
    n("provider-dispatcher", "Provider Dispatcher", "ai", "runtime", 20, "자체 모델, Claude, OpenAI, 규칙/mock fallback 우선순위를 한 지점에서 선택하는 원칙입니다.", ["여러 @Primary 구현체 충돌을 방지합니다.", "AI provider 변경 시 호출부 영향도를 낮춥니다."], "docs/ARCHITECTURE.md", ["openai-provider", "ollama-provider", "ai-usage-log"]),
    n("evidence-gate", "Evidence Gate", "ai", "quality", 22, "근거 없는 스킬 매칭과 환각을 줄이기 위한 검증 계층입니다.", ["fit analysis에서 user evidence와 job evidence를 구분합니다.", "C 영역 RAG/grounding 실험 보고서와 연결됩니다."], "backend/src/main/java/com/careertuner/fitanalysis/service/EvidenceGateService.java", ["fit-analysis", "career-strategy-llm", "evaluation-reports"]),
    n("openai-provider", "OpenAI Provider", "ai", "provider", 16, "구조화 분석과 요약을 위한 외부 provider 경로입니다.", ["키 값은 GitHub Secrets 또는 환경변수에서 주입하고 공개 파일에는 싣지 않습니다."], "backend/src/main/java/com/careertuner/applicationcase/service/OpenAiResponsesClient.java", ["provider-dispatcher"]),
    n("ollama-provider", "Ollama Local LLM", "ai", "provider", 18, "공유 4090 또는 로컬 fallback Ollama를 사용하는 자체 모델 실행 경로입니다.", ["B 분석, F 검열, 담당별 모델 실험과 연결됩니다.", "서버 주소 값은 공개 demo에 노출하지 않습니다."], "docs/ENVIRONMENTS.md", ["provider-dispatcher", "4090-ops"]),
    n("web-search", "Company Web Search", "ai", "evidence", 16, "기업 분석용 외부 검색 근거 수집 경계입니다.", ["기본 비활성 플래그로 게이트합니다.", "검색 키 값은 환경변수로만 주입합니다."], "backend/src/main/java/com/careertuner/companyanalysis", ["company-analysis", "evidence-gate"]),
    n("prompt-templates", "Prompt Templates", "ai", "prompt", 17, "도메인별 system prompt와 strictness prompt를 resources에 분리합니다.", ["프롬프트도 코드처럼 버전 관리되는 포트폴리오 자산입니다."], "backend/src/main/resources/prompts", ["ai-orchestrator", "correction"]),
    n("ai-usage-log", "AI Usage Log", "ai", "ops", 17, "AI 호출 성공/실패, 비용, fallback 상태를 운영 관점에서 추적합니다.", ["관리자 화면과 크레딧 차감 정책의 기반입니다."], "backend/src/main/resources/mapper/ai", ["billing", "admin-analytics"]),

    n("career-strategy-llm", "Career Strategy LLM", "ml", "model-area", 24, "C 영역 자체 LLM/평가 실험입니다. 지원 전략과 적합도 분석 품질 개선의 핵심 근거입니다.", ["RAG hardcase, semantic judge, evidence gate, 4090 평가 보고서가 축적돼 있습니다.", "포트폴리오 보고서와 model card 성격의 문서가 연결됩니다."], "ml/career-strategy-llm/README.md", ["fit-analysis", "strategy", "evaluation-reports"]),
    n("correction-llm", "Correction LLM", "ml", "model-area", 20, "E 영역 첨삭 모델 산출물입니다. 자기소개서/답변 문장 개선 기능과 연결됩니다.", ["README, model-card, evaluation summary가 있습니다."], "ml/correction-llm/README.md", ["correction", "admin-correction"]),
    n("interview-finetune", "Interview Fine-tune", "ml", "model-area", 18, "면접 질문/답변 평가용 fine-tune 실험 영역입니다.", ["dataset assembly, LoRA, judge rubric, live AB 결과가 연결됩니다."], "ml/interview-finetune/README.md", ["interview-prep"]),
    n("nonverbal", "Nonverbal Interview", "ml", "model-area", 17, "표정·시선·자세 분석을 면접 태도 개선 참고자료로 다루는 ML 영역입니다.", ["합격/불합격 판단이 아니라 피드백 보조로 제한합니다."], "ml/interview-nonverbal/README.md", ["interview-prep"]),
    n("job-posting-worker", "Job Posting Worker", "ml", "worker", 21, "PDF/이미지/문서 텍스트 추출과 공고문 처리 안정화를 담당하는 Python worker입니다.", ["Graphify ML 추출에도 많은 테스트와 scripts가 잡힙니다.", "OCR runtime smoke, Docker smoke, release readiness 검사가 있습니다."], "ml/job-posting-worker/README.md", ["job-posting", "jobanalysis-api"]),
    n("qlora-profile", "Profile QLoRA Training", "ml", "training", 16, "프로필 AI 데이터셋과 QLoRA 학습 runbook을 docs/ai-training에 둔 실험 영역입니다.", ["데이터 품질 체크리스트와 schema가 함께 있습니다."], "docs/ai-training/README.md", ["evaluation-reports"]),
    n("4090-ops", "4090 Ops", "ops", "infrastructure", 18, "공유 GPU, Ollama, OpenSSH, Tailscale 운영 스크립트와 상태 문서를 관리합니다.", ["AI 실험과 로컬 LLM provider를 실제 운영 환경으로 연결합니다."], "docs/ai-artifacts/STATUS_4090.md", ["ollama-provider", "evaluation-reports"]),
    n("evaluation-reports", "AI Reports", "ml", "evidence", 20, "C career strategy와 기타 AI 실험의 반복 평가 보고서를 submodule에 축적합니다.", ["장문 보고서는 main repo가 아니라 ai-reports submodule에 둡니다.", "포트폴리오에서는 모델 개선 과정을 보여주는 강점입니다."], "docs/ai-reports/areas/c-career-strategy/reports", ["career-strategy-llm", "ai-boundaries"]),
    n("ml-graph", "Graphify ML Extract", "ml", "graphify-scope", 18, "Graphify code-only 추출 결과: ml 204 files, 2,016 nodes, 4,830 edges.", ["calls 1,531, contains 1,048, imports 621, references 539를 확인했습니다."], "TEMP/ct-graphify-ml/graphify-out/graph.json", ["graphify-extract", "career-strategy-llm", "job-posting-worker"]),

    n("schema", "DB Schema", "data", "database", 24, "users, application_case, analysis_run, fit_analysis, payment, credit, consent 등 제품의 핵심 데이터 모델입니다.", ["지원 건 중심의 1:N 분석 이력을 허용합니다.", "JSON 컬럼은 초기에는 문자열로 매핑하고 필요 시 TypeHandler로 확장합니다."], "backend/src/main/resources/db/schema.sql", ["users", "application-case-table", "analysis-run", "fit-analysis-table", "payment-credit", "consent"]),
    n("users", "Users/Profile", "data", "table-family", 16, "회원, 프로필, 프로필 버전을 공고 분석 비교 기준으로 사용합니다.", ["인증, 지원 건, AI 분석의 기준 엔터티입니다."], "backend/src/main/resources/mapper/user", ["auth-api", "schema"]),
    n("application-case-table", "application_case", "data", "table-family", 20, "기업·직무·공고 조합의 작업공간을 저장합니다.", ["보관과 삭제는 별도 시각 컬럼으로 관리합니다."], "docs/ARCHITECTURE.md", ["application-case", "soft-delete", "job-posting-revision"]),
    n("job-posting-revision", "job_posting revision", "data", "table-family", 17, "같은 지원 건의 공고문 수정 이력을 저장합니다.", ["분석 재현성과 사용자 검수 흐름에 필요합니다."], "docs/ARCHITECTURE.md", ["job-posting", "analysis-run"]),
    n("analysis-run", "analysis_run", "data", "table-family", 18, "어떤 프로필 버전과 공고 revision으로 분석했는지 묶는 재현성 단위입니다.", ["fit/job/company/career analysis 결과를 같은 맥락으로 연결합니다."], "backend/src/main/resources/mapper/analysis", ["career-analysis", "fit-analysis-table"]),
    n("fit-analysis-table", "fit_analysis", "data", "table-family", 19, "적합도 분석 결과, condition match, 학습 과제, 히스토리를 저장합니다.", ["C 영역 사용자/관리자 기능의 핵심 테이블군입니다."], "backend/src/main/resources/mapper/analysis", ["fit-analysis", "admin-fit-analysis"]),
    n("payment-credit", "Payment/Credit", "data", "table-family", 17, "구독, 결제, 크레딧, 사용권, 환불 정책을 저장합니다.", ["AI 기능 비용 구조를 데이터로 관리합니다."], "backend/src/main/resources/mapper/credit", ["billing", "admin-refunds"]),
    n("consent", "Consent/Legal", "data", "table-family", 15, "약관/동의 이력을 버전별로 저장합니다.", ["AI 데이터 사용 동의와 개인정보 처리 흐름의 근거입니다."], "backend/src/main/resources/mapper/consent", ["support", "schema"]),
    n("soft-delete", "Archive/Delete Policy", "data", "policy", 16, "지원 건 상태와 보관/삭제 시각을 분리하는 데이터 정책입니다.", ["삭제는 물리 삭제가 아니라 deleted_at 기록입니다."], "docs/ARCHITECTURE.md", ["application-case", "application-case-table"]),

    n("web-demo", "GitHub Pages Web Demo", "release", "channel", 22, "dev 머지 후 mock build를 CareerTunerDemo로 배포하는 공개 웹 데모입니다.", ["백엔드 없이 포트폴리오 시연이 가능합니다.", "이번 SecondBrain 화면도 이 경로에서 제공됩니다."], "docs/RELEASE.md", ["pages-deploy", "mock-registry", "portfolio-graph"]),
    n("android-apk", "Android APK", "release", "channel", 20, "v* 또는 demo-* 태그로 mock demo APK를 GitHub Releases에 첨부합니다.", ["BlueStacks에 드래그앤드롭으로 설치 가능한 산출물입니다."], "frontend/MOBILE_BUILD.md", ["pwa-capacitor", "github-actions"]),
    n("ios-build", "iOS Simulator Build", "release", "channel", 16, "macOS runner에서 무서명 시뮬레이터 .app을 빌드하는 수동 workflow입니다.", ["Apple 계정 없이 빌드 검증이 가능합니다."], "frontend/MOBILE_BUILD.md", ["pwa-capacitor", "github-actions"]),
    n("desktop-release", "Desktop Release", "release", "channel", 16, "데스크톱 zip, installer, portable 실행 파일 산출물 전략입니다.", ["웹/모바일 외 설치형 경험을 포트폴리오에 추가합니다."], "desktop/README.md", ["github-actions"]),
    n("github-actions", "GitHub Actions", "release", "automation", 18, "CI, demo deploy, Android release, iOS build, Pages deployment를 자동화합니다.", ["태그/브랜치 기반 산출물 배포의 근거입니다."], ".github/workflows", ["web-demo", "android-apk", "ios-build", "pages-deploy"]),
    n("pages-deploy", "CareerTunerDemo Deploy", "release", "automation", 18, "비공개 main repo의 sanitized build artifact를 공개 Pages repo로 내보냅니다.", ["기존 Obsidian/ 경로를 보존하도록 배포 workflow가 정리돼 있습니다."], ".github/workflows/deploy-demo.yml", ["web-demo", "portfolio-graph"]),

    n("architecture-doc", "ARCHITECTURE.md", "docs", "canon", 22, "기술 스택, API, 데이터 모델, 시스템 경계의 정본 문서입니다.", ["이번 graph의 주요 code/domain 해석 기준입니다."], "docs/ARCHITECTURE.md", ["career-tuner", "spring-api", "schema"]),
    n("product-structure", "PRODUCT_STRUCTURE.md", "docs", "canon", 20, "사용자 관점 메뉴와 기능 구조를 정리한 문서입니다.", ["지원 건, 대시보드, AI 면접, 첨삭, 커뮤니티, 결제 구조를 설명합니다."], "docs/PRODUCT_STRUCTURE.md", ["application-case", "dashboard", "interview-prep"]),
    n("feature-module", "FEATURE_MODULE_STRUCTURE.md", "docs", "canon", 18, "frontend/backend/admin 기능 모듈 표준 경로와 충돌 주의 파일을 정의합니다.", ["팀 분담과 코드 graph 탐색의 기준입니다."], "docs/FEATURE_MODULE_STRUCTURE.md", ["react-spa", "spring-api", "admin-ui"]),
    n("team-ownership", "TEAM_WORK_DISTRIBUTION.md", "docs", "canon", 18, "6명 수직 분담과 담당 AI 기능, 주요 DB를 정리합니다.", ["공통 영역 변경 기준과 소유권을 확인합니다."], "docs/TEAM_WORK_DISTRIBUTION.md", ["admin-ui", "ai-orchestrator"]),
    n("planning-docs", "Planning Docs", "docs", "planning", 17, "기획, 디자인 분석, 모바일 고려, 자체 LLM 운영안을 포함한 목표 상태 문서군입니다.", ["제품 방향과 구현 현황을 구분해 읽습니다."], "docs/planning", ["product-structure", "responsive", "provider-dispatcher"]),
    n("release-doc", "RELEASE.md", "docs", "runbook", 17, "웹 데모, Android APK, iOS 빌드 산출물 생성과 배포 절차입니다.", ["포트폴리오 산출물을 실제로 배포하는 절차입니다."], "docs/RELEASE.md", ["web-demo", "android-apk", "ios-build"]),
    n("ai-boundaries", "AI Repository Boundaries", "docs", "boundary", 17, "AI reports/artifacts/Obsidian vault submodule의 저장 경계를 정의합니다.", ["main repo 오염을 줄이고 산출물을 성격별로 보관합니다."], "docs/AI_REPOSITORY_BOUNDARIES.md", ["evaluation-reports", "obsidian-wiki", "graphify-extract"]),

    n("obsidian-wiki", "Obsidian Wiki", "wiki", "vault", 24, "CareerTuner 작업 맥락을 Obsidian/LLM Wiki 방식으로 축적하는 submodule입니다.", ["정본 문서를 복사하지 않고 읽기 순서와 판단 맥락을 관리합니다.", "이번 공개 demo는 이 vault의 포트폴리오 projection입니다."], "docs/obsidian-vault", ["wiki-index", "wiki-log", "raw-sources", "graph-report", "agent-ladder"]),
    n("wiki-index", "wiki/index.md", "wiki", "index", 18, "LLM Wiki의 content-oriented catalog입니다.", ["agent와 사람이 query 시작점으로 사용합니다."], "docs/obsidian-vault/wiki/index.md", ["obsidian-wiki", "agent-ladder"]),
    n("wiki-log", "wiki/log.md", "wiki", "log", 16, "ingest, query, lint 이력을 시간순으로 남기는 기록입니다.", ["최근 지식 갱신 맥락을 빠르게 파악합니다."], "docs/obsidian-vault/wiki/log.md", ["obsidian-wiki", "ingest-query-lint"]),
    n("raw-sources", "raw sources", "wiki", "source", 17, "LLM Wiki 원문과 Graphify/Obsidian 관련 외부 source index를 보관합니다.", ["원문과 해석을 분리합니다."], "docs/obsidian-vault/raw", ["llm-wiki", "source-index"]),
    n("llm-wiki", "LLM Wiki Pattern", "wiki", "concept", 19, "raw/wiki/schema, ingest/query/lint, index/log 기반의 지속 갱신 지식관리 패턴입니다.", ["RAG처럼 매번 재발견하지 않고 wiki를 누적합니다."], "docs/obsidian-vault/wiki/concepts/llm-wiki.md", ["raw-sources", "wiki-index", "ingest-query-lint"]),
    n("graphify-extract", "Graphify Extract Result", "wiki", "graphify", 28, "실제 Graphify code-only AST 추출 결과입니다. 전체 repo 기준 2,870 code files, 26,886 nodes, 91,616 edges를 생성했습니다.", ["API 키 없이 AST 기반으로 실행했습니다.", "backend/frontend/ml 별도 추출 수치를 공개 화면에 반영했습니다.", "원본 graph의 절대경로는 공개하지 않고 repo-relative 요약만 사용합니다."], "TEMP/careertuner-graphify-public/graphify-out/graph.json", ["backend-graph", "frontend-graph", "ml-graph", "graph-report", "code-map"]),
    n("backend-graph", "Backend Graphify Scope", "wiki", "graphify-scope", 20, "backend 범위 code-only 추출: 1,787 files, 13,548 nodes, 47,689 edges.", ["calls 14,098, references 12,543, imports 12,217를 확인했습니다."], "TEMP/ct-graphify-backend/graphify-out/graph.json", ["spring-api", "mybatis"]),
    n("frontend-graph", "Frontend Graphify Scope", "wiki", "graphify-scope", 20, "frontend/src 범위 code-only 추출: 571 files, 4,448 nodes, 13,356 edges.", ["contains 3,821, imports 3,701, calls 2,829를 확인했습니다."], "TEMP/ct-graphify-frontend-src/graphify-out/graph.json", ["react-spa", "mock-registry"]),
    n("graph-report", "GRAPH_REPORT.md", "wiki", "report", 18, "Graphify hub, bridge, surprising link, agent 시작 prompt를 요약한 report입니다.", ["실제 code-only 결과와 curated wiki report를 함께 사용합니다."], "docs/obsidian-vault/graphify-out/GRAPH_REPORT.md", ["graphify-extract", "agent-ladder"]),
    n("agent-ladder", "3-layer Query Rule", "wiki", "protocol", 20, "Graph query → Obsidian wiki search → raw/source reading 순서로 agent 탐색 비용을 줄입니다.", ["코드를 덜 읽는 것이 아니라 읽을 코드를 빠르게 좁히는 전략입니다."], "docs/obsidian-vault/wiki/systems/agent-memory-protocol.md", ["wiki-index", "graph-report", "code-map"]),
    n("ingest-query-lint", "Ingest / Query / Lint", "wiki", "operation", 17, "새 자료 수집, 질문 결과 승격, orphan/stale/public boundary 점검 workflow입니다.", ["wiki를 계속 살아있는 지식 베이스로 유지합니다."], "docs/obsidian-vault/wiki/operations/ingest-query-lint.md", ["wiki-log", "llm-wiki"]),
    n("source-index", "Source Index", "wiki", "source", 16, "Graphify, LLM Wiki, Obsidian agent setup 자료의 링크와 적용점을 기록합니다.", ["외부 글 전문 대신 출처와 적용점을 기록합니다."], "docs/obsidian-vault/raw/web-sources/source-index.md", ["raw-sources", "llm-wiki"]),
  ];

  const highlights = [
    h("Graphify 실제 추출", "API 키 없이 code-only AST 추출을 실행해 전체 repo에서 26,886 nodes / 91,616 edges를 확인했습니다.", "2,870 code files"),
    h("백엔드 구현 밀도", "Spring Boot 4.1, Java 21, MyBatis 기반 backend만 별도 추출해 13,548 nodes / 47,689 edges가 나왔습니다.", "1,787 files"),
    h("프런트/관리자 표면", "React SPA의 사용자/관리자 화면과 mock registry를 frontend/src 단위로 추출했습니다.", "4,448 nodes"),
    h("ML 실험 증거", "career-strategy, correction, interview, nonverbal, job-posting-worker가 각각 문서와 실행 스크립트를 갖습니다.", "5 model areas"),
    h("배포 산출물", "GitHub Pages, Android APK, iOS simulator, desktop release 전략까지 같은 지식맵 안에서 추적합니다.", "4 channels"),
  ];

  const graphifyRuns = [
    run("whole repo", "전체 repo code-only", 2870, 26886, 91616, "generated/mobile/desktop build 산출물도 일부 포함된 1차 전체 스캔"),
    run("backend", "Spring/MyBatis backend", 1787, 13548, 47689, "calls 14,098 · references 12,543 · imports 12,217"),
    run("frontend/src", "React/Vite source", 571, 4448, 13356, "contains 3,821 · imports 3,701 · calls 2,829"),
    run("ml", "ML scripts and tests", 204, 2016, 4830, "calls 1,531 · contains 1,048 · imports 621"),
  ];

  const wikiPages = [
    page("CareerTuner Second Brain", "Obsidian, Graphify, LLM Wiki, public demo를 연결하는 전체 구조.", "docs/obsidian-vault/wiki/systems/careertuner-second-brain.md"),
    page("Agent Memory Protocol", "Codex/Claude Code류 agent가 graph/wiki/source를 읽는 우선순위.", "docs/obsidian-vault/wiki/systems/agent-memory-protocol.md"),
    page("LLM Wiki", "raw/wiki/schema, ingest/query/lint, index/log 패턴.", "docs/obsidian-vault/wiki/concepts/llm-wiki.md"),
    page("Graphify", "code/docs를 graph로 추출하고 query 가능한 memory로 쓰는 도구.", "docs/obsidian-vault/wiki/concepts/graphify.md"),
    page("Ingest Query Lint", "자료 수집, 질문 처리, 주기적 건강검진 workflow.", "docs/obsidian-vault/wiki/operations/ingest-query-lint.md"),
    page("Graphify Runbook", "설치, 실행, 산출물 관리, 민감값 검사 절차.", "docs/obsidian-vault/wiki/operations/graphify-runbook.md"),
  ];

  const codeCards = [
    code("Fit Analysis Service", "C 영역 핵심 분석 서비스. Evidence gate, 학습 과제, 액션 보드와 연결됩니다.", "backend/src/main/java/com/careertuner/fitanalysis/service/FitAnalysisServiceImpl.java", ["Backend", "AI"]),
    code("Application Case Service", "지원 건 CRUD, 공고문 revision, soft delete 정책의 중심 서비스입니다.", "backend/src/main/java/com/careertuner/applicationcase/service/ApplicationCaseServiceImpl.java", ["Backend", "Product"]),
    code("B Analysis Generation", "공고/기업 분석 생성과 fallback 경로를 묶는 서비스입니다.", "backend/src/main/java/com/careertuner/applicationcase/service/BAnalysisGenerationService.java", ["Backend", "AI"]),
    code("OpenAI Responses Client", "구조화 분석 provider 경로. 실제 키 값은 공개하지 않고 주입 방식만 사용합니다.", "backend/src/main/java/com/careertuner/applicationcase/service/OpenAiResponsesClient.java", ["Backend", "AI"]),
    code("Mock Registry", "웹 데모/APK를 백엔드 없이 자체완결로 실행하는 핵심 프런트 장치입니다.", "frontend/src/app/lib/mock", ["Frontend", "Demo"]),
    code("Admin Routes", "사용자 기능과 짝을 이루는 관리자 콘솔 라우팅 표면입니다.", "frontend/src/admin/routes.ts", ["Frontend", "Admin"]),
    code("Job Posting Worker", "문서 추출, OCR smoke, Docker smoke, release readiness 검사를 가진 Python worker입니다.", "ml/job-posting-worker/README.md", ["ML", "Worker"]),
    code("Career Strategy Reports", "RAG hardcase, evidence gate, semantic judge 등 C 모델 개선 이력이 누적됩니다.", "docs/ai-reports/areas/c-career-strategy/reports", ["ML", "Docs"]),
  ];

  const sources = [
    source("Karpathy LLM Wiki", "raw/wiki/schema, ingest/query/lint, index/log 패턴을 CareerTuner vault에 적용했습니다.", "https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f"),
    source("Graphify", "code-only AST 추출로 실제 CareerTuner graph 수치를 생성하고, 공개용으로 압축했습니다.", "https://github.com/safishamsi/graphify"),
    source("Graphify PyPI", "공식 패키지 graphifyy와 CLI graphify 설치 경로를 runbook에 반영했습니다.", "https://pypi.org/project/graphifyy/"),
    source("CareerTuner ARCHITECTURE", "지원 건 중심 도메인, Spring/MyBatis, React/Admin, AI 경계를 정본으로 사용했습니다.", "docs/ARCHITECTURE.md"),
    source("CareerTuner Obsidian Wiki", "wiki/index, GRAPH_REPORT, log를 공개 demo의 설명 계층으로 연결했습니다.", "docs/obsidian-vault/wiki/index.md"),
  ];

  return {
    meta: {
      name: "CareerTuner Portfolio Knowledge Graph",
      updated: "2026-07-10",
      visibility: "portfolio-public",
      graphifyExtracted: true,
    },
    groups,
    nodes,
    highlights,
    graphifyRuns,
    wikiPages,
    codeCards,
    sources,
  };

  function n(id, label, group, type, weight, summary, points, path, links) {
    return { id, label, group, type, weight, summary, points, path, links };
  }

  function h(title, summary, metric) {
    return { title, summary, metric };
  }

  function run(scope, label, files, nodes, edges, note) {
    return { scope, label, files, nodes, edges, note };
  }

  function page(title, summary, path) {
    return { title, summary, path };
  }

  function code(title, summary, path, tags) {
    return { title, summary, path, tags };
  }

  function source(title, summary, href) {
    return { title, summary, href };
  }
})();
