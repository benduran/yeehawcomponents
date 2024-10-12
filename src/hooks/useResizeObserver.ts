import { useEffect } from 'react';

import { Nullish } from '../types';

/**
 * Binds a resize observer to a specific element
 * and executes your provided callback when the element's dimensions change
 */
export function useResizeObserver(elem: Nullish<HTMLElement>, callback: ResizeObserverCallback) {
  /** effects */
  useEffect(() => {
    if (!elem) return;

    let o: Nullish<ResizeObserver> = new ResizeObserver(callback);
    o.observe(elem);

    return () => {
      o?.disconnect();
      o = null;
    };
  }, [callback, elem]);
}
