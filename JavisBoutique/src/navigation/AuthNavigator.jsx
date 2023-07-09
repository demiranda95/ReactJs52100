import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AuthScreen from '../screens/AuthScreen'
import SignUpScreen from '../screens/SignUpScreen'

const Stack = createStackNavigator()

const AuthNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name='Auth' component={AuthScreen} options={{ headerShown: false }} />
			<Stack.Screen name='SignUp' component={SignUpScreen} options={{ headerShown: false, title: 'Registro' }} />
		</Stack.Navigator>
	)
}

export default AuthNavigator
