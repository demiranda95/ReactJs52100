import React, { useState } from 'react'
import { Text, View, TouchableOpacity, FlatList, Image, Button, SafeAreaView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import styles from './styles'

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

export default ServiceScreen
