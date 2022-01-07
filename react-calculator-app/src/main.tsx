import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { CalculatorStateProvider } from './context/CalculatorContext'

ReactDOM.render(
  <React.StrictMode>
    <CalculatorStateProvider>
      <App />
    </CalculatorStateProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
