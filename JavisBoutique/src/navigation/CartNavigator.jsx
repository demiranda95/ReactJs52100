import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import CartScreen from '../screens/CartScreen'
import OrdersScreen from '../screens/OrdersScreen'
import CartConfirmScreen from '../screens/CartConfirmScreen'

const Stack = createStackNavigator()

const CartNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='CartScreen'
				component={CartScreen}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen name='Orders' component={OrdersScreen} />
			<Stack.Screen name='CartConfirm' component={CartConfirmScreen} />
		</Stack.Navigator>
	)
}

export default CartNavigator
