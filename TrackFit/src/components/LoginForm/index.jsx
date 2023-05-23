import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'
import { styles } from './styles'

const LoginForm = ({ onLogin }) => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const handleLogin = () => {
		onLogin({ username, password })
	}

	return (
		<View style={styles.container}>
			<TextInput style={styles.input} placeholder='Username' value={username} onChangeText={(text) => setUsername(text)} />
			<TextInput style={styles.input} placeholder='Password' secureTextEntry value={password} onChangeText={(text) => setPassword(text)} />
			<Button title='Login' onPress={handleLogin} />
		</View>
	)
}

export default LoginForm
