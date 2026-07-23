# 세부 어학원 대시보드

내 조건에 맞는 세부(Cebu) 어학원을 한눈에 비교·추천받는 개인용 대시보드.
조건(학습 목표·예산·지역·학습 스타일·숙소)을 고르면 8개 어학원을 매칭 순서로 보여준다.

## 실행

```bash
npm run dev      # 개발 서버
npm run lint     # 타입 검사 (tsc --noEmit)
npm run build    # 배포 빌드
```

Next.js 16 · React 19 · TypeScript · Tailwind CSS 4. 백엔드/API 없이 모든 데이터는 `data/` 안의 로컬 파일이다.

## 학교 정보 추가·수정하기

학교 하나 = 파일 하나. 예: `data/glc.ts`. `createSchool()`에 **평범한 값**만 넣으면 된다.
모르는 값은 그냥 빼면 화면에 "준비 중"으로 표시된다. (예전의 출처 검증 상태값 구조는 제거함)

```ts
import { createSchool, googleMaps } from "./create-school";

export const example = createSchool({
  id: "example",
  name: "Example Academy",
  initials: "EX",
  color: "#dceee8",
  tone: "#2d715b",
  location: "세부 시티",        // "세부 시티" | "막탄"
  area: "IT Park",
  address: "...",
  officialWebsite: "https://...",
  googleMapsUrl: googleMaps("Example Academy, Cebu"),
  estimatedMonthlyCost: 1450,   // 모르면 생략 → "준비 중"

  // 5점 만점 평가 (필수)
  speaking: 5, ielts: 4, facilities: 5, food: 5, freedom: 5, nationality: 4, value: 5,

  programs: ["ESL", "IELTS"],
  strengths: ["장점1", "장점2"],
  weaknesses: ["단점1"],
  // ... 나머지 필드는 create-school.ts의 SchoolInput 참고, 전부 선택사항
  sources: [{ title: "공식 홈페이지", url: "https://...", type: "official" }],
});
```

새 학교는 `data/index.ts`의 export와 `schools` 배열에도 추가한다.

## 구조

```
app/                  Next.js 페이지 (page.tsx → Dashboard)
components/dashboard/  카드·비교표·상세 드로어 UI
data/
  create-school.ts    createSchool() 헬퍼 + SchoolInput 타입 (여기가 데이터 스펙)
  <school>.ts         학교별 데이터 (8개)
  index.ts            전체 학교 통합
  config.ts           점수 가중치 등 기본 설정
lib/
  ranking.ts          종합 점수 계산
  recommendation/     조건 매칭(추천 %) 계산
types/school.ts       School 데이터 타입
```

## 점수

- 종합 점수는 저장하지 않고 항목별 점수에서 `lib/ranking.ts`가 계산한다.
- 값이 있는 항목만으로 가중치를 정규화하고, 유효 점수가 3개 미만이면 종합 점수는 표시하지 않는다.
- 추천 매칭 %는 `lib/recommendation/matchingEngine.ts`가 사용자 조건과 대조해 계산한다.

## 데이터 출처

학교 정보는 각 파일 상단 주석의 출처(공식 홈페이지 등)를 기준으로 2026-07에 조사해 채웠다.
확실하지 않은 값은 채우지 않고 비워 두었다 (화면에 "준비 중"). 없는 정보를 지어내지 않는다.
