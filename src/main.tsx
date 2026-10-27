import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { MaxUI } from '@maxhub/max-ui';
import '@maxhub/max-ui/dist/styles.css';
import './styles/index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MaxUI platform="ios" colorScheme="dark">
      <App />
    </MaxUI>
  </StrictMode>
);