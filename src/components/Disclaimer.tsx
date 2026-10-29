import { CSSProperties } from 'react';
import { colors, space, text } from '../theme';
import { GlitchStripe } from './GlitchStripe';

const styles: Record<string, CSSProperties> = {
  root: { display: 'flex', flexDirection: 'column', gap: space.lg, paddingTop: space.xl },
  text: { ...text('mono', 10, colors.textMuted), lineHeight: 1.5, textTransform: 'uppercase' },
};

export const Disclaimer = () => (
  <footer style={styles.root}>
    <GlitchStripe height={4} delay={1.2} />
    <p style={styles.text}>* DISCLAIMER: BMI IS A GENERAL SHAPE ESTIMATION SYSTEM. NOT DIAGNOSTIC MEDICAL HARDWARE.</p>
  </footer>
);
