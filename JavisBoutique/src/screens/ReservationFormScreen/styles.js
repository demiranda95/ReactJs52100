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
		fontSize: 32,
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
	sectionTitle: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 20,
	},

	inputContainer: {
		marginBottom: 16,
		width: '90%',
	},
	label: {
		fontSize: 16,
		marginBottom: 8,
		color: '#888',
	},
	input: {
		height: 40,
		paddingHorizontal: 8,
		borderBottomColor: '#ccc',
		borderBottomWidth: 1,
		fontSize: 16,
		color: '#333',
	},

	nameContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	nameInputContainer: {
		flex: 1,
		marginRight: 10,
	},

	sublabel: {
		width: '100%',
		fontSize: 16,
		marginBottom: 8,
		color: '#888',
		fontStyle: 'italic',
	},
	selectedServicesTitle: {
		fontSize: 18,
		fontWeight: 'bold',
		marginTop: 16,
	},
	selectedService: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 16,
		padding: 16,
		borderColor: 'gray',
		borderRadius: 8,
	},
	selectedServiceItem: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 2,
		padding: 5,
		paddingHorizontal: 10,
	},
	selectedServiceLeft: {
		flex: 1,
	},
	selectedServiceRight: {
		marginLeft: 16,
	},
	selectedServiceName: {
		fontSize: 16,
	},
	selectedServicePrice: {
		fontSize: 16,
		fontWeight: 'bold',
	},
	sectionSelected: {
		flex: 1,
		width: '97%',
		alignItems: 'center',
	},
	scheduleButtonContainer: {
		marginVertical: 15,
		width: '90%',
	},
	pickerSelectStyles: {
		inputIOS: {
			height: 40,
			paddingHorizontal: 8,
			borderBottomColor: '#ccc',
			borderBottomWidth: 1,
			fontSize: 16,
			color: '#333',
		},
		inputAndroid: {
			height: 40,
			paddingHorizontal: 8,
			borderBottomColor: '#ccc',
			borderBottomWidth: 1,
			fontSize: 16,
			color: '#333',
		},
	},
	dateInput: {
		height: 40,
		paddingHorizontal: 8,
		borderBottomColor: '#ccc',
		borderBottomWidth: 1,
		fontSize: 16,
		color: '#333',
	},
	modalContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
	},
	dateText: {
		fontSize: 18,
		color: '#333',
	},
	todayText: {
		fontWeight: 'bold',
	},
	selectedDayText: {
		color: '#fff',
		fontWeight: 'bold',
	},
	selectedDay: {
		backgroundColor: 'blue',
	},
	disabledDayText: {
		color: '#ccc',
	},
	closeButton: {
		marginVertical: 15,
		width: '90%',
	},
})
