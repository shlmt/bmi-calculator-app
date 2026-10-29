import { CSSProperties } from 'react';
import minus from '../assets/minus.svg';
import plus from '../assets/plus.svg';
import { card, colors, radius, space, text, weights } from '../theme';

const styles: Record<string, CSSProperties> = {
  root: {
    ...card,
    flex: 1,
    minWidth: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: space.sm,
    padding: space.lg,
  },
  label: { ...text('mono', 11, colors.textMuted, weights.bold), textTransform: 'uppercase' },
  valueRow: { display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' },
  value: text('display', 32, colors.text, weights.extraBold),
  unit: text('mono', 14, colors.accent, weights.bold),
  buttons: { display: 'flex', gap: space.sm, paddingTop: space.xs },
  button: {
    flex: 1,
    height: 32,
    border: 'none',
    borderRadius: radius.sm,
    backgroundColor: colors.surfaceAlt,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: { width: 14, height: 14 },
};

interface StepperCardProps {
  label: string;
  unit: string;
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
  cornerRadius: CSSProperties;
}

export const StepperCard = ({ label, unit, value, onIncrement, onDecrement, cornerRadius }: StepperCardProps) => (
  <div style={{ ...styles.root, ...cornerRadius }}>
    <p style={styles.label}>{label}</p>
    <div style={styles.valueRow}>
      <p style={styles.value}>{value}</p>
      <p style={styles.unit}>{unit}</p>
    </div>
    <div style={styles.buttons}>
      <button type="button" style={styles.button} onClick={onDecrement} aria-label={`Decrease ${label}`}>
        <img src={minus} alt="" style={styles.icon} />
      </button>
      <button type="button" style={styles.button} onClick={onIncrement} aria-label={`Increase ${label}`}>
        <img src={plus} alt="" style={styles.icon} />
      </button>
    </div>
  </div>
);
