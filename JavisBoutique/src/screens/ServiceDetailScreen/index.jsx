import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { useSelector } from 'react-redux'

const ServiceDetailScreen = ({ route }) => {
	const services = useSelector((state) => state.services.services)
	const categories = useSelector((state) => state.categories.categories)
	const { serviceId, categoryId } = route.params
	const service = services.find((service) => service.id === serviceId)
	const category = categories.find((category) => category.id === categoryId)

	console.log(serviceId)

	if (!services || !categories) {
		return (
			<View style={styles.container}>
				<Text>Loading...</Text>
			</View>
		)
	}

	return (
		<View style={styles.container}>
			<Image source={{ uri: service.image }} style={styles.image} />
			<View style={styles.detailsContainer}>
				<Text style={styles.title}>{service.title}</Text>
				<Text style={styles.category}>{category.title}</Text>
				<Text style={styles.price}>${service.price}</Text>
				<Text style={styles.description}>{service.description}</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		marginHorizontal: 20,
	},
	image: {
		flex: 1.5,
		width: '120%',
		height: 300,
		resizeMode: 'cover',
	},
	detailsContainer: {
		flex: 1,
		padding: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 10,
	},
	price: {
		fontSize: 20,
		color: '#888',
		marginBottom: 20,
	},
	description: {
		fontSize: 16,
		marginBottom: 10,
	},
	category: {
		fontSize: 16,
		marginBottom: 10,
	},
	location: {
		fontSize: 16,
		marginBottom: 10,
	},
	// Estilos adicionales del resto de la información del servicio
})

export default ServiceDetailScreen
