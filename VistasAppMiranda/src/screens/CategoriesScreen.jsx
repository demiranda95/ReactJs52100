import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import breadDetails from '../assets/info/details'

const CategoriesScreen = ({ navigation }) => {
	const handleCategoryPress = (categoryId) => {
		const filteredBreads = getBreadsByCategory(categoryId)
		navigation.navigate('Bread', { breads: filteredBreads })
	}

	const renderCategoryItem = ({ item }) => (
		<TouchableOpacity style={styles.card} onPress={() => handleCategoryPress(item)}>
			<Text style={styles.categoryTitle}>{item}</Text>
		</TouchableOpacity>
	)

	const getBreadsByCategory = (categoryId) => {
		const filteredBreads = breadDetails.filter((bread) => bread.category === categoryId)
		return filteredBreads
	}

	const getCategories = () => {
		const categories = breadDetails.map((bread) => bread.category)
		return [...new Set(categories)]
	}

	const categories = getCategories()

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Categorías de Pan</Text>
			<FlatList data={categories} renderItem={renderCategoryItem} keyExtractor={(item) => item} numColumns={2} />
		</View>
	)
}

export default CategoriesScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 16,
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 20,
		marginTop: 20,
	},
	card: {
		backgroundColor: '#fff',
		borderRadius: 8,
		shadowColor: '#000',
		shadowOpacity: 0.1,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 4,
		elevation: 2,
		padding: 16,
		margin: 8,
		alignItems: 'center',
		justifyContent: 'center',
		width: '45%',
		minHeight: 150,
		borderWidth: 1,
		borderColor: '#ddd',
	},
	categoryTitle: {
		fontSize: 18,
		fontWeight: 'bold',
		marginTop: 8,
	},
})
