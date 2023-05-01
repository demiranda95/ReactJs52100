import { useState } from 'react'
import { StyleSheet, Text, View, Image, TextInput, Button, FlatList, Modal, TouchableHighlight, TouchableOpacity } from 'react-native'
import MyModal from './src/components/Modal/Modal'

export default function App() {
	const [textItem, setTextItem] = useState('')
	const [list, setList] = useState([])
	const [itemSelected, setItemselected] = useState({})
	const [modalVisible, setModalVisible] = useState(false)

	const onHandleChangeText = (text) => {
		setTextItem(text)
	}
	const addItem = () => {
		setList((prev) => [...prev, { name: textItem, id: Math.random().toString(), completed: false }])
		setTextItem('')
	}

	const onHandleModal = (item) => {
		setItemselected(item)
		setModalVisible(!modalVisible)
	}

	const handleCancel = () => {
		setModalVisible(!modalVisible)
	}

	const onHandleDelete = (item) => {
		if (item.id === 0) {
			setList([])
		} else {
			setList((prev) => prev.filter((e) => e.id !== item.id))
		}
		setModalVisible(!modalVisible)
	}

	const resetList = () => {
		setItemselected({ id: 0, name: 'Todo' })
		setModalVisible(!modalVisible)
	}

	const onHandleComplete = (id) => {
		setList((prev) =>
			prev.map((item) => {
				if (item.id === id) {
					return { ...item, completed: !item.completed }
				}
				return item
			})
		)
	}

	const renderItem = ({ item }) => (
		<TouchableHighlight underlayColor='transparent' onPress={() => onHandleComplete(item.id)}>
			<View style={styles.listItem}>
				<View style={styles.checkbox}>
					<TouchableOpacity onPress={() => onHandleComplete(item.id)}>{item.completed ? <Text style={styles.checkboxText}>✓</Text> : <View style={styles.checkboxOutline} />}</TouchableOpacity>
				</View>
				<Text style={[styles.listItemText, item.completed && styles.completed]}>{item.name}</Text>
				<Button title='Eliminar' onPress={() => onHandleModal(item)} color={'lightgray'} />
			</View>
		</TouchableHighlight>
	)

	return (
		<View style={styles.container}>
			<View style={styles.topBar}>
				<Image style={styles.logo} source={{ uri: 'https://diegomiranda.cl/img/logo/logo-square.png' }} />
				<Text style={styles.title}>Shopping List</Text>
			</View>
			<View style={styles.inputContainer}>
				<TextInput placeholder='Agregar producto' placeholderTextColor='lightgray' style={styles.input} onChangeText={onHandleChangeText} value={textItem} />
				<Button title='Agregar' onPress={addItem} color={'lightgray'} />
			</View>
			<View style={styles.listContainer}>
				<FlatList data={list} renderItem={renderItem} keyExtractor={(item) => item.id} showsVerticalScrollIndicator={false} />
			</View>
			<MyModal isVisible={modalVisible} actionDeleteItem={() => onHandleDelete(itemSelected)} itemSelected={itemSelected} onCancel={handleCancel} />
			<Button title='Resetear Lista' onPress={resetList} color={'red'} />
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
		fontSize: 20,
	},
	listContainer: {
		flex: 2,
		marginTop: 20,
		padding: 3,
	},
	listItem: {
		height: 60,
		flexDirection: 'row',
		marginBottom: 5,
		backgroundColor: 'black',
		borderRadius: 10,
		padding: 10,
		justifyContent: 'space-between',
		alignItems: 'center',
		shadowColor: 'gray',
		shadowOpacity: 0.3,
		shadowOffset: { width: 0, height: 1 },
		shadowRadius: 2,
		elevation: 3,
	},
	listItemText: {
		color: 'white',
		fontSize: 20,
		fontWeight: 'bold',
	},
	checkbox: {
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: 10,
		width: 20,
		height: 20,
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'lightgray',
	},
	checkboxOutline: {
		width: 14,
		height: 14,
		borderRadius: 5,
		borderColor: 'lightgray',
	},
	checkboxText: {
		fontSize: 14,
		fontWeight: 'bold',
		color: 'lightgray',
	},
	completed: {
		textDecorationLine: 'line-through',
	},
})
