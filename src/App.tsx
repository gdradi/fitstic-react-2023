import React from 'react';
import logo from './logo.svg';

export const App: React.FunctionComponent = () => {
  return (
    <div className="splash">
        <h1>Benvenuti al corso React 2023</h1>
        <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
};
