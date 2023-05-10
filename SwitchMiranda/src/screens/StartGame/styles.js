import { StyleSheet } from 'react-native'
import colors from '../../constants/colors'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
		alignItems: 'center',
		paddingTop: 50,
		backgroundColor: colors.primary,
	},
	subtitle: {
		fontSize: 20,
		color: colors.black,
	},
	buttonContainer: {
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-between',
		paddingHorizontal: 15,
		marginTop: 20,
	},
	cleanButton: {
		backgroundColor: colors.disableColor,
		borderRadius: 10,
		width: 100,
		height: 35,
		justifyContent: 'center',
		alignItems: 'center',
	},
	confirmButton: {
		backgroundColor: colors.actionColor,
		borderRadius: 10,
		width: 100,
		height: 35,
		justifyContent: 'center',
		alignItems: 'center',
	},
	selectedCard: {
		marginTop: 50,
        gap: 10,
		width: '70%',
	},
})

export default styles
