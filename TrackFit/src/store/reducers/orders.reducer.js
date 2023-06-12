import { GET_ORDERS } from '../actions/orders.action'

const initial_state = {
	list: [],
}

const OrdersReducer = (state = initial_state, action) => {
	switch (action.type) {
		case GET_ORDERS:
			return { ...state, list: action.payload }
		default:
			return state
	}
}

export default OrdersReducer
