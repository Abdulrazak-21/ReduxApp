import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux';
import { store } from './components/AirlineApp/Store/Store';


import NavigationScreen from './components/Navigation/NavigationScreen'
const App = () => {
  return (
    <Provider store={store}>
      <NavigationScreen />
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})