import { services } from '../../data/services'

export const FETCH_SERVICES_REQUEST = 'FETCH_SERVICES_REQUEST'
export const FETCH_SERVICES_SUCCESS = 'FETCH_SERVICES_SUCCESS'
export const FETCH_SERVICES_FAILURE = 'FETCH_SERVICES_FAILURE'

export const fetchServicesRequest = () => ({
	type: FETCH_SERVICES_REQUEST,
})

export const fetchServicesSuccess = (services) => ({
	type: FETCH_SERVICES_SUCCESS,
	payload: services,
})

export const fetchServicesFailure = (error) => ({
	type: FETCH_SERVICES_FAILURE,
	payload: error,
})

export const fetchServices = () => {
	return (dispatch) => {
		dispatch(fetchServicesRequest())

		try {
			const ServicesData = services // Obtener los productos desde el archivo SERVICES.js

			dispatch(fetchServicesSuccess(ServicesData))
		} catch (error) {
			dispatch(ffetchServicesFailure(error.message))
		}
	}
}
