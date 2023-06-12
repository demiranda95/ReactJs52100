import React from 'react'
import { View, Text, Image, Button } from 'react-native'
import { styles } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { add_item } from "../../store/actions/cart.action";

const ExerciseStoreDetailScreen = () => {
	const dispatch = useDispatch()
	const exercise = useSelector((state) => state.products.selected)

	const handleAddItem = () => {
		dispatch(add_item(exercise))
	}

	return (
		<View style={styles.container}>
			<View style={styles.detailsContainer}>
				<Image style={styles.image} source={{ uri: exercise.img }} />
				<Text style={styles.name}>{exercise.name}</Text>
				<Text style={styles.description}>{exercise.description}</Text>
				<Text style={styles.price}>${exercise.price}</Text>
				<Button title='Add to cart' onPress={handleAddItem} />
			</View>
		</View>
	)
}

export default ExerciseStoreDetailScreen
