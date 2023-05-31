import { StyleSheet } from 'react-native'
import { COLORS } from '../../constants/colors'

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		borderRadius: 10,
		backgroundColor: COLORS.white,
		shadowColor: COLORS.black,
		shadowOpacity: 0.2,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 4,
		elevation: 5,
		margin: 5,

		justifyContent: 'center',
	},
	imageContainer: {
		height: 150,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		overflow: 'hidden',
	},
	image: {
		width: '100%',
		height: '100%',
	},
	textContainer: {
		padding: 10,
	},
	name: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 8,
		textAlign: 'center',
	},
	description: {
		fontSize: 16,
		marginBottom: 8,
		textAlign: 'justify',
	},
	price: {
		fontSize: 30,
		fontWeight: 'bold',
		color: COLORS.primary,
		textAlign: "right",
	},
})
