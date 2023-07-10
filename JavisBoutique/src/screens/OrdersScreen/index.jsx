import React, { useEffect } from 'react'
import { Text, View, FlatList, TouchableOpacity, SafeAreaView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { fetchOrders } from '../../store/actions/cart.action'
import { Ionicons } from '@expo/vector-icons'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'

const OrdersScreen = () => {
	const dispatch = useDispatch()
	const navigation = useNavigation()
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

	const handleBackPress = () => {
		navigation.goBack()
	}

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.headerContainer}>
				<View style={styles.headerSection}>
					<TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
						<Ionicons name='arrow-back' size={24} color='black' />
					</TouchableOpacity>
				</View>
				<Text style={styles.title}>Ordenes</Text>
				<View style={styles.headerSection}>
					<TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
						{/* <Ionicons name='arrow-back' size={24} color='black' /> */}
					</TouchableOpacity>
				</View>
			</View>
			<View style={styles.section}>
				<FlatList data={orders} renderItem={renderOrder} keyExtractor={(item) => item.id.toString()} />
			</View>
		</SafeAreaView>
	)
}

export default OrdersScreen
