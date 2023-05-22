import { useFonts } from 'expo-font'
import { NavigationContainer } from '@react-navigation/native'
import BottomTabNavigator from './src/navigation/BottomTabNavigator'

export default function App() {
	const [loaded] = useFonts({
		OpenSansRegular: require('./src/assets/fonts/OpenSans-Regular.ttf'),
		OpenSansBold: require('./src/assets/fonts/OpenSans-Bold.ttf'),
		PacificoRegular: require('./src/assets/fonts/Pacifico-Regular.ttf'),
	})

	if (!loaded) return null

	return (
		<NavigationContainer>
			<BottomTabNavigator />
		</NavigationContainer>
	)
}

