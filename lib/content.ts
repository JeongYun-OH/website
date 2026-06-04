import type {
  Achievement,
  Colleague,
  Post,
  Project,
  SideProject,
  Skill,
  SocialLink,
  TimelineItem,
} from "./types";

// ─────────────────────────────────────────────────────────────
// 모든 텍스트/수치/링크 플레이스홀더. 실데이터 교체 시 이 파일만 수정.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "오정윤",
  role: "풀퍼널 그로스 마케터",
  url: "https://website-kappa-eight-55.vercel.app",
  description:
    "중소기업의 GTM 그로스를 풀퍼널로 설계하고, AI로 실행 환경까지 구축하는 마케터.",
  email: "ojy9344@gmail.com",
};

export const hero = {
  headline: ["풀퍼널 관점으로", "성장을 그립니다."],
  sub: "방향을 잡고, 순서를 만들고, 시스템으로 실행하는 마케터.",
};

export const socials: SocialLink[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/jeongyun-oh" },
  { label: "Blog", href: "https://jeongyun-oh.github.io/" },
  // Instagram 계정 미정 — 확정 시 href만 교체
  { label: "Instagram", href: "#" },
];

export const achievements: Achievement[] = [
  {
    metric: "+45%",
    title: "모집 인원",
    description: "부트캠프 모집",
  },
  {
    metric: "−62%",
    title: "CPA",
    description: "매체 최적화",
  },
  {
    metric: "+800%",
    title: "매출",
    description: "채널 일원화",
  },
];

export const about = {
  headline: "방향을 고민하고, 끝까지 결과를 만드는 사람",
  sub: "지난 3년간 함께 일하며 동료들이 바라본 저의 모습입니다.",
  keywords: ["방향", "결과"],
};

export const colleagues: Colleague[] = [
  {
    quote:
      "단순 요청이 아니라 '왜 이게 필요한지'를 고민하고 제안해주셔서, 과정 전체의 품질을 함께 책임지고 있다는 인상을 받았습니다.",
    author: "동료 A",
    highlights: ["왜 이게 필요한지", "과정 전체의 품질"],
  },
  {
    quote:
      "제오는 섬세한 동료입니다. 전체 흐름을 이해하려는 노력이 돋보였고, 디테일을 잘 짚어 주어 운영 계획을 더 정교하게 세울 수 있었습니다.",
    author: "동료 B",
    highlights: ["전체 흐름", "디테일"],
  },
  {
    quote:
      "전달하는 기획안은 의도와 방향이 명확하고 구조가 잘 정리되어 있어, 디자이너가 빠르게 이해하고 작업에 몰입할 수 있게 해줍니다.",
    author: "동료 C",
    highlights: ["의도와 방향", "구조가 잘 정리"],
  },
  {
    quote:
      "단순히 업무를 넘겨받는 데 그치지 않고 배경과 맥락을 충분히 이해한 뒤 진행하는 모습이 인상적이었고, 이런 꼼꼼함이 프로젝트 완성도와 팀 전체의 속도에 큰 힘이 되었습니다.",
    author: "동료 D",
    highlights: ["배경과 맥락", "프로젝트 완성도"],
  },
];

export const timeline: TimelineItem[] = [
  {
    date: "2022.02 – 23.01",
    duration: "Freelance",
    title: "프리랜서 · 창업",
    description: "마케팅 프리랜서 및 창업 활동",
  },
  {
    date: "2023.05 – 24.09",
    duration: "PUZL",
    title: "퍼즐 퍼포먼스 마케터",
    description: "커머스, 건기식, B2B, 뷰티, 생활용품 등 다양한 도메인 마케팅 운영",
  },
  {
    date: "2024.10 – 26.02",
    duration: "goorm",
    title: "구름",
    description: "IT 교육 부트캠프 모집 마케팅 운영",
  },
];

export const projects: Project[] = [
  {
    id: "kakaotech-bootcamp",
    company: "goorm",
    period: "2024.11 – 2025.01",
    title: "카카오테크 부트캠프 2회차 수강생 모집",
    summary:
      "확보한 브랜드 인지도를 바탕으로 매체 운영을 효율화. 2회차에서 모집 인원은 확대하면서 CPA는 성공적으로 절감했습니다.",
    featured: true,
    metrics: [
      { label: "모집 인원 (목표 대비)", value: "187.2%" },
      { label: "CPA (1기 대비)", value: "-62%" },
    ],
    detail: {
      role: "광고 전략 및 운영",
      contribution: "매체 전략 수립, 캠페인 운영, 성과 분석",
      goal: "모집당 비용 절감 + 모집 인원 확보",
      problem:
        "트래픽 중심 캠페인 운영으로 전환 비중이 낮고, 확보된 브랜드 인지도가 충분히 활용되지 못하는 구조였습니다.",
      approach: [
        "트래픽 매체 의존 구조를 머신러닝·전환 매체 중심으로 재분배",
        "메타 ASC와 구글 P-MAX 중심으로 캠페인 운영",
        "회차별 성과를 분석해 우수 매체에 예산 집중",
      ],
      result:
        "모집 인원 목표 대비 187.2% 달성, 1기 대비 CPA 62% 절감. ASC·P-MAX 성과를 팀 내 공유 및 활용 제안.",
    },
  },
  {
    id: "fintech-internship",
    company: "goorm",
    period: "2025.06 – 2026.02",
    title: "핀테크 인턴십 코스 3~5회차 수강생 모집",
    summary:
      "모집 회차마다 비용이 증가하던 상황에서, 타겟·채널·메시지를 회차마다 고도화해 지원 CPA를 절감한 프로젝트입니다.",
    metrics: [
      { label: "CPA (3→5회차 누적)", value: "-21%" },
      { label: "모집 수", value: "-8.7%" },
    ],
    detail: {
      role: "광고 전략 및 운영",
      contribution: "매체 전략 수립, AI 활용 타겟 메시지 설계, 채널 확장 운영",
      goal: "모집당 비용 절감 + 모집 인원 확보",
      problem:
        "소재 변경 중심의 운영과 지원서(고객 데이터) 미활용으로 CPA 개선에 한계가 있었습니다.",
      approach: [
        "서비스에 맞는 광고 매체 확장 (네이버 SA·토스·SMS)",
        "네이버 검색 SA 구조 체계화 및 키워드 확장",
        "AI(LLM)로 지원서를 분석해 타겟 세그먼트별 메시지 도출",
      ],
      result:
        "3→5회차 누적 CPA 21% 절감. 외부 요인으로 모집 볼륨은 8.7% 감소했으나, 지원서 분석으로 '일반 취업' 관심 세그먼트를 새로 발굴.",
    },
  },
  {
    id: "balance-space",
    company: "PUZL",
    period: "2024.05 – 2024.07",
    title: "유닛블랙 밸런스스페이스 신사업 스케일업",
    summary:
      "비상주 사무실 서비스 런칭 초기, DA 광고 성과를 극대화하고 신규 매체를 주도적으로 발굴한 단기 PM 프로젝트입니다.",
    metrics: [
      { label: "문의 신청 CPA", value: "-38%" },
      { label: "데이터", value: "환경 구축" },
    ],
    detail: {
      role: "메인 담당자 (PM)",
      contribution: "매체 전략 수립, GA4/GTM 이벤트 세팅",
      goal: "DA 매체 문의 CPA 절감, 문의 고객 추가 확보",
      problem:
        "단일 매체(Meta) 의존으로 효율이 저하되고, '광고 유입 → 문의 → 완료' 전체 퍼널을 추적할 데이터 환경이 부재했습니다.",
      approach: [
        "개인 사업자 타겟에 맞춰 카페 지면 GFA 광고로 매체 확장",
        "GA4/GTM 이벤트 세팅으로 퍼널 모니터링 환경 구축",
        "메타·GFA 동시 운영 후 우수 소재 발굴",
      ],
      result:
        "DA 광고 문의 신청 CPA 38% 절감, 광고 유입부터 완료까지 추적하는 모니터링 환경 구축.",
    },
  },
  {
    id: "panthedin",
    company: "PUZL",
    period: "2023.11 – 2024.09",
    title: "유한킴벌리 그린핑거 판테딘",
    summary:
      "'가려움 개선 크림'의 제품력을 기반으로 핵심 매출 채널을 발굴하고 매출 성장을 달성한 프로젝트입니다.",
    metrics: [
      { label: "매출", value: "+800%" },
      { label: "타겟", value: "고관여 확보" },
    ],
    detail: {
      role: "메인 담당자 (PM)",
      contribution: "매체 전략 수립, 광고 운영, 광고주 소통",
      goal: "핵심 판매 채널 발굴 + 매출 확보",
      problem:
        "핵심 매출 채널 없이 자사몰·스마트스토어·쿠팡·카카오에 분산 운영되어 예산과 리소스가 흩어지고 효율이 저조했습니다.",
      approach: [
        "육아 맘 타겟 인지도가 높은 스마트스토어(그린핑거)로 채널 일원화",
        "타겟이 집중된 매체에 광고 집중 운영",
        "'키즈노트' 등 타겟 특화 매체 발굴",
      ],
      result:
        "매출 800% 상승, 고관여 타겟 확보 및 키즈노트 특화 매체 발굴.",
    },
  },
];

export const skills: Skill[] = [
  {
    category: "매체 운영",
    items: ["Meta", "Google", "네이버", "카카오", "토스애즈", "당근"],
  },
  {
    category: "데이터 · 분석",
    items: ["GA4", "GTM", "루커 스튜디오", "퍼널 모니터링"],
  },
  {
    category: "AI · 자동화",
    items: ["Claude Code", "LLM 활용 타겟 메시지 도출", "워크플로우 자동화"],
  },
];

export const sideProjects: SideProject[] = [
  {
    title: "데이터 환경 구축",
    description:
      "GA4/GTM 이벤트 세팅으로 광고–전환 데이터를 한 흐름으로 추적하는 모니터링 환경 구축",
  },
  {
    title: "AI 프로젝트 — 블로그 자동화",
    description: "Claude Code를 활용해 블로그 콘텐츠 발행을 자동화",
  },
  {
    title: "AI 프로젝트 — 마케팅 분석 자동화",
    description: "Claude Code를 활용해 마케팅 데이터 분석을 자동화",
  },
];

export const posts: Post[] = [
  {
    category: "데이터 분석",
    title: "GA4 데이터 빅쿼리에서 분석하기 (UNNEST 활용) — 연동부터 CSV 추출까지",
    date: "2026.05.08",
    href: "https://jeongyun-oh.github.io/posts/ga4-%EB%B9%85%EC%BF%BC%EB%A6%AC-%EB%B6%84%EC%84%9D-unnest-%ED%95%98%EB%82%98%EB%A9%B4-%ED%92%80%EB%A6%B0%EB%8B%A4-%EC%97%B0%EB%8F%99%EB%B6%80%ED%84%B0-csv-%EC%B6%94%EC%B6%9C%EA%B9%8C%EC%A7%80/",
  },
  {
    category: "AI 활용",
    title:
      "Claude Code로 블로그 글쓰기 시간을 절반 이하로 줄이는 법 — 비개발자 마케터의 실전 파이프라인",
    date: "2026.05.07",
    href: "https://jeongyun-oh.github.io/posts/claude-code%EB%A1%9C-%EB%B8%94%EB%A1%9C%EA%B7%B8-%EA%B8%80%EC%93%B0%EA%B8%B0-%EC%8B%9C%EA%B0%84%EC%9D%84-%EC%A0%88%EB%B0%98-%EC%9D%B4%ED%95%98%EB%A1%9C-%EC%A4%84%EC%9D%B4%EB%8A%94-%EB%B2%95-%EB%B9%84%EA%B0%9C%EB%B0%9C%EC%9E%90-%EB%A7%88%EC%BC%80%ED%84%B0%EC%9D%98-%EC%8B%A4%EC%A0%84-%ED%8C%8C%EC%9D%B4%ED%94%84%EB%9D%BC%EC%9D%B8/",
  },
  {
    category: "마케팅",
    title: "[마케팅 기획] 타겟 설정 프레임워크",
    date: "2025.12.31",
    href: "https://jeongyun-oh.github.io/posts/%EB%A7%88%EC%BC%80%ED%8C%85OS-%ED%83%80%EA%B2%9F-%EC%84%A4%EC%A0%95-%ED%94%84%EB%A0%88%EC%9E%84%EC%9B%8C%ED%81%AC/",
  },
];

export const blogUrl = "https://jeongyun-oh.github.io";
