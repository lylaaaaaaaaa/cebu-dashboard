import { createSchool, googleMaps } from "./create-school";

// 출처: glcenglish.com (공식), 웹 조사 2026-07
export const glc = createSchool({
  id: "glc",
  name: "Global Language Cebu",
  shortName: "GLC",
  initials: "GL",
  color: "#d8eee3",
  tone: "#256b56",
  location: "세부 시티",
  area: "Mabolo",
  address: "2815 New Frontier St., Mabolo, Cebu City, Cebu 6000",
  schoolType: "Semi Sparta",
  established: 2011,
  rebranded: 2022,
  previousName: "IDEA Cebu",
  capacity: 550,
  slogan: "Study & Enjoy",
  heroSummary: "세부 대표 세미 스파르타 어학원. 스피킹 중심 커리큘럼과 뛰어난 가성비, 최신 캠퍼스가 강점.",
  overview: "2011년 IDEA Cebu로 시작해 2022년 Global Language Cebu로 리브랜딩한 대형 어학원. Power Speaking 과정과 다양한 국적 비율, 우수한 시설을 갖춤. 현재 재학생 400명 이상.",
  officialWebsite: "https://www.glcenglish.com",
  googleMapsUrl: googleMaps("Global Language Cebu, New Frontier St, Mabolo, Cebu City"),

  estimatedMonthlyCost: null,
  speaking: 5,
  ielts: 4.5,
  facilities: 4.9,
  food: 4.3,
  freedom: 4.6,
  nationality: 4.8,
  value: 5,

  oneToOne: 4,
  groupClass: 2,
  curfew: "세미 스파르타 (평일 외출 제한, 주말 자유)",
  classStructure: { oneToOne: "4~8 classes", group: "2 classes", optional: "Electives Available" },
  programs: ["Power Speaking", "Power Speaking Lite", "Power Speaking Intensive", "TOEIC", "IELTS", "Business English", "English Plus Internship", "Family Program", "Junior", "CELTA"],

  roomTypes: ["Single", "Twin", "Triple", "Family Room"],
  roomFeatures: ["Air Conditioner", "Hot Shower", "Refrigerator", "Hair Dryer", "WiFi", "Study Desk", "Closet"],
  coupleFriendly: true,
  accommodationSummary: "Single, Twin, Triple, Family Room 유형과 교내 생활 편의 설비를 제공.",

  facilitiesList: ["Swimming Pool", "Fitness Gym", "Garden Lounge", "Indoor Dining", "Outdoor Dining", "Cafeteria", "Self Study Area", "Game Room", "Table Tennis", "Billiards", "Air Hockey", "Campus Shop", "Laundry", "High-speed WiFi"],
  facilitiesSummary: "수영장, 피트니스, 정원 라운지, 자습실과 다양한 실내 활동 시설을 운영.",
  foodSummary: "학교 식당 운영. 알레르기 식단은 추가 비용으로 제공.",
  nationalitySummary: "일본과 한국 학생 비중이 높고 대만, 태국, 베트남 등 다양한 국적이 재학.",
  nationalityBreakdown: { japan: "Highest", korea: "High", taiwan: "Medium", thailand: "Medium", vietnam: "Medium" },
  transportationSummary: "공항 약 30~40분 · Ayala 셔틀 또는 차량 약 5~10분 · IT Park 차량 약 10분",
  internetSummary: "High-speed WiFi 제공",

  strengths: ["Power Speaking 특화", "CEFR 기반 교육", "Cambridge CELTA 인증 센터", "2022년 신캠퍼스", "수영장·피트니스·게임룸", "다국적 학생", "우수한 가성비", "셔틀버스 운영"],
  weaknesses: ["IT Park 도보권은 아님", "엄격한 스파르타 관리형은 아님", "편의점은 도보 거리가 있음"],
  recommendedFor: ["회화 실력을 빠르게 늘리고 싶은 사람", "시설을 중요하게 생각하는 사람", "다국적 환경을 원하는 사람", "가성비를 중요하게 생각하는 사람", "장기 연수"],
  notRecommendedFor: ["엄격한 통제형 스파르타를 원하는 사람"],

  dailySchedule: ["08:00 1:1", "09:00 1:1", "10:00 Group", "11:00 1:1", "12:00 Lunch", "13:00 1:1", "14:00 Group", "15:00 Elective", "16:00 Self Study"],
  nearby: ["Ayala Center Cebu", "Supermarkets", "Restaurants", "Coffee Shops", "Hospital", "Drug Store"],
  faq: [
    { question: "초보자도 가능한가요?", answer: "네. Beginner부터 Advanced까지 CEFR 기반 레벨 시스템을 운영합니다." },
    { question: "시험반도 있나요?", answer: "IELTS, TOEIC 등 시험 대비 과정이 있습니다." },
    { question: "수영장이 있나요?", answer: "네. 캠퍼스 내 수영장과 피트니스 시설을 이용할 수 있습니다." },
  ],
  reviewSummary: "시설과 스피킹 수업 만족도가 높고 국적 비율이 다양하다는 평이 많음.",
  reviewPositives: ["시설이 매우 좋다", "선생님 만족도가 높다", "스피킹 수업이 강하다", "국적 비율이 다양하다"],
  reviewNegatives: ["성수기에는 학생이 많다", "식사는 호불호가 있다", "IT Park 안은 아니다"],

  sources: [
    { title: "GLC 공식 홈페이지", url: "https://www.glcenglish.com", type: "official" },
    { title: "GLC 학교 소개", url: "https://www.glcenglish.com/about/aboutus", type: "official" },
  ],
  lastUpdated: "2026-07-22",
});
