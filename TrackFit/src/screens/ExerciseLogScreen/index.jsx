import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { styles } from './styles'

const ExerciseLogScreen = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Registro de ejercicio</Text>
			{/* Aquí puedes agregar campos para registrar el número de repeticiones, series, peso, tiempo, etc. */}
			{/* También puedes agregar opciones para guardar y seguir registrando */}
		</View>
	)
}

export default ExerciseLogScreen
