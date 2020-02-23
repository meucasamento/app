import React from 'react'
import {
    SafeAreaView,
    TouchableHighlight,
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
    if (guest.isConfirmed) {
        return <Text style={styles.confirmedTag}>Convite Entregue</Text>
    } else {
        return <Text style={styles.noConfirmedTag}>Convite pendente</Text>
    }
}

export const GuestRow = (props: Props) => (
    <SafeAreaView>
        <TouchableHighlight
            onPress={() => props.onPress && props.onPress(props.guest)}
            underlayColor="gray">
            <View style={styles.row}>
                <View style={styles.leftContainer}>
                    <Text>{props.guest.name}</Text>
                </View>
                <View style={styles.rightContainer}>
                    {renderConfirmedTag(props.guest)}
                </View>
            </View>
        </TouchableHighlight>
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