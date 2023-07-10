import { StyleSheet } from 'react-native'
import { COLORS } from '../../constants/colors'

export default styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 30,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: COLORS.background,
	},
	headerContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '100%',
		paddingHorizontal: 15,
		marginBottom: 5,
	},
	title: {
		fontSize: 32,
		fontWeight: 'bold',
		marginBottom: 20,
	},
	headerSection: {
		width: 40,
	},
	section: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		margin: 10,
		width: '100%',
	},
	sectionServices: {
		flex: 4,
		paddingHorizontal: 15,
	},
	sectionSelected: {
		flex: 1,
		width: '100%',
		alignItems: 'center',
	},
	serviceItem: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 16,
		padding: 16,
		borderWidth: 1,
		borderColor: 'gray',
		borderRadius: 8,
	},
	serviceContent: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	serviceImage: {
		width: 90,
		height: 90,
		marginRight: 16,
	},
	serviceInfo: {
		flex: 1,
	},
	serviceName: {
		fontSize: 16,
		fontWeight: 'bold',
	},
	servicePrice: {
		fontSize: 14,
		color: 'gray',
	},
	moreInfoButton: {
		backgroundColor: 'lightgray',
		borderRadius: 8,
		padding: 15,
		marginLeft: 'auto',
	},
	categoryTitle: {
		fontSize: 20,
		fontWeight: 'bold',
		marginTop: 16,
		marginBottom: 8,
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
		backgroundColor: 'pink',
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
	scheduleButtonContainer: {
		marginVertical: 15,
		width: '90%',
	},
})
