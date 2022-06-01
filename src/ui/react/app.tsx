import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './components/App'
import Home from './routes/home'
import '../../styles/app.scss'
import About from './routes/about'

export default function startReact() {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <HelmetProvider>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
            </Route>
          </Routes>
        </HelmetProvider>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  )
}
