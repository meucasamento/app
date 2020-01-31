import React, { Component } from 'react';
import { View, SafeAreaView, Text, Image } from 'react-native';

import { Wedding } from './../../../../redux/types/wedding.types'

import styles from './stylesheet';

type Props = {
    wedding: Wedding
}

type State = {}

class Report extends Component<Props, State> {
    static defaultProps = {}

    render() {
        const {
            formattedDate,
            formattedDaysLeft
        } = this.props.wedding

        return (
            <SafeAreaView>
                <View style={ styles.container }>
                    <Image 
                    style={ styles.cover }
                    source={ require('../../../../assets/cover.jpg') }
                    resizeMode="contain"/>
                    <Text style={ styles.label }>Data do casamento</Text>
                    <Text style={ styles.date }>{ formattedDate }</Text>
                    <Text style={ styles.label }>Faltam apenas</Text>
                    <Text style={ styles.count }>{ formattedDaysLeft }</Text>
                </View>
            </SafeAreaView>
        )
    }
}

export default Report