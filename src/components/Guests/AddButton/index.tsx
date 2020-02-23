import React from 'react'
import {
    Animated,
    TouchableOpacity
} from 'react-native'

import styles from './styles'

type Props = {
    onPressed?(): void,
    children?: any
}

const AddButton = (props: Props) => {
    const animatedValue = new Animated.Value(1)

    const handlePressIn = () => {
        Animated.spring(animatedValue, {
            toValue: .8       
        }).start()
    }

    const handlePressOut = () => {
        Animated.spring(animatedValue, {
            toValue: 1,
            friction: 3,
            tension: 40
        }).start()
    }

    const animatedStyle = {
        transform: [{ scale: animatedValue }]
    }

    return (
        <Animated.View style={[styles.container, animatedStyle]}>
            <TouchableOpacity 
                style={styles.touchable}
                onPress={props.onPressed}
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}>
                {props.children}
            </TouchableOpacity>
        </Animated.View>
    )
}

export default AddButton