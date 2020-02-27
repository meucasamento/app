import React from 'react'
import { NavigationScreenProp, NavigationState } from 'react-navigation'

import Guest from '../../models/guest.model'
import NewGuestForm from './form'

type NavigationParams = {
    guest?: Guest
}

type Props = {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>,
}

const NewGuestScreen = (props: Props) => {

    const { guest } = props.navigation.state.params

    return <NewGuestForm 
                formValues={{ name: "sdfsdf" }}
                onSubmit={result => {}}
                onCancel={() => {}} />
}

export default NewGuestScreen