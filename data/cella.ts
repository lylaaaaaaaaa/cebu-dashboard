import { createSchool, googleMaps } from "./create-school";

// 출처: CELLA Premium Campus 웹 조사 2026-07 (공식 URL 미확정)
export const cella = createSchool({
  id: "cella",
  name: "CELLA Premium",
  shortName: "CELLA",
  initials: "CP",
  color: "#f3d9df",
  tone: "#a44e69",
  location: "세부 시티",
  area: "Banilad",
  address: "JDN Square, P. Remedio St., Banilad, Mandaue City, Cebu",
  schoolType: "Semi Sparta",
  established: 2006,
  heroSummary: "프리미엄 시설과 생활 환경, Power Speaking 중심 커리큘럼이 강점인 어학원.",
  overview: "2006년 개교한 CELLA의 프리미엄 캠퍼스. Power Speaking과 IELTS 집중 과정이 대표 프로그램이며, 도심 접근성이 좋은 바닐라드에 위치.",
  googleMapsUrl: googleMaps("CELLA Premium Campus, JDN Square, Banilad, Mandaue City, Cebu"),

  estimatedMonthlyCost: 1720,
  speaking: 4,
  ielts: 3,
  facilities: 5,
  food: 4,
  freedom: 4,
  nationality: 4,
  value: 4,

  curfew: "세미 스파르타",
  programs: ["Power Speaking", "Business", "Expresser 1 & 2", "Junior", "Pre-IELTS", "Intensive IELTS", "IELTS Guarantee", "Pre-TOEIC", "TOEIC", "ACE (Airline Cabin-Crew English)", "TESOL"],

  roomTypes: ["Single", "Double", "Quad"],
  coupleFriendly: true,
  accommodationSummary: "Single, Double, Quad 객실 운영 (프리미엄 캠퍼스는 Triple 없음).",

  facilitiesList: ["Study Room", "Snack Bar", "Gym", "Coffee Shop", "WiFi"],
  facilitiesSummary: "자습실, 스낵바, 헬스장, 카페 등 프리미엄 생활 편의 시설을 갖춤.",
  nationalitySummary: "한국 학생 비중이 높은 편이며 여러 국적이 함께 재학.",
  transportationSummary: "SM City 몰 약 10분 · 공항 약 20분 · 세부 항구 약 10분",

  strengths: ["프리미엄 시설", "생활 환경", "Power Speaking", "도심 접근성"],
  weaknesses: ["IELTS 특화도는 상대적으로 약함", "학비가 높은 편"],
  recommendedFor: ["생활 만족도를 중시하는 사람", "Speaking 향상", "도심 편의 선호"],
  notRecommendedFor: ["초저예산 연수", "IELTS 고득점만 목표"],

  reviewSummary: "시설과 생활 환경 만족도가 높은 편이며 가격대는 다소 높다는 평.",
  reviewPositives: ["시설이 깔끔하다", "생활 편의가 좋다", "스피킹 수업 만족"],
  reviewNegatives: ["가격이 높은 편", "IELTS 특화는 약함"],

  sources: [
    { title: "CELLA 캠퍼스 소개 (3D Academy 가이드)", url: "https://3d-universal.com/en/blogs/cella.html", type: "blog" },
  ],
  lastUpdated: "2026-07-22",
});
