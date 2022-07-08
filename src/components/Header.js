import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { openCart } from '../state/actions'
import NavAuth from './navauth'
const Header = () => {
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  const sumQuantity = () => {
    return cart.reduce((quantity, cartItem) => quantity + cartItem.quantity, 0)
  }


  return (
    <div style={{background:"black"}}>
      <div className='container'>
        <Link to="/">
          <div style={{fontSize: "6rem", color:"white"}}>Taha's Market</div>
        </Link>
        <nav>
          <NavAuth />
          <div className='btnContainer' onClick={() => dispatch(openCart())}>
            <button style={{color: "white",background:"black"}} ><FaShoppingCart /></button>
            {sumQuantity() > 0 ? <div className='quantity'>{sumQuantity()}</div> : ''}
          </div>
        </nav>
      </div>
    </div>
  )
}









export default Header
