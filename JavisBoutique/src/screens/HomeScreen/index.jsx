import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity, SafeAreaView, ActivityIndicator } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { Ionicons } from '@expo/vector-icons'
import styles from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../store/actions/products.action'
import { fetchServices } from '../../store/actions/services.action'
import { fetchCategories } from '../../store/actions/categories.action'

const HomeScreen = () => {
	const loadingProducts = useSelector((state) => state.products.loading)
	const errorProducts = useSelector((state) => state.products.error)
	const loadingServices = useSelector((state) => state.services.loading)
	const errorServices = useSelector((state) => state.services.error)
	const services = useSelector((state) => state.services.services)
	const reservations = useSelector((state) => state.reservations.reservations)
	const dispatch = useDispatch()

	const carouselData = [
		{ id: 1, image: 'https://i.pinimg.com/originals/86/2d/0c/862d0ce3e02e76b1bfd17819ffad95b2.jpg' },
		{ id: 2, image: 'https://i.pinimg.com/originals/86/2d/0c/862d0ce3e02e76b1bfd17819ffad95b2.jpg' },
		{ id: 3, image: 'https://i.pinimg.com/originals/86/2d/0c/862d0ce3e02e76b1bfd17819ffad95b2.jpg' },
	]

	useEffect(() => {
		dispatch(fetchCategories())
		dispatch(fetchProducts())
		dispatch(fetchServices())
	}, [dispatch])

	if (loadingProducts) {
		return (
			<View style={styles.loadingContainer}>
				<ActivityIndicator size='large' />
			</View>
		)
	} else if (loadingServices) {
		return (
			<View style={styles.loadingContainer}>
				<ActivityIndicator size='large' />
			</View>
		)
	}

	if (errorProducts) {
		return (
			<View style={styles.errorContainer}>
				<Text>Error: {error}</Text>
			</View>
		)
	} else if (errorServices) {
		return (
			<View style={styles.errorContainer}>
				<Text>Error: {error}</Text>
			</View>
		)
	}

	const timestampToDateTime = (timestamp) => {
		const date = new Date(timestamp * 1000)
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
		const service = services.find((service) => service.id === item.serviceId)
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
			<ScrollView key={item.id} style={styles.reservationItemContainer}>
				<TouchableOpacity style={styles.itemInfoContainer} onPress={handlePress}>
					<Text style={styles.reservationItemTitle}>{item.title}</Text>
					<Text>
						<Ionicons name='information-circle-outline' size={24} color='#888' /> {service?.title}
					</Text>
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
			</ScrollView>
		)
	}

	const [activeSlide, setActiveSlide] = useState(0)
	const renderCarouselItem = ({ item, index }, parallaxProps) => {
		return (
			<View style={styles.carouselItem}>
				<Image source={{ uri: item.image }} style={styles.carouselImage} />
				<View style={styles.cardContent}>
					<Text style={styles.cardTitle}>Título de la tarjeta</Text>
					<Text style={styles.cardDescription}>Descripción de la tarjeta</Text>
				</View>
			</View>
		)
	}

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>Javi´s Boutique</Text>
			<View style={styles.section}>
				<Text style={styles.sectionTitle}>Últimos Trabajos</Text>
				<Carousel
					layoutCardOffset={20}
					data={carouselData}
					renderItem={renderCarouselItem}
					sliderWidth={500}
					itemWidth={320}
					onSnapToItem={(index) => setActiveSlide(index)} // Actualiza el valor de activeSlide al cambiar de item en el carrusel
				/>
				<Pagination
					dotsLength={carouselData.length} // Número total de elementos en el carrusel
					activeDotIndex={activeSlide} // Índice del elemento actualmente visible
					containerStyle={styles.paginationContainer} // Estilos para el contenedor del componente de paginación
					dotStyle={styles.paginationDot} // Estilos para cada punto del componente de paginación
					inactiveDotOpacity={0.4} // Opacidad de los puntos inactivos
					inactiveDotScale={0.6} // Escala de los puntos inactivos
				/>
			</View>
			{/* <View style={styles.section}>
				<Text style={styles.sectionTitle}>Reservas</Text>
				<View style={styles.reservationContainer}>{hasReservations ? <FlatList data={reservations} renderItem={renderReservationItem} keyExtractor={(item) => item.id} pagingEnabled={true} showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }} /> : <Text>No hay reservas hechas...</Text>}</View>
			</View> */}
		</SafeAreaView>
	)
}

export default HomeScreen
