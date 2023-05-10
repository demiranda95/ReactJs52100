import { View, Text, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Button } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import Card from '../../components/Card'
import Input from '../../components/Input'
import colors from '../../constants/colors'

const StartGame = ({ onStartGame }) => {
	const [value, setValue] = useState('')
	const [confirm, setConfirm] = useState(false)
	const [selectedNumber, setSelectedNumber] = useState('')

	const handleInput = (text) => {
		setValue(text.replace(/[^0-9]/g, ''))
	}

	const handleResetInput = () => {
		setValue('')
		setConfirm(false)
	}

	const handleConfirmation = () => {
		const newValue = parseInt(value)
		if (isNaN(newValue) || newValue <= 0 || newValue > 10) return

		setConfirm(true)
		setSelectedNumber(newValue)
		setValue('')
	}

	return (
		<KeyboardAvoidingView style={{ flex: 1 }} behavior={'padding'}>
			<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
				<View style={styles.container}>
					<Card>
						<Text style={styles.subtitle}>Elige un número entre</Text>
						<Text style={styles.subtitle}>1 y 10</Text>
						<Input blurOnSubmit autoCapitalize='none' autoCorrect={false} keyboardType='numeric' maxLength={2} placeholder='Number' newProperty='new' onChangeText={handleInput} />
						<View style={styles.buttonContainer}>
							<TouchableOpacity style={styles.cleanButton} onPress={handleResetInput}>
								<Text>Limpiar</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.confirmButton} onPress={handleConfirmation}>
								<Text>Confirmar</Text>
							</TouchableOpacity>
						</View>
					</Card>
					{confirm && (
						<Card otherStyles={styles.selectedCard}>
							<Text style={styles.subtitle}>Tu número es:</Text>
							<Text style={styles.subtitle}>{selectedNumber}</Text>
							<View>
								<TouchableOpacity style={styles.confirmButton} onPress={() => onStartGame(selectedNumber)}>
									<Text>Iniciar Juego</Text>
								</TouchableOpacity>
							</View>
						</Card>
					)}
				</View>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	)
}

export default StartGame
