import { useState } from 'react'
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native'

export default function App() {

  const [textItem, setTextItem] = useState("")
  const [list, setList] = useState([])
  
  const onHandleChangeText = (text) => {
    setTextItem(text)
  }

	return (
		<View style={styles.container}>
			<View style={styles.topBar}>
				<Image style={styles.logo} source={{ uri: 'https://diegomiranda.cl/img/logo/logo-square.png' }} />
				<Text style={styles.title}>Lista de Compras</Text>
			</View>
			<View style={styles.inputContainer}>
				<TextInput placeholder='Agregar producto' placeholderTextColor='lightgray' style={styles.input} onChangeText={onHandleChangeText} value={textItem} />
				<Button title='Agregar' onPress={() => console.log('Producto Agregado')} color={'lightgray'} />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
    flex: 1,
		backgroundColor: '#1D1D1D',
		paddingTop: 50,
		padding: 20,
	},
	topBar: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	logo: {
		width: 80,
		height: 80,
	},
	title: {
		fontSize: 30,
		fontWeight: 'bold',
		margin: 5,
		color: '#fff',
	},
	inputContainer: {
		paddingTop: 50,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	input: {
		borderBottomColor: 'white',
		color: 'white',
		borderBottomWidth: 2,
		width: 200,
	},
	text2: {
		fontSize: 30,
		fontWeight: 500,
		margin: 30,
		color: '#fff',
	},
})
