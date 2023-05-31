import { styles } from './styles'

import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'

const HomeScreen = () => {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.container}>
				<Text style={styles.header}>TrackFit</Text>

				<View style={styles.section}>
					<Text style={styles.sectionTitle}>Actividad diaria</Text>
				</View>

				<View style={styles.section}>
					<Text style={styles.sectionTitle}>Metas y progreso</Text>
				</View>

				<View style={styles.section}>
					<Text style={styles.sectionTitle}>Recordatorios y motivación</Text>
				</View>

				<View style={styles.section}>
					<Text style={styles.sectionTitle}>Consejos de salud y bienestar</Text>
				</View>

				<View style={styles.section}>
					<Text style={styles.sectionTitle}>Últimas actividades registradas</Text>
				</View>

				<View style={styles.section}>
					<Text style={styles.sectionTitle}>Estadísticas y gráficos de progreso</Text>
				</View>
			</View>
		</SafeAreaView>
	)
}

export default HomeScreen
