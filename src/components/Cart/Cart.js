import React from 'react'
import styled, { css } from 'styled-components'
import { v4 as uuidv4 } from 'uuid'
import { useSelector, useDispatch } from 'react-redux'
import CardItemCard from './CartItemCard'
import { closeCart } from '../../state/actions'

const Cart = () => {
  const cart = useSelector((state) => state.cart)
  const isCartOpen = useSelector((state) => state.isCartOpen)
  const dispatch = useDispatch()

  const sumTotal = () => {
    return cart
      .reduce(
        (total, cartItem) => total + cartItem.price * cartItem.quantity,
        0
      )
      .toFixed(2)
  }

  const cartItems = cart.map((cartItem) => (
    <CardItemCard
      key={uuidv4()}
      id={cartItem.id}
      name={cartItem.name}
      price={cartItem.price}
      picture={cartItem.picture}
      quantity={cartItem.quantity}
    ></CardItemCard>
  ))

  return (
    <>
      <CartWrapper isOpen={isCartOpen}>
        <div className='cart'>Your shopping cart</div>
        <div className='products'>{cartItems}</div>
        <div className='total'>Total: ${sumTotal()}</div>

        <button className='checkbtn'>
          Order
        </button>
        <button className='closebtn'
          onClick={() => dispatch(closeCart())}
        >
          Close
        </button>
      </CartWrapper>
    </>
  )
}

const CartWrapper = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  right: -110%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  width: 59rem;
  height: 100%;
  padding: 6rem;
  background-color: #fff;
  font-size: 3rem;
  transition: right 0.85s ease-in-out;

  ${({ isOpen }) =>
    isOpen &&
    css`
      right: 0;
    `}

  @media (max-width: 480px) {
    width: 100%;
  }
`



export default Cart
