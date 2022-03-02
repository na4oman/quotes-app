import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'
import { httpApi } from './services/http'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApiProvider api={httpApi}>
        <App />
      </ApiProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
