import moment from 'moment'
import { View, Text, Button, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'

const ReservationConfirm = ({ route, navigation }) => {
	const services = useSelector((state) => state.services.services)
	const { reservation } = route.params
	console.log(reservation)

	const handleHomeButtonPress = () => {
		navigation.navigate('Store')
	}

	return (
		<View style={styles.container}>
			<Text style={styles.text}>¡Reserva confirmada!</Text>
			<View style={styles.reservationDetails}>
				<Text style={styles.detailLabel}>Nombre:</Text>
				<Text style={styles.detailValue}>{reservation.name}</Text>

				<Text style={styles.detailLabel}>Apellido:</Text>
				<Text style={styles.detailValue}>{reservation.lastName}</Text>

				<Text style={styles.detailLabel}>RUT:</Text>
				<Text style={styles.detailValue}>{reservation.rut}</Text>

				<Text style={styles.detailLabel}>Fecha:</Text>
				<Text style={styles.detailValue}>{moment(reservation.date).format('DD/MM/YYYY')}</Text>
				<Text style={styles.detailLabel}>Hora:</Text>
				<Text style={styles.detailValue}>{reservation.time}</Text>

				<Text style={styles.detailLabel}>Servicios:</Text>
				<Text style={styles.detailValue}>
					{Array.isArray(reservation.selectedServices) && Array.isArray(services)
						? reservation.selectedServices
								.map((serviceId) => {
									const service = services.find((service) => service.id === serviceId)
									return service ? service.title : 'Error'
								})
								.join(', ')
						: 'Error en los datos'}
				</Text>
			</View>

			<Button title='Volver al inicio' onPress={handleHomeButtonPress} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 20,
	},
	reservationDetails: {
		marginBottom: 20,
	},
	detailLabel: {
		fontWeight: 'bold',
		marginBottom: 5,
	},
	detailValue: {
		marginBottom: 10,
	},
})

export default ReservationConfirm
