import { StyleSheet } from 'react-native'
import { COLORS } from '../../constants/colors'

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		borderRadius: 10,
		backgroundColor: COLORS.dark,
		shadowColor: COLORS.black,
		shadowOpacity: 0.2,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 4,
		elevation: 5,
		margin: 5,		justifyContent: 'center',
	},
	imageContainer: {
		flex: 2,
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
		flex: 1,
		padding: 10,
	},
	name: {
		flex: 1,
		fontSize: 18,
		fontWeight: 'bold',
		marginBottom: 8,
		textAlign: 'center',
		color: COLORS.white,
	},
})
