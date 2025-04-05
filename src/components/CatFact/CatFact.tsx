'use client';

import { useGetFactQuery } from '@/store/api/catFacts';
import { DailyForecast } from '@/types/horoscope';
import { AlertCircle, HeartOff } from 'lucide-react';
import styles from './CatFact.module.scss';

interface CatFactProps {
  forecast: DailyForecast;
}

export function CatFact({ forecast }: CatFactProps) {
  const average = (forecast.health + forecast.love + forecast.career) / 3;
  // Передаємо дату як аргумент для унікального кешування
  const { data, isLoading, isError } = useGetFactQuery(forecast.date);

  if (average < 5) {
    return (
      <div className={styles.placeholder}>
        <HeartOff size={32} className={styles.icon} />
        <h3>Not Your Lucky Day</h3>
        <p>Your average score is too low for a cat fact. Try to improve your metrics!</p>
      </div>
    );
  }

  if (isLoading || isError || !data) {
    return (
      <div className={styles.placeholder}>
        <AlertCircle size={32} />
        <h3>Fun Fact Unavailable</h3>
        <p>We are having trouble getting your cat fact. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <p className={styles.text}>{data.fact}</p>
    </div>
  );
}
