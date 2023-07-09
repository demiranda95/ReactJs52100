import React, { useState } from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'

const CompleteProfileScreen = () => {
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [phoneNumber, setPhoneNumber] = useState('')

	const handleSaveProfile = () => {
		// Aquí puedes agregar la lógica para guardar la información del usuario
		// Puedes utilizar los valores de firstName, lastName y phoneNumber para ello
		console.log('Guardar perfil', firstName, lastName, phoneNumber)
	}

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Completa tu perfil</Text>
			<TextInput style={styles.input} placeholder='Nombre' value={firstName} onChangeText={(text) => setFirstName(text)} />
			<TextInput style={styles.input} placeholder='Apellido' value={lastName} onChangeText={(text) => setLastName(text)} />
			<TextInput style={styles.input} placeholder='Número de Teléfono' value={phoneNumber} onChangeText={(text) => setPhoneNumber(text)} keyboardType='phone-pad' />
			<Button title='Guardar' onPress={handleSaveProfile} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		paddingHorizontal: 16,
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 20,
	},
	input: {
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
		marginBottom: 16,
		paddingHorizontal: 8,
	},
})

export default CompleteProfileScreen
