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
    guest: Guest
}

const GuestRow = (props: Props) => (
    <SafeAreaView>
        <TouchableHighlight
            onPress={() => console.log("Pressed")}
            underlayColor="gray">
            <View style={styles.row}>
                <View style={styles.leftContainer}>
                    <Text>{props.guest.name}</Text>
                </View>
                <View style={styles.rightContainer}>
                    <Switch
                        value={props.guest.isConfirmed }
                        onValueChange={status => console.log(status)}/>
                </View>
            </View>
        </TouchableHighlight>
    </SafeAreaView>
)

export default GuestRow