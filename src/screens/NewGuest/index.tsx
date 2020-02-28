import React from 'react'
import { NavigationScreenProp, NavigationState } from 'react-navigation'
import KeyboardSpacer from 'react-native-keyboard-spacer'

import Guest from '../../models/guest.model'
import NewGuestForm from './form'

type NavigationParams = {
    guest?: Guest
}

type Props = {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>,
}

const NewGuestScreen = (props: Props) => {

    const guest = props.navigation.state.params?.guest

    return (
        <>
        <NewGuestForm 
                guest={guest}
                onSubmit={guest => {}}
                onDelete={guest => {}}/>
        <KeyboardSpacer/>
        </>
    )
}

export default NewGuestScreen