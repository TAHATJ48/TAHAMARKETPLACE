import React, { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from './Products/ProductCard'
import { setProducts } from '../state/actions/products'

const Products = () => {
  const products = useSelector((state) => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    loadProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const loadProducts = async () => {
    dispatch(setProducts(await fetchProducts()))
  }

  const fetchProducts = async () => {
    const response = await fetch('https://api.edu.etherial.dev/api/ecommerce/products')
    let dada = await response.json()
    return dada.data
  }


  const productCards = products.map((product) => (
    <ProductCard
      key={uuidv4()}
      id={product.id}
      name={product.name}
      price={product.price}
      picture={product.picture}
    />
  ))

  return <div className='prodswrap'>{productCards}</div>
}



export default Products
