import { useCallback } from 'react';

/**
 * Creates a function that can be used to concatenate one or more CSS class names.
 * Will ensure the component's display name is always added as an
 * easily-identifiable classname
 */
export function useMakeCx(libName: string, componentDisplayName: string) {
  return useCallback((...classList: Array<boolean | null | string | undefined>) => {
    let out = '';

    for (const entry of classList) {
      if (entry) out += ` ${entry}`;
    }

    return `${out.trim()} ${libName}-${componentDisplayName}`;
  }, []);
}
