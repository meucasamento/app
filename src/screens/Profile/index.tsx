import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { 
    View
} from 'react-native'

import { logout } from './../../store/modules/session/session.actions'

import styles from './style'
import Button from '../../components/Form/Fields/Button'
import { navigateTo } from '../../services/navigation.service'

type Props = {
    logout(responseHandler: (response: Promise<void>) => void): void
}

type State = {}

const ProfileScreen = (props: Props) => {

    const onPressHandler = () => {
        props.logout(response => {
            response.finally(() => navigateTo("Auth"))
        })
    }

    return (
        <View style={styles.container}>
            <Button 
            text="Logout"
            onPress={() => onPressHandler()}/>
        </View>
    )
}

const mapStateProps = (state: Props) => state

const mapDispatchToProps = (dispatch: Dispatch) => ({
    logout: (responseHandler: (response: Promise<void>) => void) => dispatch(logout(responseHandler))
})

export default connect(
    mapStateProps,
    mapDispatchToProps
)(ProfileScreen)