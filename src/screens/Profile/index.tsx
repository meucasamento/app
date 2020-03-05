import React, { Component, useState } from 'react'
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
    logout(completion: (response: Promise<void>) => void): void
}

type State = {}

const ProfileScreen = (props: Props) => {

    const [isLoading, setIsLoading] = useState(false)

    const onPressHandler = () => {
        setIsLoading(true)

        props.logout(response => {
            response.finally(() => setIsLoading(false))
            .then(() => navigateTo("Auth"))
            .catch(err => console.log(err))
        })
    }

    return (
        <View style={styles.container}>
            <Button 
            text="Logout"
            isLoading={isLoading}
            onPress={() => onPressHandler()}/>
        </View>
    )

}

const mapStateProps = (state: Props) => state

const mapDispatchToProps = (dispatch: Dispatch) => ({
    logout: (completion: (response: Promise<void>) => void) => dispatch(logout(completion))
})

export default connect(
    mapStateProps,
    mapDispatchToProps
)(ProfileScreen)