import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useReducer } from 'react'

const INPUT_CHANGE = 'INPUT_CHANGE'
const INPUT_BLUR = 'INPUT_BLUR'

const inputReducer = (state, action) => {
	switch (action.type) {
		case INPUT_CHANGE:
			return { ...state, value: action.value, isValid: action.isValid }
		case INPUT_BLUR:
			return { ...state, touched: true }
		default:
			return state
	}
}

const Input = ({ initialValue, isValid, onInputChange, id, required, email, max, min }) => {
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

		if (required && text.trim().length === 0) isValid = false
		if (email && !emailRegex.test(text.toLowerCase())) isValid = false
		if (max && text.length > max) isValid = false
		if (min != null && text.length < min) isValid = false

		dispatch({
			type: INPUT_CHANGE,
			value: text,
			isValid: isValid,
		})
	}

	const onBlurHandler = () => {}

	return (
		<View>
			<Text>Input</Text>
		</View>
	)
}

export default Input

const styles = StyleSheet.create({})
