import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 10,
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingBottom: 100,
	},
	categoriesContainer: {
		padding: 15,
		width: 150,
	},
	storeContainer: {
		width: '95%',
		aspectRatio: 2.7,
		borderRadius: 10,
		overflow: 'hidden',
	},
	bannerImage: {
		flex: 1,
		resizeMode: 'cover',
	},
	overlay: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		justifyContent: 'center',
		alignItems: 'center',
	},
	overlayText: {
		fontSize: 24,
		fontWeight: 'bold',
		color: 'white',
	},
})
