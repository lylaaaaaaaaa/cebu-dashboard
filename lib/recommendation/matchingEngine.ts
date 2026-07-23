import { getSchoolScores } from "@/lib/ranking";
import type { RankedSchool, School, ScoreCategory } from "@/types/school";
import { budgetBounds, MATCH_BASE_SHARE, PRIORITY_MULTIPLIERS } from "./weights";
import type { MatchExplanation, RecommendationProfile } from "./types";

const categoryReason: Record<ScoreCategory, string> = { speaking: "회화 평가가 우수해요.", ielts: "IELTS 평가가 우수해요.", facilities: "시설 평가가 좋아요.", food: "식사 만족도가 높아요.", freedom: "생활 규정이 자유로운 편이에요.", nationality: "국적 구성이 다양해요.", value: "가격 대비 가치가 좋아요." };
const categoryConcern: Record<ScoreCategory, string> = { speaking: "회화 특화도가 낮은 편이에요.", ielts: "IELTS 특화도가 낮은 편이에요.", facilities: "시설이 아쉬운 편이에요.", food: "식사 만족도가 낮은 편이에요.", freedom: "생활 규정이 엄격한 편이에요.", nationality: "국적 구성이 다양하지 않은 편이에요.", value: "가격 대비 가치가 아쉬운 편이에요." };

function goalCategory(profile: RecommendationProfile): ScoreCategory | null {
  if (profile.studyGoal === "Speaking" || profile.studyGoal === "General ESL" || profile.studyGoal === "Business English") return "speaking";
  if (profile.studyGoal === "IELTS") return "ielts";
  return null;
}

function evaluateSchool(school: School, profile: RecommendationProfile): MatchExplanation {
  const scores = getSchoolScores(school);
  const available = profile.priorityOrder.filter((key) => scores[key] !== null);
  if (available.length < 3) return { matchScore: null, reasons: [], concerns: ["평가 데이터가 부족해 추천을 계산할 수 없어요."] };

  const reasons: string[] = [];
  const concerns: string[] = [];
  let weightTotal = 0;
  let weightedScore = 0;
  profile.priorityOrder.forEach((key, index) => { const value = scores[key]; if (value !== null) { const weight = PRIORITY_MULTIPLIERS[index]; weightedScore += value * weight; weightTotal += weight; if (value >= 4.5 && reasons.length < 3) reasons.push(categoryReason[key]); if (value <= 3.2 && concerns.length < 2) concerns.push(categoryConcern[key]); } });
  let result = (weightedScore / weightTotal / 5) * 100 * MATCH_BASE_SHARE;

  const goal = goalCategory(profile);
  if (goal && scores[goal] !== null) { result += (scores[goal] as number) / 5 * 8; if ((scores[goal] as number) >= 4.5) reasons.unshift(`${profile.studyGoal} 목표에 잘 맞아요.`); else if ((scores[goal] as number) <= 3.5) concerns.unshift(`${profile.studyGoal} 특화도가 낮아요.`); }
  if (profile.studyGoal === "TOEIC") { const programs = school.programs.programs; if (programs?.some((item) => item.toUpperCase().includes("TOEIC"))) { result += 8; reasons.unshift("TOEIC 과정이 등록되어 있어요."); } else concerns.push("TOEIC 과정은 확인이 필요해요."); }

  const cost = school.pricing.estimatedMonthlyCost;
  const bounds = budgetBounds[profile.budget];
  if (cost === null) concerns.push("월 비용 확인이 필요해요.");
  else if (cost >= bounds.min && (bounds.max === null || cost <= bounds.max)) { result += 6; reasons.push("선택한 예산 범위 안이에요."); }
  else if (bounds.max !== null && cost > bounds.max) { result -= Math.min(14, 6 + (cost - bounds.max) / 100); concerns.unshift("선택한 예산을 초과해요."); }

  const location = school.basic.location;
  if (profile.location !== "무관" && location !== null) { if (location === profile.location) { result += 5; reasons.push(`${profile.location}에 있어요.`); } else { result -= 7; concerns.push("선호 지역과 달라요."); } }

  const freedom = school.freedom.score;
  if (freedom !== null) {
    const styleMatch = profile.studyStyle === "여유롭게" ? freedom >= 4.5 : profile.studyStyle === "집중적으로" ? freedom <= 3.5 : freedom >= 3.5 && freedom <= 4.5;
    if (styleMatch) { result += 4; reasons.push("선호하는 학습 분위기와 맞아요."); } else concerns.push("선호하는 학습 분위기와 차이가 있어요.");
  }

  if (profile.accommodation === "커플룸") { const couple = school.accommodation.coupleFriendly; if (couple === true) { result += 5; reasons.push("커플 친화 학교예요."); } else if (couple === false) { result -= 9; concerns.push("커플룸 조건과 맞지 않아요."); } else concerns.push("커플룸 확인이 필요해요."); }
  else if (school.accommodation.roomTypes === null) concerns.push(`${profile.accommodation} 제공 여부 확인이 필요해요.`);

  return { matchScore: Math.max(1, Math.min(99, Math.round(result))), reasons: [...new Set(reasons)].slice(0, 3), concerns: [...new Set(concerns)].slice(0, 2) };
}

export function getRecommendations(schools: RankedSchool[], profile: RecommendationProfile) {
  return schools.map((school) => ({ ...school, ...evaluateSchool(school, profile) })).sort((a, b) => (b.matchScore ?? -1) - (a.matchScore ?? -1));
}
