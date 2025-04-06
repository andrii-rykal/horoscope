'use client';

import { ZodiacSign } from '@/types/horoscope';
import {
  Star,
  FireExtinguisher,
  Shell,
  MountainSnow,
  Users2,
  Cat,
  Scale,
  Fish,
  Target,
  Skull,
  CircleDot,
  Flower,
} from 'lucide-react';

interface ZodiacIconProps {
  sign: ZodiacSign;
  size?: number;
  className?: string;
}

const iconMap = {
  aquarius: Star,
  aries: FireExtinguisher,
  cancer: Shell,
  capricorn: MountainSnow,
  gemini: Users2,
  leo: Cat,
  libra: Scale,
  pisces: Fish,
  sagittarius: Target,
  scorpio: Skull,
  taurus: CircleDot,
  virgo: Flower,
};

export function ZodiacIcon({ sign, size = 24, className }: ZodiacIconProps) {
  const Icon = iconMap[sign];
  return Icon ? <Icon size={size} className={className} /> : null;
}
