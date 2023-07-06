import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 20,
	},
	section: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		margin: 10,
		width: '100%',
	},
	sectionTitle: {
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'left',
		marginVertical: 10,
		marginLeft: 15,
	},
	reservationContainer: {
		flex: 1,
		backgroundColor: '#F2D4D9',
		borderRadius: 20,
		marginHorizontal: 15,
		justifyContent: 'center',
		alignItems: 'center',
		width: '92%',
	},
	reservationItemContainer: {
		flex: 1,
		margin: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	itemInfoContainer: {
		flex: 1,
	},
	buttonsContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: 10,
		marginRight: 10,
	},
	buttonContainer: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		marginHorizontal: 10,
	},
	buttonTitle: {
		fontSize: 16,
	},
	reservationItemTitle: {
		fontSize: 24,
	},
	carouselItem: {
		backgroundColor: 'white',
		borderRadius: 10,
		overflow: 'hidden',
		height: "100%",
		width: "100%",
		alignItems: 'center',
		justifyContent: 'center',
	},
	carouselImage: {
		width: '100%',
		height: '100%',
		resizeMode: 'cover',
	},
	cardContent: {
		position: 'absolute',
		bottom: 0,
		padding: 10,
		backgroundColor: 'rgba(0, 0, 0, 0.7)',
		width: '100%',
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10,
	},
	cardTitle: {
		color: 'white',
		fontSize: 18,
		fontWeight: 'bold',
		marginBottom: 5,
	},
	cardDescription: {
		color: 'white',
		fontSize: 14,
	},
	paginationContainer: {
		paddingVertical: 8,
	},
	paginationDot: {
		width: 8,
		height: 8,
		borderRadius: 4,
		marginHorizontal: 4,
		backgroundColor: 'rgba(0, 0, 0, 0.75)',
	},
})
