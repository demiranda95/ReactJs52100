import { StyleSheet } from 'react-native'
import { COLORS } from '../../constants/colors'

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 12,
	},
	list: {
		height: '85%',
	},
	footer: {
		flex: 1,
		padding: 12,
		borderTopColor: COLORS.primary,
		borderTopWidth: 1,
	},
	confirm: {
		backgroundColor: COLORS.primary,
		borderRadius: 10,
		padding: 10,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	priceText: {
		fontSize: 18,
	},
})
