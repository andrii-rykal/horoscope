import { AlertCircle, TrendingDown, TrendingUp } from 'lucide-react';
import clsx from 'clsx';
import styles from './KeyMetric.module.scss';

export type MetricType = 'best' | 'worst' | 'average' | 'unavailable';

export interface KeyMetricProps {
  type: MetricType;
  name: string;
  value: number;
}

export function KeyMetric({ type, name, value }: KeyMetricProps) {
  switch (type) {
    case 'best':
      return (
        <div className={styles.container}>
          <TrendingUp size={24} className={clsx(styles.icon, styles.best)} />
          <span className={styles.label}>Best Performance</span>
          <span className={clsx(styles.value, styles.best)}>
            {name} ({value.toFixed(1)})
          </span>
        </div>
      );
    case 'worst':
      return (
        <div className={styles.container}>
          <TrendingDown size={24} className={clsx(styles.icon, styles.worst)} />
          <span className={styles.label}>Needs Attention</span>
          <span className={clsx(styles.value, styles.worst)}>
            {name} ({value.toFixed(1)})
          </span>
        </div>
      );
    case 'unavailable':
      return (
        <div className={styles.container}>
          <AlertCircle size={24} className={styles.icon} />
          <span className={styles.label}>Forecast Unavailable</span>
          <span className={styles.value}>Try again later</span>
        </div>
      );
    default:
      return (
        <div className={styles.container}>
          <TrendingUp size={24} className={clsx(styles.icon, styles.average)} />
          <span className={styles.label}>Overall Balance</span>
          <span className={clsx(styles.value, styles.average)}>{value.toFixed(1)}</span>
        </div>
      );
  }
}
