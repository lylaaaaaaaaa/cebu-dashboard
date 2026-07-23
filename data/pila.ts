import { createSchool, googleMaps } from "./create-school";

// 출처: pilaeducation.com (공식), 웹 조사 2026-07
export const pila = createSchool({
  id: "pila",
  name: "PILA EDU",
  shortName: "PILA EDU",
  initials: "PI",
  color: "#dceee8",
  tone: "#2d715b",
  location: "세부 시티",
  area: "IT Park",
  address: "Treewoods Residences, IT Park, Sitio San Miguel, Brgy. Apas, Cebu City 6000",
  schoolType: "Semi Sparta",
  established: 2007,
  capacity: 126,
  heroSummary: "세부 IT Park 최고 입지의 어학원. 최신 시설과 생활 편의성, 식사 만족도가 강점.",
  overview: "세부의 비즈니스·라이프 중심지인 IT Park에 위치. Ayala 몰이 도보 3분 거리로 생활 편의성이 뛰어나며, 약 15년의 운영 경험과 월별 학습 컨설팅으로 체계적인 학사 관리를 제공.",
  officialWebsite: "http://www.pilaeducation.com",
  googleMapsUrl: googleMaps("PILA Education, Treewoods Residences, IT Park, Cebu City"),

  estimatedMonthlyCost: 1450,
  speaking: 5,
  ielts: 4,
  facilities: 5,
  food: 5,
  freedom: 5,
  nationality: 4,
  value: 5,

  oneToOne: 5,
  groupClass: 2,
  curfew: "세미 스파르타 (자유도 높은 편)",
  programs: ["ESL Trial", "ESL Lite", "ESL Regular", "ESL Intensive", "IELTS", "TOEIC", "TOEFL"],

  roomTypes: ["On-campus Dormitory", "Condominium Dormitory"],
  coupleFriendly: true,
  accommodationSummary: "온캠퍼스 기숙사와 인근 콘도형 기숙사를 함께 운영.",

  facilitiesList: ["Indoor Swimming Pool", "Gym", "Billiards", "Table Tennis", "Study Room", "Cafeteria", "On-campus Dormitory", "Condominium Dormitory"],
  facilitiesSummary: "실내 수영장, 헬스장, 당구·탁구 등 레크리에이션 룸과 자습실을 갖춘 최신 시설.",
  nationalitySummary: "한국·일본 등 아시아권 학생 위주로 구성.",
  transportationSummary: "IT Park 중심 · Ayala Center Cebu 도보 약 3분",

  strengths: ["IT Park 최고 입지", "최신 시설", "Regular 과정 1:1 5회", "식사 만족도", "생활 편의성"],
  weaknesses: ["대형 전통 어학원 대비 운영 이력은 짧은 편", "IELTS 전문 브랜드 이미지는 EV·CIA보다 약함"],
  recommendedFor: ["첫 어학연수", "커플", "장기연수", "생활 편의성 중시", "Speaking"],
  notRecommendedFor: ["하드 스파르타를 원하는 사람", "IELTS만 목표"],

  reviewSummary: "입지와 생활 편의성, 식사 만족도가 높다는 평이 많음.",
  reviewPositives: ["위치가 최고다", "식사가 맛있다", "시설이 깨끗하다", "생활이 편리하다"],
  reviewNegatives: ["운영 이력이 상대적으로 짧다", "IELTS 전문 이미지는 약하다"],

  sources: [
    { title: "PILA Education 공식 홈페이지", url: "http://www.pilaeducation.com", type: "official" },
  ],
  lastUpdated: "2026-07-22",
});
