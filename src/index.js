import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // To aviod rendering things twice I removed <React.StrictMode>
  // https://andreasheissenberger.medium.com/react-components-render-twice-any-way-to-fix-this-91cf23961625
  
  <React.StrictMode>
    <App />
  </React.StrictMode>
);