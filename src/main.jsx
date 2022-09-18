import React from 'react'
import ReactDOM from 'react-dom/client'
import { ConuterApp } from './ConuterApp'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConuterApp 
    value={0}
    />
  </React.StrictMode>
)
