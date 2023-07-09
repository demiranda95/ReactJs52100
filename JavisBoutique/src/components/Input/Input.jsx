import React, { useEffect, useReducer } from 'react'
import { Text, TextInput, View } from 'react-native'

import styles from './styles'

const INPUT_CHANGE = 'INPUT_CHANGE'
const INPUT_BLUR = 'INPUT_BLUR'

const inputReducer = (state, action) => {
	switch (action.type) {
		case INPUT_CHANGE:
			return {
				...state,
				value: action.value,
				isValid: action.isValid,
			}
		case INPUT_BLUR:
			return { ...state, touched: true }
		default:
			return state
	}
}

const Input = ({ initialValue, isValid, onInputChange, id, requiered, email, max, min, label, errorText, ...rest }) => {
	const [inputState, dispatch] = useReducer(inputReducer, {
		value: initialValue ? initialValue : '',
		isValid,
		touched: false,
	})

	useEffect(() => {
		onInputChange(id, inputState.value, inputState.isValid)
	}, [inputState, onInputChange, id])

	const textChangeHandler = (text) => {
		const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		let isValid = true

		if (requiered && text.trim().length === 0) isValid = false
		if (email && !emailRegex.test(text.toLowerCase())) isValid = false
		if (max && text.length > max) isValid = false
		if (min !== null && text.length < min) isValid = false

		dispatch({
			type: INPUT_CHANGE,
			value: text,
			isValid: isValid,
		})
	}

	const onBlurHandler = () => dispatch({ type: INPUT_BLUR })

	return (
		<View style={styles.formControl}>
			<Text style={styles.label}>{label}</Text>
			<TextInput style={styles.input} value={inputState.value} onChangeText={textChangeHandler} onBlur={onBlurHandler} {...rest} />
			{!inputState.isValid && inputState.touched && (
				<View style={styles.errorContainer}>
					<Text style={styles.errorText}>{errorText}</Text>
				</View>
			)}
		</View>
	)
}

export default Input
