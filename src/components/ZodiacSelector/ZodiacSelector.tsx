'use client';

import { useDispatch, useSelector } from 'react-redux';
import { ZodiacIcon } from '@/components/ZodiacIcon';
import { RootState } from '@/store';
import { setSign } from '@/store/features/horoscopeSlice';
import { ZodiacSign } from '@/types/horoscope';
import styles from './ZodiacSelector.module.scss';

const zodiacSigns: ZodiacSign[] = [
  'aries',
  'taurus',
  'gemini',
  'cancer',
  'leo',
  'virgo',
  'libra',
  'scorpio',
  'sagittarius',
  'capricorn',
  'aquarius',
  'pisces',
];

export function ZodiacSelector() {
  const dispatch = useDispatch();
  const selectedSign = useSelector((state: RootState) => state.horoscope.selectedSign);

  return (
    <div className={styles.container}>
      <select
        value={selectedSign}
        onChange={(e) => dispatch(setSign(e.target.value as ZodiacSign))}
        className={styles.select}
      >
        {zodiacSigns.map((sign) => (
          <option key={sign} value={sign} className={styles.option}>
            {sign.charAt(0).toUpperCase() + sign.slice(1)}
          </option>
        ))}
      </select>
      <div className={styles.iconWrapper}>
        <ZodiacIcon sign={selectedSign} size={32} />
      </div>
    </div>
  );
}
