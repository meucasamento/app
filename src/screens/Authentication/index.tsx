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
import SignupForm from './form'

type Props = {
    session: SessionState,
    authentication(auth: Authorization): void
}

type State = {}

class AuthenticationScreen extends Component<Props, State> {

    constructor(props: Props) {
        super(props)
        this.state = {
            email: null,
            password: null
        }
    }

    private login(email?: string, password?: string) {
        this.props.authentication({ email, password })
    }

    render() {
        return(
            <KeyboardAvoidingView 
                behavior="padding"
                style={styles.container}>
                <SignupForm
                    onSubmit={data => {
                        this.login(data?.email, data?.password)
                    }} />
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