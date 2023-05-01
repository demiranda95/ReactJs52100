import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Hola, Coder!</Text>
      <Text style={styles.text2}>Att: Diego Miranda</Text>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://diegomiranda.cl/img/logo/logo-square.png',
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D1D1D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  text1: {
    fontSize: 50,
    fontWeight: 'bold',
    margin: 5,
    color: '#fff'
  },
  text2: {
    fontSize: 30,
    fontWeight: 500,
    margin: 30,
    color: '#fff'
  }
});
