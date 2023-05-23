import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { styles } from './styles'

const ExerciseDetailScreen = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Detalles del ejercicio</Text>
			{/* Aquí puedes mostrar los detalles completos de un ejercicio seleccionado */}
			{/* Puedes mostrar el nombre, descripción, instrucciones, repeticiones, series, etc. */}
			{/* También puedes agregar un botón para que los usuarios comiencen a registrar su progreso */}
		</View>
	)
}

export default ExerciseDetailScreen
