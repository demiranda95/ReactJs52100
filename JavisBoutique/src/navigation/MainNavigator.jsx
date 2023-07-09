import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../constants/colors'
import HomeScreen from '../screens/HomeScreen'
import ContactScreen from '../screens/ContactScreen'
import StoreNavigator from './StoreNavigator'
import ReservationScreen from '../screens/ReservationScreen'
import CartNavigator from './CartNavigator'

const Tab = createBottomTabNavigator()

const screens = [
	{
		name: 'Home',
		component: HomeScreen,
		title: 'Inicio',
		iconName: 'home',
	},
	{
		name: 'Store',
		component: StoreNavigator,
		title: 'Tienda',
		iconName: 'heart',
	},
	{
		name: 'Reservations',
		component: ReservationScreen,
		title: 'Horas',
		iconName: 'calendar',
	},
	{
		name: 'Cart',
		component: CartNavigator,
		title: 'Carrito',
		iconName: 'cart',
	},
	{
		name: 'Contact',
		component: ContactScreen,
		title: 'Contacto',
		iconName: 'person-circle',
	},
]

const MainNavigator = () => {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				headerShown: false,
				tabBarStyle: { backgroundColor: COLORS.dark },
				tabBarActiveTintColor: COLORS.primary,
				tabBarInactiveTintColor: COLORS.white,
				tabBarIcon: ({ color, size }) => {
					const screen = screens.find((item) => item.name === route.name)
					return <Ionicons name={screen.iconName} size={size} color={color} />
				},
			})}
		>
			{screens.map((screen) => (
				<Tab.Screen key={screen.name} name={screen.name} component={screen.component} options={{ title: screen.title }} />
			))}
		</Tab.Navigator>
	)
}

export default MainNavigator
