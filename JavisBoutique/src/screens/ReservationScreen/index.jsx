import React from 'react'
import { Text, View, SafeAreaView, TextInput, Button, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

const ReservationScreen = () => {
	const services = useSelector((state) => state.services.services)
	const reservations = useSelector((state) => state.reservations.reservations)
	console.log(reservations)

	const navigation = useNavigation()

	const timestampToDateTime = (timestamp) => {
		const date = new Date(timestamp * 1000)
		const day = String(date.getDate()).padStart(2, '0')
		const month = String(date.getMonth() + 1).padStart(2, '0')
		const year = String(date.getFullYear()).slice(-2)
		const hours = String(date.getHours()).padStart(2, '0')
		const minutes = String(date.getMinutes()).padStart(2, '0')

		return `${day}/${month}/${year} ${hours}:${minutes}`
	}

	const handleScheduleAppointment = () => {
		navigation.navigate('Services')
	}

	const hasReservations = reservations.length > 0

	const renderReservationItem = ({ item }) => {
		const formattedDateTime = timestampToDateTime(item.date)

		const handlePress = () => {
			console.log(`Reserva ${item.id}`)
		}

		const handleConfirmPress = () => {
			console.log(`Confirmar reserva ${item.id}`)
		}

		const handleDeletePress = () => {
			console.log(`Eliminar reserva ${item.id}`)
		}

		return (
			<View key={item.id} style={styles.reservationItemContainer}>
				<TouchableOpacity style={styles.itemInfoContainer} onPress={handlePress}>
					{item.selectedServices.map((serviceId) => {
						const service = services.find((service) => service.id === serviceId)
						return (
							<Text key={`${item.id}-${serviceId}`}>
								<Ionicons name='information-circle-outline' size={24} color='#888' /> {service?.title}
							</Text>
						)
					})}
					<Text>
						<Ionicons name='calendar-outline' size={24} color='#888' /> {formattedDateTime}
					</Text>
				</TouchableOpacity>
				<View style={styles.buttonsContainer}>
					<TouchableOpacity style={styles.buttonContainer} onPress={handleConfirmPress}>
						<Ionicons name='checkmark-circle-outline' size={40} color='green' />
						<Text style={styles.buttonTitle}>Confirmar</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.buttonContainer} onPress={handleDeletePress}>
						<Ionicons name='close-circle-outline' size={40} color='red' />
						<Text style={styles.buttonTitle}>Cancelar</Text>
					</TouchableOpacity>
				</View>
			</View>
		)
	}

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.sectionTop}>
				<Text style={styles.sectionTitle}>Horas Agendadas</Text>
				<View style={styles.reservationContainer}>
					{hasReservations ? <FlatList data={reservations} renderItem={renderReservationItem} keyExtractor={(item) => `${item.id}-${item.selectedServices.join('-')}`} pagingEnabled={true} showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }} /> : <Text>No hay reservas hechas...</Text>}
				</View>
			</View>
			<View style={styles.sectionBottom}>
				<Text style={styles.sectionTitle}>Agendar Hora</Text>
				<View style={styles.reservationContainer}>
					<Text style={styles.scheduleText}>¿Quieres agendar una hora?</Text>
					<Button title='Agendar' onPress={handleScheduleAppointment} />
				</View>
			</View>
		</SafeAreaView>
	)
}

export default ReservationScreen
