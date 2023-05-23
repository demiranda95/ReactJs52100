import React from 'react'
import { View, StyleSheet } from 'react-native'
import SignupForm from '../../components/SignupForm'
import { styles } from './styles'

const SignupScreen = ({ navigation }) => {
	const handleSignup = (formData) => {
		navigation.navigate('Login')
	}

	return (
		<View style={styles.container}>
			<SignupForm onSignup={handleSignup} />
		</View>
	)
}

export default SignupScreen
