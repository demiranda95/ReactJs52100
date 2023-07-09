import React, { useCallback, useEffect, useReducer, useState } from 'react'
import { View, Button, StyleSheet, ImageBackground, Text, Alert } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { signIn, signUp, resetSignInSuccess } from '../../store/actions/auth.action'
import { DevSettings } from 'react-native'
import Input from '../../components/Input/Input'

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE'

const formReducer = (state, action) => {
	if (action.type === FORM_INPUT_UPDATE) {
		const updatedValues = {
			...state.inputValues,
			[action.input]: action.value,
		}
		const updatedValidities = {
			...state.inputValidities,
			[action.input]: action.isValid,
		}
		let updatedFormIsValid = true
		for (const key in updatedValidities) {
			updatedFormIsValid = updatedFormIsValid && updatedValidities[key]
		}
		return {
			...state,
			inputValues: updatedValues,
			inputValidities: updatedValidities,
			formIsValid: updatedFormIsValid,
		}
	}
	return state
}

const AuthScreen = () => {
	const dispatch = useDispatch()
	const signInSuccess = useSelector((state) => state.auth.signInSuccess)
	console.log(signInSuccess)

	useEffect(() => {
		if (signInSuccess) {
			dispatch(resetSignInSuccess())
			DevSettings.reload()
		}
	}, [signInSuccess])

	const [formState, dispatchFormState] = useReducer(formReducer, {
		inputValues: {
			email: '',
			password: '',
		},
		inputValidities: {
			email: false,
			password: false,
		},
		formIsValid: false,
	})

	const handleLogin = () => {
		if (formState.formIsValid) {
			dispatch(signIn(formState.inputValues.email, formState.inputValues.password))
		} else {
			Alert.alert('Formulario inválido', 'Ingrese un correo electrónico y una contraseña válidos.', [{ text: 'Ok' }])
		}
	}

	const handleSignUp = () => {
		if (formState.formIsValid) {
			dispatch(signUp(formState.inputValues.email, formState.inputValues.password))
		} else {
			Alert.alert('Formulario inválido', 'Ingrese un correo electrónico y una contraseña válidos.', [{ text: 'Ok' }])
		}
	}

	const onInputChangeHandler = useCallback(
		(inputIdentifier, inputValue, inputValidity) => {
			dispatchFormState({ type: FORM_INPUT_UPDATE, value: inputValue, isValid: inputValidity, input: inputIdentifier })
		},
		[dispatchFormState]
	)

	return (
		<ImageBackground source={require('../../assets/login.jpg')} style={styles.backgroundImage}>
			<View style={styles.overlay} />
			<View style={styles.container}>
				<Input id='email' label='Email' keyboardType='email-address' required email autoCapitalize='none' errorText='Por favor ingrese un email válido' onInputChange={onInputChangeHandler} initialValue='' />
				<Input id='password' label='Password' keyboardType='default' required password secureTextEntry autoCapitalize='none' errorText='Por favor ingrese una contraseña válida' onInputChange={onInputChangeHandler} initialValue='' />
				<Button title='Iniciar sesión' onPress={handleLogin} color='#fff' />
				<Text style={styles.registerText}>¿No estás registrado?</Text>
				<Button title='Registrar' onPress={handleSignUp} color='#fff' />
			</View>
		</ImageBackground>
	)
}

const styles = StyleSheet.create({
	backgroundImage: {
		flex: 1,
		resizeMode: 'cover',
		justifyContent: 'center',
	},
	overlay: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: 'rgba(0, 0, 0, 0.3)',
	},
	container: {
		paddingHorizontal: 16,
	},
	input: {
		height: 40,
		borderColor: 'white',
		borderWidth: 1,
		marginBottom: 16,
		paddingHorizontal: 8,
		color: 'white',
	},
	registerText: {
		color: 'white',
		marginTop: 16,
		marginBottom: 8,
		textAlign: 'center',
	},
})

export default AuthScreen
