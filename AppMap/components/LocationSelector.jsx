import * as Location from 'expo-location'

import { StyleSheet, Text, View, Alert, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { COLORS } from '../constants'
import MapPreview from '../components/MapPreview'

const LocationSelector = ({ onLocation }) => {
	const navigation = useNavigation()
	const [pickedLocation, setPickedLocation] = useState(null)

	const verifyPermissions = async () => {
		const { status } = await Location.requestForegroundPermissionsAsync()

		if (status !== 'granted') {
			Alert.alert('Permisos son insuficientes', 'Necesitamos que modifiques los permisos de ubicación', [{ text: 'Aceptar' }])
			return false
		}
		return true
	}

	const handleGetLocation = async () => {
		try {
			const isLocationOk = await verifyPermissions()
			if (!isLocationOk) return

			const location = await Location.getCurrentPositionAsync()
			setPickedLocation({
				lat: location.coords.latitude,
				lng: location.coords.longitude,
			})
			onLocation({
				lat: location.coords.latitude,
				lng: location.coords.longitude,
			})
		} catch (error) {
			console.error('Error ocurrido mientras se obtenia la ubicación:', error)
		}
	}

	return (
		<View style={styles.container}>
			<MapPreview location={pickedLocation} newStyles={styles.preview}>
				{pickedLocation ? <Text>Ubicación en procesos...</Text> : <Text>Selecciona una ubicación</Text>}
			</MapPreview>
			<Button title='Obtener ubicación' color={COLORS.PEACH_PUFF} onPress={handleGetLocation} />
		</View>
	)
}

export default LocationSelector

const styles = StyleSheet.create({
	container: {
		marginBottom: 10,
	},
	preview: {
		width: '100%',
		height: 200,
		marginBottom: 10,
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: COLORS.PEACH_PUFF,
		borderWidth: 1,
	},
	image: {
		width: '100%',
		height: ' 100%',
	},
	actions: {
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
})
