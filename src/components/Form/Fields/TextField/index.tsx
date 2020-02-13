import React, { useState, useEffect } from 'react'

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
    error?: string,
    placeholder?: string,
    isEnabled?: boolean,
    isSecure?: boolean,
    keyboardType?: KeyboardTypeOptions,
    returnKeyType?: ReturnKeyTypeOptions,
    onChangeText?(value?: string): void,
    onBlur?(): void,
}

const TextField = (props: Props) => {

    return(
        <View style={styles.row}>
            {props.label && <Text style={styles.label}>{props.label}</Text>}
            <TextInput 
                style={styles.input}
                value={props.value}
                editable={props.isEnabled}
                secureTextEntry={props.isSecure}
                clearButtonMode="while-editing"
                keyboardType={props.keyboardType}
                returnKeyType={props.returnKeyType}
                autoCapitalize="none"
                onBlur={props.onBlur}
                onChangeText={props.onChangeText}
                placeholder={props.placeholder} />
            {props.error && <Text style={styles.error}>{props.error}</Text>}
        </View>
    )
    
}

export default TextField