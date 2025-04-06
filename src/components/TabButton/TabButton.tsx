import { DailyForecast } from '@/types/horoscope';
import { Brain, Briefcase, Heart } from 'lucide-react';
import clsx from 'clsx';
import styles from './TabButton.module.scss';

interface TabButtonProps {
  forecast: DailyForecast;
  isActive: boolean;
  onClick: () => void;
}

export function TabButton({ forecast, isActive, onClick }: TabButtonProps) {
  const date = new Date(forecast.date);
  const weekday = date.toLocaleDateString('en-US', { weekday: 'short' });
  const day = date.getDate();
  const month = date.toLocaleDateString('en-US', { month: 'short' });

  const metrics = [
    { icon: Heart, value: forecast.love, color: 'rose', label: 'Love' },
    { icon: Brain, value: forecast.health, color: 'sky', label: 'Health' },
    { icon: Briefcase, value: forecast.career, color: 'emerald', label: 'Career' },
  ];

  return (
    <button
      type='button'
      onClick={onClick}
      className={clsx(styles.tab, {
        [styles.active]: isActive,
      })}
    >
      <div className={styles.date}>
        <span className={styles.weekday}>{weekday}</span>
        <span className={styles.day}>{day}</span>
        <span className={styles.month}>{month}</span>
      </div>
      <div className={styles.metrics}>
        {metrics.map(({ icon: Icon, value, color }) => (
          <div key={color} className={styles.metric}>
            <Icon size={10} className={styles[`icon${color}`]} />
            <span className={styles[`text${color}`]}>{value.toFixed(1)}</span>
          </div>
        ))}
      </div>
    </button>
  );
}
