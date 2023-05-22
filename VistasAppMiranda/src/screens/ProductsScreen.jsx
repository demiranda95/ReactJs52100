import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { PRODUCTS } from '../data/products'
import ProductsItem from '../components/ProductsItem'
import { CATEGORIES } from '../data/categories'

const ProductsScreen = ({ navigation, route }) => {
	const breads = PRODUCTS.filter((bread) => bread.category === route.params.categoryId)
	const category = CATEGORIES.find((category) => category.id === route.params.categoryId)

	const handleSelectedProduct = (item) => {
		navigation.navigate('Details', {
			image: category.img,
			product: item,
			name: item.name,
		})
	}

	const renderProductItem = ({ item }) => (
		<View style={styles.productItem}>
			<ProductsItem item={item} onSelected={handleSelectedProduct} image={category.img} />
		</View>
	)

	return (
		<View style={styles.container}>
			<FlatList data={breads} renderItem={renderProductItem} keyExtractor={(item) => item.id} />
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
	productItem: {
		margin: 5,
		height: 300,
	},
})

export default ProductsScreen
