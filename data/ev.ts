import { createSchool, googleMaps } from "./create-school";

// 출처: evenglish.net (공식), 웹 조사 2026-07
export const ev = createSchool({
  id: "ev",
  name: "EV Academy",
  initials: "EV",
  color: "#d7e9f2",
  tone: "#39728c",
  location: "세부 시티",
  area: "Talamban",
  schoolType: "Semi Sparta",
  established: 2004,
  heroSummary: "IELTS·시험 준비에 강한 스파르타형 대형 어학원. 엄격한 학사 관리와 우수한 시설이 강점.",
  overview: "2004년 설립된 세부의 대표 대형 어학원. TOEFL·IELTS·TOEIC 등 공인시험 대비에 강하며 TESOL ITAA, Cambridge English, College of Teachers-UK 인증을 보유.",
  officialWebsite: "https://www.evenglish.net",
  googleMapsUrl: googleMaps("EV Academy, Talamban, Cebu City"),

  estimatedMonthlyCost: 1860,
  speaking: 4,
  ielts: 5,
  facilities: 5,
  food: 4,
  freedom: 3,
  nationality: 5,
  value: 4,

  oneToOne: 4,
  groupClass: 4,
  curfew: "스파르타 (평일 외출 제한, 의무 자습)",
  programs: ["General ESL", "Intensive ESL", "IELTS", "TOEIC", "TOEFL", "Business English", "Junior"],

  coupleFriendly: true,
  facilitiesSummary: "대형 캠퍼스에 자습실, 체육 시설 등을 갖추고 있으며 학사 관리가 엄격한 편.",
  nationalitySummary: "한국·일본·대만·베트남 등 아시아권 학생이 다양하게 재학.",
  transportationSummary: "세부 시티 Talamban 지역 위치 · 공항 및 시내까지 차량 이동 필요",

  strengths: ["IELTS·시험 준비 강점", "엄격한 학사관리", "우수한 시설", "다양한 국적", "국제 인증 보유"],
  weaknesses: ["자유도가 낮은 편", "학비가 저렴한 편은 아님", "놀면서 하는 연수와는 거리가 있음"],
  recommendedFor: ["IELTS·공인시험 목표", "공부에 몰입하고 싶은 사람", "엄격한 관리를 선호하는 사람"],
  notRecommendedFor: ["자유로운 분위기를 원하는 사람", "놀면서 공부하고 싶은 사람"],

  reviewSummary: "시험 대비와 학사 관리가 강점이지만 자유도가 낮다는 평이 많음.",
  reviewPositives: ["IELTS 점수가 잘 오른다", "관리가 철저하다", "시설이 좋다"],
  reviewNegatives: ["자유 시간이 적다", "분위기가 빡빡하다"],

  sources: [
    { title: "EV Academy 공식 홈페이지", url: "https://www.evenglish.net", type: "official" },
  ],
  lastUpdated: "2026-07-22",
});
