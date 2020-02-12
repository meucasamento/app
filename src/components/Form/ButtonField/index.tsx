import React, { Component } from 'react'
import { ActivityIndicator } from 'react-native'

import {
    TouchableOpacity,
    View
} from 'react-native'

import Text from '../../Text'

import styles from './style'

type Props = {
    text: string,
    isLoading?: boolean,
    onPress(): void
}

class ButtonForm extends Component<Props> {
    render() {
        const {
            isLoading
        } = this.props

        return(
            <View style={styles.container} >
                <TouchableOpacity 
                    style={styles.tappedArea}
                    disabled={isLoading}
                    onPress={() => this.props.onPress()}>
                    <View style={styles.button}>
                        {!isLoading && <Text style={styles.text}>{this.props.text}</Text>}
                        {isLoading && <ActivityIndicator color="white" />}
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

export default ButtonForm