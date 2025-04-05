'use client';

import { Moon, Sun } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { toggleTheme } from '@/store/features/horoscopeSlice';
import styles from './ThemeToggle.module.scss';
import clsx from 'clsx';

export function ThemeToggle() {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.horoscope.theme);

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className={styles.button}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <Moon size={20} className={clsx(styles.icon, styles.rotate)} />
      ) : (
        <Sun size={20} className={styles.icon} />
      )}
    </button>
  );
}
