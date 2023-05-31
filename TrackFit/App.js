import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import StartUpNavigator from './src/navigation/StartUpNavigator'
import MainNavigator from './src/navigation/MainNavigator'

import { Provider } from 'react-redux'
import store from './src/store'

const Stack = createStackNavigator()

const App = () => {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{
						headerShown: false,
					}}
				>
					{/* <Stack.Screen name='StartUp' component={StartUpNavigator} /> */}
					<Stack.Screen name='Main' component={MainNavigator} />
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	)
}

export default App
