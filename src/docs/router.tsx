import type { FC } from 'react';
import { Route, Switch } from 'wouter';

import { ComponentDoc } from './components';
import { BasicConversationPitExample } from './examples';
import { DocsLayout } from './layouts';
import { docsRoutes } from './routes';

export const DocsRouter: FC = () => (
  <DocsLayout>
    <Switch>
      <Route path={docsRoutes.conversationPit()}>
        <ComponentDoc
          componentName='Conversation Pit'
          examples={[
            <ComponentDoc.ComponentExample
              description='Conversation Pit in its simplest form, for basic, threaded chat.'
              key='basic-example'
              name='Basic example'
            >
              <BasicConversationPitExample />
            </ComponentDoc.ComponentExample>,
          ]}
        />
      </Route>
      <Route path={docsRoutes.home()}>This is the home route</Route>
    </Switch>
  </DocsLayout>
);
