import React from 'react'
import Signin from './components/Signin'
import CreateAccount from './components/CreateAccount'
import { Route, Routes } from 'react-router-dom'
import Main from './components/Main'

const App = () => {
  return (
    // <Signin />
    <Routes>
      <Route path='/' element={<Main />}/>
      <Route path='/signup' element={<CreateAccount />}/>
      <Route path='/login' element={<Signin />}/>
    </Routes>
  )
}

export default App