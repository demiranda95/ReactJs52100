import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import ReservationScreen from '../screens/ReservationScreen'

const Stack = createStackNavigator()
const ReservationNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name='ReservationList' component={ReservationScreen} options={{ headerShown: false }} />
		</Stack.Navigator>
	)
}

export default ReservationNavigator
