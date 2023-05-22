import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './styles'

const MAX_DESCRIPTION_LENGTH = 110

const ProductsItem = ({ item, onSelected, image }) => {
	const handlePress = () => {
		onSelected(item)
	}

	const truncateDescription = (description) => {
		if (description.length > MAX_DESCRIPTION_LENGTH) {
			return `${description.substring(0, MAX_DESCRIPTION_LENGTH)}...`
		}
		return description
	}

	return (
		<TouchableOpacity style={styles.container} onPress={handlePress}>
			<View style={styles.imageContainer}>
				<Image style={styles.image} source={{ uri: image }} />
			</View>
			<View style={styles.textContainer}>
				<Text style={styles.name}>{item.name}</Text>
				<Text style={styles.description}>{truncateDescription(item.description)}</Text>
				<Text style={styles.price}>${item.price}</Text>
			</View>
		</TouchableOpacity>
	)
}

export default ProductsItem
