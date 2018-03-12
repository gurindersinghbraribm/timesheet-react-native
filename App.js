/**
 * TimeSheet and Schedule app
 * 
 * This app is a learning mechanism for React Native
 * 
 * Nathan Couch
 * 
 * https://github.com/nathancouch/timesheet-react-native
 * 
 */
import React from 'react'
import { StyleSheet, View, StatusBar, Text } from 'react-native'

import { default as AppNavigation } from './AppNavigation'

export default class App extends React.Component {

  constructor(props) {
    super(props);

    // Sets default style for Text components throughout app
    // Text.defaultProps.style = { color: 'white', fontSize: 20, fontWeight: 'bold' };
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <AppNavigation />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})