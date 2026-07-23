import type { CostBreakdownData, FaqItem, School, SchoolLocation, SourceLink, TravelEstimate } from "@/types/school";

// 학교 하나를 평범한 값으로 정의한다. 모르는 값은 그냥 빼면 자동으로 null 처리된다.
export type SchoolInput = {
  id: string;
  name: string;
  shortName?: string;
  initials: string;
  color: string;
  tone: string;
  location: SchoolLocation;
  area: string;
  address?: string;
  schoolType?: string;
  established?: number;
  currentCampusOpened?: number;
  rebranded?: number;
  previousName?: string;
  capacity?: number;
  teachers?: number;
  slogan?: string;
  heroSummary?: string;
  overview?: string;
  officialWebsite?: string;
  googleMapsUrl?: string;

  estimatedMonthlyCost?: number | null;
  costBreakdown?: CostBreakdownData;

  // 5점 만점 평가 항목
  speaking: number;
  ielts: number;
  facilities: number;
  food: number;
  freedom: number;
  nationality: number;
  value: number;

  oneToOne?: number;
  groupClass?: number;
  curfew?: string;
  programs?: string[];
  classStructure?: Record<string, string>;
  ieltsProgram?: { oneToOne: number; clinic: number; grammar: number; vocabulary: number };

  roomTypes?: string[];
  roomFeatures?: string[];
  coupleFriendly?: boolean;
  accommodationSummary?: string;

  facilitiesList?: string[];
  facilitiesSummary?: string;
  foodSummary?: string;
  nationalitySummary?: string;
  nationalityBreakdown?: Record<string, string>;
  freedomSummary?: string;
  transportationSummary?: string;
  internetSummary?: string;

  strengths?: string[];
  weaknesses?: string[];
  recommendedFor?: string[];
  notRecommendedFor?: string[];

  dailySchedule?: string[];
  nearby?: string[];
  travelEstimates?: TravelEstimate[];
  faq?: FaqItem[];
  reviewSummary?: string;
  reviewPositives?: string[];
  reviewNegatives?: string[];

  sources?: SourceLink[];
  lastUpdated?: string;
};

const n = <T>(value: T | undefined): T | null => (value === undefined ? null : value);

// 주소/이름으로 구글맵 검색 링크를 만든다.
export const googleMaps = (query: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

export function createSchool(d: SchoolInput): School {
  return {
    id: d.id,
    presentation: { initials: d.initials, color: d.color, tone: d.tone },
    basic: {
      name: d.name,
      shortName: d.shortName ?? d.name,
      location: d.location,
      city: d.area,
      address: n(d.address),
      schoolType: n(d.schoolType),
      capacity: n(d.capacity),
      established: n(d.established),
      currentCampusOpened: n(d.currentCampusOpened),
      teachers: n(d.teachers),
      rebranded: n(d.rebranded),
      previousName: n(d.previousName),
      slogan: n(d.slogan),
      heroSummary: n(d.heroSummary),
      overview: n(d.overview),
      officialWebsite: n(d.officialWebsite),
    },
    pricing: {
      estimatedMonthlyCost: d.estimatedMonthlyCost ?? null,
      valueScore: d.value,
      breakdown: n(d.costBreakdown),
    },
    programs: {
      programs: n(d.programs),
      oneToOneClasses: n(d.oneToOne),
      groupClasses: n(d.groupClass),
      speakingScore: d.speaking,
      ieltsScore: d.ielts,
      classStructure: n(d.classStructure),
      ieltsProgram: n(d.ieltsProgram),
    },
    accommodation: {
      roomTypes: n(d.roomTypes),
      roomFeatures: n(d.roomFeatures),
      coupleFriendly: n(d.coupleFriendly),
      summary: n(d.accommodationSummary),
    },
    facilities: { score: d.facilities, items: n(d.facilitiesList), summary: n(d.facilitiesSummary) },
    food: { score: d.food, summary: n(d.foodSummary) },
    nationality: { score: d.nationality, summary: n(d.nationalitySummary), breakdown: n(d.nationalityBreakdown) },
    freedom: { score: d.freedom, curfew: n(d.curfew), summary: n(d.freedomSummary) },
    transportation: { summary: n(d.transportationSummary) },
    internet: { summary: n(d.internetSummary) },
    pros: n(d.strengths),
    cons: n(d.weaknesses),
    recommendedFor: n(d.recommendedFor),
    notRecommendedFor: n(d.notRecommendedFor),
    dailySchedule: n(d.dailySchedule),
    nearby: d.nearby ? d.nearby.map((name) => ({ name, category: "Nearby", distance: null })) : null,
    map: { travelEstimates: n(d.travelEstimates), googleMapsUrl: n(d.googleMapsUrl) },
    faq: n(d.faq),
    photos: null,
    reviewSummary: { summary: n(d.reviewSummary), positives: n(d.reviewPositives), negatives: n(d.reviewNegatives) },
    sources: d.sources ?? [],
    lastUpdated: n(d.lastUpdated),
  };
}
