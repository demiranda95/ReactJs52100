import React, { useEffect } from 'react'
import { View, Text, FlatList } from 'react-native'
import { styles } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import CategoriesItem from '../../components/CategoriesItem'
import RandomProductItem from '../../components/RandomProductItem'
import FeaturedProductItem from '../../components/FeaturedProductItem'
import { selectedCategory } from '../../store/actions/category.action'
import { selectedProduct, showRandomExercises } from '../../store/actions/products.action'

const ExerciseStoreScreen = ({ navigation }) => {
	const categories = useSelector((state) => state.categories.categories)
	const randomExercises = useSelector((state) => state.products.randomExercises)
	const exercises = useSelector((state) => state.products.products)
	const dispatch = useDispatch()

	const handleSelectedCategory = (item) => {
		dispatch(selectedCategory(item.id))
		navigation.navigate('Products', {
			name: item.title,
		})
	}

	const handleSelectedExercise = (exercise) => {
		dispatch(selectedProduct(exercise.id))
		navigation.navigate('Detail', {
			exercise: exercise,
		})
	}

	const renderCategoriesItem = ({ item }) => (
		<View style={styles.categoriesContainer}>
			<CategoriesItem item={item} onSelected={handleSelectedCategory} />
		</View>
	)

	const renderRandomProductItem = ({ item }) => (
		<View style={styles.categoriesContainer}>
			<RandomProductItem item={item} onSelected={handleSelectedExercise} />
		</View>
	)

	const renderFeaturedProductItem = ({ item }) => {
		if (item.featured) {
			return (
				<View style={styles.categoriesContainer}>
					<FeaturedProductItem item={item} onSelected={handleSelectedExercise} />
				</View>
			)
		} else {
			return null
		}
	}

	useEffect(() => {
		dispatch(showRandomExercises(5))
	}, [])

	return (
		<View style={styles.container}>
			<View style={styles.sectionContainer}>
				<Text style={styles.sectionTitle}>Categorias</Text>
				<View style={styles.storeContainer}>
					<FlatList data={categories} renderItem={renderCategoriesItem} keyExtractor={(item) => item.id} horizontal={true} showsHorizontalScrollIndicator={false} />
				</View>
			</View>

			<View style={styles.sectionContainer}>
				<Text style={styles.sectionTitle}>Ejercicios Recomendados</Text>
				<FlatList data={randomExercises} renderItem={renderRandomProductItem} keyExtractor={(item) => item.id} horizontal showsHorizontalScrollIndicator={false} />
			</View>

			<View style={styles.sectionContainer}>
				<Text style={styles.sectionTitle}>Ejercicios Destacados</Text>
				<FlatList data={exercises} renderItem={renderFeaturedProductItem} keyExtractor={(item) => item.id} horizontal showsHorizontalScrollIndicator={false} />
			</View>
		</View>
	)
}

export default ExerciseStoreScreen
