export const ADD_SELECTED_SERVICE = 'ADD_SELECTED_SERVICE'
export const REMOVE_SELECTED_SERVICE = 'REMOVE_SELECTED_SERVICE'

export const addSelectedService = (serviceId) => ({
	type: ADD_SELECTED_SERVICE,
	payload: serviceId,
})

export const removeSelectedService = (serviceId) => ({
	type: REMOVE_SELECTED_SERVICE,
	payload: serviceId,
})
