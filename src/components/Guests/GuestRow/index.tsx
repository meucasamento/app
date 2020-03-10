import React from 'react'
import {
    SafeAreaView,
    TouchableOpacity,
    View
} from 'react-native'

import Guest from '../../../models/guest.model'

import Text from './../../../components/Text'
import styles from './styles'

type Props = {
    guest: Guest,
    onPress?(guest: Guest): void
}

const renderConfirmedTag = (guest: Guest) => {
    const status = guest.invitationDelivered
    const text = status ? "Convite entregue" : "Convite não entregue"
    const style = status ? styles.confirmedTag : styles.unConfirmedTag

    return <Text style={style}>{text}</Text>
}

export const GuestRow = (props: Props) => (
    <SafeAreaView>
        <TouchableOpacity
            onPress={() => props.onPress && props.onPress(props.guest)}>
            <View style={styles.row}>
                <View style={styles.leftContainer}>
                    <Text>
                        {props.guest.name} 
                        {props.guest.hasCompanion && ` e ${props.guest.companion}`} 
                        {props.guest.includeFamily && " & Família"}
                        </Text>
                </View>
                <View style={styles.rightContainer}>
                    {renderConfirmedTag(props.guest)}
                </View>
            </View>
        </TouchableOpacity>
    </SafeAreaView>
)

type EmptyProps = {
    message: string
}

export const EmptyGuestRow = (props: EmptyProps) => (
    <View style={styles.row}>
        <Text style={styles.emptyMessage}>{props.message}</Text>
    </View>
)