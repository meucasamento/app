import React from 'react'
import {
    View,
    Switch
} from 'react-native'

import Text from '../../../Text'
import styles from './styles'

type Props = {
    value?: boolean,
    label?: string,
    error?: string,
    isEnabled?: boolean,
    isVisible?: boolean,
    onValueChange(value: boolean): void
}

const SwitchField = (props: Props) => (
    <>
    { (props.isVisible ?? true) &&
    <View style={styles.row}>
        <Text style={styles.label}>{props.label}</Text>
        <Switch 
            value={props.value}
            disabled={!props.isEnabled}
            onValueChange={props.onValueChange}/>
        {props.error && <Text style={styles.error}>{props.error}</Text>}
    </View>
    }
    </>
)

export default SwitchField