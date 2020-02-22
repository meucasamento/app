import React from 'react'

import {
    View,
    SafeAreaView
} from 'react-native'

import Text from './../../../components/Text'

import { SectionListData } from 'react-native'
import Guest from '../../../models/guest.model'
import styles from './styles'

type Props = {
    section: SectionListData<Guest>
}

const GuestSection = (props: Props) => {
    return (
        <View style={styles.section}>
            <SafeAreaView>
                <Text style={styles.sectionText}> {props.section.title}</Text>
            </SafeAreaView>
        </View>
    )
}

export default GuestSection