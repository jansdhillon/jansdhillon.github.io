import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Sound from 'react-sound'
import LayerCake from 'assets/bg.mp3'
import './index.css'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
