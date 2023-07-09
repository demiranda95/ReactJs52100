import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image, Button, SafeAreaView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

const ServiceScreen = () => {
	const services = useSelector((state) => state.services.services)
	const categories = useSelector((state) => state.categories.categories)
	const [selectedServices, setSelectedServices] = useState([]) // Estado local para almacenar los servicios seleccionados
	const navigation = useNavigation()

	const handleServicePress = (serviceId) => {
		const isSelected = selectedServices.includes(serviceId)
		if (isSelected) {
			setSelectedServices((prevSelectedServices) => prevSelectedServices.filter((id) => id !== serviceId))
		} else {
			setSelectedServices((prevSelectedServices) => [...prevSelectedServices, serviceId])
		}
	}

	const handleSchedulePress = () => {
		const selectedServiceIds = selectedServices.map((serviceId) => serviceId)
		navigation.navigate('ReservationForm', { selectedServiceIds })
	}

	const isServiceSelected = (serviceId) => {
		return selectedServices.includes(serviceId)
	}

	const renderServiceItem = ({ item }) => {
		const handleMoreInfoPress = () => {
			const service = services.find((service) => service.id === item.id)
			const category = categories.find((category) => category.id === item.categoryId)
			navigation.navigate('ServiceDetail', { serviceId: service.id, categoryId: category.id })
		}

		return (
			<View>
				<TouchableOpacity style={[styles.serviceItem, isServiceSelected(item.id) && styles.selectedService]} onPress={() => handleServicePress(item.id)}>
					<View style={styles.serviceContent}>
						<Image source={{ uri: item.image }} style={styles.serviceImage} />
						<View style={styles.serviceInfo}>
							<Text style={styles.serviceName}>{item.title}</Text>
							<Text style={styles.servicePrice}>${item.price}</Text>
						</View>
					</View>
					<TouchableOpacity style={styles.moreInfoButton} onPress={handleMoreInfoPress}>
						<Ionicons name='information-circle-outline' size={16} color='black' />
					</TouchableOpacity>
				</TouchableOpacity>
			</View>
		)
	}

	const renderCategoryList = () => (
		<FlatList
			data={categories}
			renderItem={({ item }) => (
				<View>
					<Text style={styles.categoryTitle}>{item.title}</Text>
					<FlatList data={services.filter((service) => service.categoryId === item.id)} renderItem={renderServiceItem} keyExtractor={(item) => item.id} />
				</View>
			)}
			keyExtractor={(item) => item.id}
		/>
	)

	const handleBackPress = () => {
		navigation.goBack()
	}

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.headerContainer}>
				<View style={styles.headerSection}>
					<TouchableOpacity onPress={handleBackPress} style={styles.headerSection}>
						<Ionicons name='arrow-back' size={24} color='black' />
					</TouchableOpacity>
				</View>
				<Text style={styles.title}>Servicios</Text>
				<View style={styles.headerSection}></View>
			</View>
			<View style={styles.sectionServices}>{renderCategoryList()}</View>
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
			<View style={styles.scheduleButtonContainer}>
				<Button title='Agendar Hora' onPress={handleSchedulePress} />
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
	sectionServices: {
		flex: 2,
	},
	sectionSelected: {
		flex: 1,
	},
	serviceItem: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 16,
		padding: 16,
		borderWidth: 1,
		borderColor: 'gray',
		borderRadius: 8,
	},
	serviceContent: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	serviceImage: {
		width: 90,
		height: 90,
		marginRight: 16,
	},
	serviceInfo: {
		flex: 1,
	},
	serviceName: {
		fontSize: 16,
		fontWeight: 'bold',
	},
	servicePrice: {
		fontSize: 14,
		color: 'gray',
	},
	moreInfoButton: {
		backgroundColor: 'lightgray',
		borderRadius: 8,
		padding: 15,
		marginLeft: 'auto',
	},
	categoryTitle: {
		fontSize: 20,
		fontWeight: 'bold',
		marginTop: 16,
		marginBottom: 8,
	},
	selectedServicesTitle: {
		fontSize: 18,
		fontWeight: 'bold',
		marginTop: 16,
	},
	selectedService: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 16,
		padding: 16,
		borderColor: 'gray',
		borderRadius: 8,
	},
	selectedServiceItem: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 2,
		padding: 5,
		borderColor: 'gray',
		borderRadius: 8,
	},
	selectedServiceLeft: {
		flex: 1,
	},
	selectedServiceRight: {
		marginLeft: 16,
	},
	selectedServiceName: {
		fontSize: 16,
	},
	selectedServicePrice: {
		fontSize: 16,
		fontWeight: 'bold',
	},
	scheduleButtonContainer: {
		marginTop: 16,
	},
})

export default ServiceScreen
