import { categories } from '../../data/categories'

export const FETCH_CATEGORIES_REQUEST = 'FETCH_CATEGORIES_REQUEST'
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS'
export const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE'

export const fetchCategoriesRequest = () => ({
	type: FETCH_CATEGORIES_REQUEST,
})

export const fetchCategoriesSuccess = (categories) => ({
	type: FETCH_CATEGORIES_SUCCESS,
	payload: categories,
})

export const fetchCategoriesFailure = (error) => ({
	type: FETCH_CATEGORIES_FAILURE,
	payload: error,
})

export const fetchCategories = () => {
	return (dispatch) => {
		dispatch(fetchCategoriesRequest())

		try {
			const categoriesData = categories // Obtener las categorías desde el archivo categories.js

			dispatch(fetchCategoriesSuccess(categoriesData))
		} catch (error) {
			dispatch(fetchCategoriesFailure(error.message))
		}
	}
}
