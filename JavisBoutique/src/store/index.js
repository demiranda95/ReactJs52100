import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'

import cartReducer from './reducers/cart.reducer'
import selectedServicesReducer from './reducers/selectedServices.reducer'
import reservationsReducer from './reducers/reservations.reducer'
import productsReducer from './reducers/products.reducer'
import servicesReducer from './reducers/services.reducer'
import categoriesReducer from './reducers/categories.reducer'
import authReducer from './reducers/auth.reducer'
import carouselReducer from './reducers/carousel.reducer'

const rootReducer = combineReducers({
	cart: cartReducer,
	selectedServices: selectedServicesReducer,
	reservations: reservationsReducer,
	products: productsReducer,
	services: servicesReducer,
	categories: categoriesReducer,
	auth: authReducer,
	carousel: carouselReducer,
})

export default createStore(rootReducer, applyMiddleware(thunk))
