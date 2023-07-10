import React, { useState } from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const ProfileScreen = () => {
	const navigation = useNavigation()
	const [firstName, setFirstName] = useState('John')
	const [lastName, setLastName] = useState('Doe')
	const [phoneNumber, setPhoneNumber] = useState('1234567890')
	const [email, setEmail] = useState('johndoe@example.com')

	const handleSaveChanges = () => {
		console.log('Guardando cambios...')
	}

	const handleToggleDrawer = () => {
		navigation.toggleDrawer()
	}

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.headerContainer}>
				<View style={styles.headerSection}>
					<TouchableOpacity style={styles.profileButton} onPress={handleToggleDrawer}>
						<Ionicons name='menu-outline' size={24} color='black' />
					</TouchableOpacity>
				</View>
				<Text style={styles.title}>Perfil</Text>
				<View style={styles.headerSection}></View>
			</View>
			<View style={styles.section}>
				<View style={styles.inputContainer}>
					<Text style={styles.label}>Nombre:</Text>
					<TextInput style={styles.input} value={firstName} onChangeText={setFirstName} placeholder='Ingrese su nombre' placeholderTextColor='#888' />
				</View>
				<View style={styles.inputContainer}>
					<Text style={styles.label}>Apellido:</Text>
					<TextInput style={styles.input} value={lastName} onChangeText={setLastName} placeholder='Ingrese su apellido' placeholderTextColor='#888' />
				</View>
				<View style={styles.inputContainer}>
					<Text style={styles.label}>Número de Teléfono:</Text>
					<TextInput style={styles.input} value={phoneNumber} onChangeText={setPhoneNumber} placeholder='Ingrese su número de teléfono' placeholderTextColor='#888' keyboardType='numeric' />
				</View>
				<View style={styles.inputContainer}>
					<Text style={styles.label}>Correo Electrónico:</Text>
					<TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder='Ingrese su correo electrónico' placeholderTextColor='#888' keyboardType='email-address' />
				</View>
				<Button title='Guardar Cambios' onPress={handleSaveChanges} />
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F5FCFF',
	},
	headerContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 15,
		marginBottom: 20,
	},
	title: {
		fontSize: 32,
		fontWeight: 'bold',
		marginBottom: 20,
	},
	headerSection: {
		width: 40,
	},
	section: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		margin: 10,
		width: '100%',
	},
	inputContainer: {
		marginBottom: 16,
		width: '80%',
	},
	label: {
		fontSize: 16,
		marginBottom: 8,
		color: '#888',
	},
	input: {
		height: 40,
		paddingHorizontal: 8,
		borderBottomColor: '#ccc',
		borderBottomWidth: 1,
		fontSize: 16,
		color: '#333',
	},
})

export default ProfileScreen
