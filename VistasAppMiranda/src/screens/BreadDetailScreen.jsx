import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const BreadDetailScreen = ({ route }) => {
	const { bread } = route.params

	return (
		<View style={styles.container}>
			<Text style={styles.title}>{bread.name}</Text>
			<Text style={styles.description}>{bread.description}</Text>
			<Text style={styles.label}>Precio:</Text>
			<Text style={styles.detail}>{bread.price}</Text>
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
		marginBottom: 8,
		textAlign: 'center',
	},
	description: {
		fontSize: 16,
	},
	label: {
		fontSize: 18,
		fontWeight: 'bold',
		marginTop: 12,
	},
	detail: {
		fontSize: 16,
		marginBottom: 8,
	},
})

export default BreadDetailScreen
