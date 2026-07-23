import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Linguo | 세부 어학원 비교 대시보드",
  description: "세부 어학원을 한눈에 비교해 보세요.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko" suppressHydrationWarning><body>{children}</body></html>;
}
