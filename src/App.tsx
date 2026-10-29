import { CSSProperties } from 'react';
import { Entrance } from './components/Entrance';
import { CalculateButton } from './components/CalculateButton';
import { Disclaimer } from './components/Disclaimer';
import { GlitchStripe } from './components/GlitchStripe';
import { Header } from './components/Header';
import { HudCard } from './components/HudCard';
import { ResultPanel } from './components/ResultPanel';
import { StepperCard } from './components/StepperCard';
import { useBmi } from './hooks/useBmi';
import { colors, radius, space } from './theme';

const styles: Record<string, CSSProperties> = {
  page: { minHeight: '100vh', backgroundColor: colors.background },
  app: {
    maxWidth: 402,
    margin: '0 auto',
    padding: `${space.xl}px ${space.xl}px 38px`,
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    gap: space.lg,
  },
  inputs: { display: 'flex', gap: space.md },
  inputSlot: { flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' },
};

const App = () => {
  const { weight, height, bmi, category, calculate } = useBmi();

  return (
    <div style={styles.page}>
      <main style={styles.app}>
        <GlitchStripe height={8} delay={0.1} />
        <Entrance x={-40} delay={0.1} duration={0.5}>
          <Header />
        </Entrance>
        <Entrance scale={0.85} delay={0.2} duration={0.5}>
          <HudCard status={category.hudStatus} />
        </Entrance>
        <div style={styles.inputs}>
          <Entrance y={30} delay={0.4} duration={0.45} style={styles.inputSlot}>
            <StepperCard
              label="WEIGHT"
              unit="KG"
              value={weight.value}
              onIncrement={weight.increment}
              onDecrement={weight.decrement}
              cornerRadius={{ borderTopRightRadius: radius.md }}
            />
          </Entrance>
          <Entrance y={30} delay={0.5} duration={0.45} style={styles.inputSlot}>
            <StepperCard
              label="HEIGHT"
              unit="CM"
              value={height.value}
              onIncrement={height.increment}
              onDecrement={height.decrement}
              cornerRadius={{ borderTopLeftRadius: radius.md }}
            />
          </Entrance>
        </div>
        <Entrance y={20} scale={0.9} delay={0.65} duration={0.3}>
          <CalculateButton onClick={calculate} />
        </Entrance>
        <Entrance y={40} scale={0.95} delay={0.8} duration={0.5}>
          <ResultPanel bmi={bmi} category={category} />
        </Entrance>
        <Entrance delay={1.1} duration={0.4}>
          <Disclaimer />
        </Entrance>
      </main>
    </div>
  );
};

export default App;
