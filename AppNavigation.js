import React from 'react'
import { Text, Animated, Easing, StyleSheet } from 'react-native'
import { StackNavigator, DrawerNavigator } from 'react-navigation'

import { Dashboard, DrawerContainer, Login, Schedule } from './screens';
import { HeaderMenuButton } from './components';

// login stack
const LoginStack = StackNavigator(
    {
        Login: { screen: Login },
        // Register: { screen: Register },
        // ForgotPassword: { screen: ForgotPassword },
    },
    {
        navigationOptions: {
            headerStyle: { backgroundColor: '#b03836' },
            title: 'You are not logged in',
            headerTintColor: 'white'
        }
    }
);

// drawer stack
const DrawerStack = DrawerNavigator(
    {
        Dashboard: { screen: Dashboard },
        Schedule: { screen: Schedule }
    }, {
        initialRouteName: 'Dashboard',
        headerMode: 'none',
        contentComponent: DrawerContainer,
        drawerWidth: 180,
    }
);

const AuthenticatedStack = StackNavigator(
    {
        DrawerStack: { screen: DrawerStack }
    }, {
        initialRouteName: 'DrawerStack',
        headerMode: 'screen',
        navigationOptions: ({ navigation }) => ({
            headerStyle: { backgroundColor: '#b03836' },
            headerTintColor: 'white',
            gesturesEnabled: false,
            headerLeft: HeaderMenuButton(navigation)
        })
    }
);

// Transitioning from a screen without a drawer to one with a drawer
// temporarily shows it before hiding.This transition config fixes that issue.

//     https://github.com/react-community/react-navigation/issues/1254
const noTransitionConfig = () => ({
    transitionSpec: {
        duration: 0,
        timing: Animated.timing,
        easing: Easing.step0
    }
})

// Manifest of possible screens
const AppNavigation = StackNavigator(
    {
        LoginStack: { screen: LoginStack },
        AuthenticatedStack: { screen: AuthenticatedStack }
    }, {
        initialRouteName: 'LoginStack',
        headerMode: 'none',
        transitionConfig: noTransitionConfig,

    }
);

export default AppNavigation