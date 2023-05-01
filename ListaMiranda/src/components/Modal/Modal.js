import { StyleSheet, Text, View, Modal, Button } from 'react-native'
import React from 'react'

const MyModal = ({ isVisible, actionDeleteItem, itemSelected, onCancel }) => {
	return (
		<Modal visible={isVisible} animationType='slide' transparent={'false'}>
			<View style={styles.modalContainer}>
				<View>
					<Text style={styles.modalTextTitle}>
						¿Deseas eliminar <Text style={styles.modalText}>{itemSelected.name}</Text>?
					</Text>
					<View style={styles.buttonContainer}>
						<Button title='Cancelar' onPress={onCancel} />
						<Button title='Eliminar' color={'red'} onPress={() => actionDeleteItem()} />
					</View>
				</View>
			</View>
		</Modal>
	)
}

export default MyModal

const styles = StyleSheet.create({
	modalContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 22,
	},
	modalTextTitle: {
		fontSize: 20,
		marginBottom: 15,
		textAlign: 'center',
	},
	modalText: {
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 15,
		textAlign: 'center',
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: 15,
	},
})
