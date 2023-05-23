import { StyleSheet } from 'react-native'
import { COLORS } from '../../constants/colors'

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
		backgroundColor: COLORS.secondary,
	},
	header: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 16,
		color: COLORS.dark,
	},
	section: {
		marginBottom: 16,
		backgroundColor: COLORS.primary,
		padding: 16,
		borderRadius: 8,
	},
	sectionTitle: {
		fontSize: 18,
		fontWeight: 'bold',
		marginBottom: 8,
		color: COLORS.dark,
	},
})
