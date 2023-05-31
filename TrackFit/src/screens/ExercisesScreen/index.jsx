import React from 'react'
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import { styles } from './styles'

const ExercisesScreen = ({ navigation }) => {
	const handleStorePress = () => {
		navigation.navigate('Store')
	}

	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={handleStorePress}>
				<View style={styles.storeContainer}>
					<Image source={require('../../assets/img/ExerciseStore.jpg')} style={styles.bannerImage} />
					<View style={styles.overlay}>
						<Text style={styles.overlayText}>Tienda</Text>
					</View>
				</View>
			</TouchableOpacity>
		</View>
	)
}

export default ExercisesScreen
