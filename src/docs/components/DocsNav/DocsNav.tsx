import { FC } from 'react';
import { Link } from 'wouter';

import { docsRoutes } from '../../routes';
import { styles } from './styles';

export const DocsNav: FC = () => (
  <nav className={styles.docsNav}>
    <header>Yeehaw Components</header>
    <div className={styles.links}>
      <Link to={docsRoutes.home()}>Home</Link>
      <Link to={docsRoutes.components()}>Components</Link>
      <div className={styles.nestedLinks}>
        <Link to={docsRoutes.conversationPit()}>Conversation Pit</Link>
      </div>
    </div>
  </nav>
);
