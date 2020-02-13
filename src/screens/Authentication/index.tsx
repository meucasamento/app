import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import {
    KeyboardAvoidingView
} from 'react-native'

import { SessionState } from '../../store/modules/session/session.types'
import { authentication } from './../../store/modules/session/session.actions'
import Authorization from '../../models/authorization.model'

import SignupForm, { SignupFormData } from './form'
import styles from './style'

type Props = {
    session: SessionState,
    authentication(auth: Authorization): void
}

const AuthenticationScreen = (props: Props) => {

    const login = (data: SignupFormData) => {
        props.authentication({ 
            email: data.email, 
            password: data.password
        })
    }

    const {
        loading,
    } = props.session

    return(
        <KeyboardAvoidingView 
            behavior="padding"
            style={styles.container}>
            <SignupForm
                isLoading={loading}
                onSubmit={data => login(data)} />
        </KeyboardAvoidingView>
    )

}

const mapStateToProps = (state: Props) => state

const mapDipatchToProps = (dispatch: Dispatch) => ({
    authentication: (auth: Authorization) => dispatch(authentication(auth))
})

export default connect(
    mapStateToProps,
    mapDipatchToProps
)(AuthenticationScreen)