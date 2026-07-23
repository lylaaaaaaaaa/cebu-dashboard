import { useState } from "react";
import { GripVertical, RotateCcw, UserRound } from "lucide-react";
import { categoryLabels } from "@/data";
import { budgetBounds } from "@/lib/recommendation/weights";
import type { AccommodationPreference, BudgetRange, ProfileLocation, RecommendationProfile, StudyGoal, StudyStyle } from "@/lib/recommendation/types";
import type { ScoreCategory } from "@/types/school";

type Props = { profile: RecommendationProfile; onChange: (profile: RecommendationProfile) => void; onReset: () => void };
const goals: StudyGoal[] = ["Speaking", "IELTS", "TOEIC", "Business English", "General ESL"];
const locations: ProfileLocation[] = ["세부 시티", "막탄", "무관"];
const styles: StudyStyle[] = ["여유롭게", "균형 있게", "집중적으로"];
const accommodations: AccommodationPreference[] = ["커플룸", "1인실", "다인실"];

function ChoiceGroup<T extends string>({ label, options, value, onChange, labels }: { label: string; options: T[]; value: T; onChange: (value: T) => void; labels?: Record<string, string> }) { return <fieldset><legend className="preference-label">{label}</legend><div className="flex flex-wrap gap-1.5">{options.map((option) => <button type="button" key={option} aria-pressed={option === value} onClick={() => onChange(option)} className={`choice-chip ${option === value ? "choice-chip-active" : ""}`}>{labels?.[option] ?? option}</button>)}</div></fieldset>; }

export function PreferencesPanel({ profile, onChange, onReset }: Props) {
  const [dragged, setDragged] = useState<ScoreCategory | null>(null);
  const reorder = (target: ScoreCategory) => { if (!dragged || dragged === target) return; const next = [...profile.priorityOrder]; const from = next.indexOf(dragged); const to = next.indexOf(target); next.splice(from, 1); next.splice(to, 0, dragged); onChange({ ...profile, priorityOrder: next }); setDragged(null); };
  return <section className="card mb-9 overflow-hidden" aria-labelledby="profile-title"><div className="flex items-center justify-between border-b border-[var(--line)] px-5 py-4"><div className="flex items-center gap-3"><div className="grid size-8 place-items-center rounded-lg bg-[#e1f1e9] text-[#287b5f] dark:bg-[#244b3e] dark:text-[#9fddbd]"><UserRound size={16} /></div><div><h2 id="profile-title" className="text-sm font-bold">내 프로필</h2><p className="mt-0.5 text-[11px] text-[var(--muted)]">몇 가지 질문으로 나에게 맞는 학교를 추천받아 보세요.</p></div></div><button type="button" onClick={onReset} className="secondary-button"><RotateCcw size={13} />초기화</button></div>
    <div className="grid gap-x-8 gap-y-6 border-b border-[var(--line)] p-5 md:grid-cols-2 xl:grid-cols-3">
      <ChoiceGroup label="학습 목표" options={goals} value={profile.studyGoal} onChange={(studyGoal) => onChange({ ...profile, studyGoal })} />
      <ChoiceGroup label="예산 (월 기준)" options={Object.keys(budgetBounds) as BudgetRange[]} value={profile.budget} labels={Object.fromEntries(Object.entries(budgetBounds).map(([key, item]) => [key, item.label]))} onChange={(budget) => onChange({ ...profile, budget })} />
      <ChoiceGroup label="지역" options={locations} value={profile.location} labels={{ "무관": "어디든" }} onChange={(location) => onChange({ ...profile, location })} />
      <ChoiceGroup label="학습 스타일" options={styles} value={profile.studyStyle} onChange={(studyStyle) => onChange({ ...profile, studyStyle })} />
      <ChoiceGroup label="숙소" options={accommodations} value={profile.accommodation} onChange={(accommodation) => onChange({ ...profile, accommodation })} />
    </div>
    <div className="p-5"><div className="mb-3 flex items-end justify-between"><div><p className="preference-label !mb-1">우선순위</p><p className="text-[10px] text-[var(--muted)]">카드를 드래그해 중요한 순서로 정렬하세요.</p></div></div><div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-4">{profile.priorityOrder.map((category, index) => <button type="button" draggable key={category} onDragStart={() => setDragged(category)} onDragOver={(event) => event.preventDefault()} onDrop={() => reorder(category)} className={`priority-card ${dragged === category ? "opacity-50" : ""}`}><GripVertical size={14} className="text-[var(--muted)]" /><span className="grid size-5 place-items-center rounded-full bg-[var(--paper)] text-[9px] font-bold">{index + 1}</span><span className="text-[11px] font-semibold">{categoryLabels[category]}</span></button>)}</div></div>
  </section>;
}
