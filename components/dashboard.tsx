"use client";

import { useEffect, useMemo, useState } from "react";
import { Search } from "lucide-react";
import { defaultPreferences, schools } from "@/data";
import { rankSchools } from "@/lib/ranking";
import { getRecommendations } from "@/lib/recommendation/matchingEngine";
import { DEFAULT_PROFILE } from "@/lib/recommendation/weights";
import type { RecommendationProfile } from "@/lib/recommendation/types";
import type { RankedSchool } from "@/types/school";
import { ComparisonTable } from "./dashboard/comparison-table";
import { PreferencesPanel } from "./dashboard/preferences-panel";
import { SchoolCard } from "./dashboard/school-card";
import { SchoolDetailDrawer } from "./dashboard/school-detail-drawer";
import { TopNavigation } from "./dashboard/top-navigation";

export default function Dashboard() {
  const [dark, setDark] = useState(false);
  const [query, setQuery] = useState("");
  const [profile, setProfile] = useState<RecommendationProfile>(DEFAULT_PROFILE);
  const [selectedSchool, setSelectedSchool] = useState<RankedSchool | null>(null);

  useEffect(() => {
    const stored = window.localStorage.getItem("linguo-theme");
    setDark(stored ? stored === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    document.documentElement.style.colorScheme = dark ? "dark" : "light";
    window.localStorage.setItem("linguo-theme", dark ? "dark" : "light");
  }, [dark]);

  const rankedSchools = useMemo(
    () => getRecommendations(rankSchools(schools, defaultPreferences), profile).filter((school) => `${school.basic.name ?? ""} ${school.basic.location ?? ""} ${school.basic.city ?? ""}`.toLowerCase().includes(query.toLowerCase())),
    [profile, query],
  );

  const selectedIndex = selectedSchool ? rankedSchools.findIndex((school) => school.id === selectedSchool.id) : -1;
  const showAdjacentSchool = (direction: -1 | 1) => {
    if (selectedIndex < 0 || rankedSchools.length === 0) return;
    setSelectedSchool(rankedSchools[(selectedIndex + direction + rankedSchools.length) % rankedSchools.length]);
  };

  return <div className="app-grid soft-grid">
    <main className="main-content">
      <TopNavigation dark={dark} query={query} onQueryChange={setQuery} onThemeToggle={() => setDark((current) => !current)} />

      <div className="content-wrap">
        <div className="mb-8"><h1 className="display max-w-2xl text-[32px] font-bold tracking-[-.06em] sm:text-[40px]">나에게 가장 잘 맞는 세부 어학원을 찾아보세요<span className="text-[#9ab7a9]">.</span></h1><p className="mt-2 text-[13px] text-[var(--muted)]">중요하게 생각하는 조건을 선택하면 어학원을 맞춤 순서로 추천해 드려요.</p></div>

        <PreferencesPanel profile={profile} onChange={setProfile} onReset={() => setProfile(DEFAULT_PROFILE)} />

        <section className="mb-9"><div className="mb-4 flex items-end justify-between"><div><h2 className="display text-[20px] font-bold tracking-[-.04em]">추천 어학원 순위</h2><p className="mt-1 text-[11px] text-[var(--muted)]">선택한 조건을 반영한 추천 순서예요. 항목별 점수(회화·시설·식사 등)는 검증된 값이 아니라 <strong className="font-semibold">주관적 추정치</strong>라 참고용으로만 보세요.</p></div><span className="rounded-full border border-[var(--line)] bg-[var(--panel)] px-3 py-1.5 text-[11px] font-semibold text-[var(--muted)]">{rankedSchools.length}개 어학원</span></div>
          {rankedSchools.length > 0 ? <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">{rankedSchools.map((school, index) => <SchoolCard key={school.id} school={school} rank={index + 1} onOpen={() => setSelectedSchool(school)} />)}</div> : <div className="card grid min-h-44 place-items-center p-8 text-center"><div><Search className="mx-auto mb-3 text-[var(--muted)]" size={20} /><p className="font-semibold">검색 결과가 없습니다</p><p className="mt-1 text-xs text-[var(--muted)]">어학원 또는 지역 이름으로 검색해 보세요.</p></div></div>}
        </section>

        <section className="card overflow-hidden"><div className="border-b border-[var(--line)] p-5"><h2 className="display text-[20px] font-bold tracking-[-.04em]">조건별 상세 비교</h2><p className="mt-1 text-[11px] text-[var(--muted)]">행을 선택하면 학교 상세 정보를 볼 수 있어요.</p></div><ComparisonTable schools={rankedSchools} onSelect={setSelectedSchool} /></section>

        <footer className="mt-8 text-[11px] text-[var(--muted)]"><span>세부 어학원 비교 · 2026년 7월 업데이트 · 비용은 1달러 1,480원 기준 환산</span></footer>
      </div>
    </main>
    {selectedSchool && <SchoolDetailDrawer school={selectedSchool} onClose={() => setSelectedSchool(null)} onPrevious={() => showAdjacentSchool(-1)} onNext={() => showAdjacentSchool(1)} />}
  </div>;
}
