import { FETCH_CAROUSEL_REQUEST, FETCH_CAROUSEL_SUCCESS, FETCH_CAROUSEL_FAILURE } from '../actions/carousel.action'

const initialState = {
	loading: false,
	carousel: null,
	error: null,
}

const carouselReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_CAROUSEL_REQUEST:
			return {
				...state,
				loading: true,
				error: null,
			}
		case FETCH_CAROUSEL_SUCCESS:
			return {
				...state,
				loading: false,
				carousel: action.payload,
				error: null,
			}
		case FETCH_CAROUSEL_FAILURE:
			return {
				...state,
				loading: false,
				carousel: null,
				error: action.payload,
			}
		default:
			return state
	}
}

export default carouselReducer
