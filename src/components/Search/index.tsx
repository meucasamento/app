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
    placeholder?: string
}

export default class Search extends Component<Props> {
    static defaultProps = {
        placeholder: "Pesquise por aqui"      
    }

    render() {
        const {
            value,
            placeholder
        } = this.props

        return(
            <View style={styles.container}>
                <SafeAreaView>
                    <TextInput 
                        value={value}
                        style={styles.textInput}
                        placeholder={placeholder}
                        clearButtonMode="while-editing"
                        returnKeyType="search"/>
                </SafeAreaView>
            </View>
        )
    }
}