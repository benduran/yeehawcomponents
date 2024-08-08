import React from 'react';
import ReactDOM from 'react-dom/client';

import { ConversationPit } from '../components/index.js';

const elem = document.getElementById('root')!;

const root = ReactDOM.createRoot(elem);
root.render(
  <div>
    <ConversationPit
      messages={[
        {
          id: 'some-id',
          message: 'boop boop',
        },
      ]}
    />
  </div>,
);
