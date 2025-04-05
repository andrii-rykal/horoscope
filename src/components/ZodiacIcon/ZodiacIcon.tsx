'use client';

import { ZodiacSign } from '@/types/horoscope';
import {
  Star, // для Aquarius
  FireExtinguisher, // для Aries
  Shell, // для Cancer
  MountainSnow, // для Capricorn
  Users2, // для Gemini
  Cat, // для Leo
  Scale, // для Libra
  Fish, // для Pisces
  Target, // для Sagittarius
  Skull, // для Scorpio
  CircleDot, // для Taurus
  Flower, // для Virgo
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
