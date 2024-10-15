import type { FC } from 'react';
import { Route, Switch } from 'wouter';

import { ComponentDoc } from './components';
import {
  BasicConversationPitExample,
  BasicConversationPitExampleSnippet,
  MentionsConversationPitExample,
  MentionsPitExampleSnippet,
} from './examples';
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
              code={BasicConversationPitExampleSnippet}
              description='Conversation Pit in its simplest form, for basic, threaded chat.'
              key='basic-example'
              name='Basic example'
            >
              <BasicConversationPitExample />
            </ComponentDoc.ComponentExample>,
            <ComponentDoc.ComponentExample
              code={MentionsPitExampleSnippet}
              description='Want to allow users to @mention others users? Check out this example.'
              key='slack-style-mentions'
              name='Slack-style @mentions'
            >
              <MentionsConversationPitExample />
            </ComponentDoc.ComponentExample>,
          ]}
        />
      </Route>
      <Route path={docsRoutes.home()}>This is the home route</Route>
    </Switch>
  </DocsLayout>
);
