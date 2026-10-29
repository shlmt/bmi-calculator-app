import { CSSProperties } from 'react';
import { colors } from '../theme';

const styles: Record<string, CSSProperties> = {
  stripe: { display: 'flex', width: '100%', overflow: 'hidden' },
  cell: { flex: 1, display: 'flex', justifyContent: 'center' },
  bar: { width: 18, height: '100%', transform: 'rotate(15deg)' },
};

interface GlitchStripeProps {
  height: number;
  delay: number;
  count?: number;
}

export const GlitchStripe = ({ height, delay, count = 20 }: GlitchStripeProps) => (
  <div style={{ ...styles.stripe, height, animation: `glitch-in 0.3s linear ${delay}s both` }} aria-hidden="true">
    {Array.from({ length: count }, (_, i) => (
      <div key={i} style={styles.cell}>
        <div style={{ ...styles.bar, backgroundColor: i % 2 === 0 ? colors.accent : 'transparent' }} />
      </div>
    ))}
  </div>
);
