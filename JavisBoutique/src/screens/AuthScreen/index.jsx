import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, ImageBackground, Text } from 'react-native'
import { useDispatch } from 'react-redux'

const AuthScreen = () => {
	const navigation = useNavigation()
	const dispatch = useDispatch()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleLogin = () => {
		// Realiza la lógica de inicio de sesión aquí
		console.log('Email:', email)
		console.log('Password:', password)
	}

	const handleRegister = () => {
		navigation.navigate('SignUp')
	}

	return (
		<ImageBackground source={require('../../assets/login.jpg')} style={styles.backgroundImage}>
			<View style={styles.overlay} />
			<View style={styles.container}>
				<TextInput style={styles.input} placeholder='Correo electrónico' placeholderTextColor='rgba(255, 255, 255, 0.7)' onChangeText={setEmail} value={email} />
				<TextInput style={styles.input} placeholder='Contraseña' placeholderTextColor='rgba(255, 255, 255, 0.7)' secureTextEntry onChangeText={setPassword} value={password} />
				<Button title='Iniciar sesión' onPress={handleLogin} color='#fff' />
				<Text style={styles.registerText}>¿No estás registrado?</Text>
				<Button title='Registrar' onPress={handleRegister} color='#fff' />
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
