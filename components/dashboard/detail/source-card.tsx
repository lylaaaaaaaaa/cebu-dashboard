import { ExternalLink } from "lucide-react";
import type { SourceLink } from "@/types/school";
const typeLabels = { official: "공식 웹사이트", "student-review": "학생 후기", community: "커뮤니티", blog: "블로그", youtube: "YouTube" };
export function SourceCard({ source }: { source: SourceLink }) { return <a href={source.url} target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-lg border border-[var(--line)] p-3 text-xs"><div><span className="research-badge">{source.type ? typeLabels[source.type] : "출처"}</span><p className="mt-2 font-semibold">{source.title}</p></div><ExternalLink size={14} /></a>; }
