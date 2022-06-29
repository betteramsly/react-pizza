
import './scss/app.scss'

import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import FullPizza from './pages/FullPizza'
import NotFound from './pages/NotFound'
import MainLayout from './layouts/MainLayout'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/:id" element={<FullPizza />} />
        <Route path="/not-found" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
