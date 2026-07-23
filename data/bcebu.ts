import { createSchool, googleMaps } from "./create-school";

// 출처: api-bcebu.com (공식), 웹 조사 2026-07
export const bcebu = createSchool({
  id: "bcebu",
  name: "B'Cebu",
  shortName: "B'Cebu",
  initials: "BC",
  color: "#f1ecc8",
  tone: "#7a702d",
  location: "막탄",
  area: "Mactan Newtown",
  schoolType: "Semi Sparta",
  currentCampusOpened: 2023,
  heroSummary: "막탄 뉴타운의 리조트 분위기 어학원. 자유도와 가성비, 생활 편의성이 강점.",
  overview: "BECI 그룹의 어학원으로 2023년 7월 막탄 뉴타운에 4번째 캠퍼스를 개장. 공항에서 15분 거리이며 스타벅스·맥도날드·대형 마트 등이 도보 5분 내에 있어 생활 편의성이 높음.",
  officialWebsite: "https://www.api-bcebu.com",
  googleMapsUrl: googleMaps("B'Cebu, Mactan Newtown, Lapu-Lapu City, Cebu"),

  estimatedMonthlyCost: 1120,
  speaking: 4,
  ielts: 3,
  facilities: 4,
  food: 4,
  freedom: 5,
  nationality: 3,
  value: 5,

  curfew: "세미 스파르타 (자유도 높은 편)",
  programs: ["Intensive ESL", "Lite ESL", "IELTS", "Business English", "Junior ESL"],

  coupleFriendly: true,
  accommodationSummary: "막탄 뉴타운 내 기숙사 운영. 객실 유형별 세부 정보는 학교 문의 권장.",
  facilitiesSummary: "막탄 뉴타운 상업지구 내에 위치해 생활 편의 시설 접근성이 높음. EDUCARE 온라인 학사 관리 시스템 운영.",
  nationalitySummary: "한국·일본 학생 위주로 구성되어 국적 다양성은 상대적으로 낮은 편.",
  transportationSummary: "막탄 국제공항 약 15분 · 스타벅스·맥도날드·대형 마트 도보 5분",

  strengths: ["가성비", "리조트 분위기", "높은 자유도", "생활 편의성", "공항 접근성"],
  weaknesses: ["국적 다양성이 낮은 편", "IELTS·시험 특화는 약함"],
  recommendedFor: ["휴양하며 공부하고 싶은 사람", "초급 학습자", "자유로운 분위기 선호", "가성비 중시"],
  notRecommendedFor: ["IELTS 고득점만 목표", "다국적 환경을 최우선으로 원하는 사람"],

  reviewSummary: "자유로운 분위기와 생활 편의성, 가성비에 대한 만족도가 높은 편.",
  reviewPositives: ["분위기가 자유롭다", "생활이 편리하다", "가성비가 좋다"],
  reviewNegatives: ["국적 구성이 다양하지 않다", "시험 특화는 약하다"],

  sources: [
    { title: "B'Cebu 공식 홈페이지", url: "https://www.api-bcebu.com/about", type: "official" },
  ],
  lastUpdated: "2026-07-22",
});
