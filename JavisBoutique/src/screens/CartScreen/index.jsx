import React from 'react'
import { StyleSheet, Text, View, FlatList, Image, Alert } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector, useDispatch } from 'react-redux'
import { Ionicons } from '@expo/vector-icons'
import { confirmCart, removeFromCart } from '../../store/actions/cart.action'
import { useNavigation } from '@react-navigation/native'

const CartScreen = () => {
	const dispatch = useDispatch()
	const navigation = useNavigation()

	const cartItems = useSelector((state) => state.cart.cartItems) // Obtén los productos del estado global o local

	const handleDeletePress = (item) => {
		dispatch(removeFromCart(item.product.id))
	}

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

	const calculateTotal = () => {
		let total = 0
		cartItems.forEach((item) => {
			const totalPrice = item.product.price * item.quantity
			total += totalPrice
		})
		return total.toFixed(0)
	}

	const calculateIVA = () => {
		const total = parseFloat(calculateTotal())
		const iva = total * 0.19
		return iva.toFixed(0)
	}

	const handleConfirmPress = () => {
		const total = calculateTotal()
		if (cartItems.length === 0) {
			Alert.alert('Carrito Vacio', 'No se puede confirmar la compra')
			return
		}

		dispatch(confirmCart(cartItems, total))
		navigation.navigate('CartConfirm', { items: cartItems, total: total })
	}
	
	const handleOrders = () => {
		navigation.navigate('Orders')
	}

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>Carrito de compras</Text>
			{cartItems.length > 0 ? <FlatList data={cartItems} renderItem={renderItem} keyExtractor={(item) => item.product.id} /> : <Text>No hay productos en el carrito</Text>}
			<View style={styles.separator} />
			<View style={styles.summaryContainer}>
				<View style={styles.summaryRow}>
					<Text style={styles.summaryLabel}>IVA (19%)</Text>
					<Text style={styles.summaryValue}>${calculateIVA()}</Text>
				</View>
				<View style={styles.summaryRow}>
					<Text style={[styles.summaryLabel, styles.summaryTotal]}>Total</Text>
					<Text style={[styles.summaryValue, styles.summaryTotal]}>${calculateTotal()}</Text>
				</View>
			</View>
			<TouchableOpacity style={styles.buyButton} onPress={handleConfirmPress}>
				<Text style={styles.buyButtonText}>Comprar</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.buyButton} onPress={handleOrders}>
				<Text style={styles.buyButtonText}>Ordenes Anteriores</Text>
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
