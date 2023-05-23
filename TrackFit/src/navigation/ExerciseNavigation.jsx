import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import 'react-native-gesture-handler'
import ExercisesScreen from '../screens/ExercisesScreen'
import ExerciseDetailScreen from '../screens/ExerciseDetailScreen'
import ExerciseStatsScreen from '../screens/ExerciseStatsScreen'
import ExerciseLogScreen from '../screens/ExerciseLogScreen'

const Drawer = createDrawerNavigator()

const ExerciseNavigation = () => {
	return (
		<Drawer.Navigator>
			<Drawer.Screen name='Exercises' component={ExercisesScreen} />
			<Drawer.Screen name='Detail' component={ExerciseDetailScreen} />
			<Drawer.Screen name='Stats' component={ExerciseStatsScreen} />
			<Drawer.Screen name='Logs' component={ExerciseLogScreen} />
		</Drawer.Navigator>
	)
}

export default ExerciseNavigation
