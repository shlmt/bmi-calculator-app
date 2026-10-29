import { CSSProperties } from 'react';
import { card, colors, radius, space, text, weights } from '../theme';
import { BmiCategory } from '../utils/bmi';
import { BmiScale } from './BmiScale';

const styles: Record<string, CSSProperties> = {
  root: {
    ...card,
    display: 'flex',
    flexDirection: 'column',
    gap: space.lg,
    padding: space.xl,
    borderBottomRightRadius: radius.lg,
  },
  topRow: { display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
  title: text('mono', 12, colors.textMuted),
  badge: {
    ...text('display', 11, colors.onAccent, weights.extraBold),
    backgroundColor: colors.accent,
    borderRadius: radius.sm,
    padding: `${space.xs}px 10px`,
  },
  valueRow: { display: 'flex', alignItems: 'center', gap: space.lg },
  value: { ...text('display', 54, colors.accent, weights.black), transformOrigin: 'center' },
  message: { ...text('mono', 11, colors.textMuted), flex: 1 },
  divider: { height: 1, backgroundColor: colors.border },
};

interface ResultPanelProps {
  bmi: number;
  category: BmiCategory;
}

export const ResultPanel = ({ bmi, category }: ResultPanelProps) => (
  <section style={styles.root}>
    <div style={styles.topRow}>
      <p style={styles.title}>INDEX CALCULATED</p>
      <span style={styles.badge}>{category.label}</span>
    </div>
    <div style={styles.valueRow}>
      <p key={bmi.toFixed(1)} style={{ ...styles.value, animation: 'value-pulse 0.5s ease-out' }}>
        {bmi.toFixed(1)}
      </p>
      <p style={styles.message}>{category.message}</p>
    </div>
    <div style={styles.divider} />
    <BmiScale active={category.key} />
  </section>
);
