import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 30,
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
		fontSize: 32,
		fontWeight: 'bold',
	},
	section: {
		paddingVertical: 20,
		marginHorizontal: 15,
	},
	orderContainer: {
		marginBottom: 8,
		borderWidth: 1,
		borderColor: 'gray',
		padding: 8,
	},
	orderText: {
		fontSize: 16,
		marginBottom: 4,
	},
})
