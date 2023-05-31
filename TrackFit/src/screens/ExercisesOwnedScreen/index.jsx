import React from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { selectedCategory } from '../../store/actions/category.action'
import CategoriesItem from '../../components/CategoriesItem'

const ExercisesOwnedScreen = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Mis Ejercicios</Text>
			{/* Aquí puedes mostrar los detalles completos de un ejercicio seleccionado */}
			{/* Puedes mostrar el nombre, descripción, instrucciones, repeticiones, series, etc. */}
			{/* También puedes agregar un botón para que los usuarios comiencen a registrar su progreso */}
		</View>
	)
}

export default ExercisesOwnedScreen
