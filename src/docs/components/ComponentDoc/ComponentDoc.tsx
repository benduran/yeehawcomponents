import type { ReactNode } from 'react';

import classes from './componentdoc.module.css';
import { ComponentExample } from './ComponentExample';

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
    <div className={classes.componentDocRoot}>
      <h1>{componentName}</h1>
      {examples}
    </div>
  );
}

ComponentDoc.displayName = 'ComponentDoc';

ComponentDoc.ComponentExample = ComponentExample;
