import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import { confirm_cart, remove_item } from '../../store/actions/cart.action'
import { useDispatch, useSelector } from 'react-redux'

import { styles } from './styles'
import CartItem from '../../components/CartItem'
import React from 'react'

const ExerciseStoreCartScreen = () => {
	const dispatch = useDispatch()
	const items = useSelector((state) => state.cart.items)
	const total = useSelector((state) => state.cart.total)

	const handleDeleteItem = (id) => {
		console.log(id)
		dispatch(remove_item(id))
	}

	const handleConfirmCart = () => {
		dispatch(confirm_cart(items, total))
	}

	const renderCartItem = ({ item }) => <CartItem item={item} onDelete={handleDeleteItem} />

	return (
		<View style={styles.container}>
			<View style={styles.list}>
				<FlatList data={items} keyExtractor={(item) => item.id} renderItem={renderCartItem} />
			</View>
			<View style={styles.footer}>
				<TouchableOpacity style={styles.confirm} onPress={handleConfirmCart}>
					<Text>Confirmar</Text>
					<View>
						<Text style={styles.priceText}>{`Total: $${total}`}</Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	)
}

export default ExerciseStoreCartScreen
