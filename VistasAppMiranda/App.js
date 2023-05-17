import { useFonts } from 'expo-font'
import ShopNavigator from './src/navigation/ShopNavigator'

export default function App() {

	const [loaded] = useFonts({
		OpenSansRegular: require('./src/assets/fonts/OpenSans-Regular.ttf'),
		OpenSansBold: require('./src/assets/fonts/OpenSans-Bold.ttf'),
		PacificoRegular: require('./src/assets/fonts/Pacifico-Regular.ttf'),
	})

	if (!loaded) return null

	return (
		<ShopNavigator />
	)
}


