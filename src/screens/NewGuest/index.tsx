import React, { useState } from 'react'
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
import { back } from '../../services/navigation.service'

type NavigationParams = {
    guest?: Guest
}

type Props = {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>,
    guest: GuestState,
    store(guest: Guest, completion: (response: Promise<void>) => void): void
    remove(guest: Guest, completion: (response: Promise<void>) => void): void
}

const NewGuestScreen = (props: Props) => {

    const [isLoading, setIsLoading] = useState(false)

    const guest = props.navigation.state.params?.guest

    const handleOnSubmit = (guest: Guest) => {
        setIsLoading(true)
        props.store(guest, response => 
            response.finally(() => setIsLoading(false))
            .then(() => back())
            .catch(_err => {
                const message = `Não é culpa sua mas não foi possível ${guest._id ? "atualizar" : "salvar"} o convidado. O que você gostaria de fazer?`
                Alert.alert("Não foi dessa vez", `${message}`, [
                    { text: "Tentar novamente", onPress: () => handleOnSubmit(guest) },
                    { text: "Cancelar", style: "cancel" }
                ])
            })
        )
    }

    const handleOnDelete = (guest: Guest) => {
        Alert.alert("Remover convidado", "Tem certeza que deseja apagar esse convidado?", [
            {text: "Apagar", style: "destructive", onPress: () => {
                setIsLoading(true)
                props.remove(guest, response => 
                    response.finally(() => setIsLoading(false))
                    .then(() => back())
                    .catch(_err => {
                        Alert.alert("Não foi dessa vez", `Não foi culpa sua mas não foi possível apagar o convidado. O que você gostaria de fazer?`, [
                            { text: "Tentar novamente", onPress: () => handleOnDelete(guest) },
                            { text: "Cancelar", style: "cancel" }
                        ])
                    })
                )
            }},
            {text: "Cancelar", style: "cancel"}
        ])
    }

    return (
        <NewGuestForm 
            guest={guest}
            isLoading={isLoading}
            onSubmit={handleOnSubmit}
            onDelete={handleOnDelete}/>
    )

}

const mapStateProps = (state: Props) => state

const mapDispatchProps = (dispatch: Dispatch) => ({
    store: (guest: Guest, completion: (response: Promise<void>) => void) => dispatch(store(guest, completion)),
    remove: (guest: Guest, completion: (response: Promise<void>) => void) => dispatch(remove(guest, completion))
})

export default connect(
    mapStateProps,
    mapDispatchProps
)(NewGuestScreen)