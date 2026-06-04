// 토스피드 스타일 플랫 일러스트 (단순 기하 도형, 소프트 배경, 브랜드 블루 중심)
const BRAND = "#2D3BFF";
const BRAND_DARK = "#1E2ACC";
const BLUE = "#9AA2FF";
const BLUE_PALE = "#C9CEFF";
const YELLOW = "#FFD66B";
const YELLOW_DARK = "#E8B93E";
const GREEN = "#6FCF97";

// 0. 성장 / 모집 — 막대 그래프 + 해
function Growth() {
  return (
    <svg viewBox="0 0 320 180" className="block h-full w-full" aria-hidden>
      <rect width="320" height="180" fill="#E9EBFF" />
      <circle cx="250" cy="52" r="22" fill={YELLOW} />
      <rect x="70" y="104" width="34" height="50" rx="8" fill={BLUE_PALE} />
      <rect x="116" y="80" width="34" height="74" rx="8" fill={BLUE} />
      <rect x="162" y="52" width="34" height="102" rx="8" fill={BRAND} />
      <path
        d="M74 112 L120 88 L166 60 L210 46"
        fill="none"
        stroke={BRAND}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="210" cy="46" r="6" fill={BRAND} />
    </svg>
  );
}

// 1. 핀테크 — 카드 + 코인
function Fintech() {
  return (
    <svg viewBox="0 0 320 180" className="block h-full w-full" aria-hidden>
      <rect width="320" height="180" fill="#E4EFFB" />
      <rect x="60" y="56" width="132" height="84" rx="12" fill={BRAND} />
      <rect x="60" y="80" width="132" height="14" fill={BRAND_DARK} />
      <rect x="74" y="112" width="44" height="8" rx="4" fill={BLUE} />
      <circle cx="226" cy="104" r="30" fill={YELLOW} />
      <circle cx="226" cy="104" r="30" fill="none" stroke={YELLOW_DARK} strokeWidth="3" />
      <text
        x="226"
        y="114"
        textAnchor="middle"
        fontSize="28"
        fontWeight="800"
        fill={YELLOW_DARK}
      >
        ₩
      </text>
    </svg>
  );
}

// 2. B2B / 오피스 — 빌딩 + 창문
function Office() {
  const windows = [];
  const xs = [122, 154, 186];
  const ys = [60, 90, 120];
  for (const y of ys) {
    for (const x of xs) {
      windows.push(
        <rect key={`${x}-${y}`} x={x} y={y} width="16" height="16" rx="3" fill="#fff" />
      );
    }
  }
  return (
    <svg viewBox="0 0 320 180" className="block h-full w-full" aria-hidden>
      <rect width="320" height="180" fill="#E3F3EC" />
      <rect x="104" y="44" width="112" height="110" rx="8" fill={BRAND} />
      {windows}
      <rect x="88" y="150" width="144" height="8" rx="4" fill={GREEN} />
      <circle cx="252" cy="56" r="14" fill={BLUE} />
    </svg>
  );
}

// 3. 커머스 / 뷰티 — 제품 + 반짝임
function Product() {
  return (
    <svg viewBox="0 0 320 180" className="block h-full w-full" aria-hidden>
      <rect width="320" height="180" fill="#FBEDE2" />
      <rect x="132" y="64" width="56" height="86" rx="14" fill={BRAND} />
      <rect x="148" y="46" width="24" height="22" rx="5" fill={BRAND_DARK} />
      <rect x="144" y="96" width="32" height="28" rx="5" fill="#fff" />
      <path
        d="M236 56 l6 16 16 6 -16 6 -6 16 -6 -16 -16 -6 16 -6 z"
        fill={YELLOW}
      />
      <circle cx="92" cy="112" r="11" fill={BLUE} />
    </svg>
  );
}

// 4. 데이터 분석 (GA4·빅쿼리) — 차트 패널 + 돋보기
function Analytics() {
  return (
    <svg viewBox="0 0 320 180" className="block h-full w-full" aria-hidden>
      <rect width="320" height="180" fill="#E4EFFB" />
      <rect x="44" y="44" width="150" height="100" rx="12" fill="#fff" />
      <rect x="60" y="118" width="14" height="16" rx="2" fill={BLUE_PALE} />
      <rect x="84" y="106" width="14" height="28" rx="2" fill={BLUE} />
      <rect x="108" y="90" width="14" height="44" rx="2" fill={BRAND} />
      <path d="M60 98 L96 82 L132 64" fill="none" stroke={BRAND} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="236" cy="100" r="24" fill="#fff" stroke={BRAND} strokeWidth="6" />
      <path d="M253 117 l14 14" stroke={BRAND} strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}

// 5. AI 글쓰기/자동화 (Claude Code) — 문서 + 반짝임
function AiWrite() {
  return (
    <svg viewBox="0 0 320 180" className="block h-full w-full" aria-hidden>
      <rect width="320" height="180" fill="#E9EBFF" />
      <rect x="96" y="38" width="94" height="110" rx="10" fill="#fff" />
      <rect x="110" y="60" width="66" height="8" rx="4" fill={BLUE} />
      <rect x="110" y="80" width="66" height="8" rx="4" fill={BLUE_PALE} />
      <rect x="110" y="100" width="44" height="8" rx="4" fill={BLUE_PALE} />
      <path d="M216 56 l5 13 13 5 -13 5 -5 13 -5 -13 -13 -5 13 -5 z" fill={BRAND} />
      <circle cx="206" cy="116" r="7" fill={YELLOW} />
    </svg>
  );
}

// 6. 타겟 설정 / 전략 — 과녁 + 화살
function Target() {
  return (
    <svg viewBox="0 0 320 180" className="block h-full w-full" aria-hidden>
      <rect width="320" height="180" fill="#FBEDE2" />
      <circle cx="148" cy="92" r="46" fill="#fff" />
      <circle cx="148" cy="92" r="46" fill="none" stroke={BRAND} strokeWidth="4" />
      <circle cx="148" cy="92" r="28" fill="none" stroke={BLUE} strokeWidth="4" />
      <circle cx="148" cy="92" r="10" fill={BRAND} />
      <path d="M214 46 L156 84" stroke={BRAND} strokeWidth="4" strokeLinecap="round" />
      <path d="M214 46 l-13 1 4 11 z" fill={YELLOW} />
    </svg>
  );
}

const variants = [Growth, Fintech, Office, Product, Analytics, AiWrite, Target];

export default function ProjectIllustration({ variant }: { variant: number }) {
  const Illust = variants[variant % variants.length];
  return <Illust />;
}
