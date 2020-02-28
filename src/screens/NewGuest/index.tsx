import React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { NavigationScreenProp, NavigationState } from 'react-navigation'
import KeyboardSpacer from 'react-native-keyboard-spacer'

import { remove } from './../../store/modules/guest/guest.actions'
import Guest from '../../models/guest.model'
import NewGuestForm from './form'

type NavigationParams = {
    guest?: Guest
}

type Props = {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>,
    remove(guest: Guest): void
}

const NewGuestScreen = (props: Props) => {

    const guest = props.navigation.state.params?.guest

    const handleOnDelete = (guest: Guest) => {
        props.remove(guest)
    }

    return (
        <>
        <NewGuestForm 
                guest={guest}
                onSubmit={guest => {}}
                onDelete={handleOnDelete}/>
        <KeyboardSpacer/>
        </>
    )
}

const mapStateProps = (state: Props) => state

const mapDispatchProps = (dispatch: Dispatch) => ({
    remove: (guest: Guest) => dispatch(remove(guest))
})

export default connect(
    mapStateProps,
    mapDispatchProps
)(NewGuestScreen)