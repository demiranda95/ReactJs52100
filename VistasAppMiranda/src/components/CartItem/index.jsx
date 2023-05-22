import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { styles } from './styles'

const CartItem = ({ item, image }) => {
	return (
		<View style={styles.cartItem}>
			<View style={styles.container}>
				<View style={styles.imageContainer}>
					<Image source={{ uri: image.img }} style={styles.image} />
				</View>
				<View style={styles.textContainer}>
					<Text>{item.name}</Text>
					<Text>${item.price}</Text>
				</View>
			</View>
		</View>
	)
}

export default CartItem
