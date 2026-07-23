import { BookOpen } from "lucide-react";
export function ProgramCard({ name }: { name: string }) { return <div className="flex items-center gap-2.5 rounded-lg border border-[var(--line)] bg-[var(--panel)] p-3 text-xs font-semibold"><div className="grid size-7 place-items-center rounded-md bg-[var(--paper)] text-[var(--green)]"><BookOpen size={13} /></div>{name}</div>; }
