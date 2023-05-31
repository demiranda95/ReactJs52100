import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { styles } from './styles'

const FeaturedProductItem = ({ item, onSelected }) => {
	return (
		<TouchableOpacity style={styles.container} onPress={() => onSelected(item)}>
			<ImageBackground style={styles.image} source={{ uri: item.img }}>
				<View style={styles.overlay} />
				<View style={styles.textContainer}>
					<Text style={styles.title}>{item.name}</Text>
				</View>
			</ImageBackground>
		</TouchableOpacity>
	)
}

export default FeaturedProductItem
