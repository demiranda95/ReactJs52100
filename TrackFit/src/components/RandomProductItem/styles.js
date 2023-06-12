import { StyleSheet } from 'react-native'
import { COLORS } from '../../constants/colors'

export const styles = StyleSheet.create({
	container: {
		width: 180,
		height: 120,
		borderRadius: 20,
		marginRight: 5,
		overflow: 'hidden',
	},
	image: {
		flex: 1,
		resizeMode: 'cover',
		justifyContent: 'center',
	},
	overlay: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
	},
	textContainer: {
		position: 'absolute',
		bottom: 0,
		width: '100%',
		backgroundColor: 'transparent',
		paddingVertical: 10,
		paddingHorizontal: 15,
	},
	title: {
		color: 'white',
		fontSize: 18,
		fontWeight: 'bold',
		textAlign: 'center',
	},
})
