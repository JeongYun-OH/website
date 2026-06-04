# public 에셋 안내

실데이터 교체 시 이 폴더에 아래 파일을 넣고, 텍스트/링크는 `lib/content.ts`에서 수정하세요.

| 파일 | 용도 | 비고 |
|------|------|------|
| `images/portrait.jpg` | Hero 우측 흑백 프로필 이미지 | 현재는 플레이스홀더 블록. 넣은 뒤 `components/Hero.tsx`의 이미지 자리에 `<img>`/`next/image`로 연결 |
| (없음) | WORK 카드 상단 | 현재 플랫 SVG 일러스트(`components/ProjectIllustration.tsx`) 사용. 실제 이미지로 바꾸려면 `Project`에 `thumbnail` 추가 후 교체 |
| (없음) | CONTENT(Blog) 좌측 썸네일 | 현재 플랫 SVG 일러스트(`ProjectIllustration` variant 4~6) 사용. 실제 이미지로 바꾸려면 `Post`에 `thumbnail` 추가 후 교체 |
| `og.png` (1200×630) | 공유 카드 이미지 | `app/layout.tsx` 메타데이터가 `/og.png` 참조. 적용 완료 |
| `app/icon.png` (512²) · `app/apple-icon.png` (180²) | 파비콘 | Next.js App Router가 자동 인식. 적용 완료 |

> 텍스트(성과 수치·동료 평가·프로젝트 상세·연혁·블로그/소셜 URL·이메일)는 전부 `lib/content.ts` 한 파일에 모여 있습니다.
