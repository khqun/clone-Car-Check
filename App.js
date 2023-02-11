import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppStack from './navigator/tab-navigator';
import store from './redux/stores/store';
import { Provider } from 'react-redux';
export default function App() {
  return (
    <Provider store={store}>
      <AppStack />
    </Provider>

  );
}

const styles = StyleSheet.create({

});
