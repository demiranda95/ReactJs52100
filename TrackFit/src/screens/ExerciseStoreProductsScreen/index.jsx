import React, { useEffect } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { styles } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import ProductsItem from '../../components/ProductsItem'
import { filteredProduct, selectedProduct } from '../../store/actions/products.action'

const ExerciseStoreProductsScreen = ({ navigation }) => {
	const filteredProducts = useSelector((state) => state.products.filteredProduct)
	const categorySelected = useSelector((state) => state.categories.selected)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(filteredProduct(categorySelected.id))
	}, [])

	const handleSelectedProduct = (item) => {
		dispatch(selectedProduct(item.id))
		navigation.navigate('Detail', {
			name: item.name,
		})
	}

	const renderProductItem = ({ item }) => (
		<View style={styles.productItem}>
			<ProductsItem item={item} onSelected={handleSelectedProduct} />
		</View>
	)
	return (
		<View style={styles.container}>
			<FlatList data={filteredProducts} renderItem={renderProductItem} keyExtractor={(item) => item.id} numColumns={2} />
		</View>
	)
}

export default ExerciseStoreProductsScreen
