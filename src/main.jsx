import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { AuthContextProvider } from './Context/AuthUserContextProvider.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ApiContextProvider } from './Context/API/ApiContextProvider.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <GoogleOAuthProvider clientId='468516191981-jpekhlt04e28kv3ltf2jjer1qm8pot0d.apps.googleusercontent.com'>
        <ApiContextProvider>
          <App />
        </ApiContextProvider>
      </GoogleOAuthProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
