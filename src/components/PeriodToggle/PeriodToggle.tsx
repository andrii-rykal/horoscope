'use client';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { setPeriod } from '@/store/features/horoscopeSlice';
import styles from './PeriodToggle.module.scss';
import clsx from 'clsx';

export function PeriodToggle() {
  const dispatch = useDispatch();
  const periodDays = useSelector((state: RootState) => state.horoscope.periodDays);

  return (
    <div className={styles.toggle} onClick={() => dispatch(setPeriod(periodDays === 3 ? 7 : 3))}>
      <div
        className={clsx(styles.slider, {
          [styles.sliderRight]: periodDays === 7,
        })}
      />
      <span className={clsx(styles.option, { [styles.active]: periodDays === 3 })}>3 days</span>
      <span className={clsx(styles.option, { [styles.active]: periodDays === 7 })}>7 days</span>
    </div>
  );
}
