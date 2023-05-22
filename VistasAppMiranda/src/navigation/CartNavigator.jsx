import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CartScreen from '../screens/CartScreen'
import { COLORS } from '../constants/colors'

const Stack = createNativeStackNavigator()

export default CartNavigator = () => {
	return (
		<Stack.Navigator
			initialRouteName='CartDetail'
			screenOptions={{
				headerStyle: {
					backgroundColor: COLORS.primary,
				},
				headerTintColor: COLORS.quaternary,
				headerTitleStyle: {
					fontWeight: 'bold',
				},
				headerShadowVisible: false,
				headerTitleStyle: {
					fontWeight: 'bold',
				},
			}}
		>
			<Stack.Screen
				name='CartDetail'
				component={CartScreen}
				options={{
					title: 'Carrito',
				}}
			/>
		</Stack.Navigator>
	)
}
