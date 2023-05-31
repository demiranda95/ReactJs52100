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
import ExerciseStoreCheckoutScreen from '../screens/ExerciseStoreCheckoutScreen'

import { createStackNavigator } from '@react-navigation/stack'

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
			<StackExerciseStore.Screen
				name='Cart'
				component={ExerciseStoreCartScreen}
				options={{
					headerBackTitle: 'Volver',
				}}
			/>
			<StackExerciseStore.Screen
				name='Checkout'
				component={ExerciseStoreCheckoutScreen}
				options={{
					headerBackTitle: 'Volver',
				}}
			/>
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
			<StackExerciseStoreCart.Screen name='Checkout' component={ExerciseStoreCheckoutScreen} />
		</StackExerciseStoreCart.Navigator>
	)
}

const ExerciseNavigation = () => {
	return (
		<Drawer.Navigator>
			<Drawer.Screen name='Dashboard' component={StackNavigatorExercises} options={{ title: 'Ejercicios' }} />
			<Drawer.Screen name='Store' component={StackNavigatorExerciseStore} options={{ title: 'Tienda' }} />
			<Drawer.Screen name='Cart' component={StackNavigatorExerciseStoreCart} options={{ title: 'Carrito' }} />
		</Drawer.Navigator>
	)
}

export default ExerciseNavigation
