import { BarChart3, Bookmark, Building2, LayoutDashboard, type LucideIcon } from "lucide-react";

const navItems: { label: string; icon: LucideIcon }[] = [
  { label: "대시보드", icon: LayoutDashboard },
  { label: "어학원", icon: Building2 },
  { label: "비교하기", icon: BarChart3 },
  { label: "저장 목록", icon: Bookmark },
];

export function Navigation({ active, savedCount, onChange }: { active: string; savedCount: number; onChange: (value: string) => void }) {
  return <nav aria-label="주요 메뉴" className="space-y-1">{navItems.map(({ label, icon: Icon }) => <button key={label} type="button" onClick={() => onChange(label)} aria-current={active === label ? "page" : undefined} className={`nav-item ${active === label ? "nav-item-active" : ""}`}><Icon size={16} /><span>{label}</span>{label === "저장 목록" && <span className="ml-auto rounded-full bg-[var(--line)] px-1.5 py-0.5 text-[10px]">{savedCount}</span>}</button>)}</nav>;
}
