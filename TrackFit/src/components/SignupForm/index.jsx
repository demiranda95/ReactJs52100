import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'
import { styles } from './styles'

const SignupForm = ({ onSignup }) => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleSignup = () => {
		console.log('inicio de sesion')
		// Puedes realizar cualquier validación adicional aquí antes de llamar a la función onSignup

		// Llama a la función onSignup y pasa los datos del formulario como argumento
		onSignup({ name, email, password })
	}

	return (
		<View style={styles.container}>
			<TextInput style={styles.input} placeholder='Name' value={name} onChangeText={(text) => setName(text)} />
			<TextInput style={styles.input} placeholder='Email' value={email} onChangeText={(text) => setEmail(text)} />
			<TextInput style={styles.input} placeholder='Password' secureTextEntry value={password} onChangeText={(text) => setPassword(text)} />
			<Button title='Signup' onPress={handleSignup} />
		</View>
	)
}

export default SignupForm
