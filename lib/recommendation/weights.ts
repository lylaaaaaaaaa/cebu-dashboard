import type { BudgetRange, RecommendationProfile } from "./types";
import type { ScoreCategory } from "@/types/school";

export const DEFAULT_PRIORITY_ORDER: ScoreCategory[] = ["speaking", "facilities", "food", "freedom", "nationality", "value", "ielts"];
export const PRIORITY_MULTIPLIERS = [2.2, 1.9, 1.6, 1.35, 1.15, 1, 0.85] as const;
export const MATCH_BASE_SHARE = 0.78;

export const budgetBounds: Record<BudgetRange, { min: number; max: number | null; label: string }> = {
  "under-1200": { min: 0, max: 1200, label: "$1,200 미만" },
  "1200-1500": { min: 1200, max: 1500, label: "$1,200–1,500" },
  "1500-1800": { min: 1500, max: 1800, label: "$1,500–1,800" },
  "1800-plus": { min: 1800, max: null, label: "$1,800 이상" },
};

export const DEFAULT_PROFILE: RecommendationProfile = {
  studyGoal: "Speaking",
  budget: "1200-1500",
  location: "무관",
  studyStyle: "균형 있게",
  accommodation: "1인실",
  priorityOrder: DEFAULT_PRIORITY_ORDER,
};
