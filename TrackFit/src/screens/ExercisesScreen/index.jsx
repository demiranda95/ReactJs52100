import React from 'react'
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import { styles } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { selectedCategory } from '../../store/actions/category.action'
import CategoriesItem from '../../components/CategoriesItem'

const ExercisesScreen = ({ navigation }) => {
	const handleStorePress = () => {
		navigation.navigate('Store')
	}

	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={handleStorePress}>
				<View style={styles.storeContainer}>
					<Image source={require('../../assets/img/ExerciseStore.jpg')} style={styles.bannerImage} />
				</View>
			</TouchableOpacity>
		</View>
	)
}

export default ExercisesScreen
