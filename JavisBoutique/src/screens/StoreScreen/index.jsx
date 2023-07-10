import React, { useEffect } from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'

const StoreScreen = () => {
	const products = useSelector((state) => state.products.products)
	const services = useSelector((state) => state.services.services)

	const navigation = useNavigation()

	const OptionSection = () => {
		const navigateToServices = () => {
			navigation.navigate('Services') 
		}

		const navigateToProducts = () => {
			navigation.navigate('Products', { products: products })
		}

		return (
			<View style={styles.optionSection}>
				<TouchableOpacity style={styles.imageContainer} onPress={navigateToServices}>
					<Image source={{ uri: 'https://hips.hearstapps.com/hmg-prod/images/elle-manicura-2021-1609673220.png' }} style={styles.image} />
					<View style={styles.imageOverlay}>
						<Text style={styles.imageText}>Servicios</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity style={styles.imageContainer} onPress={navigateToProducts}>
					<Image source={{ uri: 'https://hips.hearstapps.com/hmg-prod/images/elle-manicura-2021-1609673220.png' }} style={styles.image} />
					<View style={styles.imageOverlay}>
						<Text style={styles.imageText}>Productos</Text>
					</View>
				</TouchableOpacity>
			</View>
		)
	}

	const FeaturedServicesSection = () => {
		const featuredServices = services.filter((service) => service.featured)

		return (
			<View style={styles.section}>
				<Text style={styles.sectionTitle}>Servicios Destacados</Text>
				<ScrollView horizontal showsHorizontalScrollIndicator={false}>
					<View style={styles.itemsContainer}>
						{featuredServices.map((service) => (
							<TouchableOpacity style={styles.itemContainer} key={service.id} onPress={() => navigation.navigate('ServiceDetail', { serviceId: service.id, categoryId: service.categoryId })}>
								<Image source={{ uri: service.image }} style={styles.itemImage} />
								<View style={styles.itemOverlay}>
									<Text style={styles.itemTitle}>{service.title}</Text>
								</View>
							</TouchableOpacity>
						))}
					</View>
				</ScrollView>
			</View>
		)
	}

	const FeaturedProductsSection = () => {
		const featuredProducts = products.filter((product) => product.featured)

		if (featuredProducts.length > 0) {
			return (
				<View style={styles.section}>
					<Text style={styles.sectionTitle}>Productos Destacados</Text>
					<ScrollView horizontal showsHorizontalScrollIndicator={false}>
						<View style={styles.itemsContainer}>
							{featuredProducts.map((product) => (
								<TouchableOpacity style={styles.itemContainer} key={product.id} onPress={() => navigation.navigate('ProductDetail', { productId: product.id })}>
									<Image source={{ uri: product.image }} style={styles.itemImage} />
									<View style={styles.itemOverlay}>
										<Text style={styles.itemTitle}>{product.title}</Text>
									</View>
								</TouchableOpacity>
							))}
						</View>
					</ScrollView>
				</View>
			)
		} else {
			return null
		}
	}

	const ViewedProductsSection = () => {
		const thirtyDaysAgo = new Date()
		thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)

		const viewedProducts = products.filter((product) => {
			if (product.lastViewed) {
				const lastViewedDate = new Date(product.lastViewed * 1000)
				return lastViewedDate >= thirtyDaysAgo
			}
			return false
		})

		return (
			<View style={styles.section}>
				<Text style={styles.sectionTitle}>Productos Vistos</Text>
				<ScrollView horizontal showsHorizontalScrollIndicator={false}>
					<View style={styles.itemsContainer}>
						{viewedProducts.map((product) => (
							<TouchableOpacity style={styles.itemContainer} key={product.id}>
								<Image source={{ uri: product.image }} style={styles.itemImage} />
								<View style={styles.itemOverlay}>
									<Text style={styles.itemTitle}>{product.title}</Text>
								</View>
							</TouchableOpacity>
						))}
					</View>
				</ScrollView>
			</View>
		)
	}

	return (
		<SafeAreaView style={styles.container}>
			<OptionSection />
			<FeaturedServicesSection />
			<FeaturedProductsSection />
			<ViewedProductsSection />
		</SafeAreaView>
	)
}
export default StoreScreen
