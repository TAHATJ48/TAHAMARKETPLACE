import React from 'react'
import PropTypes from 'prop-types'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../../state/actions'

const CardItemCard = ({ id, name, price, picture, quantity }) => {
  const cartItem = { id,  name, price, picture, quantity }
  const product = { id, name, price, picture }
  const dispatch = useDispatch()

  const formatName = (name) => {
    return name.length <= 14 ? name : name.substr(0, 14) + '...'
  }

  const sumPrice = () => {
    return (cartItem.price * cartItem.quantity).toFixed(2)
  }

  return (
    <div className='itemwrap'>
      <div className='imagecontainer'>
        <img className='image' src={picture} alt={name}></img>
      </div>
      <div className='details'>
        <div className='itemname'>{formatName(name)}</div>
        <div>${sumPrice()}</div>
        <div className='amountchange'>
          <button className='change'onClick={() => dispatch(removeFromCart(product))}>
            <FaMinus />
            </button>
          <div>{cartItem.quantity}</div>
          <button className='change'onClick={() => dispatch(addToCart(product))}>
            <FaPlus />
            </button>
        </div>
      </div>
    </div>
  )
}

CardItemCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  picture: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
}











export default CardItemCard
