import { FC, ReactNode } from 'react';

import { DocsNav } from '../../components';
import classes from './docslayout.module.css';

export const DocsLayout: FC<{ children: ReactNode | ReactNode[] }> = ({ children }) => (
  <main className={classes.docsLayout} id='docs-layout'>
    <div className={classes.docsContent}>
      <DocsNav />
      <article>{children}</article>
    </div>
  </main>
);
