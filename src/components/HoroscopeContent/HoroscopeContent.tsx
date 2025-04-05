'use client';

import { RootState } from '@/store';
import { DailyForecast } from '@/types/horoscope';
import { generateForecast } from '@/utils/forecast';
import { AlertCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CatFact } from '../CatFact';
import { CopyLinkButton } from '../CopyLinkButton';
import { ForecastCard } from '../ForecastCard';
import { KeyMetric } from '../KeyMetric/KeyMetric';
import { MetricType } from '../KeyMetric/KeyMetric';
import { PeriodToggle } from '../PeriodToggle';
import { TabButton } from '../TabButton/TabButton';
import { ZodiacIcon } from '../ZodiacIcon';
import { ZodiacSelector } from '../ZodiacSelector';
import styles from './HoroscopeContent.module.scss';
import { ThemeToggle } from '../ThemeToggle';

export function HoroscopeContent() {
  const { selectedSign, periodDays } = useSelector((state: RootState) => state.horoscope);
  const [activeDay, setActiveDay] = useState(0);

  useEffect(() => {
    setActiveDay(0);
  }, [selectedSign, periodDays]);

  const forecasts = Array.from({ length: periodDays }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return generateForecast(selectedSign, date.toISOString().split('T')[0]);
  });

  const getKeyMetric = (
    forecast: DailyForecast | null
  ): { type: MetricType; value: number; name: string } => {
    if (!forecast) {
      return { type: 'unavailable', value: 0, name: 'Unavailable' };
    }

    const metrics = [
      { name: 'Love', value: forecast.love },
      { name: 'Health', value: forecast.health },
      { name: 'Career', value: forecast.career },
    ];

    const sorted = [...metrics].sort((a, b) => b.value - a.value);
    const average = metrics.reduce((acc, curr) => acc + curr.value, 0) / metrics.length;

    if (sorted[0].value > 7) {
      return { type: 'best', value: sorted[0].value, name: sorted[0].name };
    }
    if (sorted[sorted.length - 1].value < 4) {
      return {
        type: 'worst',
        value: sorted[sorted.length - 1].value,
        name: sorted[sorted.length - 1].name,
      };
    }

    return { type: 'average', value: average, name: 'Average' };
  };

  const activeForecast = forecasts[activeDay];
  const hasValidForecast =
    activeForecast &&
    (activeForecast.love > 0 || activeForecast.health > 0 || activeForecast.career > 0);

  return (
    <section className={styles.content}>
      <div className={styles.actions}>
        <ThemeToggle />
      </div>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerIcon}>
            <ZodiacIcon sign={selectedSign} size={64} />
          </div>
          <div className={styles.headerControls}>
            <ZodiacSelector />
            <PeriodToggle />
          </div>
        </div>

        <div className={styles.calendar}>
          <div className={styles.tabs}>
            {forecasts.map((forecast, index) => (
              <TabButton
                key={forecast.date}
                forecast={forecast}
                isActive={activeDay === index}
                onClick={() => setActiveDay(index)}
              />
            ))}
          </div>
          <div className={styles.forecastContent}>
            {hasValidForecast ? (
              <>
                <KeyMetric {...getKeyMetric(activeForecast)} />
                <ForecastCard forecast={activeForecast} />
                <CatFact forecast={activeForecast} />
                <div className={styles.shareButtonWrapper}>
                  <CopyLinkButton />
                </div>
              </>
            ) : (
              <div className={styles.placeholder}>
                <AlertCircle size={32} />
                <h3>Forecast Unavailable</h3>
                <p>We are having trouble generating your forecast. Please try again later.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
