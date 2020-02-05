import React, { Component } from 'react';

import {
    View,
    TextInput,
    SafeAreaView
} from 'react-native'

import styles from './stylesheet'

type Props = {
    value?: string
    placeholder?: string,
    delay: number,
    isEnabled: boolean,
    onChangedText?: (text: string) => void
}

export default class Search extends Component<Props> {
    static defaultProps = {
        delay: 0,
        isEnabled: true,
        placeholder: "Pesquise por aqui"      
    }

    private timeOutAction?: number

    private changedText = (text: string) => {
        const {
            delay,
            onChangedText
        } = this.props

        if (this.timeOutAction) {
            clearTimeout(this.timeOutAction)
        }

        this.timeOutAction = setTimeout(() => {
            if (!onChangedText) { return }
            onChangedText(text)
        }, delay);
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
                        onChangeText={this.changedText}
                        editable={isEnabled}/>
                </SafeAreaView>
            </View>
        )
    }
}