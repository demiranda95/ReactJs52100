import { Alert, Image, Keyboard, KeyboardAvoidingView, Platform, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useCallback, useReducer } from 'react'
import { useDispatch } from 'react-redux'

import Input from '../../components/Input'
import image from '../../assets/img/Signup.jpg'
import { styles } from './styles'
import { signUp } from '../../store/actions/auth.action'

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
			inputValues: updatedValues,
			inputValidities: updatedValidities,
			formIsValid: updatedFormIsValid,
		}
	}
	return state
}

const SignupScreen = ({ navigation }) => {
	const dispatch = useDispatch()

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

	const handleSignUp = useCallback(() => {
		if (formState.formIsValid) {
			dispatch(signUp(formState.inputValues.email, formState.inputValues.password))
		} else {
			Alert.alert('Formulario Inválido', 'Ingrese un correo y contraseña válido.', [{ text: 'Aceptar' }])
		}
	}, [dispatch, formState.inputValues.email, formState.inputValues.password, formState.formIsValid])

	const handleLogin = () => {
		navigation.navigate('Login')
	}

	const onInputChangeHandler = useCallback(
		(inputIdentifier, inputValue, inputValidity) => {
			dispatchFormState({
				type: FORM_INPUT_UPDATE,
				value: inputValue,
				isValid: inputValidity,
				input: inputIdentifier,
			})
		},
		[dispatchFormState]
	)

	return (
		<KeyboardAvoidingView style={styles.mainContainer} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View style={styles.container}>
					<Image style={styles.backgroundImage} source={image} />
					<View style={styles.overlay}>
						<View style={styles.inputContainer}>
							<Input id='email' label='Email' keyboardType='email-address' required email autoCapitalize='none' errorText='Ingrese un correo válido' onInputChange={onInputChangeHandler} initialValue='' />
							<Input id='password' label='Password' keyboardType='default' required password secureTextEntry autoCapitalize='none' errorText='Ingrese una contraseña válida' onInputChange={onInputChangeHandler} initialValue='' />
						</View>
						<TouchableOpacity style={styles.registerButton} onPress={handleSignUp}>
							<Text style={styles.registerButtonText}>Registrarse</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
							<Text style={styles.loginButtonText}>Iniciar Sesión</Text>
						</TouchableOpacity>
					</View>
				</View>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	)
}

export default SignupScreen
