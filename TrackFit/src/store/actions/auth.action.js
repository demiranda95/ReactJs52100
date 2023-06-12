import { Alert } from 'react-native'
import { URL_AUTH_SIGNUP, URL_AUTH_LOGIN } from '../../constants/database'

export const SIGNUP = 'SIGNUP'
export const LOGIN = 'LOGIN'

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
		} catch (error) {
			console.log(error)
		}
	}
}

export const login = (email, password) => {
	console.log(email, password)
	return async (dispatch) => {
		try {
			const response = await fetch(URL_AUTH_LOGIN, {
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
				type: LOGIN,
				token: data.idToken,
				userId: data.localId,
			})
		} catch (error) {
			console.log(error)
		}
	}
}
