import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		backgroundColor: '#fff',
	},
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	backgroundImage: {
		flex: 1,
		width: '100%',
		height: '100%',
		resizeMode: 'cover',
		position: 'absolute',
	},
	overlay: {
		flex: 1,
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		width: '100%',
		height: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputContainer: {
		width: '80%',
		marginBottom: 60,
	},
	registerButton: {
		marginTop: 10,
		backgroundColor: '#fff',
		width: '80%',
		height: 50,
		borderRadius: 25,
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 1,
		borderColor: '#F9A924',
	},
	registerButtonText: {
		color: '#F9A924',
		fontSize: 16,
		fontWeight: 'bold',
	},
	loginButton: {
		backgroundColor: '#F9A924',
		width: '80%',
		height: 50,
		borderRadius: 25,
		justifyContent: 'center',
		alignItems: 'center',
	},
	loginButtonText: {
		color: '#fff',
		fontSize: 16,
		fontWeight: 'bold',
	},
})
