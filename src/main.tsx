import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Clock from './App';
const root: HTMLElement = document.getElementById('root')!;
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Clock />
  </React.StrictMode>
);
