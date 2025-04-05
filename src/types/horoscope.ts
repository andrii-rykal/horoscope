export type ZodiacSign =
  | 'aries'
  | 'taurus'
  | 'gemini'
  | 'cancer'
  | 'leo'
  | 'virgo'
  | 'libra'
  | 'scorpio'
  | 'sagittarius'
  | 'capricorn'
  | 'aquarius'
  | 'pisces';

export interface DailyForecast {
  health: number;
  love: number;
  career: number;
  date: string;
}

export interface HoroscopeState {
  selectedSign: ZodiacSign;
  periodDays: 3 | 7;
  theme: 'light' | 'dark';
}
