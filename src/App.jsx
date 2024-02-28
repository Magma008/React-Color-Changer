import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Name from './components/Name'
import RGB from './components/RGB'
import Hex from './components/Hex'

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/name' index element={<Name/>}/>
        <Route index element={<Name/>}/>
        <Route path='/rgb' element={<RGB/>}/>
        <Route path='/hex' element={<Hex/>}/>
      </Routes>
    </div>
  )
}

export default App