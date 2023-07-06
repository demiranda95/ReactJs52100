import React from 'react'
import { StyleSheet, ScrollView, View, Image, Text, Dimensions, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

const windowWidth = Dimensions.get('window').width
const itemWidth = (windowWidth - 45) / 2

const ProductScreen = () => {
	const products = useSelector((state) => state.products.products)
	const navigation = useNavigation()
	return (
		<ScrollView contentContainerStyle={styles.container}>
			<View style={styles.itemsContainer}>
				{products.map((product) => (
					<TouchableOpacity style={styles.itemContainer} key={product.id} onPress={() => navigation.navigate('ProductDetail', { productId: product.id })}>
						<Image source={{ uri: product.image }} style={styles.itemImage} />
						<View style={styles.itemOverlay}>
							<Text style={styles.itemTitle}>{product.title}</Text>
						</View>
					</TouchableOpacity>
				))}
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingVertical: 20,
		paddingHorizontal: 15,
	},
	itemsContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
	},
	itemContainer: {
		width: itemWidth,
		marginBottom: 15,
	},
	itemImage: {
		width: '100%',
		aspectRatio: 1,
		resizeMode: 'cover',
		borderRadius: 8,
	},
	itemOverlay: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		top: 130,
		backgroundColor: 'rgba(0, 0, 0, 0.6)',
		paddingVertical: 5,
		paddingHorizontal: 5,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 8,
	},
	itemTitle: {
		fontSize: 14,
		textAlign: 'center',
		color: '#fff',
		fontWeight: 'bold',
	},
})

export default ProductScreen
