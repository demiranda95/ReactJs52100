import React from 'react'
import { View, StyleSheet } from 'react-native'
import SignupForm from '../../components/SignupForm'
import { styles } from './styles'

const SignupScreen = ({ navigation }) => {
	const handleSignup = (formData) => {
		// Aquí puedes agregar la lógica para enviar los datos del formulario a tu backend o realizar cualquier otra acción necesaria
		// Puedes acceder a los datos del formulario utilizando formData.name, formData.email, formData.password

		// Después de completar la acción de registro, puedes navegar a la pantalla de inicio de sesión o a cualquier otra pantalla de tu aplicación
		navigation.navigate('Login')
	}

	return (
		<View style={styles.container}>
			<SignupForm onSignup={handleSignup} />
		</View>
	)
}

export default SignupScreen
