const ANNUAL_RATE = 0.1892;
const MONTHS = 60;
const r = ANNUAL_RATE / 12;

export const calcMonthlyPayment = (price: number): number => {
  const M = price * (r * Math.pow(1 + r, MONTHS)) / (Math.pow(1 + r, MONTHS) - 1);
  return Math.round(M);
};

export const CREDIT_MONTHS = MONTHS;
export const CREDIT_RATE_PERCENT = ANNUAL_RATE * 100;
