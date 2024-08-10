import { FC, ReactNode } from 'react';

import classes from './docslayout.module.css';

export const DocsLayout: FC<{ children: ReactNode | ReactNode[] }> = ({ children }) => (
  <main className={classes.docsLayout} id='docs-layout'>
    {children}
  </main>
);
