import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, Button, FlatList, StyleSheet, Alert, TouchableOpacity, Modal, SafeAreaView } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import moment from 'moment'
import PickerSelect from 'react-native-picker-select'
import CalendarPicker from 'react-native-calendar-picker'
import { useDispatch, useSelector } from 'react-redux'
import { addReservation } from '../../store/actions/reservations.action'
import { Ionicons } from '@expo/vector-icons'

const ReservationFormScreen = () => {
	const services = useSelector((state) => state.services.services)

	const dispatch = useDispatch()
	const currentDate = new Date()

	const timeData = ['9:00', '12:00', '15:00', '17:00']

	const [name, setName] = useState('')
	const [lastName, setLastName] = useState('')
	const [rut, setRut] = useState('')
	const [date, setDate] = useState(currentDate)
	const [time, setTime] = useState(currentDate)
	const [selectedServices, setSelectedServices] = useState([])
	const [timestamp, setTimestamp] = useState(moment())
	const [isCalendarVisible, setCalendarVisible] = useState(false)
	const [selectedDate, setSelectedDate] = useState(null)

	const navigation = useNavigation()
	const route = useRoute()

	useEffect(() => {
		if (route.params?.selectedServiceIds) {
			const selectedServiceIds = route.params.selectedServiceIds
			setSelectedServices(selectedServiceIds)
		}
	}, [route.params])

	const handleReservation = () => {
		const timestamp = new Date().getTime()

		if (!name || !lastName || !rut || !date || selectedServices.length === 0) {
			Alert.alert('Datos Incompletos', 'Por favor, completa todos los campos')
			return
		}

		const reservation = {
			name,
			lastName,
			rut,
			date,
			time,
			selectedServices,
			timestamp,
		}

		dispatch(addReservation(reservation))
			.then(() => {
				navigation.navigate('ReservationConfirm', { reservation: { ...reservation, timestamp } })
			})
			.catch((error) => {
				console.log(error)
			})
	}

	const handleCalendarModalToggle = () => {
		setCalendarVisible(!isCalendarVisible)
	}

	const handleCalendarSelect = (date) => {
		setDate(date)
		setSelectedDate(moment(date).format('DD/MM/YYYY'))
		setCalendarVisible(false)
	}

	const renderSelectedServices = () => {
		return (
			<View style={styles.selectedServicesContainer}>
				<Text style={styles.selectedServicesTitle}>Servicios seleccionados:</Text>
				<FlatList
					data={selectedServices}
					renderItem={({ item }) => {
						const service = services.find((service) => service.id === item)
						return (
							<View style={styles.selectedServiceItem}>
								<Text style={styles.selectedServiceName}>{service ? service.title : 'Error'}</Text>
								<Text style={styles.selectedServicePrice}>{service ? `$${service.price}` : 'Error'}</Text>
							</View>
						)
					}}
					keyExtractor={(item) => item.toString()}
				/>
			</View>
		)
	}

	const handleBackPress = () => {
		navigation.goBack()
	}

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.headerContainer}>
				<TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
					<Ionicons name='arrow-back' size={24} color='black' />
				</TouchableOpacity>
				<Text style={styles.title}>Agendar Hora</Text>
				<View style={styles.headerSection}></View>
			</View>
			<View style={styles.section}>
				<View style={styles.inputContainer}>
					<View style={styles.nameContainer}>
						<View style={styles.nameInputContainer}>
							<Text style={styles.label}>Nombre:</Text>
							<TextInput style={styles.input} value={name} onChangeText={setName} placeholder='Ingresa tu nombre' />
						</View>
						<View style={styles.nameInputContainer}>
							<Text style={styles.label}>Apellido:</Text>
							<TextInput style={styles.input} value={lastName} onChangeText={setLastName} placeholder='Ingresa tu apellido' />
						</View>
					</View>
				</View>
				<View style={styles.inputContainer}>
					<Text style={styles.label}>RUT:</Text>
					<TextInput style={styles.input} value={rut} onChangeText={setRut} placeholder='Ingresa tu RUT' />
				</View>
				<View style={styles.inputContainer}>
					<View style={styles.nameContainer}>
						<View style={styles.nameInputContainer}>
							<Text style={styles.label}>Fecha:</Text>
							<TouchableOpacity style={styles.dateInput} onPress={handleCalendarModalToggle}>
								<Text>{selectedDate ? selectedDate.toString() : 'Seleccionar fecha'}</Text>
							</TouchableOpacity>
							<Modal visible={isCalendarVisible} animationType='slide'>
								<View style={styles.modalContainer}>
									<CalendarPicker
										scrollable
										startFromMonday={true}
										onDateChange={handleCalendarSelect}
										minDate={new Date()}
										weekdays={['L', 'M', 'M', 'J', 'V', 'S', 'D']}
										months={['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']}
										textStyle={styles.dateText}
										todayTextStyle={styles.todayText}
										selectedDayTextStyle={styles.selectedDayText}
										selectedDayStyle={styles.selectedDay}
										disabledDayTextStyle={styles.disabledDayText}
									/>
									<Button title='Cerrar' onPress={handleCalendarModalToggle} />
								</View>
							</Modal>
						</View>

						<View style={styles.nameInputContainer}>
							<Text style={styles.label}>Hora:</Text>
							<PickerSelect
								style={styles.pickerSelectStyles}
								value={time}
								onValueChange={(value) => setTime(value)}
								items={timeData.map((hour) => ({ label: hour, value: hour }))}
								placeholder={{
									label: 'Seleccionar hora',
									value: null,
									color: '#000',
								}}
							/>
						</View>
					</View>
				</View>
				<View style={styles.inputContainer}>
					<View style={styles.inputContainer}>
						<Text style={styles.label}>Horarios:</Text>
						<Text style={styles.label}>Lunes a Viernes</Text>
						<Text style={styles.sublabel}>Si la hora seleccionada no se encuentra disponible, te notificaremos</Text>
					</View>
				</View>
			</View>
			<View style={styles.sectionSelected}>{renderSelectedServices()}</View>
			<View style={styles.scheduleButtonContainer}>
				<Button title='Reservar' onPress={handleReservation} />
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
	sectionTitle: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 20,
	},
	inputContainer: {
		marginBottom: 10,
		width: '80%',
	},
	nameContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	nameInputContainer: {
		flex: 1,
		marginRight: 10,
	},
	label: {
		fontSize: 16,
		fontWeight: 'bold',
		marginBottom: 5,
		color: '#888',
	},
	sublabel: {
		fontSize: 16,
		fontWeight: 'light',
		marginBottom: 5,
		fontStyle: 'italic',
	},
	input: {
		height: 40,
		borderWidth: 1,
		borderColor: '#ccc',
		borderRadius: 5,
		paddingHorizontal: 10,
	},
	selectedServicesContainer: {
		marginTop: 20,
		marginBottom: 20,
	},
	selectedServicesTitle: {
		fontSize: 18,
		fontWeight: 'bold',
		marginBottom: 10,
	},
	selectedServiceItem: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 5,
	},
	selectedServiceName: {
		fontSize: 16,
	},
	selectedServicePrice: {
		fontSize: 16,
		fontWeight: 'bold',
	},
	sectionSelected: {
		flex: 1,
	},
	scheduleButtonContainer: {
		marginTop: 16,
	},
	pickerSelectStyles: {
		inputIOS: {
			height: 40,
			borderWidth: 1,
			borderColor: '#ccc',
			borderRadius: 5,
			paddingHorizontal: 10,
			textAlign: 'right',
		},
		inputAndroid: {
			height: 40,
			borderWidth: 1,
			borderColor: '#ccc',
			borderRadius: 5,
			paddingHorizontal: 10,
			textAlign: 'right',
		},
	},
	dateInput: {
		height: 40,
		borderWidth: 1,
		borderColor: '#ccc',
		borderRadius: 5,
		paddingHorizontal: 10,
		justifyContent: 'center',
	},
	modalContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
	},
	dateText: {
		fontSize: 16,
		color: '#333',
	},
	todayText: {
		fontWeight: 'bold',
	},
	selectedDayText: {
		color: '#fff',
		fontWeight: 'bold',
	},
	selectedDay: {
		backgroundColor: 'blue',
	},
	disabledDayText: {
		color: '#ccc',
	},
})

export default ReservationFormScreen
