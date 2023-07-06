import React from 'react'
import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector, useDispatch } from 'react-redux'
import { Ionicons } from '@expo/vector-icons'
import { removeFromCart } from '../../store/actions/cart.action'

const CartScreen = () => {
	const dispatch = useDispatch()

	const cartItems = useSelector((state) => state.cart.cartItems) // Obtén los productos del estado global o local

	const handleDeletePress = (item) => {
		dispatch(removeFromCart(item.product.id))
	}

	// Renderiza un elemento de la lista de productos del carrito
	const renderItem = ({ item }) => {
		const totalPrice = item.product.price * item.quantity

		return (
			<View style={styles.itemContainer}>
				<View style={styles.itemDetails}>
					<Image source={{ uri: item.product.image }} style={styles.productImage} />
					<View style={styles.productInfo}>
						<Text style={styles.productTitle}>{item.product.title}</Text>
						<Text style={styles.productText}>
							Cantidad: {item.quantity} x ${item.product.price}
						</Text>
						<Text style={styles.productText}>Total: ${totalPrice}</Text>
					</View>
					<TouchableOpacity style={styles.deleteButtonContainer} onPress={() => handleDeletePress(item)}>
						<Ionicons name='close-circle-outline' size={40} color='red' />
					</TouchableOpacity>
				</View>
				<View style={styles.separator} />
			</View>
		)
	}

	const calculateSubtotal = () => {
		let subtotal = 0
		cartItems.forEach((item) => {
			const totalPrice = item.product.price * item.quantity
			subtotal += totalPrice
		})
		return subtotal.toFixed(0)
	}

	const calculateIVA = () => {
		const subtotal = parseFloat(calculateSubtotal())
		const iva = subtotal * 0.19
		return iva.toFixed(0)
	}

	const calculateTotal = () => {
		const subtotal = parseFloat(calculateSubtotal())
		const iva = parseFloat(calculateIVA())
		const total = subtotal + iva
		return total.toFixed(0)
	}

	const handleBuyPress = () => {
		// Lógica para procesar la compra
	}

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>Carrito de compras</Text>
			{cartItems.length > 0 ? <FlatList data={cartItems} renderItem={renderItem} keyExtractor={(item) => item.product.id} /> : <Text>No hay productos en el carrito</Text>}
			<View style={styles.separator} />
			<View style={styles.summaryContainer}>
				<View style={styles.summaryRow}>
					<Text style={styles.summaryLabel}>Subtotal</Text>
					<Text style={styles.summaryValue}>${calculateSubtotal()}</Text>
				</View>
				<View style={styles.summaryRow}>
					<Text style={styles.summaryLabel}>IVA (19%)</Text>
					<Text style={styles.summaryValue}>${calculateIVA()}</Text>
				</View>
				<View style={styles.summaryRow}>
					<Text style={[styles.summaryLabel, styles.summaryTotal]}>Total</Text>
					<Text style={[styles.summaryValue, styles.summaryTotal]}>${calculateTotal()}</Text>
				</View>
			</View>
			<TouchableOpacity style={styles.buyButton} onPress={handleBuyPress}>
				<Text style={styles.buyButtonText}>Comprar</Text>
			</TouchableOpacity>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 16,
	},
	itemContainer: {
		marginBottom: 8,
	},
	itemDetails: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 8,
	},
	productImage: {
		width: 50,
		height: 50,
		marginRight: 8,
	},
	productInfo: {
		flex: 1,
	},
	productTitle: {
		fontSize: 16,
		fontWeight: 'bold',
		marginBottom: 4,
	},
	separator: {
		borderBottomWidth: 1,
		borderBottomColor: 'gray',
	},
	summaryContainer: {
		paddingVertical: 16,
		borderTopWidth: 1,
		borderTopColor: 'gray',
	},
	summaryRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 8,
	},
	summaryLabel: {
		fontSize: 16,
		fontWeight: 'bold',
	},
	summaryValue: {
		fontSize: 16,
	},
	summaryTotal: {
		color: 'green',
	},
	buyButton: {
		backgroundColor: 'green',
		borderRadius: 4,
		padding: 12,
		alignItems: 'center',
		marginTop: 16,
	},
	buyButtonText: {
		color: 'white',
		fontSize: 16,
		fontWeight: 'bold',
	},
})

export default CartScreen
