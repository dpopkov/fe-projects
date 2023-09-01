import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import AppV1 from './AppV1.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <AppV1 />
  </StrictMode>
);
