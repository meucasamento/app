import React, { Component } from 'react'

import {
    TouchableHighlight
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
                <TouchableHighlight 
                    style={styles.button}
                    underlayColor="none"
                    onPress={() => this.props.onPress()}>
                    <Text style={styles.text}>{this.props.text}</Text>
                </TouchableHighlight>
            </>
        )
    }
}

export default ButtonForm