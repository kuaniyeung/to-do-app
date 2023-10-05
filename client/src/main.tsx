import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  DialogProviders
} from "./components/ConfirmationDialog/ConfirmationDialogContext";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DialogProviders>

    <App />
    </DialogProviders>
  </React.StrictMode>,
)
