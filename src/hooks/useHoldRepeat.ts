import { MouseEvent, useCallback, useEffect, useRef } from 'react';

const INITIAL_DELAY_MS = 400;
const REPEAT_INTERVAL_MS = 70;

// Fires once on press, then repeatedly while the pointer is held down.
export const useHoldRepeat = (action: () => void) => {
  const actionRef = useRef(action);
  actionRef.current = action;
  const timer = useRef<number | undefined>(undefined);

  const stop = useCallback(() => {
    window.clearTimeout(timer.current);
    window.clearInterval(timer.current);
  }, []);

  const start = useCallback(() => {
    stop();
    actionRef.current();
    timer.current = window.setTimeout(() => {
      timer.current = window.setInterval(() => actionRef.current(), REPEAT_INTERVAL_MS);
    }, INITIAL_DELAY_MS);
  }, [stop]);

  useEffect(() => stop, [stop]);

  return {
    onPointerDown: start,
    onPointerUp: stop,
    onPointerLeave: stop,
    onPointerCancel: stop,
    // Keyboard activation only: pointer clicks are already handled on pointerdown.
    onClick: (e: MouseEvent) => e.detail === 0 && actionRef.current(),
  };
};
