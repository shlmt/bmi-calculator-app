import { CSSProperties } from 'react';
import chevron from '../assets/chevron-right.svg';
import { colors, radius, space, text, weights } from '../theme';

const styles: Record<string, CSSProperties> = {
  button: {
    width: '100%',
    height: 56,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: space.sm,
    border: 'none',
    cursor: 'pointer',
    backgroundColor: colors.accent,
    borderTopRightRadius: radius.lg,
    boxShadow: `0 4px 8px ${colors.accentGlow}`,
    ...text('display', 16, colors.onAccent, weights.black),
  },
  icon: { width: 20, height: 20 },
};

interface CalculateButtonProps {
  onClick: () => void;
}

export const CalculateButton = ({ onClick }: CalculateButtonProps) => (
  <button type="button" style={styles.button} onClick={onClick}>
    CALCULATE BODY
    <img src={chevron} alt="" style={styles.icon} />
  </button>
);
