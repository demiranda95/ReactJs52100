export const ADD_RESERVATION = 'ADD_RESERVATION'
export const DELETE_RESERVATION = 'DELETE_RESERVATION'
export const FETCH_RESERVATIONS = 'FETCH_RESERVATIONS'

const initialState = {
	reservations: [],
}

const reservationsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_RESERVATION:
			return {
				...state,
				reservations: [...state.reservations, action.payload],
			}
		case DELETE_RESERVATION:
			return {
				...state,
				reservations: state.reservations.filter((reservation) => reservation.id !== action.payload),
			}
		case FETCH_RESERVATIONS:
			return {
				...state,
				reservations: action.payload,
			}
		default:
			return state
	}
}

export default reservationsReducer
