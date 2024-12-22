import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { TypingProvider } from './context/TypingContext';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TypingProvider>
      <App />
    </TypingProvider>
  </StrictMode>
);