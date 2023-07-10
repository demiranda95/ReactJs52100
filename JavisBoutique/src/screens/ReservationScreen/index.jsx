import React, { useEffect } from 'react'
import { Text, View, SafeAreaView, Button, FlatList, TouchableOpacity, Alert } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { deleteReservation, fetchReservations } from '../../store/actions/reservations.action'

const ReservationScreen = () => {
	const services = useSelector((state) => state.services.services)
	const reservations = useSelector((state) => state.reservations.reservations)
	const navigation = useNavigation()
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchReservations())
	}, [])

	const timestampToDateTime = (timestamp) => {
		const date = new Date(timestamp)
		const day = String(date.getDate()).padStart(2, '0')
		const month = String(date.getMonth() + 1).padStart(2, '0')
		const year = String(date.getFullYear()).slice(-2)
		const hours = String(date.getHours()).padStart(2, '0')
		const minutes = String(date.getMinutes()).padStart(2, '0')

		return `${day}/${month}/${year} ${hours}:${minutes}`
	}

	const hasReservations = reservations.length > 0

	const renderReservationItem = ({ item }) => {
		const formattedDateTime = timestampToDateTime(item.date)

		const handlePress = () => {
			console.log(`Reserva ${item.id}`)
		}

		const handleConfirmPress = () => {
			Alert.alert('Confirmar Reserva', '¿Estás seguro de confirmar esta reserva?', [
				{
					text: 'Cancelar',
					style: 'cancel',
				},
				{
					text: 'Confirmar',
					onPress: () => {
						console.log(`Confirmar reserva ${item.id}`)
					},
				},
			])
		}

		const handleDeletePress = () => {
			Alert.alert('Eliminar Reserva', '¿Estás seguro de eliminar esta reserva?', [
				{
					text: 'Cancelar',
					style: 'cancel',
				},
				{
					text: 'Eliminar',
					style: 'destructive',
					onPress: () => {
						console.log(`Eliminar reserva ${item.id}`)
						dispatch(deleteReservation(item.id))
					},
				},
			])
		}

		return (
			<View key={item.id} style={styles.reservationItemContainer}>
				<TouchableOpacity style={styles.itemInfoContainer} onPress={handlePress}>
					{item.selectedServices?.map((serviceId) => {
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
				<View style={styles.reservationContainer}>{hasReservations ? <FlatList data={reservations} renderItem={renderReservationItem} keyExtractor={(item) => `${item.id}`} pagingEnabled={true} showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }} /> : <Text>No hay reservas hechas...</Text>}</View>
			</View>
		</SafeAreaView>
	)
}

export default ReservationScreen
