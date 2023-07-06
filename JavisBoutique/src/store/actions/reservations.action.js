export const addReservation = (reservation) => {
	return {
		type: 'ADD_RESERVATION',
		payload: reservation,
	}
}
// Acción para eliminar una reserva
export const deleteReservation = (reservationId) => ({
	type: 'DELETE_RESERVATION',
	payload: reservationId,
})
