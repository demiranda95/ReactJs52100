import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ProductScreen from '../screens/ProductScreen'
import ServiceScreen from '../screens/ServiceScreen'
import ReservationFormScreen from '../screens/ReservationFormScreen'
import StoreScreen, { services, products } from '../screens/StoreScreen'
import ProductDetailScreen from '../screens/ProductDetailScreen'
import ServiceDetailScreen from '../screens/ServiceDetailScreen'
import ReservationConfirmationScreen from '../screens/ReservationConfirmScreen'
import { useSelector } from 'react-redux'

const Stack = createStackNavigator()

const ServiceStackNavigator = () => {
	const services = useSelector((state) => state.services.services)

	return (
		<Stack.Navigator>
			<Stack.Screen name='ServicesScreen' component={ServiceScreen} options={{ headerShown: false }} />
			<Stack.Screen
				name='ServiceDetail'
				component={ServiceDetailScreen}
				options={({ route }) => ({
					title: services.find((service) => service.id === route.params.serviceId)?.title || 'Detalle del servicio',
					headerBackTitle: 'Servicios',
				})}
			/>
			<Stack.Screen name='ReservationForm' component={ReservationFormScreen} options={{ headerShown: false }} />
			<Stack.Screen name='ReservationConfirm' component={ReservationConfirmationScreen} options={{ headerShown: false }} />
		</Stack.Navigator>
	)
}

const ProductStackNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='ProductScreen'
				component={ProductScreen}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen name='ProductDetail' component={ProductDetailScreen} options={{ headerShown: false }} />
		</Stack.Navigator>
	)
}

const StoreNavigator = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name='StoreScreen' component={StoreScreen} />
			<Stack.Screen name='Services' component={ServiceStackNavigator} />
			<Stack.Screen name='Products' component={ProductStackNavigator} />
			<Stack.Screen name='ServiceDetail' component={ServiceDetailScreen} />
			<Stack.Screen name='ProductDetail' component={ProductDetailScreen} />
		</Stack.Navigator>
	)
}

export default StoreNavigator
