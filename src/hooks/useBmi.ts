import { useState } from 'react';
import { calculateBmi, getBmiCategory } from '../utils/bmi';
import { useCounter } from './useCounter';

const DEFAULT_WEIGHT = 72;
const DEFAULT_HEIGHT = 181;

export const useBmi = () => {
  const weight = useCounter(DEFAULT_WEIGHT, 30, 250);
  const height = useCounter(DEFAULT_HEIGHT, 100, 250);
  const [bmi, setBmi] = useState(() => calculateBmi(DEFAULT_WEIGHT, DEFAULT_HEIGHT));

  const calculate = () => setBmi(calculateBmi(weight.value, height.value));

  return { weight, height, bmi, category: getBmiCategory(bmi), calculate };
};
