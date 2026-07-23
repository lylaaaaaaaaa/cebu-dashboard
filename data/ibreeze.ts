import { createSchool, googleMaps } from "./create-school";

// 출처: cebuibreeze.com (공식), 웹 조사 2026-07
export const ibreeze = createSchool({
  id: "ibreeze",
  name: "I.BREEZE",
  shortName: "I.BREEZE",
  initials: "IB",
  color: "#f6e2c7",
  tone: "#a66a2e",
  location: "세부 시티",
  area: "Mabolo",
  address: "Tres Borces Arcade, Tres Borces St., Mabolo, Cebu City",
  schoolType: "Semi Sparta",
  heroSummary: "회화 중심의 가성비 좋은 소규모 어학원. 세부 시티 마볼로 중심에 위치.",
  overview: "마볼로 중심에 위치한 국제 어학원. 소규모 반(평균 6~8명, 최대 12명) 운영으로 회화 집중도가 높고 가성비가 좋다는 평.",
  officialWebsite: "https://cebuibreeze.com",
  googleMapsUrl: googleMaps("I.BREEZE International Language Center, Tres Borces St, Mabolo, Cebu City"),

  estimatedMonthlyCost: 1290,
  speaking: 5,
  ielts: 4,
  facilities: 4,
  food: 4,
  freedom: 4,
  nationality: 4,
  value: 5,

  oneToOne: 5,
  groupClass: 2,
  curfew: "세미 스파르타",
  programs: ["General English", "Intensive English", "IELTS Preparation", "Business English", "Junior English"],

  roomFeatures: ["Air Conditioner", "Hot Shower", "WiFi", "Study Desk"],
  coupleFriendly: true,
  accommodationSummary: "교내 기숙사 운영. 객실 유형별 세부 정보는 학교 문의 권장.",

  facilitiesList: ["Swimming Pool", "Gym", "Cafeteria", "Dining Hall (Buffet)", "Study Cubicle", "Dormitory", "Unlimited WiFi"],
  facilitiesSummary: "수영장, 헬스장, 뷔페 식당, 개인 자습 큐비클과 무제한 Wi-Fi를 제공.",
  nationalitySummary: "한국·일본·대만·베트남 등 아시아권 학생 위주로 구성.",
  transportationSummary: "세부 시티 마볼로 중심 · Ayala·SM 등 주요 몰까지 차량 단거리",
  internetSummary: "무제한 Wi-Fi 제공",

  strengths: ["가성비", "회화 집중", "소규모 반 운영", "세부 시티 중심 위치"],
  weaknesses: ["규모가 큰 편은 아님", "IELTS 전문 특화 브랜드는 아님"],
  recommendedFor: ["회화를 빠르게 늘리고 싶은 사람", "예산을 아끼고 싶은 사람", "도심 생활 선호"],
  notRecommendedFor: ["최상급 대형 시설을 원하는 사람"],

  reviewSummary: "가성비와 회화 집중도, 도심 접근성에 대한 만족도가 높은 편.",
  reviewPositives: ["가격 대비 만족도 높음", "회화 수업이 좋다", "위치가 편리하다"],
  reviewNegatives: ["규모가 작은 편", "시설이 최신 대형급은 아님"],

  sources: [
    { title: "I.BREEZE 공식 홈페이지", url: "https://cebuibreeze.com", type: "official" },
  ],
  lastUpdated: "2026-07-22",
});
