import React from 'react'
import { ScrollView, View, Image, Text, Dimensions, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import styles from './styles'

const ProductScreen = () => {
	const products = useSelector((state) => state.products.products)
	const navigation = useNavigation()

	const handleBackPress = () => {
		navigation.goBack()
	}

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.headerContainer}>
				<View style={styles.headerSection}>
					<TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
						<Ionicons name='arrow-back' size={24} color='black' />
					</TouchableOpacity>
				</View>
				<Text style={styles.title}>Productos</Text>
				<View style={styles.headerSection}>
					<TouchableOpacity onPress={() => navigation.navigate('Cart')}>
						<View style={{ paddingHorizontal: 10 }}>
							<Ionicons name='ios-cart' size={24} color='#000' />
						</View>
					</TouchableOpacity>
				</View>
			</View>
			<ScrollView contentContainerStyle={styles.section}>
				<View style={styles.itemsContainer}>
					{products.map((product) => (
						<TouchableOpacity style={styles.itemContainer} key={product.id} onPress={() => navigation.navigate('ProductDetail', { productId: product.id })}>
							<Image source={{ uri: product.image }} style={styles.itemImage} />
							<View style={styles.itemOverlay}>
								<Text style={styles.itemTitle}>{product.title}</Text>
							</View>
						</TouchableOpacity>
					))}
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

export default ProductScreen
