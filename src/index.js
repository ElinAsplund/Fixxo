import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // To aviod double rendering I removed <React.StrictMode>
  // https://andreasheissenberger.medium.com/react-components-render-twice-any-way-to-fix-this-91cf23961625
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);