'use client';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { setPeriod } from '@/store/features/horoscopeSlice';
import styles from './PeriodToggle.module.scss';
import clsx from 'clsx';

export function PeriodToggle() {
  const dispatch = useDispatch();
  const periodDays = useSelector((state: RootState) => state.horoscope.periodDays);

  const handleToggle = (days: 3 | 7) => {
    dispatch(setPeriod(days));
  };

  return (
    <div className={styles.toggle}>
      <div
        className={clsx(styles.slider, {
          [styles.right]: periodDays === 7,
        })}
      />
      <button
        className={clsx(styles.option, { [styles.active]: periodDays === 3 })}
        onClick={() => handleToggle(3)}
      >
        3 days
      </button>
      <button
        className={clsx(styles.option, { [styles.active]: periodDays === 7 })}
        onClick={() => handleToggle(7)}
      >
        7 days
      </button>
    </div>
  );
}
