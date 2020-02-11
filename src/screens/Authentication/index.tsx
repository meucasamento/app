import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import {
    View,
    TextInput,
    Button,
    KeyboardAvoidingView
} from 'react-native'

import { SessionState } from '../../store/modules/session/session.types'
import { authentication } from './../../store/modules/session/session.actions'
import Authorization from '../../models/authorization.model'

import Text from '../../components/Text'
import styles from './style'

type Props = {
    session: SessionState,
    authentication(auth: Authorization): void
}

type State = {
    email?: string,
    password?: string
}

class AuthenticationScreen extends Component<Props, State> {

    constructor(props: Props) {
        super(props)
        this.state = {
            email: null,
            password: null
        }
    }

    private login() {
        const { email, password } = this.state
        this.props.authentication({ email, password })
    }

    render() {
        return(
            <KeyboardAvoidingView 
                behavior="padding"
                style={styles.container}>
                <View style={styles.loginForm}>
                    <View style={styles.row}>
                        <Text style={styles.label}>Email</Text>
                        <TextInput 
                            style={styles.input}
                            value={this.state?.email}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            onChangeText={email => this.setState({email})}
                            placeholder="Insira seu email" />
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Senha</Text>
                        <TextInput 
                            style={styles.input}
                            value={this.state?.password}
                            onChangeText={password => this.setState({password})}
                            secureTextEntry={true}
                            placeholder="Sua senha" />
                    </View>
                    <Button 
                        title="Fazer login"
                        onPress={() => this.login()}/>
                </View>
            </KeyboardAvoidingView>
        )
    }

}

const mapStateToProps = (state: Props) => state

const mapDipatchToProps = (dispatch: Dispatch) => ({
    authentication: (auth: Authorization) => dispatch(authentication(auth))
})

export default connect(
    mapStateToProps,
    mapDipatchToProps
)(AuthenticationScreen)