import { ArrowUpRight, Bookmark, MapPin } from "lucide-react";
import type { RankedSchool, ScoreCategory } from "@/types/school";

type SchoolCardProps = { school: RankedSchool; rank: number; saved: boolean; onSave: () => void; onOpen: () => void };
const metrics: { key: ScoreCategory; label: string }[] = [{ key: "speaking", label: "회화" }, { key: "food", label: "식사" }, { key: "freedom", label: "자유도" }, { key: "facilities", label: "시설" }, { key: "nationality", label: "국적" }];

export function SchoolCard({ school, rank, saved, onSave, onOpen }: SchoolCardProps) {
  const name = school.basic.name ?? school.id;
  const location = [school.basic.location, school.basic.city].filter(Boolean).join(" · ") || "위치 준비 중";
  const cost = school.pricing.estimatedMonthlyCost;
  const strengths = school.pros;
  const weakness = school.cons?.[0];

  return <article className="card group flex flex-col p-5 transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(28,52,42,.08)]"><div className="mb-5 flex items-start justify-between"><button type="button" onClick={onOpen} className="flex items-center gap-3 text-left"><div className="avatar !size-10" style={{ background: school.presentation.color, color: school.presentation.tone }}>{school.presentation.initials}</div><div><span className="text-[10px] font-bold text-[var(--muted)]">{school.recommendationScore === null ? "준비 중" : `추천 #${rank}`}</span><h3 className="mt-0.5 text-[15px] font-bold">{name}</h3><p className="mt-0.5 flex items-center gap-1 text-[11px] text-[var(--muted)]"><MapPin size={11} />{location}</p></div></button><button type="button" aria-label={`${name} ${saved ? "저장 해제" : "저장"}`} aria-pressed={saved} onClick={onSave} className={`rounded-md p-1.5 ${saved ? "bg-[#e1f1e9] text-[#287b5f] dark:bg-[#244b3e] dark:text-[#9fddbd]" : "text-[var(--muted)] hover:bg-[var(--line)]"}`}><Bookmark size={15} fill={saved ? "currentColor" : "none"} /></button></div>
    <button type="button" onClick={onOpen} className="mb-4 flex items-end justify-between rounded-xl bg-[var(--paper)] p-3 text-left"><div><p className="text-[10px] font-bold uppercase tracking-[.1em] text-[var(--muted)]">프로필 매칭</p><p className="display mt-0.5 text-2xl font-bold text-[var(--green)]">{school.matchScore === null ? "—" : `${school.matchScore}%`}</p><p className="mt-1 text-[9px] text-[var(--muted)]">종합 평가 {school.overallScore === null ? "—" : `${school.overallScore} / 5.0`}</p></div><div className="text-right"><p className="text-[10px] text-[var(--muted)]">예상 월 비용</p><p className="mt-1 text-sm font-bold">{cost === null ? "준비 중" : `$${cost.toLocaleString()}`}</p></div></button>
    <div className="mb-4 grid grid-cols-5 gap-2">{metrics.map(({ key, label }) => { const value = school.scores[key]; return <div key={key}><div className="mb-1.5 flex items-center justify-between text-[9px]"><span className="text-[var(--muted)]">{label}</span><strong>{value === null ? "—" : value.toFixed(1)}</strong></div><div className="metric-bar"><span className={value === null ? "!bg-[var(--muted)] opacity-20" : ""} style={{ width: value === null ? "100%" : `${value * 20}%` }} /></div></div>; })}</div>
    <div className="mb-3">{school.reasons.length ? <div className="space-y-1.5">{school.reasons.map((item) => <p key={item} className="text-[10px] font-semibold text-[#287b5f] dark:text-[#9fddbd]">✓ {item}</p>)}</div> : strengths ? <div className="space-y-1.5">{strengths.slice(0, 3).map((item) => <p key={item} className="text-[10px] font-semibold">✓ {item}</p>)}</div> : <p className="text-[10px] text-[var(--muted)]">강점 정보 준비 중</p>}</div>
    <p className="mb-5 text-[10px] text-[var(--muted)]">{school.concerns[0] ? `⚠ ${school.concerns[0]}` : weakness ? `⚠ ${weakness}` : "단점 정보 준비 중"}</p>
    <div className="mt-auto flex items-center justify-end border-t border-[var(--line)] pt-4"><button type="button" onClick={onOpen} className="secondary-button">상세 보기 <ArrowUpRight size={13} /></button></div></article>;
}
