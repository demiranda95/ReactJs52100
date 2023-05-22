import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { CART } from '../data/cart'
import { CATEGORIES } from '../data/categories'
import CartItem from '../components/CartItem'

const CartScreen = () => {
	const renderCartItem = ({ item }) => {
		const categories = CATEGORIES.find((category) => category.id === item.category)
		return (
			<View style={styles.cartContainer}>
				<CartItem item={item} image={categories} />
			</View>
		)
	}

	return (
		<View style={styles.container}>
			<FlatList data={CART} renderItem={renderCartItem} keyExtractor={(item) => item.id} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingBottom: 100,
	},
	cartContainer: {
		padding: 15,
		height: 150,
	},
})

export default CartScreen
