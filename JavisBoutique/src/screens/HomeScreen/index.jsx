import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity, SafeAreaView, ActivityIndicator } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { Ionicons } from '@expo/vector-icons'
import styles from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../store/actions/products.action'
import { fetchServices } from '../../store/actions/services.action'
import { fetchCategories } from '../../store/actions/categories.action'
import { fetchReservations } from '../../store/actions/reservations.action'
import { fetchCarousel } from '../../store/actions/carousel.action'
import { COLORS } from '../../constants/colors'

const HomeScreen = ({ navigation }) => {
	const loadingProducts = useSelector((state) => state.products.loading)
	const errorProducts = useSelector((state) => state.products.error)
	const loadingServices = useSelector((state) => state.services.loading)
	const errorServices = useSelector((state) => state.services.error)
	const carousel = useSelector((state) => state.carousel.carousel)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchCategories())
		dispatch(fetchProducts())
		dispatch(fetchServices())
		dispatch(fetchReservations())
		dispatch(fetchCarousel())
	}, [dispatch])

	if (loadingProducts || loadingServices) {
		return (
			<View style={styles.loadingContainer}>
				<ActivityIndicator size='large' />
			</View>
		)
	}

	if (errorProducts || errorServices) {
		return (
			<View style={styles.errorContainer}>
				<Text>Error: {errorProducts || errorServices}</Text>
			</View>
		)
	}

	const [activeSlide, setActiveSlide] = useState(0)
	const renderCarouselItem = ({ item }) => {
		return (
			<View style={styles.carouselItem}>
				<Image source={{ uri: item.image }} style={styles.carouselImage} />
				<View style={styles.cardContent}>
					<Text style={styles.cardTitle}>{item.title}</Text>
					<Text style={styles.cardDescription}>{item.description}</Text>
				</View>
			</View>
		)
	}

	const handleToggleDrawer = () => {
		navigation.toggleDrawer()
	}

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.headerContainer}>
				<View style={styles.headerSection}>
					<TouchableOpacity style={styles.profileButton} onPress={handleToggleDrawer}>
						<Ionicons name='menu-outline' size={24} color={COLORS.primary} />
					</TouchableOpacity>
				</View>
				<View style={styles.logo}>
					<Image source={require('../../assets/logo.png')} style={styles.logoImage} />
				</View>
				<View style={styles.headerSection}></View>
			</View>
			<View style={styles.section}>
				<Text style={styles.sectionTitle}>Últimos Trabajos</Text>
				<Carousel layoutCardOffset={20} data={carousel} renderItem={renderCarouselItem} sliderWidth={500} itemWidth={320} onSnapToItem={(index) => setActiveSlide(index)} />
			</View>
		</SafeAreaView>
	)
}

export default HomeScreen
