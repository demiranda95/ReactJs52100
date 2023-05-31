import React from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from './styles'
import { useSelector } from 'react-redux'

const ExerciseStoreDetailScreen = () => {
	const exercise = useSelector((state) => state.products.selected)

	return (
		<View style={styles.container}>
			<View style={styles.detailsContainer}>
				<Image style={styles.image} source={exercise.img} />
				<Text style={styles.name}>{exercise.name}</Text>
				<Text style={styles.description}>{exercise.description}</Text>
				<Text style={styles.price}>${exercise.price}</Text>
			</View>
		</View>
	)
}

export default ExerciseStoreDetailScreen
