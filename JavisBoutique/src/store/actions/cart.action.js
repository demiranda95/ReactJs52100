import { URL_API } from '../../constants/database'

export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const CONFIRM_CART = 'CONFIRM_CART'
export const FETCH_ORDERS = 'FETCH_ORDERS'

export const addToCart = (product, quantity) => ({
	type: ADD_TO_CART,
	payload: {
		product,
		quantity,
	},
})

export const removeFromCart = (productId) => ({
	type: REMOVE_FROM_CART,
	productId,
})

export const confirmCart = (items, total) => {
	return async (dispatch) => {
		try {
			const response = await fetch(`${URL_API}/orders.json`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					date: Date.now(),
					items: { ...items },
					total,
				}),
			})
			const result = await response.json()
			console.log(result)
			dispatch({
				type: CONFIRM_CART,
				confirm: true,
			})
		} catch (error) {
			console.log(error)
		}
	}
}

export const fetchOrders = () => {
	return async (dispatch) => {
		try {
			const response = await fetch(`${URL_API}/orders.json`)
			const result = await response.json()
			const orders = Object.keys(result).map((key) => ({
				id: key,
				...result[key],
			}))
			dispatch({
				type: FETCH_ORDERS,
				payload: orders,
			})
		} catch (error) {
			console.log(error)
		}
	}
}
