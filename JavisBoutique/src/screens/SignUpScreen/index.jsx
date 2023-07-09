import React, { useState } from 'react'
import { View, ImageBackground, TextInput, Button, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux'
import { signUp } from '../../store/actions/auth.action'

const SignUpScreen = ({ navigation }) => {
	const dispatch = useDispatch()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleSignUp = () => {
		dispatch(signUp(email, password))
	}

	return (
		<ImageBackground source={require('../../assets/login.jpg')} style={styles.backgroundImage}>
			<View style={styles.overlay} />
			<View style={styles.container}>
				<Text style={styles.title}>Registro</Text>
				<TextInput style={styles.input} placeholder='Email' placeholderTextColor='rgba(255, 255, 255, 0.7)' value={email} onChangeText={setEmail} />
				<TextInput style={styles.input} placeholder='Contraseña' placeholderTextColor='rgba(255, 255, 255, 0.7)' secureTextEntry={true} value={password} onChangeText={setPassword} />
				<Button title='Registrarse' onPress={handleSignUp} color='#fff' />
				<TouchableOpacity onPress={() => navigation.navigate('Auth')}>
					<Text style={styles.link}>¿Ya tienes una cuenta? Inicia sesión aquí</Text>
				</TouchableOpacity>
			</View>
		</ImageBackground>
	)
}

const styles = StyleSheet.create({
	backgroundImage: {
		flex: 1,
		resizeMode: 'cover',
	},
	overlay: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: 'rgba(0, 0, 0, 0.3)',
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 20,
		color: 'white',
	},
	input: {
		width: '100%',
		height: 40,
		borderWidth: 1,
		borderColor: 'white',
		borderRadius: 5,
		paddingHorizontal: 10,
		marginBottom: 10,
		color: 'white',
	},
	link: {
		marginTop: 20,
		color: 'white',
		textDecorationLine: 'underline',
	},
})

export default SignUpScreen
