import { CSSProperties } from 'react';
import marker from '../assets/marker.svg';
import { colors, radius, space, text, weights } from '../theme';
import { BMI_CATEGORIES, BmiCategoryKey } from '../utils/bmi';

const styles: Record<string, CSSProperties> = {
  root: { display: 'flex', gap: space.xs },
  segment: { flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: space.xs },
  bar: { width: '100%', height: 8, borderRadius: radius.xs },
  marker: { width: 8, height: 6, transform: 'rotate(180deg)', marginTop: -2 },
};

interface BmiScaleProps {
  active: BmiCategoryKey;
}

export const BmiScale = ({ active }: BmiScaleProps) => (
  <div style={styles.root}>
    {BMI_CATEGORIES.map(({ key, label }) => {
      const isActive = key === active;
      return (
        <div key={key} style={styles.segment}>
          <div style={{ ...styles.bar, backgroundColor: isActive ? colors.accent : colors.surfaceAlt }} />
          {isActive && <img src={marker} alt="" style={styles.marker} />}
          <span
            style={text('mono', 9, isActive ? colors.accent : colors.textMuted, isActive ? weights.bold : weights.regular)}
          >
            {label}
          </span>
        </div>
      );
    })}
  </div>
);
