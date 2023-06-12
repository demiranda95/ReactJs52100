import MainNavigator from './MainNavigator'
import StartUpNavigator from './StartUpNavigator'
import { NavigationContainer, DarkTheme } from '@react-navigation/native'
import { useSelector } from 'react-redux'

const AppNavigator = () => {
	const userId = useSelector((state) => state.auth.userId)

	return <NavigationContainer theme={DarkTheme}>{userId ? <MainNavigator /> : <StartUpNavigator />}</NavigationContainer>
}

export default AppNavigator
