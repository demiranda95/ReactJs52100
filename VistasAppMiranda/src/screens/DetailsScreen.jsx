import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { COLORS } from '../constants/colors'

const DetailsScreen = ({ route }) => {
	const image = route.params.image
	const bread = route.params.product

	return (
		<View style={styles.container}>
			<View style={styles.detailsContainer}>
				<Image source={{ uri: image }} style={styles.image} />
				<Text style={styles.name}>{bread.name}</Text>
				<Text style={styles.description}>{bread.description}</Text>
				<Text style={styles.price}>${bread.price}</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
		paddingBottom: 100,
		justifyContent: 'center',
	},
	image: {
		width: '100%',
		height: 200,
		resizeMode: 'cover',
		marginBottom: 16,
	},
	detailsContainer: {
		padding: 16,
		borderRadius: 8,
		shadowColor: COLORS.black,
		shadowOpacity: 0.2,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 4,
		elevation: 5,
		backgroundColor: COLORS.white,
	},
	name: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 8,
		textAlign: 'center',
	},
	description: {
		fontSize: 16,
		marginBottom: 8,
		textAlign: 'justify',
	},
	price: {
		fontSize: 30,
		fontWeight: 'bold',
		color: COLORS.primary,
		textAlign: 'right',
	},
})

export default DetailsScreen
