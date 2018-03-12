import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class Dashboard extends React.Component {

    static navigationOptions = {
        title: 'Dashboard',
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Dashboard</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    }
})