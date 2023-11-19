import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './src/screens/main';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Hello</Text>
      <MainScreen />
      <StatusBar style="auto" />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
