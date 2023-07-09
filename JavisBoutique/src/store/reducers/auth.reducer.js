import { SIGNUP, SIGNIN, SIGNOUT, RESET_SIGNIN_SUCCESS } from '../actions/auth.action'

const initialState = {
	token: null,
	userId: null,
	signInSuccess: null,
}

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SIGNUP:
			return { ...state, token: action.token, userId: action.userId, signInSuccess: true }
		case SIGNIN:
			return { ...state, token: action.token, userId: action.userId, signInSuccess: true }
		case SIGNOUT:
			return { ...state, token: null, userId: null, signInSuccess: true }
		case RESET_SIGNIN_SUCCESS:
			return { ...state, signInSuccess: false }
		default:
			return state
	}
}

export default authReducer
