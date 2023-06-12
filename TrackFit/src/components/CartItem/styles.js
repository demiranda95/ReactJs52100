import { StyleSheet } from 'react-native'
import { COLORS } from '../../constants/colors'

const styles = StyleSheet.create({
	item: {
		flex: 1,
		padding: 8,
		borderBottomWidth: 1,
		borderBottomColor: COLORS.primary,
	},
	header: {
		fontSize: 18,
		color: COLORS.white,
	},
	detail: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	text: {
		color: COLORS.white,

	},
})

export default styles
