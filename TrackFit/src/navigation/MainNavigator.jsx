import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from '@expo/vector-icons/Ionicons'
import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'
import ExercisesScreen from '../screens/ExercisesScreen'
import { COLORS } from '../constants/colors'
import { View } from 'react-native'
import ExerciseNavigation from './ExerciseNavigation'

const Tab = createBottomTabNavigator()

const MainNavigator = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarStyle: { backgroundColor: COLORS.dark }, 
				tabBarActiveTintColor: COLORS.primary, 
				tabBarInactiveTintColor: COLORS.white, 
			}}
		>
			<Tab.Screen
				name='Home'
				component={HomeScreen}
				options={{
					title: 'Home',
					tabBarIcon: () => (
						<View>
							<Ionicons name='home' size={25} color={COLORS.primary} />
						</View>
					),
				}}
			/>
			<Tab.Screen
				name='ExercisesNavigation'
				component={ExerciseNavigation}
				options={{
					title: 'Ejercicios',
					tabBarIcon: () => (
						<View>
							<Ionicons name='barbell' size={25} color={COLORS.primary} />
						</View>
					),
				}}
			/>
			<Tab.Screen
				name='Profile'
				component={ProfileScreen}
				options={{
					title: 'Perfil',
					tabBarIcon: () => (
						<View>
							<Ionicons name='person-circle' size={25} color={COLORS.primary} />
						</View>
					),
				}}
			/>
		</Tab.Navigator>
	)
}

export default MainNavigator
