import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    <iframe id="ifover" src="https://maguro-tai.netlify.app/back/test.html" scrolling="no"></iframe>
  </React.StrictMode>
);
reportWebVitals();
