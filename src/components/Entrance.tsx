import { CSSProperties, ReactNode } from 'react';

interface EntranceProps {
  children: ReactNode;
  delay: number;
  duration: number;
  x?: number;
  y?: number;
  scale?: number;
  style?: CSSProperties;
}

// Timings come from the Figma entrance timeline; keyframes live in index.css.
export const Entrance = ({ children, delay, duration, x = 0, y = 0, scale = 1, style }: EntranceProps) => (
  <div
    style={
      {
        '--from-x': `${x}px`,
        '--from-y': `${y}px`,
        '--from-scale': scale,
        animation: `enter ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s both`,
        ...style,
      } as CSSProperties
    }
  >
    {children}
  </div>
);
