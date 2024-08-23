import { FC } from 'react';
import { Link } from 'wouter';

import { docsRoutes } from '../../routes';
import classes from './docsnav.module.css';

export const DocsNav: FC = () => (
  <nav className={classes.docsNav}>
    <header>Yeehaw Components</header>
    <div className={classes.links}>
      <Link to={docsRoutes.home()}>Home</Link>
      <Link to={docsRoutes.components()}>Components</Link>
      <div className={classes.nestedLinks}>
        <Link to={docsRoutes.conversationPit()}>Conversation Pit</Link>
      </div>
    </div>
  </nav>
);
