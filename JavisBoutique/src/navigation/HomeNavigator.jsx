import React, { useEffect } from 'react'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { View, Text, Button, Alert } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { DevSettings } from 'react-native'
import { resetSignInSuccess, signOut } from '../store/actions/auth.action'
import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'

const Drawer = createDrawerNavigator()

const CustomDrawerContent = ({ navigation }) => {
	const dispatch = useDispatch()
	const signInSuccess = useSelector((state) => state.auth.signInSuccess)
	console.log(signInSuccess)

	useEffect(() => {
		if (signInSuccess) {
			dispatch(resetSignInSuccess())
			DevSettings.reload()
		}
	}, [signInSuccess])

	const showSignOutConfirmation = () => {
		Alert.alert('Cerrar sesión', '¿Estás seguro de que deseas cerrar sesión?', [
			{
				text: 'Cancelar',
				style: 'cancel',
				onPress: () => console.log('Cancel Pressed'),
			},
			{
				text: 'Confirmar',
				onPress: handleSignOut,
			},
		])
	}

	const handleSignOut = async () => {
		dispatch(signOut())
	}

	return (
		<DrawerContentScrollView>
			<DrawerItem label='Inicio' onPress={() => navigation.navigate('HomeScreen')} />
			<DrawerItem label='Perfil' onPress={() => navigation.navigate('Profile')} />
			<DrawerItem label='Cerrar Sesión' onPress={showSignOutConfirmation} />
		</DrawerContentScrollView>
	)
}

const HomeNavigator = () => {
	return (
		<Drawer.Navigator screenOptions={{ headerShown: false }} drawerContent={(props) => <CustomDrawerContent {...props} />}>
			<Drawer.Screen name='HomeScreen' component={HomeScreen} />
			<Drawer.Screen name='Profile' component={ProfileScreen} />
		</Drawer.Navigator>
	)
}

export default HomeNavigator
