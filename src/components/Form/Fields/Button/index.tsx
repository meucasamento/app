import React, { useState } from 'react'
import { ActivityIndicator } from 'react-native'

import {
    TouchableOpacity,
    View,
    Animated
} from 'react-native'

import Text from '../../../Text'

import styles from './style'

type Props = {
    text: string,
    isLoading?: boolean,
    style?: any,
    onPress(): void
}

const Button = (props: Props) => {

    const animatedValue = new Animated.Value(1)

    const handleOnPress = () => {
        props.onPress()
    }

    const handleOnPressIn = () => {
        Animated.spring(animatedValue, {
            toValue: .9,
            useNativeDriver: true
        }).start()
    }

    const handleOnPressOut = () => {
        Animated.spring(animatedValue, {
            toValue: 1,
            friction: 3,
            tension: 40,
            useNativeDriver: true
        }).start()
    }

    const animatedStyle = {
        transform: [{ scale: animatedValue }]
    }

    return(
        <Animated.View 
            style={[styles.container, animatedStyle]} >
            <TouchableOpacity 
                style={styles.tappedArea}
                disabled={props.isLoading}
                onPress={handleOnPress}
                onPressIn={handleOnPressIn}
                onPressOut={handleOnPressOut}>
                {!props.isLoading && <Text style={styles.text}>{props.text}</Text>}
                {props.isLoading && <ActivityIndicator color="white" />}
            </TouchableOpacity>
        </Animated.View>
    )
}

export default Button