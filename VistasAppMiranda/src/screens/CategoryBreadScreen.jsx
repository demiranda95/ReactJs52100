import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const CategoryBreadScreen = ({ navigation, route }) => {
	const { breads } = route.params

	const handleBreadPress = (breadId) => {
		const selectedBread = breads.find((bread) => bread.id === breadId)
		if (selectedBread) {
			navigation.navigate('Detail', { bread: selectedBread })
		}
	}

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Detalles del Pan</Text>
			{breads.map((bread) => (
				<TouchableOpacity key={bread.id} style={styles.card} onPress={() => handleBreadPress(bread.id)}>
					<Text style={styles.breadTitle}>{bread.name}</Text>
				</TouchableOpacity>
			))}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
		backgroundColor: '#f0f0f0',
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 16,
		textAlign: "center",
	},
	card: {
		backgroundColor: '#fff',
		borderRadius: 8,
		padding: 16,
		marginBottom: 8,
		elevation: 2,
	},
	breadTitle: {
		fontSize: 16,
		fontWeight: 'bold',
	},
})

export default CategoryBreadScreen
