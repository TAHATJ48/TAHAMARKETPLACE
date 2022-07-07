import React from 'react'
import styled from 'styled-components'
import { Route, Routes } from 'react-router-dom'
import Products from '../pages/Products'
import Orders from '../pages/Orders'
import Register from '../pages/auth/Register'
import Login from '../pages/auth/Login'
import Logout from '../pages/auth/Logout'
import ProtectedRoute from '../components/ProtectedRoute'

const Main = () => {
  return (
    <MainWrapper>
      <Routes>


        <Route path='/' element={<Products/>} />
        <Route path='/Register' element={<Register/>} />
        <Route path='/Login' element={<Login/>} />

        <Route element={<ProtectedRoute />}> 
          <Route path='/Orders' element={<Orders/>} />
          <Route path='/Logout' element={<Logout/>} />
        </Route>
      </Routes>
      
    </MainWrapper>
  )
}

const MainWrapper = styled.main`
  max-width: 140rem;
  margin: 0 auto;
  padding: 4rem;
`

export default Main
