import React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { NavigationScreenProp, NavigationState } from 'react-navigation'

import { 
    remove, 
    store
} from './../../store/modules/guest/guest.actions'

import Guest from '../../models/guest.model'
import NewGuestForm from './form'
import { GuestState } from '../../store/modules/guest/guest.types'
import { Alert } from 'react-native'

type NavigationParams = {
    guest?: Guest
}

type Props = {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>,
    guest: GuestState,
    store(guest: Guest): void
    remove(guest: Guest): void
}

const NewGuestScreen = (props: Props) => {
    const guest = props.navigation.state.params?.guest

    const handleOnSubmit = (guest: Guest) => {
        props.store(guest)
    }

    const handleOnDelete = (guest: Guest) => {
        Alert.alert("Apaagar", "Tem certeza que deseja apagar esse convidado?", [
            {text: "Apagar", style: "destructive", onPress: () => {
                props.remove(guest)
            }},
            {text: "Cancelar", style: "cancel"}
        ])
    }

    return (
        <NewGuestForm 
            guest={guest}
            isLoading={props.guest.loading}
            onSubmit={handleOnSubmit}
            onDelete={handleOnDelete}/>
    )
}

const mapStateProps = (state: Props) => state

const mapDispatchProps = (dispatch: Dispatch) => ({
    store: (guest: Guest) => dispatch(store(guest)),
    remove: (guest: Guest) => dispatch(remove(guest))
})

export default connect(
    mapStateProps,
    mapDispatchProps
)(NewGuestScreen)