import type { Preferences, SchoolLocation, ScoreCategory } from "@/types/school";

export const defaultScoreWeights: Record<ScoreCategory, number> = { speaking: 25, facilities: 15, food: 10, freedom: 15, nationality: 15, value: 20, ielts: 10 };
export const categoryLabels: Record<ScoreCategory, string> = { speaking: "회화", ielts: "IELTS", facilities: "시설", food: "식사", freedom: "자유도", nationality: "국적 다양성", value: "가격 대비 가치" };
export const locationOptions: Array<"전체" | SchoolLocation> = ["전체", "세부 시티", "막탄"];
export const defaultPreferences: Preferences = { location: "전체", maxBudget: 1700, priorities: { speaking: 3, ielts: 1, facilities: 2, food: 1, freedom: 2, nationality: 2, value: 2 }, coupleFriendly: false };
