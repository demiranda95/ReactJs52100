import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { styles } from './styles'

const SettingsScreen = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Configuración</Text>
			{/* Aquí puedes mostrar opciones de configuración, como idioma, notificaciones, unidades de medida, etc. */}
			{/* También puedes permitir a los usuarios realizar cambios en estas configuraciones */}
		</View>
	)
}

export default SettingsScreen
