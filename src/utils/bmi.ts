export type BmiCategoryKey = 'under' | 'normal' | 'over' | 'obese';

export interface BmiCategory {
  key: BmiCategoryKey;
  label: string;
  hudStatus: string;
  message: string;
  maxBmi: number;
}

export const BMI_CATEGORIES: BmiCategory[] = [
  { key: 'under', label: 'UNDER', hudStatus: 'LOW MASS', message: 'YOUR PHYSICAL RATIO IS BELOW TARGET. TIME TO FUEL UP.', maxBmi: 18.5 },
  { key: 'normal', label: 'NORMAL', hudStatus: 'OPTIMAL RANGE', message: 'YOUR PHYSICAL RATIO IS IN EXCELLENT RECOVERY ZONE.', maxBmi: 25 },
  { key: 'over', label: 'OVER', hudStatus: 'ELEVATED MASS', message: 'YOUR PHYSICAL RATIO IS ABOVE TARGET. KEEP MOVING.', maxBmi: 30 },
  { key: 'obese', label: 'OBESE', hudStatus: 'CRITICAL MASS', message: 'YOUR PHYSICAL RATIO IS WELL ABOVE TARGET. START NOW.', maxBmi: Infinity },
];

export const calculateBmi = (weightKg: number, heightCm: number): number => {
  const heightM = heightCm / 100;
  return weightKg / (heightM * heightM);
};

export const getBmiCategory = (bmi: number): BmiCategory =>
  BMI_CATEGORIES.find((category) => bmi < category.maxBmi) ?? BMI_CATEGORIES[BMI_CATEGORIES.length - 1];
