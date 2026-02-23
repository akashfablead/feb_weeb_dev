import React from 'react';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// "proxy": "fableadtechnolabs.com/fablead_web",

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // basename='/fablead_web'
  <BrowserRouter >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

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
