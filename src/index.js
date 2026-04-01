import React from 'react';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// "proxy": "fableadtechnolabs.com/fablead_web",

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // basename='/fablead_web'
  <HelmetProvider>
    <BrowserRouter >
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </HelmetProvider>
);

// Register service worker for offline support and performance
serviceWorkerRegistration.register();

// import React from 'react';
// import './index.css';
// import App from './App';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter } from 'react-router-dom';
// import ReactDOM from 'react-dom/client';
// import { HelmetProvider } from 'react-helmet-async';
// import * as serviceWorkerRegistration from './serviceWorkerRegistration';

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <HelmetProvider>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </HelmetProvider>
// );

// // Register service worker
// serviceWorkerRegistration.register();

// const rootElement = document.getElementById("root");

// hydrate(
//   <BrowserRouter>
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   </BrowserRouter>
//   , rootElement);

// current
// const rootElement = document.getElementById("root");

// if (rootElement.hasChildNodes()) {
//   hydrate(<BrowserRouter >
//          <App />
//      </BrowserRouter>, rootElement);
// } else {
//   render(<BrowserRouter >
//          <App />
//       </BrowserRouter>, rootElement);
// }
