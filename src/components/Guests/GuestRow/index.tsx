import React from 'react'
import {
    SafeAreaView,
    TouchableHighlight,
    View,
    Text,
    Switch
} from 'react-native'

import Guest from '../../../models/guest.model'

import styles from './styles'

type Props = {
    guest: Guest
}

const GuestRow = (props: Props) => (
    <SafeAreaView>
        <TouchableHighlight
            onPress={() => this.toggleGuestConfirmation(props.guest, !props.guest.isConfirmed)}
            underlayColor="gray">
            <View style={styles.row}>
                <View style={styles.leftContainer}>
                    <Text>{props.guest.name}</Text>
                </View>
                <View style={styles.rightContainer}>
                    <Switch
                        value={props.guest.isConfirmed }
                        onValueChange={status => this.toggleGuestConfirmation(props.guest, status)}/>
                </View>
            </View>
        </TouchableHighlight>
    </SafeAreaView>
)

export default GuestRow