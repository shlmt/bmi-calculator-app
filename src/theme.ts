import { CSSProperties } from 'react';

export const colors = {
  background: '#0d0d0d',
  surface: '#161616',
  surfaceAlt: '#222222',
  border: '#262626',
  accent: '#bfff00',
  accentGlow: 'rgba(191, 255, 0, 0.3)',
  text: '#ffffff',
  textMuted: '#8c8c8c',
  onAccent: '#0d0d0d',
};

export const fonts = {
  display: "'Unbounded', sans-serif",
  mono: "'JetBrains Mono', monospace",
};

export const weights = { regular: 400, medium: 500, bold: 700, extraBold: 800, black: 900 };

export const radius = { xs: 2, sm: 4, md: 16, lg: 24 };

export const space = { xs: 4, sm: 8, md: 12, lg: 16, xl: 20 };

export const text = (
  font: keyof typeof fonts,
  size: number,
  color: string,
  weight: number = weights.regular,
): CSSProperties => ({ fontFamily: fonts[font], fontSize: size, color, fontWeight: weight, margin: 0 });

export const card: CSSProperties = {
  backgroundColor: colors.surface,
  border: `1px solid ${colors.border}`,
  boxSizing: 'border-box',
};
