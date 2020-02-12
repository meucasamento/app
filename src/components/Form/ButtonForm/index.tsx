import React, { Component } from 'react'
import { ActivityIndicator } from 'react-native'

import {
    TouchableOpacity,
    View
} from 'react-native'

import Text from './../../Text'

import styles from './style'

type Props = {
    text: string,
    isLoading?: boolean,
    onPress(): void
}

class ButtonForm extends Component<Props> {
    render() {
        return(
            <View style={styles.button} >
                <TouchableOpacity
                    style={{ display: this.props.isLoading ? "none" : "flex" }}
                    onPress={() => this.props.onPress()}>
                    <Text style={styles.text}>{this.props.text}</Text>
                </TouchableOpacity>
                {this.props.isLoading && <ActivityIndicator color="white" />}
            </View>
        )
    }
}

export default ButtonForm