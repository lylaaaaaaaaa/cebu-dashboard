import { categoryLabels, defaultScoreWeights } from "@/data";
import type { CategoryScores, Preferences, RankedSchool, School, ScoreCategory } from "@/types/school";

export const scoreCategories = Object.keys(defaultScoreWeights) as ScoreCategory[];

export function getSchoolScores(school: School): CategoryScores {
  return {
    speaking: school.programs.speakingScore,
    ielts: school.programs.ieltsScore,
    facilities: school.facilities.score,
    food: school.food.score,
    freedom: school.freedom.score,
    nationality: school.nationality.score,
    value: school.pricing.valueScore,
  };
}

function weightedAverage(scores: CategoryScores, weights: Record<ScoreCategory, number>) {
  const available = scoreCategories.filter((key) => scores[key] !== null);
  if (available.length < 3) return null;
  const weightTotal = available.reduce((sum, key) => sum + weights[key], 0);
  const weightedTotal = available.reduce((sum, key) => sum + (scores[key] as number) * weights[key], 0);
  return weightedTotal / weightTotal;
}

export function calculateOverall(school: School) {
  const result = weightedAverage(getSchoolScores(school), defaultScoreWeights);
  return result === null ? null : Number(result.toFixed(1));
}

export function getRatingLevel(score: number | null) {
  if (score === null) return { label: "조사 필요", tone: "pending" as const };
  if (score >= 4.5) return { label: "매우 우수", tone: "excellent" as const };
  if (score >= 4.0) return { label: "우수", tone: "good" as const };
  if (score >= 3.5) return { label: "보통", tone: "average" as const };
  return { label: "아쉬움", tone: "weak" as const };
}

export function getScoreBreakdown(school: School) {
  const scores = getSchoolScores(school);
  const available = scoreCategories.filter((key) => scores[key] !== null);
  const total = available.reduce((sum, key) => sum + defaultScoreWeights[key], 0);
  return scoreCategories.map((key) => ({ key, label: categoryLabels[key], score: scores[key], weight: scores[key] === null || total === 0 ? null : defaultScoreWeights[key] / total }));
}

function calculateRecommendation(school: School, preferences: Preferences) {
  const scores = getSchoolScores(school);
  const preferenceWeights = Object.fromEntries(scoreCategories.map((key) => [key, defaultScoreWeights[key] * (1 + preferences.priorities[key] * 0.5)])) as Record<ScoreCategory, number>;
  const base = weightedAverage(scores, preferenceWeights);
  if (base === null) return null;
  let result = base;
  if (preferences.location !== "전체" && school.basic.location !== null && school.basic.location !== preferences.location) result -= 0.45;
  const cost = school.pricing.estimatedMonthlyCost;
  if (cost !== null && cost > preferences.maxBudget) result -= Math.min(0.8, (cost - preferences.maxBudget) / 700);
  if (preferences.coupleFriendly && school.accommodation.coupleFriendly === false) result -= 0.7;
  return result;
}

export function rankSchools(schools: School[], preferences: Preferences): RankedSchool[] {
  return schools.map((school) => {
    const scores = getSchoolScores(school);
    return { ...school, scores, overallScore: calculateOverall(school), recommendationScore: calculateRecommendation(school, preferences), availableScoreCount: scoreCategories.filter((key) => scores[key] !== null).length, matchScore: null, reasons: [], concerns: [] };
  }).sort((a, b) => {
    if (a.recommendationScore === null && b.recommendationScore === null) return (a.basic.name ?? a.id).localeCompare(b.basic.name ?? b.id);
    if (a.recommendationScore === null) return 1;
    if (b.recommendationScore === null) return -1;
    return b.recommendationScore - a.recommendationScore;
  });
}
