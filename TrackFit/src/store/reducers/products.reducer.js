import { FILTERED_PRODUCT, SELECTED_PRODUCT, SHOW_RANDOM_EXERCISES } from '../actions/products.action'
import { PRODUCTS } from '../../data/products'

const initialState = {
	products: PRODUCTS,
	filteredProduct: [],
	selected: null,
	randomExercises: [],
}

const ProductReducer = (state = initialState, action) => {
	switch (action.type) {
		case SELECTED_PRODUCT:
			return {
				...state,
				selected: state.products.find((product) => product.id === action.productId),
			}
		case FILTERED_PRODUCT:
			return {
				...state,
				filteredProduct: state.products.filter((product) => product.category === action.categoryId),
			}
		case SHOW_RANDOM_EXERCISES:
			return {
				...state,
				randomExercises: getRandomExercises(state.products, action.count),
			}
		default:
			return state
	}
}

const getRandomExercises = (products, count) => {
	const shuffled = products.sort(() => 0.5 - Math.random())
	return shuffled.slice(0, count)
}

export default ProductReducer
