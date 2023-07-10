import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		paddingTop: 30,
	},
	optionSection: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 16,
		marginHorizontal: 15,
	},
	imageContainer: {
		flex: 1,
		borderRadius: 8,
		overflow: 'hidden',
		margin: 5,
	},
	image: {
		width: 180,
		height: 150,
		resizeMode: 'cover',
	},
	imageOverlay: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		top: 0,
		backgroundColor: 'rgba(0, 0, 0, 0.4)',
		paddingVertical: 8,
		paddingHorizontal: 15,
		justifyContent: 'center',
		alignItems: 'center',
	},
	imageText: {
		color: '#fff',
		fontSize: 22,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	section: {
		marginBottom: 15,
	},
	sectionTitle: {
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 8,
		marginLeft: 15,
	},
	itemsContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 15
	},
	itemContainer: {
		marginRight: 16,
	},
	itemImage: {
		width: 120,
		height: 120,
		resizeMode: 'cover',
		borderRadius: 8,
	},
	itemOverlay: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		top: 80,
		backgroundColor: 'rgba(0, 0, 0, 0.6)',
		paddingVertical: 5,
		paddingHorizontal: 5,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 8,
	},
	itemTitle: {
		fontSize: 12,
		textAlign: 'center',
		color: '#fff',
		fontWeight: 'bold',
	},
})

export default styles
