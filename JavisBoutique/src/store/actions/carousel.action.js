import { carousel } from '../../data/carousel'



export const FETCH_CAROUSEL_REQUEST = 'FETCH_CAROUSEL_REQUEST'
export const FETCH_CAROUSEL_SUCCESS = 'FETCH_CAROUSEL_SUCCESS'
export const FETCH_CAROUSEL_FAILURE = 'FETCH_CAROUSEL_FAILURE'

export const fetchCarouselRequest = () => ({
	type: FETCH_CAROUSEL_REQUEST,
})

export const fetchCarouselSuccess = (carousel) => ({
	type: FETCH_CAROUSEL_SUCCESS,
	payload: carousel,
})

export const fetchCarouselFailure = (error) => ({
	type: FETCH_CAROUSEL_FAILURE,
	payload: error,
})

export const fetchCarousel = () => {
	return (dispatch) => {
		dispatch(fetchCarouselRequest())

		try {
			const productsData = carousel 

			dispatch(fetchCarouselSuccess(productsData))
		} catch (error) {
			dispatch(fetchCarouselFailure(error.message))
		}
	}
}
