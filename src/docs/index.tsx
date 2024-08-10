import './css/docs.css';

import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import { DocsRouter } from './routes.js';

const elem = document.getElementById('root')!;

const root = ReactDOM.createRoot(elem);
root.render(
  <StrictMode>
    <DocsRouter />
  </StrictMode>,
);
