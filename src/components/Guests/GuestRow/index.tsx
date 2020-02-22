import React from 'react'
import {
    SafeAreaView,
    TouchableHighlight,
    View,
    Switch
} from 'react-native'

import Guest from '../../../models/guest.model'

import Text from './../../../components/Text'
import styles from './styles'

type Props = {
    guest: Guest,
    onPress?(guest: Guest): void,
    onValueChange?(status: boolean, guest: Guest): void
}

const GuestRow = (props: Props) => (
    <SafeAreaView>
        <TouchableHighlight
            onPress={() => props.onPress && props.onPress(props.guest)}
            underlayColor="gray">
            <View style={styles.row}>
                <View style={styles.leftContainer}>
                    <Text>{props.guest.name}</Text>
                </View>
                <View style={styles.rightContainer}>
                    <Switch
                        value={props.guest.isConfirmed }
                        onValueChange={status => props.onValueChange && props.onValueChange(status, props.guest)}/>
                </View>
            </View>
        </TouchableHighlight>
    </SafeAreaView>
)

export default GuestRow