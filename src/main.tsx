import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const jumpStart = () => {
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

document.querySelector('#jump-start')?.addEventListener('click', (e: any) => {
  jumpStart();
  e.target.remove();
});
