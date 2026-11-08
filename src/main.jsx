import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import '@/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
);

const startupLoader = document.getElementById('startup-loader');
if (startupLoader) {
  window.setTimeout(() => {
    startupLoader.classList.add('is-hidden');
    window.setTimeout(() => startupLoader.remove(), 400);
  }, 850);
}
