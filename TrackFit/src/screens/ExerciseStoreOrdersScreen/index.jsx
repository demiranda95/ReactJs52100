import { FlatList, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import OrderItem from '../../components/OrderItem'
import { getOrders, deleteOrder } from '../../store/actions/orders.action'

const ExerciseStoreOrdersScreen = () => {
	const dispatch = useDispatch()
	const orders = useSelector((state) => state.orders.list)

	useEffect(() => {
		dispatch(getOrders())
	}, [])

	const handleDeleteOrder = (orderId) => {
		dispatch(deleteOrder(orderId))
	}

	const renderOrderItem = ({ item }) => <OrderItem item={item} onDelete={handleDeleteOrder} />

	return (
		<View>
			<FlatList data={orders} keyExtractor={(item) => item.id} renderItem={renderOrderItem} />
		</View>
	)
}

export default ExerciseStoreOrdersScreen
