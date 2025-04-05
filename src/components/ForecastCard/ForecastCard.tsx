'use client';

import { DailyForecast } from '@/types/horoscope';
import { Heart, Brain, Briefcase } from 'lucide-react';
import styles from './ForecastCard.module.scss';
import clsx from 'clsx';

interface ForecastCardProps {
  forecast: DailyForecast;
}

export function ForecastCard({ forecast }: ForecastCardProps) {
  const metrics = [
    {
      label: 'Love',
      value: forecast.love,
      type: 'love',
      icon: <Heart className={styles.metricIcon} size={18} />,
      color: 'rgb(244, 63, 94)',
    },
    {
      label: 'Health',
      value: forecast.health,
      type: 'health',
      icon: <Brain className={styles.metricIcon} size={18} />,
      color: 'rgb(14, 165, 233)',
    },
    {
      label: 'Career',
      value: forecast.career,
      type: 'career',
      icon: <Briefcase className={styles.metricIcon} size={18} />,
      color: 'rgb(34, 197, 94)',
    },
  ];

  return (
    <div className={styles.card}>
      <div className={styles.metrics}>
        {metrics.map(({ label, value, type, icon, color }) => (
          <div key={label} className={styles.metric}>
            <div className={styles.metricHeader}>
              <div className={styles.metricLabel}>
                {icon}
                <span>{label}</span>
              </div>
              <span className={styles.metricValue} style={{ color }}>
                {value.toFixed(1)}
              </span>
            </div>
            <div className={styles.metricBar}>
              <div
                className={clsx(styles.metricBarProgress, styles[type])}
                style={{ width: `${value * 10}%`, background: color }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
