import { StyleSheet } from 'react-native'
import { COLORS } from '../../constants/colors'

export const styles = StyleSheet.create({
	cartItem: {
		flex: 1,
		backgroundColor: COLORS.white,
		borderRadius: 10,
		shadowColor: COLORS.black,
		shadowOpacity: 0.2,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 10,
		elevation: 5,
		width: '100%',
	},
	container: {
		flexDirection: 'row',
		flex: 1,
		alignItems: 'center',
        justifyContent: "space-between"
	},
	imageContainer: {
		width: '40%',
		height: '100%',
		justifyContent: 'flex-start',
	},
	image: {
		width: '100%',
		height: '100%',
		borderTopLeftRadius: 10,
		borderBottomLeftRadius: 10,
	},
	textContainer: {
        width: 200,
		justifyContent: 'center',
		alignItems: 'center',
	},
})
