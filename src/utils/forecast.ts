import { DailyForecast, ZodiacSign } from '@/types/horoscope';

export function generateForecast(sign: ZodiacSign, date: string): DailyForecast {
  const seed = date + sign;
  const hash = Array.from(seed).reduce((acc, char) => acc + char.charCodeAt(0), 0);

  return {
    health: (hash % 100) / 10,
    love: ((hash * 31) % 100) / 10,
    career: ((hash * 67) % 100) / 10,
    date,
  };
}
