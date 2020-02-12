import React, { Component } from 'react'

import {
    TextInput,
    View
} from 'react-native'

import Text from '../../Text'

import styles from './style'

type Props = {
    label?: string,
    error?: string,
    placeholder?: string,
    isEnabled?: boolean,
    onChangeText?(value?: string): void
}

type State = {
    value?: string
}

class TextInputForm extends Component<Props, State> {
    render() {
        const { 
            label,
            error
        } = this.props

        return(
            <View style={styles.row}>
                {label && <Text style={styles.label}>{label}</Text>}
                <TextInput 
                    style={styles.input}
                    value={this.state?.value}
                    editable={this.props.isEnabled ?? true}
                    autoCapitalize="none"
                    onChangeText={value => this.props.onChangeText(value)}
                    placeholder={this.props.placeholder} />
                {error && <Text style={styles.error}>{error}</Text>}
            </View>
        )
    }
}

export default TextInputForm