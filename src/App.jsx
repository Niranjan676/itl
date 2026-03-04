import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreateInvoice from './pages/CreateInvoice'


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<CreateInvoice />}/>
      </Routes>
    </div>
  )
}

export default App
