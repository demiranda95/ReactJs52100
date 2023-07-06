import React, { useState, useEffect } from 'react'
import { Alert, Linking } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import * as Location from 'expo-location'
import styles from './styles'

const ContactScreen = () => {
	const customLocations = [{ id: 1, title: 'Javi´s Boutique Ñuñoa', address: 'Duble Almeyda 1960, Ñuñoa', phone: '+56940380971', email: 'contacto@javisboutique.cl', latitude: -33.45476965276256, longitude: -70.61067747555619 }]

	const [location, setLocation] = useState()

	const [locationPermission, setLocationPermission] = useState('')

	useEffect(() => {
		const getPermissions = async () => {
			let { status } = await Location.requestForegroundPermissionsAsync()
			if (status != 'granted') {
				Alert.alert('Por favor autorizar permisos de ubicación')
				return
			} else {
				setLocationPermission('granted')
			}
			let currentLocacion = await Location.getCurrentPositionAsync({})
			setLocation(currentLocacion)
		}
		getPermissions()
	}, [locationPermission])

	return (
		<MapView
			style={styles.map}
			initialRegion={{
				latitude: -33.45476965276256,
				longitude: -70.61067747555619,
				latitudeDelta: 0.03,
				longitudeDelta: 0.03,
			}}
			showsUserLocation={locationPermission === 'granted'}
		>
			{customLocations.map((location) => (
				<Marker
					key={location.id}
					coordinate={{
						latitude: location.latitude,
						longitude: location.longitude,
					}}
					title={location.title}
					description={location.address}
					onPress={() => {
						Alert.alert(location.title, location.address, [
							{
								text: 'Llamar',
								onPress: () => {
									const phoneNumber = location.phone
									Linking.openURL(`tel:${phoneNumber}`)
								},
							},
							{
								text: 'Enviar WhatsApp',
								onPress: () => {
									const phoneNumber = location.phone
									Linking.openURL(`https://wa.me/${phoneNumber}`)
								},
							},
							{
								text: 'Enviar correo electrónico',
								onPress: () => {
									const email = location.email
									Linking.openURL(`mailto:${email}`)
								},
							},
							{
								text: 'Ver en Google Maps',
								onPress: () => {
									const address = location.address
									const url = `https://maps.google.com/maps/place/${address}`
									Linking.openURL(url)
								},
							},
							{
								text: 'Cancelar',
								style: 'cancel',
							},
						])
					}}
				/>
			))}
		</MapView>
	)
}

export default ContactScreen
