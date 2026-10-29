import { CSSProperties } from 'react';
import wireframe from '../assets/hud-wireframe.png';
import { colors, radius, space, text, weights } from '../theme';

const styles: Record<string, CSSProperties> = {
  root: {
    display: 'flex',
    height: 160,
    boxSizing: 'border-box',
    overflow: 'hidden',
    backgroundColor: colors.surface,
    border: `1px solid ${colors.accent}`,
    borderTopLeftRadius: radius.md,
  },
  image: { width: 180, height: '100%', objectFit: 'cover', flexShrink: 0 },
  info: {
    flex: 1,
    minWidth: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: space.lg,
    borderLeft: `1px solid ${colors.border}`,
  },
  group: { display: 'flex', flexDirection: 'column', gap: 2 },
  label: text('mono', 9, colors.textMuted),
  target: text('display', 12, colors.text, weights.bold),
  statusRow: { display: 'flex', alignItems: 'center', gap: space.xs },
  statusDot: { width: 8, height: 8, backgroundColor: colors.accent },
  status: text('mono', 12, colors.accent, weights.bold),
  coords: text('mono', 10, colors.text),
};

interface HudCardProps {
  status: string;
}

export const HudCard = ({ status }: HudCardProps) => (
  <section style={styles.root}>
    <img src={wireframe} alt="" style={styles.image} />
    <div style={styles.info}>
      <div style={styles.group}>
        <p style={styles.label}>SCAN TARGET</p>
        <p style={styles.target}>MALE_19_Y</p>
      </div>
      <div style={styles.group}>
        <p style={styles.label}>INDEX STATUS</p>
        <div style={styles.statusRow}>
          <span style={styles.statusDot} />
          <p style={styles.status}>{status}</p>
        </div>
      </div>
      <div style={styles.group}>
        <p style={styles.label}>GRID LOCK</p>
        <p style={styles.coords}>LAT_52.52 // LNG_13.40</p>
      </div>
    </div>
  </section>
);
