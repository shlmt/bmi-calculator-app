import { CSSProperties } from 'react';
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
};

const App = () => {
  const { weight, height, bmi, category, calculate } = useBmi();

  return (
    <div style={styles.page}>
      <main style={styles.app}>
        <GlitchStripe height={8} />
        <Header />
        <HudCard status={category.hudStatus} />
        <div style={styles.inputs}>
          <StepperCard
            label="WEIGHT"
            unit="KG"
            value={weight.value}
            onIncrement={weight.increment}
            onDecrement={weight.decrement}
            cornerRadius={{ borderTopRightRadius: radius.md }}
          />
          <StepperCard
            label="HEIGHT"
            unit="CM"
            value={height.value}
            onIncrement={height.increment}
            onDecrement={height.decrement}
            cornerRadius={{ borderTopLeftRadius: radius.md }}
          />
        </div>
        <CalculateButton onClick={calculate} />
        <ResultPanel bmi={bmi} category={category} />
        <Disclaimer />
      </main>
    </div>
  );
};

export default App;
