/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import { useCallback, useEffect, useRef } from 'react';

/**
 * Creates a stable callback that needs no
 * dependencies, as the callback will properly capture
 * all required variables. Use this in a callback
 * that responds to some user input.
 */
export function useEventCallback<T extends Function>(callback: T) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  });

  // @ts-expect-error - Silence! We don't really care about the typing too much
  return useCallback<T>((...args) => callbackRef.current(...args), []);
}
