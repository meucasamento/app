import React, { useState } from 'react';

import { 
    View,
    TouchableOpacity
} from 'react-native';

import Text from '../../../Text'

import styles from './styles';

type Value<T> = {
    label: string,
    value: T
}

type Props<T> = {
    label?: string,
    isVisible?: boolean,
    error?: Error,
    value?: T,
    data?: Value<T>[],
    onSelectedValue?(value: T): void
}

export default function SegmentedField<T>(props: Props<T>) {
    return (
        <>
        { (props.isVisible ?? true) &&
        <View style={styles.row}>
            {props.label && <Text style={styles.label}>{props.label}</Text>}
            <View style={styles.segmented}>
                {props.data.map((prop, key) => {
                    const isSelected = prop.value === props.value
                    return (
                        <TouchableOpacity 
                            key={key}
                            style={[styles.button, isSelected && styles.buttonSelected]}
                            onPress={() => props.onSelectedValue && props.onSelectedValue(prop.value)}>
                            <Text style={[styles.buttonText, isSelected && styles.buttonSelectedText]}>
                                {prop.label}
                            </Text>
                        </TouchableOpacity>
                    )
                })}
            </View>
            {props.error && <Text style={styles.error}>{props.error}</Text>}
        </View>
        }
        </>
    )
}
