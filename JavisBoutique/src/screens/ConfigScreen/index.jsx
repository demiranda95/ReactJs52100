import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const ConfigScreen = () => {
	const handleSaveChanges = () => {
		// Lógica para guardar los cambios de configuración
		console.log('Guardando cambios de configuración...')
	}

	const handleResetSettings = () => {
		// Lógica para restablecer la configuración a los valores predeterminados
		console.log('Restableciendo configuración...')
	}

	return (
		<SafeAreaView style={styles.container}>
			<Text>Proximamente</Text>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F5FCFF',
	},
})

export default ConfigScreen
