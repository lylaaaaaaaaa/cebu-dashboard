import { Compass } from "lucide-react";

export function Brand() {
  return <div className="flex items-center gap-2.5"><div className="grid size-8 place-items-center rounded-[10px] bg-[#1f6a53] text-white shadow-sm"><Compass size={17} /></div><span className="display text-[17px] font-bold tracking-[-.04em]">linguo</span></div>;
}
