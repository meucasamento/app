import React, { Component, useEffect } from 'react'

import {
    TextInput,
    View,
    KeyboardTypeOptions,
    ReturnKeyTypeOptions
} from 'react-native'

import Text from '../../../Text'

import styles from './style'
import Rule from '../../Rules/rule.interface'

type Props = {
    label?: string,
    value?: string,
    placeholder?: string,
    isEnabled?: boolean,
    isSecure?: boolean,
    keyboardType?: KeyboardTypeOptions,
    returnKeyType?: ReturnKeyTypeOptions,
    rules?: Rule[]
    onChangeText?(value?: string): void
}

type State = {
    error?: Error
}

class TextInputForm extends Component<Props, State> {
    
    private updateValue = (text: string) => {
        const rules: Rule[] = this.props.rules ?? []
        const promises = rules.map(rule => rule.validate(text))

        Promise.all(promises)
            .then(() => this.setState({error: null}))
            .catch(error => this.setState({error}))
    }

    render() {
        const { 
            label,
            isEnabled,
            isSecure,
            keyboardType,
            returnKeyType,
            value,
            placeholder
        } = this.props

        const error = this.state?.error

        return(
            <View style={styles.row}>
                {label && <Text style={styles.label}>{label}</Text>}
                <TextInput 
                    style={styles.input}
                    value={value}
                    editable={isEnabled}
                    secureTextEntry={isSecure}
                    clearButtonMode="while-editing"
                    keyboardType={keyboardType}
                    returnKeyType={returnKeyType}
                    autoCapitalize="none"
                    onChangeText={this.updateValue}
                    placeholder={placeholder} />
                {error && <Text style={styles.error}>{error.message}</Text>}
            </View>
        )
    }
    
}

export default TextInputForm