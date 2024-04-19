import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="507185982911-p3ri6j87629qfv4tpj7mkebpi5onc4um.apps.googleusercontent.com">
      <BrowserRouter>
         <App />
      </BrowserRouter>
    </GoogleOAuthProvider>

  </React.StrictMode>,
)
