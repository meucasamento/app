import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import {
    SafeAreaView,
    TouchableOpacity,
    View,
    Image
} from 'react-native'

import Guest from '../../../models/guest.model'

import Text from './../../../components/Text'
import styles from './styles'

type Props = {
    guest: Guest,
    onPress?(guest: Guest): void
}

const renderIcons = (guest: Guest) => {
    const status = guest.invitationDelivered

    const renderGuestsIcon = () => {
        let name = "user-alt"
        
        switch (guest.peopleCount) {
            case 0:
                name = "user"
                break
            case 1: 
                name = "user-alt"
                break
            case 2: 
                name = "user-friends"
                break
        }

        return <Icon name={name}/>
    }

    return <View style={styles.icons}>
        <View style={styles.icon}>
            {renderGuestsIcon()}
            <Text style={styles.iconLabel}>{guest.peopleCount}</Text>
        </View>
        <View style={[styles.icon, status && styles.confirmed]}>
            <Image 
                style={[styles.iconImage, status && styles.imageConfirmed]}
                source={require('./../../../assets/icons/invitation_icon.png')}
                resizeMode="contain"/>
        </View>
    </View>
}

export const GuestRow = (props: Props) => (
    <SafeAreaView>
        <TouchableOpacity
            onPress={() => props.onPress && props.onPress(props.guest)}>
            <View style={styles.row}>
                <View style={styles.leftContainer}>
                    <Text>
                        {props.guest.name} 
                        {props.guest.hasCompanion && ` e ${props.guest.companion}`} 
                        {props.guest.includeFamily && " & Família"}
                    </Text>
                </View>
                <View style={styles.rightContainer}>
                    {renderIcons(props.guest)}
                </View>
            </View>
        </TouchableOpacity>
    </SafeAreaView>
)

type EmptyProps = {
    message: string
}

export const EmptyGuestRow = (props: EmptyProps) => (
    <View style={styles.row}>
        <Text style={styles.emptyMessage}>{props.message}</Text>
    </View>
)