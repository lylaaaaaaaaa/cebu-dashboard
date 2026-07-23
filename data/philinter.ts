import { createSchool, googleMaps } from "./create-school";

// 출처: 웹 조사 2026-07 (Facebook/유학원 자료, 공식 URL 미확정)
export const philinter = createSchool({
  id: "philinter",
  name: "Philinter",
  shortName: "Philinter",
  initials: "PH",
  color: "#dce8f5",
  tone: "#3f668c",
  location: "막탄",
  area: "Lapu-Lapu",
  schoolType: "Semi Sparta",
  established: 2003,
  heroSummary: "회화와 IELTS 모두에 강한 검증된 어학원. 국적 쿼터제로 균형 잡힌 다국적 환경.",
  overview: "2003년 6월 설립된 막탄의 대표 어학원. 2012년부터 국적 쿼터제를 운영해 특정 국적 쏠림이 적고, 2013년 필리핀 최초 ALTO 회원으로 가입. Buddy Teacher System 등 체계적인 커리큘럼이 강점.",
  googleMapsUrl: googleMaps("Philinter Education Center, Lapu-Lapu City, Mactan, Cebu"),

  estimatedMonthlyCost: 1650,
  speaking: 5,
  ielts: 5,
  facilities: 4,
  food: 4,
  freedom: 4,
  nationality: 5,
  value: 4,

  oneToOne: 4,
  groupClass: 4,
  curfew: "세미 스파르타",
  classStructure: { oneToOne: "4 Classes", regular: "2 Classes", bigGroup: "2 Classes" },
  programs: ["General ESL", "Intensive ESL", "IELTS", "Business English", "Junior ESL", "Working Holiday"],

  coupleFriendly: true,
  accommodationSummary: "캠퍼스 기숙사 운영. 객실 유형별 세부 정보는 학교 문의 권장.",
  facilitiesSummary: "안전하고 편리한 지역에 위치하며 몰·해변·리조트 접근성이 좋음.",
  nationalitySummary: "국적 쿼터제로 한국·일본·대만·베트남 등 국적이 균형 있게 구성.",
  transportationSummary: "막탄 국제공항 약 10분 · 인근 쇼핑몰·해변·리조트 접근 용이",

  strengths: ["회화·IELTS 모두 강점", "국적 쿼터제(균형 잡힌 다국적)", "체계적 커리큘럼", "Buddy Teacher System", "장기연수·워홀 준비"],
  weaknesses: ["시설이 최신 대형급은 아님", "인기 시즌 조기 마감"],
  recommendedFor: ["회화와 시험을 함께 준비하는 사람", "IELTS 목표", "장기연수", "워킹홀리데이 준비", "다국적 환경 선호"],
  notRecommendedFor: ["초저예산 연수"],

  reviewSummary: "회화·IELTS 균형과 국적 다양성, 커리큘럼에 대한 평가가 좋음.",
  reviewPositives: ["회화·시험 균형이 좋다", "국적 구성이 다양하다", "선생님이 체계적이다"],
  reviewNegatives: ["시설이 최신급은 아니다", "성수기 마감이 빠르다"],

  sources: [
    { title: "Philinter Academy 공식 페이스북", url: "https://www.facebook.com/PhilinterAcademy/", type: "official" },
  ],
  lastUpdated: "2026-07-22",
});
