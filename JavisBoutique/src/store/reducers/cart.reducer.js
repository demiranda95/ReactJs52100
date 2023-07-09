const initialState = {
	cartItems: [],
	orders: [],
}

const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_TO_CART':
			const { product, quantity } = action.payload
			const existingItem = state.cartItems.find((item) => item.product.id === product.id)

			if (existingItem) {
				const updatedItems = state.cartItems.map((item) => {
					if (item.product.id === product.id) {
						return {
							...item,
							quantity: item.quantity + quantity,
						}
					}
					return item
				})

				console.log('Productos en el carrito:', updatedItems)

				return {
					...state,
					cartItems: updatedItems,
				}
			} else {
				const newItem = {
					product,
					quantity,
				}

				console.log('Productos en el carrito:', [...state.cartItems, newItem])

				return {
					...state,
					cartItems: [...state.cartItems, newItem],
				}
			}
		case 'REMOVE_FROM_CART':
			const productId = action.payload
			const updatedItems = state.cartItems.filter((item) => item.product.id !== productId)
			return {
				...state,
				cartItems: updatedItems,
			}
		case 'CONFIRM_CART':
			return {
				...state,
				cartItems: [],
			}
		case 'FETCH_ORDERS':
			return {
				...state,
				orders: action.payload,
			}
		default:
			return state
	}
}

export default cartReducer
