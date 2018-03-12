import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class Schedule extends React.Component {
    static navigationOptions = {
        title: 'Schedule',
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Schedule</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    }
})