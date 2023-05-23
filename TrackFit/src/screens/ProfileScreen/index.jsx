import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { styles } from './styles'

const ProfileScreen = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Perfil</Text>
			{/* Aquí puedes mostrar la información del perfil del usuario, como su nombre, imagen de perfil, estadísticas de ejercicio, metas personales, etc. */}
			{/* También puedes agregar opciones para editar el perfil */}
		</View>
	)
}

export default ProfileScreen
