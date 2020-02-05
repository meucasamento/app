import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/EvilIcons'

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
    onEndEditing?: (text?: string) => void
}

export default class Search extends Component<Props> {
    static defaultProps = {
        delay: 0,
        isEnabled: true,
        placeholder: "Pesquise por aqui"      
    }

    private currentValue?: string = this.props.value
    private timeOutAction?: number

    private changedText = (text: string) => {
        const {
            delay,
            onChangedText
        } = this.props

        if (this.timeOutAction) {
            clearTimeout(this.timeOutAction)
        }

        this.currentValue = text
        
        this.timeOutAction = setTimeout(() => {
            if (!onChangedText) { return }
            onChangedText(text)
        }, delay);
    }

    render() {
        const {
            value,
            placeholder,
            isEnabled,
            onEndEditing
        } = this.props

        return(
            <SafeAreaView>
                <View style={styles.container}>
                    <View style={styles.content}>
                        <Icon 
                            style={styles.icon}
                            name="search" 
                            size={22}/>
                        <TextInput 
                            value={value}
                            style={styles.textInput}
                            placeholder={placeholder}
                            clearButtonMode="while-editing"
                            returnKeyType="done"
                            autoCorrect={false}
                            onChangeText={this.changedText}
                            onEndEditing={() => {
                                if (!onEndEditing) { return }
                                onEndEditing(this.currentValue)
                            }}
                            editable={isEnabled}/>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}