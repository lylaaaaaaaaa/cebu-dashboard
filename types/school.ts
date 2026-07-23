// 학교 데이터 모델 — 값이 없으면 null. (예전의 SourcedField 3단계 검증 구조는 제거하고 평범한 값으로 단순화)

export type SourceLink = {
  title: string;
  url: string;
  type?: "official" | "student-review" | "community" | "blog" | "youtube";
};

export type CostBreakdownData = { tuition: number | null; dormitory: number | null; ssp: number | null; visa: number | null; electricity: number | null; airfare: number | null; spendingMoney: number | null };
export type NearbyPlace = { name: string; category: string; distance: string | null };
export type TravelEstimate = { destination: "IT Park" | "Ayala" | "공항"; distanceKm: number | null; grabMinutes: number | null };
export type FaqItem = { question: string; answer: string };

export type ScoreCategory = "speaking" | "ielts" | "facilities" | "food" | "freedom" | "nationality" | "value";
export type CategoryScores = Record<ScoreCategory, number | null>;
export type Priority = 0 | 1 | 2 | 3;
export type SchoolLocation = "세부 시티" | "막탄";

export type Preferences = {
  location: "전체" | SchoolLocation;
  maxBudget: number;
  priorities: Record<ScoreCategory, Priority>;
  coupleFriendly: boolean;
};

export type School = {
  id: string;
  presentation: { initials: string; color: string; tone: string };
  basic: {
    name: string | null;
    shortName: string | null;
    location: SchoolLocation | null;
    city: string | null;
    address: string | null;
    schoolType: string | null;
    capacity: number | null;
    established: number | null;
    currentCampusOpened: number | null;
    teachers: number | null;
    rebranded: number | null;
    previousName: string | null;
    slogan: string | null;
    heroSummary: string | null;
    overview: string | null;
    officialWebsite: string | null;
  };
  pricing: {
    estimatedMonthlyCost: number | null;
    valueScore: number | null;
    breakdown: CostBreakdownData | null;
  };
  programs: {
    programs: string[] | null;
    oneToOneClasses: number | null;
    groupClasses: number | null;
    speakingScore: number | null;
    ieltsScore: number | null;
    classStructure: Record<string, string> | null;
    ieltsProgram: { oneToOne: number; clinic: number; grammar: number; vocabulary: number } | null;
  };
  accommodation: {
    roomTypes: string[] | null;
    roomFeatures: string[] | null;
    coupleFriendly: boolean | null;
    summary: string | null;
  };
  facilities: { score: number | null; items: string[] | null; summary: string | null };
  food: { score: number | null; summary: string | null };
  nationality: { score: number | null; summary: string | null; breakdown: Record<string, string> | null };
  freedom: { score: number | null; curfew: string | null; summary: string | null };
  transportation: { summary: string | null };
  internet: { summary: string | null };
  pros: string[] | null;
  cons: string[] | null;
  recommendedFor: string[] | null;
  notRecommendedFor: string[] | null;
  dailySchedule: string[] | null;
  nearby: NearbyPlace[] | null;
  map: { travelEstimates: TravelEstimate[] | null; googleMapsUrl: string | null };
  faq: FaqItem[] | null;
  photos: string[] | null;
  reviewSummary: { summary: string | null; positives: string[] | null; negatives: string[] | null };
  sources: SourceLink[];
  lastUpdated: string | null;
};

export type RankedSchool = School & {
  scores: CategoryScores;
  overallScore: number | null;
  recommendationScore: number | null;
  availableScoreCount: number;
  matchScore: number | null;
  reasons: string[];
  concerns: string[];
};
