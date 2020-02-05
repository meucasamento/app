import React, { Component } from 'react';

import {
    View,
    Text,
    TextInput,
    SafeAreaView
} from 'react-native'

import styles from './stylesheet'

type Props = {
    value?: string
    placeholder?: string,
    isEnabled: boolean,
    onChangedText?: (text: string) => void
}

export default class Search extends Component<Props> {
    static defaultProps = {
        isEnabled: true,
        placeholder: "Pesquise por aqui"      
    }

    render() {
        const {
            value,
            placeholder,
            onChangedText,
            isEnabled
        } = this.props

        return(
            <View style={styles.container}>
                <SafeAreaView>
                    <TextInput 
                        value={value}
                        style={styles.textInput}
                        placeholder={placeholder}
                        clearButtonMode="while-editing"
                        returnKeyType="done"
                        onChangeText={onChangedText}
                        editable={isEnabled}/>
                </SafeAreaView>
            </View>
        )
    }
}