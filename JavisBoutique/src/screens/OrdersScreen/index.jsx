import React, { useEffect } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { fetchOrders } from '../../store/actions/cart.action'

const OrdersScreen = () => {
	const dispatch = useDispatch()
	const orders = useSelector((state) => state.cart.orders)

	useEffect(() => {
		dispatch(fetchOrders())
	}, [])

	const formatTimestamp = (timestamp) => {
		const date = new Date(timestamp)
		const day = String(date.getDate()).padStart(2, '0')
		const month = String(date.getMonth() + 1).padStart(2, '0')
		const year = date.getFullYear()
		const hours = String(date.getHours()).padStart(2, '0')
		const minutes = String(date.getMinutes()).padStart(2, '0')

		return `${day}/${month}/${year} ${hours}:${minutes}`
	}

	const renderOrder = ({ item }) => (
		<View style={styles.orderContainer}>
			<Text style={styles.orderText}>Fecha: {formatTimestamp(item.date)}</Text>
			<Text style={styles.orderText}>Total: ${item.total}</Text>
		</View>
	)

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Órdenes Anteriores</Text>
			<FlatList data={orders} renderItem={renderOrder} keyExtractor={(item) => item.id.toString()} />
		</View>
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
	orderContainer: {
		marginBottom: 8,
		borderWidth: 1,
		borderColor: 'gray',
		padding: 8,
	},
	orderText: {
		fontSize: 16,
		marginBottom: 4,
	},
})

export default OrdersScreen
