import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../state/actions/cart'

const ProductCard = ({ id, name, price, picture, category }) => {
  const product = { id, name, price, picture, category }
  const dispatch = useDispatch()

  return (
    <div className='prodwrap'>
      <div className='imgcon'>
        <img className='productimg' src={picture} alt={name}/>
      </div>
      <div className='details2'>
        <div className='info'>
          <div className='total'>{name}</div>
          <div>${price.toFixed(2)}</div>
        </div>
                <button className='closebtn'
          onClick={() => dispatch(addToCart(product))}
          >
          Add To Cart
        </button>
      </div>
    </div>
  )
}

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  picture: PropTypes.string.isRequired,
  category: PropTypes.string,
}

export default ProductCard
