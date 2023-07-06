const initialState = {
	reservations: [],
}

const reservationsReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_RESERVATION':
			return {
				...state,
				reservations: [...state.reservations, action.payload],
			}
		case 'DELETE_RESERVATION':
			return {
				...state,
				reservations: state.reservations.filter((reservation) => reservation.id !== action.payload),
			}
		default:
			return state
	}
}

export default reservationsReducer
