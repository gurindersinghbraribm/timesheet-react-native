import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'

const HeaderMenuButton = (navigation) =>
    <TouchableOpacity style={styles.container} onPress={() => { navigation.navigate('DrawerToggle') }}>
        <Icon name='menu' color='white' size={35} />
        <Text style={styles.text}>
            Menu
        </Text>
    </TouchableOpacity>;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 5
    },
    text: {
        color: 'white',
        fontWeight: 'bold'
    }
});

export default HeaderMenuButton