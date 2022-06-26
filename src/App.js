import React from 'react'

import './scss/app.scss'

import { Routes, Route } from 'react-router-dom'
import { Header } from './components'
import Home from './pages/Home'
import Cart from './pages/Cart'
import NotFound from './pages/NotFound'

export const SearchContext = React.createContext()

function App() {
  const [searchValue, setSearchValue] = React.useState('')

  return (
    <div className="wrapper">
      <SearchContext.Provider
        value={{
          searchValue,
          setSearchValue,
        }}
      >
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home searchValue={searchValue} />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/not-found" element={<NotFound />} />
          </Routes>
        </div>
      </SearchContext.Provider>
    </div>
  )
}

export default App
