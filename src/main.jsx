import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Provider} from 'react-redux'
import store from './compenents/store/store.js'
import LanguageProvider from './context/LanguageContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>
    <Provider store={store}>
      <App />
    </Provider>
    </LanguageProvider>

  </StrictMode>,
)
