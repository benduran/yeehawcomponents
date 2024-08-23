import './css/docs.css';

import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import { DocsRouter } from './router.js';

const elem = document.getElementById('root')!;

const root = ReactDOM.createRoot(elem);
root.render(
  <StrictMode>
    <DocsRouter />
  </StrictMode>,
);
