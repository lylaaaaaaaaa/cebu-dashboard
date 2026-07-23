import { ChevronDown, CircleHelp, MoreHorizontal, Settings2 } from "lucide-react";
import { Brand } from "./brand";
import { Navigation } from "./navigation";

type SidebarProps = { active: string; savedCount: number; onChange: (value: string) => void };

export function Sidebar({ active, savedCount, onChange }: SidebarProps) {
  return <aside className="sidebar sticky top-0 flex h-screen flex-col px-4 py-5"><div className="mb-9 px-2"><Brand /></div><div className="mb-3 flex items-center gap-2 px-2 text-[11px] font-bold uppercase tracking-[.13em] text-[var(--muted)]">워크스페이스 <ChevronDown size={13} /></div><button type="button" className="mb-6 flex items-center gap-2 rounded-lg border border-[var(--line)] bg-[var(--panel)] px-2.5 py-2 text-left shadow-sm"><div className="grid size-7 place-items-center rounded-md bg-[#cce9dd] text-[10px] font-bold text-[#286a54]">LA</div><span className="flex-1 text-xs font-semibold">Language Atlas</span><MoreHorizontal size={16} className="text-[var(--muted)]" /></button><Navigation active={active} savedCount={savedCount} onChange={onChange} /><div className="mt-auto space-y-1"><button type="button" className="nav-item"><CircleHelp size={16} />도움말</button><button type="button" className="nav-item"><Settings2 size={16} />설정</button><div className="mt-4 flex items-center gap-2 border-t border-[var(--line)] px-2 pt-4"><div className="grid size-8 place-items-center rounded-full bg-[#d5e4ee] text-[11px] font-bold text-[#42677b]">AK</div><div className="min-w-0 flex-1"><p className="truncate text-xs font-bold">아이코 김</p><p className="truncate text-[11px] text-[var(--muted)]">aiko@atlas.co</p></div><MoreHorizontal size={15} className="text-[var(--muted)]" /></div></div></aside>;
}
