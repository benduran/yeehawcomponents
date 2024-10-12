import { FC, ReactNode } from 'react';

import { DocsNav } from '../../components';
import { styles } from './styles';

export const DocsLayout: FC<{ children: ReactNode | ReactNode[] }> = ({ children }) => (
  <main className={styles.docsLayout} id='docs-layout'>
    <div className={styles.docsContent}>
      <DocsNav />
      <article>{children}</article>
    </div>
  </main>
);
