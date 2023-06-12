import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import ExercisesScreen from '../screens/ExercisesScreen'
import ExercisesOwnedScreen from '../screens/ExercisesOwnedScreen'
import ExerciseDetailScreen from '../screens/ExerciseDetailScreen'
import ExerciseLogScreen from '../screens/ExerciseLogScreen'

import ExerciseStoreScreen from '../screens/ExerciseStoreScreen'
import ExerciseStoreProductsScreen from '../screens/ExerciseStoreProductsScreen'
import ExerciseStoreDetailScreen from '../screens/ExerciseStoreDetailScreen'
import ExerciseStoreCartScreen from '../screens/ExerciseStoreCartScreen'
import ExerciseStoreOrdersScreen from '../screens/ExerciseStoreOrdersScreen'

import { createStackNavigator } from '@react-navigation/stack'
import { COLORS } from '../constants/colors'
import { Ionicons } from '@expo/vector-icons'
import { color } from 'react-native-reanimated'

const Drawer = createDrawerNavigator()
const StackExercises = createStackNavigator()
const StackExerciseStore = createStackNavigator()
const StackExerciseStoreCart = createStackNavigator()

const StackNavigatorExercises = () => {
	return (
		<StackExercises.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<StackExercises.Screen name='Exercises' component={ExercisesScreen} />
			<StackExercises.Screen name='MyExercises' component={ExercisesOwnedScreen} />
			<StackExercises.Screen name='ExerciseDetail' component={ExerciseDetailScreen} />
			<StackExercises.Screen name='Log' component={ExerciseLogScreen} />
		</StackExercises.Navigator>
	)
}

const StackNavigatorExerciseStore = () => {
	return (
		<StackExerciseStore.Navigator>
			<StackExerciseStore.Screen
				name='MainStore'
				component={ExerciseStoreScreen}
				options={{
					headerShown: false,
					headerTitle: 'Tienda',
				}}
			/>
			<StackExerciseStore.Screen
				name='Products'
				component={ExerciseStoreProductsScreen}
				options={{
					headerBackTitle: 'Volver',
					headerTitle: 'Ejercicios',
				}}
			/>
			<StackExerciseStore.Screen
				name='Detail'
				component={ExerciseStoreDetailScreen}
				options={{
					headerTitle: 'Detalles',
					headerBackTitle: 'Volver',
				}}
			/>
			{/*<StackExerciseStore.Screen
				name='Cart'
				component={ExerciseStoreCartScreen}
				options={{
					headerBackTitle: 'Volver',
				}}
			/>
			<StackExerciseStore.Screen
				name='Orders'
				component={ExerciseStoreOrdersScreen}
				options={{
					headerBackTitle: 'Volver',
				}}
			/>
			*/}
		</StackExerciseStore.Navigator>
	)
}

const StackNavigatorExerciseStoreCart = () => {
	return (
		<StackExerciseStoreCart.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<StackExerciseStoreCart.Screen name='Cart' component={ExerciseStoreCartScreen} />
		</StackExerciseStoreCart.Navigator>
	)
}

const StackNavigatorExerciseStoreOrders = () => {
	return (
		<StackExerciseStoreCart.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<StackExerciseStoreCart.Screen name='Cart' component={ExerciseStoreOrdersScreen} />
		</StackExerciseStoreCart.Navigator>
	)
}

const ExerciseNavigation = () => {
	return (
		<Drawer.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: COLORS.dark,
				},
				drawerActiveTintColor: COLORS.primary,
				drawerInactiveTintColor: COLORS.dark,
				drawerLabelStyle: {
					fontWeight: 'bold',
					color: COLORS.white,
				},

				drawerIcon: { color: COLORS.primary },
			}}
		>
			<Drawer.Screen
				name='Dashboard'
				component={StackNavigatorExercises}
				options={{
					title: 'Ejercicios',
					drawerIcon: ({ focused }) => <Ionicons name={focused ? 'home' : 'home-outline'} color={COLORS.primary} />,
				}}
			/>
			<Drawer.Screen
				name='Store'
				component={StackNavigatorExerciseStore}
				options={{
					title: 'Tienda',
					drawerIcon: ({ focused }) => <Ionicons name={focused ? 'cart' : 'cart-outline'} color={COLORS.primary} />,
				}}
			/>
			<Drawer.Screen
				name='Cart'
				component={StackNavigatorExerciseStoreCart}
				options={{
					title: 'Carrito',
					drawerIcon: ({ focused }) => <Ionicons name={focused ? 'basket' : 'basket-outline'} color={COLORS.primary} />,
				}}
			/>
			<Drawer.Screen
				name='Orders'
				component={StackNavigatorExerciseStoreOrders}
				options={{
					title: 'Ordenes',
					drawerIcon: ({ focused }) => <Ionicons name={focused ? 'receipt' : 'receipt-outline'} color={COLORS.primary} />,
				}}
			/>
		</Drawer.Navigator>
	)
}

export default ExerciseNavigation
