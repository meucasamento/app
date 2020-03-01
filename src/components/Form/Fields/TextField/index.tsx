import React, { useState, useEffect } from 'react'

import {
    View,
    TextInput,
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
    isVisible?: boolean,
    isSecure?: boolean,
    keyboardType?: KeyboardTypeOptions,
    returnKeyType?: ReturnKeyTypeOptions,
    autoFocus?: boolean,
    onChangeText?(value?: string): void,
    onBlur?(): void,
    onSubmitEditing?(): void
}

const TextField = (props: Props) => (
    <>
    {/* { (props.isVisible ?? true) && */}
    <View style={styles.row}>
    {props.label && <Text style={styles.label}>{props.label}</Text>}
    <TextInput 
        style={styles.input}
        value={props.value}
        placeholder={props.placeholder}
        editable={props.isEnabled}
        secureTextEntry={props.isSecure}
        autoFocus={props.autoFocus}
        clearButtonMode="while-editing"
        keyboardType={props.keyboardType}
        returnKeyType={props.returnKeyType}
        autoCapitalize="none"
        onBlur={props.onBlur}
        onChangeText={props.onChangeText} 
        onSubmitEditing={props.onSubmitEditing}/>
        {props.error && <Text style={styles.error}>{props.error}</Text>}
    </View>
    {/* } */}
    </>
)

export default TextField