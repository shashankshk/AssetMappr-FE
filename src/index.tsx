import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const rootElement = document.getElementById('root')

// New as of React v18.x
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(rootElement!)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
