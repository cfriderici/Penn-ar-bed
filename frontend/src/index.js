import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// CUSTOM COMTEXT HOOK
import { SocialAppContextProvider } from "./providers/SocialAppContext";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SocialAppContextProvider>
      <App />
    </SocialAppContextProvider>
  </React.StrictMode>
);
