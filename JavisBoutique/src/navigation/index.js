import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import AuthScreen from '../screens/AuthScreen'
import { useEffect, useState } from 'react'
import MainNavigator from '../navigation/MainNavigator'

const Stack = createStackNavigator()

const AppNavigator = () => {
	const [userId, setUserId] = useState(null)

	useEffect(() => {
		const checkLoggedIn = async () => {
			const storedUserId = await AsyncStorage.getItem('userId')
			setUserId(storedUserId)
		}
		checkLoggedIn()
	}, [])

	return (
		<NavigationContainer>
			<Stack.Navigator>{userId == null ? <Stack.Screen name='AuthScreen' component={AuthScreen} options={{ headerShown: false }} /> : <Stack.Screen name='Main' component={MainNavigator} options={{ headerShown: false }} />}</Stack.Navigator>
		</NavigationContainer>
	)
}

export default AppNavigator
