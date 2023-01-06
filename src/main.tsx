import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

type StateMachine = {
  current: 'normal' | 'linking';
};

export const globalState: StateMachine = { current: 'normal' };

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
