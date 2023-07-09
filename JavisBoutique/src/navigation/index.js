import { useState } from 'react'
import AuthNavigator from './AuthNavigator'
import MainNavigator from './MainNavigator'
import { NavigationContainer } from '@react-navigation/native'
import { useSelector } from 'react-redux'

const AppNavigator = () => {
	const userId = useSelector((state) => state.auth.userId)
	return <NavigationContainer>{userId ? <MainNavigator /> : <AuthNavigator />}</NavigationContainer>
}

export default AppNavigator
