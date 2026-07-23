// 학교 비용 원본 데이터는 어학원들이 USD로 안내하기 때문에 USD로 저장하고, 화면에는 원화로 보여준다.
// 환율이 바뀌면 이 숫자만 고치면 된다.
export const USD_TO_KRW = 1480; // 2026년 7월 기준

/** USD 월 비용을 "약 215만원" 형태로 */
export function formatKRW(usd: number) {
  return `약 ${Math.round((usd * USD_TO_KRW) / 10000).toLocaleString()}만원`;
}

/** 원화 금액을 "2,146,000원" 형태로 */
export function formatWon(won: number) {
  return `${Math.round(won).toLocaleString()}원`;
}

/** USD → 원화 정수 */
export const toWon = (usd: number) => usd * USD_TO_KRW;
