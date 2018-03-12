import React from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native'
import { Button, Icon } from 'react-native-elements'
import t from 'tcomb-form-native'

var Form = t.form.Form;
// Model for tcomb form generator
var Person = t.struct({
    domain: t.maybe(t.String),  // an optional string
    user: t.String,               // a required number
    password: t.String        // a boolean
});

export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.authenticate = this.authenticate.bind(this);
    }

    static navigationOptions = {
        headerMode: 'float',
        // title: 'Login',
    };

    authenticate() {
        const { navigation } = this.props;
        navigation.navigate('AuthenticatedStack');
    }

    // Optional tcomb form config
    // These are placed inside of the Login component so that
    // the reference to 'this' is made easier and done in less characters.
    formOptions = {
        auto: 'placeholders',
        placeholderTextColor: 'white',
        fields: {
            domain: {
                // autoFocus: true,
                autoCorrect: false,
                returnKeyType: 'next',
                onSubmitEditing: () => this.refs.form.getComponent('user').refs.input.focus()
            },
            user: {
                autoCorrect: false,
                returnKeyType: 'next',
                onSubmitEditing: () => this.refs.form.getComponent('password').refs.input.focus(),
            },
            password: {
                autoCorrect: false,
                returnKeyType: 'done',
                secureTextEntry: true,
                onSubmitEditing: this.authenticate.bind(this)
            },
        }

    }

    render() {

        return (

            <KeyboardAvoidingView style={styles.container} behavior='padding'>
                <Form
                    ref="form"
                    type={Person}
                    options={this.formOptions}
                />

                <Button
                    title='Pretend We Login'
                    buttonStyle={{
                        backgroundColor: '#b03836',
                        width: 300,
                        height: 45,
                        borderColor: "transparent",
                        borderWidth: 0,
                        borderRadius: 5,
                    }}
                    containerStyle={{ marginTop: 20 }}
                    onPress={this.authenticate}
                    fontWeight='bold'
                />

                <View style={{ height: 80 }} />
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
        justifyContent: 'flex-end',

    },
});