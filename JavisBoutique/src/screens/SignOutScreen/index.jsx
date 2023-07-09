import React, { useEffect } from 'react'
import { Alert } from 'react-native'
import { useDispatch } from 'react-redux'
import { resetSignInSuccess, signOut } from '../../store/actions/auth.action'
import { useNavigation } from '@react-navigation/native'

const SignOutScreen = () => {
	const dispatch = useDispatch()
	const signInSuccess = useSelector((state) => state.auth.signInSuccess)
	console.log(signInSuccess)

	useEffect(() => {
		showSignOutConfirmation()
		if (signInSuccess) {
			dispatch(resetSignInSuccess())
			DevSettings.reload()
		}
	}, [signInSuccess])

	const showSignOutConfirmation = () => {
		Alert.alert('Cerrar sesión', '¿Estás seguro de que deseas cerrar sesión?', [
			{
				text: 'Cancelar',
				style: 'cancel',
				onPress: () => console.log('Cancel Pressed'),
			},
			{
				text: 'Confirmar',
				onPress: handleSignOut,
			},
		])
	}

	const handleSignOut = async () => {
		dispatch(signOut())
	}

	return null
}

export default SignOutScreen
