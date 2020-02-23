import React from 'react'
import {
    TouchableWithoutFeedback,
    TouchableOpacity,
    View
} from 'react-native'

import styles from './styles'

type Props = {
    onPressed?(): void,
    children?: any
}

const AddButton = (props: Props) => (
    <View style={styles.container}>
        <TouchableOpacity 
            style={styles.touchable}
            onPress={props.onPressed}>
            {props.children}
        </TouchableOpacity>
    </View>
)

export default AddButton