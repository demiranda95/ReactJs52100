import { styles } from './styles'

import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'

const HomeScreen = () => {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.container}>
				<Text style={styles.header}>TrackFit</Text>

				{/* Resumen de actividad diaria */}
				<View style={styles.section}>
					<Text style={styles.sectionTitle}>Actividad diaria</Text>
					{/* Mostrar el resumen de actividad diaria aquí */}
				</View>

				{/* Metas y progreso */}
				<View style={styles.section}>
					<Text style={styles.sectionTitle}>Metas y progreso</Text>
					{/* Mostrar las metas y el progreso aquí */}
				</View>

				{/* Recordatorios y motivación */}
				<View style={styles.section}>
					<Text style={styles.sectionTitle}>Recordatorios y motivación</Text>
					{/* Mostrar mensajes motivacionales o recordatorios aquí */}
				</View>

				{/* Consejos de salud y bienestar */}
				<View style={styles.section}>
					<Text style={styles.sectionTitle}>Consejos de salud y bienestar</Text>
					{/* Mostrar consejos útiles aquí */}
				</View>

				{/* Últimas actividades registradas */}
				<View style={styles.section}>
					<Text style={styles.sectionTitle}>Últimas actividades registradas</Text>
					{/* Mostrar la lista o el resumen de las últimas actividades aquí */}
				</View>

				{/* Estadísticas y gráficos de progreso */}
				<View style={styles.section}>
					<Text style={styles.sectionTitle}>Estadísticas y gráficos de progreso</Text>
					{/* Mostrar estadísticas y gráficos de progreso aquí */}
				</View>
			</View>
		</SafeAreaView>
	)
}

export default HomeScreen
