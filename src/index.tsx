import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import "./app.scss";

// Importazione dei file di ripasso typescript
// il percorso di importazione è relativo a questo file
// import "./typescript/ripasso";
// import "./typescript/oop";
import "./typescript/interfacce";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);