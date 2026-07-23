import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { formatKRW } from "@/lib/currency";
import type { RankedSchool } from "@/types/school";

type SchoolHeroProps = { school: RankedSchool; onPrevious: () => void; onNext: () => void };

export function SchoolHero({ school, onPrevious, onNext }: SchoolHeroProps) {
  const name = school.basic.name ?? school.id;
  const cost = school.pricing.estimatedMonthlyCost;
  return <div className="detail-hero"><div className="mb-8 flex items-center justify-between"><button type="button" onClick={onPrevious} className="secondary-button"><ChevronLeft size={14} />이전 학교</button><button type="button" onClick={onNext} className="secondary-button">다음 학교<ChevronRight size={14} /></button></div><div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><div className="mb-4 flex items-center gap-3"><div className="avatar !size-12 !rounded-xl text-sm" style={{ background: school.presentation.color, color: school.presentation.tone }}>{school.presentation.initials}</div></div><h2 className="display text-3xl font-bold tracking-[-.055em] sm:text-4xl">{name}</h2><p className="mt-2 flex items-center gap-1.5 text-xs text-[var(--muted)]"><MapPin size={13} />{school.basic.location ?? "—"} · {school.basic.city ?? "—"}</p><div className="mt-4 flex flex-wrap gap-1.5">{school.recommendedFor?.slice(0, 4).map((item) => <span key={item} className="choice-chip !py-1.5">{item}</span>) ?? <span className="text-[11px] text-[var(--muted)]">추천 대상 준비 중</span>}</div></div><div className="flex items-end gap-5"><div><p className="text-[10px] font-bold uppercase tracking-[.1em] text-[var(--muted)]">종합 평점</p><p className="display mt-1 text-2xl font-bold">{school.overallScore === null ? "—" : school.overallScore}<span className="text-xs text-[var(--muted)]"> / 5.0</span></p></div><div><p className="text-[10px] font-bold uppercase tracking-[.1em] text-[var(--muted)]">예상 월 비용</p><p className="display mt-1 text-2xl font-bold">{cost === null ? "준비 중" : formatKRW(cost)}</p></div></div></div></div>;
}
