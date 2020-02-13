import React, { PureComponent } from 'react'

import {
    TextInput,
    View,
    KeyboardTypeOptions,
    ReturnKeyTypeOptions
} from 'react-native'

import Text from '../../../Text'

import styles from './style'

type Props = {
    label?: string,
    value?: string,
    error?: Error,
    placeholder?: string,
    isEnabled?: boolean,
    isSecure?: boolean,
    keyboardType?: KeyboardTypeOptions,
    returnKeyType?: ReturnKeyTypeOptions,
    onChangeText?(value?: string): void,
}

type State = {}

class TextInputForm extends PureComponent<Props, State> {

    render() {
        const { 
            label,
            isEnabled,
            isSecure,
            keyboardType,
            returnKeyType,
            value,
            placeholder,
            onChangeText,
            error
        } = this.props

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
                    onChangeText={onChangeText}
                    placeholder={placeholder} />
                {error && <Text style={styles.error}>{error.message}</Text>}
            </View>
        )
    }
    
}

export default TextInputForm