import type { FC } from 'react';
import { Route, Switch } from 'wouter';

import { DocsLayout } from './layouts';

export const docsRoutes = {
  conversationPit: () => '/components/conversationpit',
  home: () => '/',
};

export const DocsRouter: FC = () => (
  <DocsLayout>
    <Switch>
      <Route path={docsRoutes.conversationPit()}>Conversation Pit Route</Route>
      <Route path={docsRoutes.home()}>This is the home route</Route>
    </Switch>
  </DocsLayout>
);
