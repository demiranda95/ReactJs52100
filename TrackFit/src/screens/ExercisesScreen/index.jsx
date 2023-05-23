import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { styles } from './styles'

const ExercisesScreen = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Ejercicios</Text>
			{/* Aquí puedes mostrar una lista de ejercicios disponibles */}
			{/* Cada elemento de la lista puede contener una imagen, nombre y descripción del ejercicio */}
			{/* Puedes agregar componentes adicionales para filtrar o buscar ejercicios */}
		</View>
	)
}

export default ExercisesScreen
