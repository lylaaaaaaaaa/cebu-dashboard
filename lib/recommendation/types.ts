import type { ScoreCategory } from "@/types/school";

export type StudyGoal = "Speaking" | "IELTS" | "TOEIC" | "Business English" | "General ESL";
export type BudgetRange = "under-1200" | "1200-1500" | "1500-1800" | "1800-plus";
export type ProfileLocation = "세부 시티" | "막탄" | "무관";
export type StudyStyle = "여유롭게" | "균형 있게" | "집중적으로";
export type AccommodationPreference = "커플룸" | "1인실" | "다인실";

export type RecommendationProfile = {
  studyGoal: StudyGoal;
  budget: BudgetRange;
  location: ProfileLocation;
  studyStyle: StudyStyle;
  accommodation: AccommodationPreference;
  priorityOrder: ScoreCategory[];
};

export type MatchExplanation = {
  matchScore: number | null;
  reasons: string[];
  concerns: string[];
};
