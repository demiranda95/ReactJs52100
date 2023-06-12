import { Text, TouchableOpacity, View } from 'react-native'

import Ionicons from '@expo/vector-icons/Ionicons'
import React from 'react'
import styles from './styles'

const CartItem = ({ item, onDelete }) => {
	return (
		<View style={styles.item}>
			<View>
				<Text style={styles.header}>{item.name}</Text>
			</View>
			<View style={styles.detail}>
				<View>
					<Text style={styles.text}>Cantidad: {item.quantity}</Text>
					<Text style={styles.text}>${item.price}</Text>
				</View>
				<TouchableOpacity onPress={() => onDelete(item.id)}>
					<Ionicons name='trash' size={24} color={'red'} />
				</TouchableOpacity>
			</View>
		</View>
	)
}

export default CartItem
