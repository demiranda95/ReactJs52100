import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, Button, FlatList, StyleSheet, Alert, TouchableOpacity, Modal, SafeAreaView } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import moment from 'moment'
import PickerSelect from 'react-native-picker-select'
import CalendarPicker from 'react-native-calendar-picker'
import { useDispatch, useSelector } from 'react-redux'
import { addReservation } from '../../store/actions/reservations.action'
import { Ionicons } from '@expo/vector-icons'
import styles from './styles'

const ReservationFormScreen = () => {
	const services = useSelector((state) => state.services.services)

	const dispatch = useDispatch()
	const navigation = useNavigation()
	const route = useRoute()
	const currentDate = new Date()

	const timeData = ['9:00', '12:00', '15:00', '17:00']

	const [name, setName] = useState('')
	const [lastName, setLastName] = useState('')
	const [rut, setRut] = useState('')
	const [date, setDate] = useState(currentDate)
	const [time, setTime] = useState(currentDate)
	const [selectedServices, setSelectedServices] = useState([])
	const [isCalendarVisible, setCalendarVisible] = useState(false)
	const [selectedDate, setSelectedDate] = useState(null)

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
			<View style={styles.sectionSelected}>
				<Text style={styles.selectedServicesTitle}>Servicios seleccionados:</Text>
				{selectedServices.map((serviceId) => {
					const service = services.find((service) => service.id === serviceId)
					const serviceName = service?.title || `Servicio ${serviceId}`
					const servicePrice = service?.price || ''

					return (
						<View key={serviceId} style={styles.selectedServiceItem}>
							<View style={styles.selectedServiceLeft}>
								<Text style={styles.selectedServiceName}>{serviceName}</Text>
							</View>
							<View style={styles.selectedServiceRight}>
								<Text style={styles.selectedServicePrice}>${servicePrice}</Text>
							</View>
						</View>
					)
				})}
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
									<Button title='Cerrar' onPress={handleCalendarModalToggle} style={styles.closeButton} />
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
					<Text style={styles.label}>Horarios:</Text>
					<Text style={styles.label}>Lunes a Viernes</Text>
					<Text style={styles.sublabel}>Si la hora seleccionada no se encuentra disponible, te notificaremos</Text>
				</View>
			</View>
			<View style={styles.sectionSelected}>{renderSelectedServices()}</View>
			<View style={styles.scheduleButtonContainer}>
				<Button title='Reservar' onPress={handleReservation} />
			</View>
		</SafeAreaView>
	)
}

export default ReservationFormScreen
