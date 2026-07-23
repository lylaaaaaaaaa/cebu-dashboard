"use client";

import { useMemo, useState } from "react";
import { Calculator } from "lucide-react";
import { formatWon, toWon } from "@/lib/currency";
import type { CostBreakdownData } from "@/types/school";

const fields: Array<[keyof CostBreakdownData, string, string]> = [["tuition", "학비", "12주 수업료"], ["dormitory", "기숙사", "12주 숙소비"], ["ssp", "SSP", "학업 허가 비용"], ["visa", "비자", "연장 비용"], ["electricity", "전기세", "12주 예상 사용료"], ["airfare", "왕복 항공권", "직접 입력"], ["spendingMoney", "용돈", "12주 생활비"]];

export function TotalCostCalculator({ breakdown, monthlyEstimate }: { breakdown: CostBreakdownData | null; monthlyEstimate: number | null }) {
  const [values, setValues] = useState<Record<keyof CostBreakdownData, string>>(() => Object.fromEntries(fields.map(([key]) => [key, breakdown?.[key]?.toString() ?? ""])) as Record<keyof CostBreakdownData, string>);
  const total = useMemo(() => fields.reduce((sum, [key]) => sum + (Number(values[key]) || 0), 0), [values]);
  const entered = fields.filter(([key]) => values[key] !== "").length;
  return <div className="rounded-2xl border border-[var(--line)] overflow-hidden"><div className="flex items-center justify-between border-b border-[var(--line)] bg-[var(--paper)] p-4"><div className="flex items-center gap-2"><Calculator size={16} className="text-[var(--green)]" /><div><p className="text-xs font-bold">12주 실제 비용 계산기</p><p className="mt-0.5 text-[10px] text-[var(--muted)]">확인한 금액을 원화로 직접 입력하세요.</p></div></div><span className="research-badge">원화 기준</span></div>{monthlyEstimate !== null && <div className="flex items-center justify-between border-b border-[var(--line)] px-4 py-3 text-xs"><span className="text-[var(--muted)]">월 추정 비용 × 3개월</span><strong>{formatWon(toWon(monthlyEstimate) * 3)}</strong></div>}<div className="grid gap-3 p-4 sm:grid-cols-2">{fields.map(([key, label, hint]) => <label key={key} className="rounded-xl border border-[var(--line)] p-3"><span className="flex items-center justify-between text-[11px] font-bold"><span>{label}</span><span className="font-normal text-[var(--muted)]">{hint}</span></span><div className="mt-2 flex items-center gap-1"><input type="number" min="0" inputMode="decimal" value={values[key]} onChange={(event) => setValues((current) => ({ ...current, [key]: event.target.value }))} placeholder="0" className="w-full bg-transparent text-sm font-bold outline-none" /><span className="text-sm text-[var(--muted)]">원</span></div></label>)}</div><div className="flex flex-col justify-between gap-3 border-t border-[var(--line)] bg-[#e8f5ee] p-5 dark:bg-[#203d33] sm:flex-row sm:items-center"><div><p className="text-[10px] font-bold uppercase tracking-[.1em] text-[var(--muted)]">직접 입력한 12주 총액</p><p className="display mt-1 text-3xl font-bold text-[#287b5f] dark:text-[#9fddbd]">{formatWon(total)}</p></div><p className="max-w-xs text-[10px] leading-5 text-[var(--muted)]">{entered}/7개 항목 입력 · 입력한 금액만 합산됩니다. 월 비용 × 3 값은 참고용이며 합계에 자동 포함되지 않습니다.</p></div></div>;
}
