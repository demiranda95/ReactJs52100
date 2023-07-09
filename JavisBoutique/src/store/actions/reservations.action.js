import { URL_API } from '../../constants/database'

export const addReservation = (reservation) => {
	return async (dispatch) => {
		try {
			const response = await fetch(`${URL_API}/reservations.json`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(reservation),
			})
			const result = await response.json()
			console.log(result)
			dispatch({
				type: 'ADD_RESERVATION',
				payload: result,
			})
		} catch (error) {
			console.log(error)
		}
	}
}

export const deleteReservation = (reservationId) => {
	return async (dispatch) => {
		try {
			await fetch(`${URL_API}/reservations/${reservationId}.json`, {
				method: 'DELETE',
			})

			dispatch({
				type: 'DELETE_RESERVATION',
				payload: reservationId,
			})
		} catch (error) {
			console.log(error)
		}
	}
}

export const fetchReservations = () => {
	return async (dispatch) => {
		try {
			const response = await fetch(`${URL_API}/reservations.json`)
			const result = await response.json()

			if (result !== null) {
				const reservations = Object.keys(result).map((key) => ({
					id: key,
					...result[key],
				}))
				dispatch({
					type: 'FETCH_RESERVATIONS',
					payload: reservations,
				})
			}
		} catch (error) {
			console.log(error)
		}
	}
}
