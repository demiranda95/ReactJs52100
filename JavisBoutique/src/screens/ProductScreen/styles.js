import { StyleSheet, Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width
const itemWidth = (windowWidth - 45) / 2

export default styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 15,
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
	section: {
		paddingVertical: 20,
		paddingHorizontal: 15,
	},
	headerSection: {
		width: 40,
	},
	itemsContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
	},
	itemContainer: {
		width: itemWidth,
		marginBottom: 15,
	},
	itemImage: {
		width: '100%',
		aspectRatio: 1,
		resizeMode: 'cover',
		borderRadius: 8,
	},
	itemOverlay: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		top: 130,
		backgroundColor: 'rgba(0, 0, 0, 0.6)',
		paddingVertical: 5,
		paddingHorizontal: 5,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 8,
	},
	itemTitle: {
		fontSize: 14,
		textAlign: 'center',
		color: '#fff',
		fontWeight: 'bold',
	},
})
