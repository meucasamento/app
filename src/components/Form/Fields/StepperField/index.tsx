import React from 'react'

import {
    View,
    TouchableOpacity
} from 'react-native'

import Text from '../../../Text'
import styles from './styles'

type Props = {
    label: string,
    value: number,
    error?: Error,
    isVisible?: boolean,
    isEnabled?: boolean,
    minValue?: number,
    maxValue?: number,
    onChangeValue: (value: number) => void
}

const StepperField = (props: Props) => {
    
    const handleOnPressAdd = () => {
        const nextValue = props.value + 1
        if (nextValue > props.maxValue) return
        props.onChangeValue(nextValue)
    }

    const handleOnPressSubtract = () => {
        const nextValue = props.value - 1
        if (nextValue < props.minValue) return
        props.onChangeValue(nextValue)
    }

    return (
        <>
        { (props.isVisible ?? true) &&
        <View style={styles.row}>
            <Text style={styles.label}>{props.label}</Text>
            <View style={styles.stepper}>
                <TouchableOpacity 
                    style={styles.stepperButton}
                    disabled={!props.isEnabled}
                    onPress={() => handleOnPressSubtract()}>
                    <Text style={styles.stepperButtonLabel}>-</Text>
                </TouchableOpacity>
                <Text style={styles.stepperLabel}>{props.value}</Text>
                <TouchableOpacity 
                    style={styles.stepperButton}
                    disabled={!props.isEnabled}
                    onPress={() => handleOnPressAdd()}>
                    <Text style={styles.stepperButtonLabel}>+</Text>
                </TouchableOpacity>
            </View>
            {props.error && <Text style={styles.error}>{props.error}</Text>}
        </View>
        }
        </>
    )
}

export default StepperField