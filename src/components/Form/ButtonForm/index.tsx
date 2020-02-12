import React, { Component } from 'react'

import {
    TouchableOpacity
} from 'react-native'

import Text from './../../Text'

import styles from './style'

type Props = {
    text: string,
    onPress(): void
}

class ButtonForm extends Component<Props> {
    render() {
        return(
            <>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => this.props.onPress()}>
                    <Text style={styles.text}>{this.props.text}</Text>
                </TouchableOpacity>
            </>
        )
    }
}

export default ButtonForm