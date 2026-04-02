//import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/layout/Header'
import BottomNav from './components/layout/BottomNav'
import FridgePage from './components/fridge/FridgePage'
import RecipePage from './components/recipe/RecipePage'
import LogPage from './components/log/LogPage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <main className="app-content">
          <Routes>
            <Route path="/" element={<Navigate to="/fridge" />} />
            <Route path="/fridge" element={<FridgePage />} />
            <Route path="/recipe" element={<RecipePage />} />
            <Route path="/log" element={<LogPage />} />
          </Routes>
        </main>
        <BottomNav />
      </div>
    </BrowserRouter>
  )
}

export default App