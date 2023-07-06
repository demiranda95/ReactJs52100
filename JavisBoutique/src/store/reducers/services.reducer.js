import { FETCH_SERVICES_REQUEST, FETCH_SERVICES_SUCCESS, FETCH_SERVICES_FAILURE } from '../actions/services.action'

const initialState = {
	services: [],
	loading: false,
	error: null,
}

const servicesReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_SERVICES_REQUEST:
			return {
				...state,
				loading: true,
				error: null,
			}
		case FETCH_SERVICES_SUCCESS:
			return {
				...state,
				loading: false,
				services: action.payload,
			}
		case FETCH_SERVICES_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			}
		default:
			return state
	}
}

export default servicesReducer
