import React from 'react';
import ReactDOM from 'react-dom/client';
import { DisplayCat, Greeting } from './App.jsx';
import './index.css';
const root:HTMLElement = document.getElementById('root')!;
 ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Greeting />
    <DisplayCat />
  </React.StrictMode>
);


