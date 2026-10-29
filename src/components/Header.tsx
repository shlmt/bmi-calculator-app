import { CSSProperties } from 'react';
import { colors, text, weights } from '../theme';

const styles: Record<string, CSSProperties> = {
  title: { ...text('display', 22, colors.text, weights.extraBold) },
  subtitle: { ...text('mono', 11, colors.accent, weights.medium), textTransform: 'uppercase', marginTop: 2 },
};

export const Header = () => (
  <header>
    <h1 style={styles.title}>BODY CHECK</h1>
    <p style={styles.subtitle}>SYSTEM v1.0.19 / BMI</p>
  </header>
);
