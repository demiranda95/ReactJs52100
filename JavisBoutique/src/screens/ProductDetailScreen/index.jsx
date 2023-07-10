import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, Image, ActivityIndicator, SafeAreaView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../store/actions/cart.action'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'

const ProductDetailScreen = ({ route }) => {
	const { productId } = route.params
	const products = useSelector((state) => state.products.products)
	const loading = useSelector((state) => state.products.loading)
	const error = useSelector((state) => state.products.error)
	const [product, setProduct] = useState(null)
	const dispatch = useDispatch()
	const navigation = useNavigation()

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

	const handleBackPress = () => {
		navigation.goBack()
	}

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.headerContainer}>
				<TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
					<Ionicons name='arrow-back' size={24} color='black' />
				</TouchableOpacity>
				<Text style={styles.title}>{product.title}</Text>
				<View style={styles.headerSection}>
					<TouchableOpacity onPress={() => navigation.navigate('Cart')}>
						<View style={{ paddingHorizontal: 10 }}>
							<Ionicons name='ios-cart' size={24} color='#000' />
						</View>
					</TouchableOpacity>
				</View>
			</View>
			<Image source={{ uri: product.image }} style={styles.image} />
			<View style={styles.infoContainer}>
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
		</SafeAreaView>
	)
}

export default ProductDetailScreen
