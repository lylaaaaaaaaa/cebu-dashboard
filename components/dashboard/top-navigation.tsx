import { Moon, Search, Sun } from "lucide-react";
import { Brand } from "./brand";

type TopNavigationProps = { dark: boolean; query: string; onQueryChange: (value: string) => void; onThemeToggle: () => void };

export function TopNavigation({ dark, query, onQueryChange, onThemeToggle }: TopNavigationProps) {
  return <header className="topbar">
    <Brand />
    <div className="flex items-center gap-1.5">
      <label className="search-box flex"><Search size={15} /><input value={query} onChange={(event) => onQueryChange(event.target.value)} placeholder="어학원 검색" aria-label="어학원 검색" /></label>
      <button type="button" aria-label={`${dark ? "라이트" : "다크"} 모드로 전환`} onClick={onThemeToggle} className="icon-button">{dark ? <Sun size={17} /> : <Moon size={17} />}</button>
    </div>
  </header>;
}
