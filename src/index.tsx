import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
/*<HelmetProvider>
      <Helmet>
        <meta name="viewport" content="width=640" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
        <script defer src="https://code.createjs.com/1.0.0/createjs.min.js"></script>
        <script defer src="https://cdnjs.cloudflare.com/ajax/libs/processing.js/1.6.6/processing.min.js"></script>
        <script src="https://code.jquery.com/jquery-2.2.4.js" integrity="sha256-iT6Q9iMJYuQiMWNd9lDyBUStIq/8PuOW33aOqmvFpqI="></script>
        <script defer src="https://sigumataityouda.netlify.app/back/sls.js"></script>
        <script defer src="https://sigumataityouda.netlify.app/back/ws.js"></script>
        <script defer src="https://sigumataityouda.netlify.app/back/4saw.js"></script>
      </Helmet>
    </HelmetProvider>*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
