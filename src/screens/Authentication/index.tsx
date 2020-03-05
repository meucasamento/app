import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import {
    KeyboardAvoidingView, Alert
} from 'react-native'

import { SessionState, Credentials } from '../../store/modules/session/session.types'
import { authentication } from './../../store/modules/session/session.actions'

import SignupForm, { FormValues } from './form'

import styles from './style'
import { navigateTo } from '../../services/navigation.service'

type Props = {
    session: SessionState,
    authentication(credentials: Credentials, completion: (response: Promise<void>) => void) : void
}

const AuthenticationScreen = (props: Props) => {

    const [isLoading, setIsLoading] = useState(false)

    const onSubmitHandler = (data: FormValues) => {
        setIsLoading(true)

        props.authentication(data, response => 
        response.finally(() => setIsLoading(false))
        .then(() => navigateTo("App"))
        .catch(() => Alert.alert("Login inválido", "Email ou senha incorretos, por favor revise os dados e tente novamente.")
        ))
    }

    return(
        <KeyboardAvoidingView 
            behavior="padding"
            style={styles.container}>
            <SignupForm
                formValues={{email: "adrianosouzacostaios@gmail.com", password: "12345678"}}
                isLoading={isLoading}
                onSubmit={onSubmitHandler}/>
        </KeyboardAvoidingView>
    )

}

const mapStateToProps = (state: Props) => state

const mapDipatchToProps = (dispatch: Dispatch) => ({
    authentication: (credentials: Credentials, completion: (response: Promise<void>) => void) => dispatch(authentication(credentials, completion))
})

export default connect(
    mapStateToProps,
    mapDipatchToProps
)(AuthenticationScreen)