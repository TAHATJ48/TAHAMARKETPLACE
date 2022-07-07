import { SET_ORDERS } from '../../constants/actionTypes'

const setOrders = (orders) => {
  return {
    type: SET_ORDERS,
    payload: orders,
  }
}

export { setOrders }
