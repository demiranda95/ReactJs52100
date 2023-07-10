import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 30,
	},
	headerContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '100%',
		paddingHorizontal: 15,
		marginBottom: 40,
	},
	title: {
		fontSize: 32,
		fontWeight: 'bold',
		marginBottom: 16,
	},
	section: {
		paddingHorizontal: 15,
	},
	itemContainer: {
		marginBottom: 8,
	},
	itemDetails: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 8,
	},
	productImage: {
		width: 50,
		height: 50,
		marginRight: 8,
	},
	productInfo: {
		flex: 1,
	},
	productTitle: {
		fontSize: 16,
		fontWeight: 'bold',
		marginBottom: 4,
	},
	separator: {
		borderBottomWidth: 1,
		borderBottomColor: 'gray',
	},
	summaryContainer: {
		paddingVertical: 16,
		borderTopWidth: 1,
		borderTopColor: 'gray',
	},
	summaryRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 8,
	},
	summaryLabel: {
		fontSize: 16,
		fontWeight: 'bold',
	},
	summaryValue: {
		fontSize: 16,
	},
	summaryTotal: {
		color: 'green',
	},
	buyButton: {
		backgroundColor: 'green',
		borderRadius: 4,
		padding: 12,
		alignItems: 'center',
		marginTop: 16,
	},
	buyButtonText: {
		color: 'white',
		fontSize: 16,
		fontWeight: 'bold',
	},
})
