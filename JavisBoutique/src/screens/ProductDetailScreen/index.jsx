import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image, ActivityIndicator } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../store/actions/cart.action'

const ProductDetailScreen = ({ route }) => {
	const { productId } = route.params
	const products = useSelector((state) => state.products.products)
	const loading = useSelector((state) => state.products.loading)
	const error = useSelector((state) => state.products.error)
	const dispatch = useDispatch()
	const [product, setProduct] = useState(null)

	if (loading) {
		return (
			<View style={styles.loadingContainer}>
				<ActivityIndicator size='large' />
			</View>
		)
	}

	if (error) {
		return (
			<View style={styles.errorContainer}>
				<Text>Error: {error}</Text>
			</View>
		)
	}

	useEffect(() => {
		const selectedProduct = products.find((product) => product.id === productId)
		setProduct(selectedProduct)
	}, [products, productId])

	const [quantity, setQuantity] = useState(1)

	const handleAddToCart = () => {
		dispatch(addToCart(product, quantity))
	}

	if (!product) {
		return (
			<View style={styles.container}>
				<Text>Producto no encontrado</Text>
			</View>
		)
	}

	return (
		<View style={styles.container}>
			<Image source={{ uri: product.image }} style={styles.image} />
			<View style={styles.infoContainer}>
				<Text style={styles.title}>{product.title}</Text>
				<Text style={styles.description}>{product.description}</Text>
			</View>
			<View style={styles.buttonsContainer}>
				<View style={styles.quantityContainer}>
					<View style={styles.quantityButtons}>
						<TouchableOpacity onPress={() => setQuantity(quantity - 1)} disabled={quantity === 1}>
							<Ionicons name='remove-outline' size={24} />
						</TouchableOpacity>
						<Text style={styles.quantity}>{quantity}</Text>
						<TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
							<Ionicons name='add-outline' size={24} />
						</TouchableOpacity>
					</View>
				</View>
				<TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
					<Ionicons name='ios-cart' size={24} color='#fff' style={styles.cartIcon} />
					<Text style={styles.addToCartButtonText}>Agregar al carrito</Text>
				</TouchableOpacity>
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
		flex: 2,
		width: '120%',
		height: 300,
		resizeMode: 'cover',
	},
	infoContainer: {
		flex: 1,
	},
	buttonsContainer: {
		flex: 1,
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		marginTop: 20,
		textAlign: 'center',
	},
	description: {
		fontSize: 16,
		marginTop: 10,
		textAlign: 'center',
	},
	quantityContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 20,
	},
	quantityText: {
		fontSize: 16,
		marginRight: 10,
	},
	quantityButtons: {
		flexDirection: 'row',
		alignItems: 'center',
		borderRadius: 5,
		paddingVertical: 8,
		paddingHorizontal: 16,
	},
	quantityButtonText: {
		fontSize: 18,
	},
	quantity: {
		fontSize: 22,
		marginHorizontal: 40,
	},
	addToCartButton: {
		marginTop: 20,
		backgroundColor: '#007bff',
		padding: 10,
		borderRadius: 5,
		flexDirection: 'row',
		alignItems: 'center',
	},
	cartIcon: {
		marginRight: 10,
	},
	addToCartButtonText: {
		color: '#fff',
		fontSize: 16,
		fontWeight: 'bold',
		textAlign: 'center',
	},
})

export default ProductDetailScreen
