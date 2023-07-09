import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const CartConfirmScreen = ({ route }) => {
	const { items, total } = route.params
	const navigation = useNavigation()

	const handleContinueShopping = () => {
		navigation.navigate('CartScreen')
	}

	return (
		<View style={styles.container}>
			<Ionicons name='checkmark-circle-outline' size={100} color='green' />
			<Text style={styles.title}>¡Compra confirmada!</Text>
			<Text style={styles.subtitle}>Productos en el carrito:</Text>
			<View style={styles.itemsContainer}>
				{items.map((item) => (
					<Text key={item.product.id} style={styles.item}>
						{item.product.title} | {item.quantity} Un
					</Text>
				))}
			</View>
			<Text style={styles.total}>Total: ${total}</Text>
			<TouchableOpacity style={styles.button} onPress={handleContinueShopping}>
				<Text style={styles.buttonText}>Continuar comprando</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		marginVertical: 16,
	},
	subtitle: {
		fontSize: 16,
		fontWeight: 'bold',
		marginBottom: 8,
	},
	itemsContainer: {
		marginBottom: 16,
	},
	item: {
		fontSize: 16,
		marginBottom: 4,
	},
	total: {
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 16,
	},
	button: {
		backgroundColor: 'green',
		padding: 12,
		borderRadius: 8,
	},
	buttonText: {
		color: 'white',
		fontSize: 16,
		fontWeight: 'bold',
	},
})

export default CartConfirmScreen
