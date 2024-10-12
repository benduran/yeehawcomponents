import type { ReactNode } from 'react';

import { ComponentExample } from './ComponentExample';
import { styles } from './styles';

export interface ComponentDocProps {
  /**
   * Name of the component being documented
   */
  componentName: string;

  /**
   * List of examples to render to the user
   */
  examples: ReactNode[];
}

export function ComponentDoc({ componentName, examples }: ComponentDocProps) {
  return (
    <div className={styles.componentDocRoot}>
      <h1>{componentName}</h1>
      {examples}
    </div>
  );
}

ComponentDoc.displayName = 'ComponentDoc';

ComponentDoc.ComponentExample = ComponentExample;
