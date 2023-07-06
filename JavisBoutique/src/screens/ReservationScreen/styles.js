import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	scroll: {
		margin: 0,
		padding: 0,
		width: '100%',
		height: '100%',
	},
	sectionTop: {
		flex: 3,
		justifyContent: 'center',
		alignItems: 'flex-start',
		marginVertical: 10,
		width: '100%',
	},	
	sectionBottom: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'flex-start',
		marginVertical: 10,
		width: '100%',
	},
	sectionTitle: {
		marginHorizontal: 15,
		marginBottom: 10,
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'left',
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
		gap: 40,
	},
	itemInfoContainer: {},
	buttonsContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		gap: 10,
	},
	buttonContainer: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonTitle: {
		fontSize: 16,
	},
	reservationItemTitle: {
		fontSize: 24,
	},
	inputContainer: {
		marginHorizontal: 15,
		marginBottom: 20,
	},
	label: {
		fontSize: 16,
		fontWeight: 'bold',
		marginBottom: 5,
	},
	input: {
		width: '100%',
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
		borderRadius: 5,
		paddingHorizontal: 10,
	},
})
