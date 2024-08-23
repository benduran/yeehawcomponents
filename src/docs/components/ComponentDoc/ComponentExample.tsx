import type { ReactNode } from 'react';

import classes from './componentdoc.module.css';

export interface ComponentExampleProps {
  children: ReactNode;
  /**
   * Detailed description about the example
   */
  description: React.ReactNode;
  /**
   * Human-friendly name of the example
   */
  name: string;
}

export function ComponentExample({ children, description, name }: ComponentExampleProps) {
  return (
    <div className={classes.componentExampleRoot} id={name}>
      <h3 className={classes.componentExampleName}>{name}</h3>
      <div id={`${name}-description`}>{description}</div>
      {children}
    </div>
  );
}
