import { Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './styles'

const MAX_DESCRIPTION_LENGTH = 20

const ProductsItem = ({ item, onSelected }) => {
	const handlePress = () => {
		onSelected(item)
	}

	return (
		<TouchableOpacity style={styles.container} onPress={handlePress}>
			<View style={styles.imageContainer}>
				<Image style={styles.image} source={{ uri: item.img }} />
			</View>
			<View style={styles.textContainer}>
				<Text style={styles.name}>{item.name}</Text>
			</View>
		</TouchableOpacity>
	)
}

export default ProductsItem
