import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from "@material-tailwind/react";

import App from './App.jsx'

import './index.css';
import './assets/global.css';



ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <ThemeProvider>
    <App />
    <BrowserRouter/>
    </ThemeProvider>
  </React.StrictMode>,
)
