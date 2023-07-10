import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 30,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
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
		fontSize: 24,
		fontWeight: 'bold',
	},
	headerSection: {
		width: 40,
	},
	section: {
		flex: 4,
		alignItems: 'center',
		marginHorizontal: 15,
		width: '100%',
	},
	image: {
		flex: 3,
		width: '100%',
		height: 300,
		resizeMode: 'cover',
	},
	infoContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonsContainer: {
		flex: 1,
	},
	description: {
		fontSize: 18,
		marginTop: 30,
		textAlign: 'center',
	},
	quantityContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	quantityText: {
		fontSize: 16,
		marginRight: 10,
	},
	quantityButtons: {
		flexDirection: 'row',
		alignItems: 'center',
		borderRadius: 5,
		paddingVertical: 8,
		paddingHorizontal: 16,
	},
	quantityButtonText: {
		fontSize: 18,
	},
	quantity: {
		fontSize: 22,
		marginHorizontal: 40,
	},
	addToCartButton: {
		marginTop: 20,
		backgroundColor: '#007bff',
		padding: 10,
		borderRadius: 5,
		flexDirection: 'row',
		alignItems: 'center',
	},
	cartIcon: {
		marginRight: 10,
	},
	addToCartButtonText: {
		color: '#fff',
		fontSize: 16,
		fontWeight: 'bold',
		textAlign: 'center',
	},
})
