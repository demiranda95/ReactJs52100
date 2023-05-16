import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import Card from '../../components/Card'
import colors from '../../constants/colors'

const GameScreen = () => {
	const [currentGuess, setCurrentGuess] = useState('')

    useEffect(() => {
        setCurrentGuess(Math.floor(Math.random() * (10 - 1) + 1))
    }, [])

	return (
		<View style={styles.container}>
			<Text style={styles.textColor}>Tu oponente aposto en:</Text>
			<Text style={styles.textColor}>{currentGuess}</Text>
			<Card otherStyles={styles.buttonContainer}>
				<Button title='Bajo' color={colors.black} onPress={() => console.log('Bajo')} />
				<Button title='Alto' color={colors.black} onPress={() => console.log('Alto')} />
			</Card>
		</View>
	)
}

export default GameScreen
