'use client';

import { Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import styles from './CopyLinkButton.module.scss';
import clsx from 'clsx';

export function CopyLinkButton() {
  const [copied, setCopied] = useState(false);
  const { selectedSign, periodDays } = useSelector((state: RootState) => state.horoscope);

  const handleCopy = async () => {
    const url = new URL(window.location.href);
    url.searchParams.set('sign', selectedSign);
    url.searchParams.set('days', String(periodDays));

    try {
      await navigator.clipboard.writeText(url.toString());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  return (
    <button onClick={handleCopy} className={styles.button}>
      {copied ? (
        <>
          <Check size={16} className={clsx(styles.icon, styles.active)} />
          <span className={clsx(styles.text, styles.active)}>Copied!</span>
        </>
      ) : (
        <>
          <Copy size={16} className={clsx(styles.icon, styles.default)} />
          <span className={clsx(styles.text, styles.default)}>Share</span>
        </>
      )}
    </button>
  );
}
