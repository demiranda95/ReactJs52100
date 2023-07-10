import React from 'react'
import { StyleSheet, Text, View, FlatList, Image, Alert, TouchableOpacity, SafeAreaView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { Ionicons } from '@expo/vector-icons'
import { confirmCart, removeFromCart } from '../../store/actions/cart.action'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'

const CartScreen = () => {
	const dispatch = useDispatch()
	const navigation = useNavigation()

	const cartItems = useSelector((state) => state.cart.cartItems)

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

	const handleBackPress = () => {
		navigation.goBack()
	}

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.headerContainer}>
				<View style={styles.headerSection}></View>
				<Text style={styles.title}>Carrito de Compras</Text>
				<View style={styles.headerSection}></View>
			</View>
			<View style={styles.section}>
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
			</View>
		</SafeAreaView>
	)
}

export default CartScreen
