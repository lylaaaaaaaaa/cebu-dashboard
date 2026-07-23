import { BookOpen, Clock3 } from "lucide-react";
import type { RankedSchool } from "@/types/school";

export function SchedulePreview({ school }: { school: RankedSchool }) {
  const schedule = school.dailySchedule;
  return <div><div className="mb-4 grid gap-3 sm:grid-cols-3"><Summary icon={<BookOpen size={14} />} label="1:1 수업" value={school.programs.oneToOneClasses === null ? "—" : `하루 ${school.programs.oneToOneClasses}회`} /><Summary icon={<BookOpen size={14} />} label="그룹 수업" value={school.programs.groupClasses === null ? "—" : `하루 ${school.programs.groupClasses}회`} /><Summary icon={<Clock3 size={14} />} label="자습량" value="준비 중" /></div><div className="mb-4 grid grid-cols-6 gap-1.5 sm:grid-cols-12">{Array.from({ length: 12 }, (_, index) => <div key={index} className="rounded-md border border-[var(--line)] bg-[var(--paper)] px-1 py-2 text-center"><span className="text-[9px] font-bold">{index + 1}주</span><div className="mx-auto mt-1 size-1 rounded-full bg-[var(--muted)] opacity-30" /></div>)}</div>{schedule ? <div className="timeline">{schedule.map((item, index) => <div key={item} className="timeline-item"><span>{index + 1}</span><p>{item}</p></div>)}</div> : <div className="rounded-xl border border-dashed border-[var(--line)] p-4"><p className="text-[11px] text-[var(--muted)]">하루 루틴은 준비 중이에요.</p></div>}</div>;
}

function Summary({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) { return <div className="rounded-xl border border-[var(--line)] p-3"><div className="flex items-center gap-1.5 text-[10px] font-bold text-[var(--muted)]">{icon}{label}</div><p className="mt-2 text-xs font-bold">{value}</p></div>; }
