import { StyleSheet } from 'react-native'
import { COLORS } from '../../constants/colors'

const styles = StyleSheet.create({
	order: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 10,
		margin: 10,
		borderColor: '#ccc',
		borderWidth: 1,
		borderRadius: 6,
	},
	date: {
		fontSize: 18,
		color: COLORS.white,
	},
	total: {
		fontSize: 18,
		color: COLORS.white,
	},
})

export default styles
