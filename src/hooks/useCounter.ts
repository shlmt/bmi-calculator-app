import { useCallback, useState } from 'react';

export const useCounter = (initial: number, min: number, max: number) => {
  const [value, setValue] = useState(initial);

  const increment = useCallback(() => setValue((v) => Math.min(v + 1, max)), [max]);
  const decrement = useCallback(() => setValue((v) => Math.max(v - 1, min)), [min]);

  return { value, increment, decrement };
};
