import { getRatingLevel } from "@/lib/ranking";

export function ScoreCard({ label, score, weight }: { label: string; score: number | null; weight: number | null }) {
  const rating = getRatingLevel(score);
  return <div className="rounded-xl border border-[var(--line)] bg-[var(--panel)] p-3"><div className="flex items-center justify-between"><span className="text-[11px] font-bold">{label}</span><span className={`rating-indicator rating-${rating.tone}`}>{rating.label}</span></div><div className="mt-3 metric-bar"><span className={score === null ? "!bg-[var(--muted)] opacity-20" : ""} style={{ width: score === null ? "100%" : `${score * 20}%` }} /></div><div className="mt-2 flex justify-between text-[9px] text-[var(--muted)]"><span>{score === null ? "준비 중" : `${score.toFixed(1)} / 5.0`}</span><span>{weight === null ? "—" : `가중치 ${Math.round(weight * 100)}%`}</span></div></div>;
}
