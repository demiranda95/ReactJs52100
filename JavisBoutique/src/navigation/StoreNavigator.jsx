import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ProductScreen from '../screens/ProductScreen'
import ServiceScreen from '../screens/ServiceScreen'
import ReservationFormScreen from '../screens/ReservationFormScreen'
import StoreScreen, { services, products } from '../screens/StoreScreen'
import ProductDetailScreen from '../screens/ProductDetailScreen'
import ServiceDetailScreen from '../screens/ServiceDetailScreen'
import { TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
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

const ProductStackNavigator = ({ navigation }) => {
	const products = useSelector((state) => state.products.products)
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='ProductScreen'
				component={ProductScreen}
				options={{
					title: 'Productos',
					headerBackTitle: 'Tienda',
					headerRight: () => (
						<TouchableOpacity onPress={() => navigation.navigate('Cart')}>
							<View style={{ paddingHorizontal: 10 }}>
								<Ionicons name='ios-cart' size={24} color='#000' />
							</View>
						</TouchableOpacity>
					),
				}}
			/>
			<Stack.Screen
				name='ProductDetail'
				component={ProductDetailScreen}
				options={({ route }) => ({
					title: products.find((product) => product.id === route.params.productId)?.title || 'Detalle del producto',
					headerBackTitle: 'Productos',
					headerRight: () => (
						<TouchableOpacity onPress={() => navigation.navigate('Cart')}>
							<View style={{ paddingHorizontal: 10 }}>
								<Ionicons name='ios-cart' size={24} color='#000' />
							</View>
						</TouchableOpacity>
					),
				})}
			/>
		</Stack.Navigator>
	)
}

const StoreNavigator = ({ navigation }) => {
	const products = useSelector((state) => state.products.products)
	const services = useSelector((state) => state.services.services)

	return (
		<Stack.Navigator>
			<Stack.Screen name='StoreScreen' component={StoreScreen} options={{ headerShown: false }} />
			<Stack.Screen name='Services' component={ServiceStackNavigator} options={{ headerShown: false }} />
			<Stack.Screen name='Products' component={ProductStackNavigator} options={{ headerShown: false }} />
			<Stack.Screen
				name='ServiceDetail'
				component={ServiceDetailScreen}
				options={({ route }) => ({
					title: services.find((service) => service.id === route.params.serviceId)?.title || 'Detalle del servicio',
					headerBackTitle: 'Servicios',
				})}
			/>
			<Stack.Screen
				name='ProductDetail'
				component={ProductDetailScreen}
				options={({ route }) => ({
					title: products.find((product) => product.id === route.params.productId)?.title || 'Detalle del producto',
					headerBackTitle: 'Productos',
					headerRight: () => (
						<TouchableOpacity onPress={() => navigation.navigate('Cart')}>
							<View style={{ paddingHorizontal: 10 }}>
								<Ionicons name='ios-cart' size={24} color='#000' />
							</View>
						</TouchableOpacity>
					),
				})}
			/>
		</Stack.Navigator>
	)
}

export default StoreNavigator
