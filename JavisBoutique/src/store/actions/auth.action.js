import AsyncStorage from '@react-native-async-storage/async-storage'
import { URL_AUTH_SIGNUP, URL_AUTH_SIGNIN } from '../../constants/database'


export const SIGNUP = 'SIGNUP'
export const SIGNIN = 'SIGNIN'
export const SIGNOUT = 'SIGNOUT'
export const RESET_SIGNIN_SUCCESS = 'RESET_SIGNIN_SUCCESS'

export const signUp = (email, password) => {
	console.log(email, password)
	return async (dispatch) => {
		try {
			const response = await fetch(URL_AUTH_SIGNUP, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					email,
					password,
					returnSecureToken: true,
				}),
			})
			const data = await response.json()
			console.log(data)

			dispatch({
				type: SIGNUP,
				token: data.idToken,
				userId: data.localId,
			})

			// Guardar userId en AsyncStorage
			await AsyncStorage.setItem('userId', data.localId)
		} catch (error) {
			console.log(error)
		}
	}
}

export const signIn = (email, password) => {
	console.log(email, password)

	return async (dispatch) => {
		try {
			const response = await fetch(URL_AUTH_SIGNIN, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					email,
					password,
					returnSecureToken: true,
				}),
			})
			const data = await response.json()
			console.log(data)

			dispatch({
				type: SIGNIN,
				token: data.idToken,
				userId: data.localId,
			})

			// Guardar userId en AsyncStorage
			await AsyncStorage.setItem('userId', data.localId)
		} catch (error) {
			console.log(error)
		}
	}
}

export const signOut = () => {
	return async (dispatch) => {
		try {
			// Eliminar el valor de userId del AsyncStorage
			await AsyncStorage.removeItem('userId')

			dispatch({
				type: SIGNOUT,
			})
		} catch (error) {
			console.log(error)
		}
	}
}

export const resetSignInSuccess = () => {
	return {
		type: RESET_SIGNIN_SUCCESS,
	}
}
