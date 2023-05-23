import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { styles } from './styles'

import LoginForm from '../../components/LoginForm'
import { useNavigation } from '@react-navigation/native'

const LoginScreen = () => {
	const navigation = useNavigation()
	const [isLoggedIn, setIsLoggedIn] = useState(false)

	const handleLogin = (formData) => {
		// Validar los datos de inicio de sesión
		if (formData.username === 'Admin' && formData.password === 'admin') {
			console.log('Inicio de sesión exitoso')
			navigation.navigate('Main')
		} else {
			console.log('Credenciales inválidas')
		}
	}

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Inicio de sesión</Text>
			{isLoggedIn ? <Text style={styles.loggedText}>¡Inicio de sesión exitoso!</Text> : <LoginForm onLogin={handleLogin} />}
		</View>
	)
}

export default LoginScreen
