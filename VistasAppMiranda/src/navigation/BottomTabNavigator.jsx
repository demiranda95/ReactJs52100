import { StyleSheet, Text, View } from 'react-native'
import { COLORS } from '../constants/colors'
import ShopNavigator from './ShopNavigator'
import CartNavigator from './CartNavigator'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from '@expo/vector-icons/Ionicons'

const BottomTabs = createBottomTabNavigator()

export default BottomTabNavigator = () => {
	return (
		<BottomTabs.Navigator
			screenOptions={{
				headerShown: false,
				tabBarShowLabel: false,
				tabBarStyle: styles.tabBar,
			}}
		>
			<BottomTabs.Screen
				name='ShopNavigator'
				component={ShopNavigator}
				options={{
					tabBarIcon: () => (
						<View style={styles.tab}>
							<Ionicons name='home' size={30} color={COLORS.tertiary} />
							<Text>Tienda</Text>
						</View>
					),
				}}
			/>
			<BottomTabs.Screen
				name='CartNavigator'
				component={CartNavigator}
				options={{
					tabBarIcon: () => (
						<View style={styles.tab}>
							<Ionicons name='cart' size={30} color={COLORS.tertiary} />
							<Text>Carrito</Text>
						</View>
					),
				}}
			/>
		</BottomTabs.Navigator>
	)
}

const styles = StyleSheet.create({
	tabBar: {
		backgroundColor: COLORS.white,
		paddingTop: 15,
		borderTopEndRadius: 30,
		borderTopStartRadius: 30,
		height: 100,
		position: 'absolute',
		shadowColor: COLORS.black,
		shadowOpacity: 0.2,
		shadowRadius: 5,
		elevation: 5,
	},
	tab: {
		alignItems: 'center',
	},
})
