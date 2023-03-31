import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ApplicationProvider from './context/ApplicationProvider';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApplicationProvider>
    <App />
  </ApplicationProvider>,
)
