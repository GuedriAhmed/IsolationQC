import React from 'react';

const LoadingScreen = ({ inline = false }) => (
  <div
    className={`loading-screen${inline ? ' loading-screen--inline' : ''}`}
    role="status"
    aria-live="polite"
  >
    <span className="loading-screen__mark" aria-hidden="true">
      <span />
      <span />
      <span />
    </span>
    <h1 className="loading-screen__title">Isolation Québec</h1>
    <p className="loading-screen__credit">made by ahmed guedri</p>
    <span className="loading-screen__message">Préparation de votre visite…</span>
  </div>
);

export default LoadingScreen;
