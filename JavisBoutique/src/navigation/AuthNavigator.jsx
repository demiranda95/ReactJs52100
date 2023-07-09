import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AuthScreen from '../screens/AuthScreen'
import CompleteProfileScreen from '../screens/CompleteProfileScreen'

const Stack = createStackNavigator()

const AuthNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name='AuthScreen' component={AuthScreen} options={{ headerShown: false }} />
			<Stack.Screen name='CompleteProfile' component={CompleteProfileScreen} options={{ title: 'Completar Perfil' }} />
		</Stack.Navigator>
	)
}

export default AuthNavigator
