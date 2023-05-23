import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import StartUpNavigator from './src/navigation/StartUpNavigator'
import MainNavigator from './src/navigation/MainNavigator'

const Stack = createStackNavigator()

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen name='StartUp' component={StartUpNavigator} />
				<Stack.Screen name='Main' component={MainNavigator} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default App
