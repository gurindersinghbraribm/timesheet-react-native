import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { NavigationActions } from 'react-navigation'

export default class DrawerContainer extends React.Component {

    logout = () => {
        // This will reset back to LoginStack
        // https://github.com/react-community/react-navigation/issues/1127
        const actionToDispatch = NavigationActions.reset({
            index: 0,
            key: null,  // black magic
            actions: [NavigationActions.navigate({ routeName: 'LoginStack' })]
        })
        this.props.navigation.dispatch(actionToDispatch)
    }

    render() {
        const { navigation } = this.props
        return (
            <View style={styles.container}>
                <Text
                    onPress={() => navigation.navigate('Dashboard')}
                    style={styles.uglyDrawerItem}>
                    Dashboard
                </Text>
                <Text
                    onPress={() => navigation.navigate('Schedule')}
                    style={styles.uglyDrawerItem}>
                    Schedule
                </Text>

                <Text
                    onPress={this.logout}
                    style={[styles.uglyDrawerItem, { marginTop: 'auto' }]}>
                    Log Out
                </Text>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 5,
    },
    uglyDrawerItem: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#E73536',
        padding: 15,
        marginVertical: 5,
        borderRadius: 2,
        borderColor: '#b03836',
        borderWidth: 1,
        textAlign: 'center'
    }
})