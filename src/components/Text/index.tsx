import React, { Component } from 'react'

import { 
    Text as RNText,
    TextStyle,
    StyleProp
} from 'react-native'

type Props = {
    style?: StyleProp<TextStyle>,
    children?: any
}

const Text = (props: Props) => (
    <RNText style={[{ fontSize: 15 }, props.style]}>
        {props.children}
    </RNText>
)

export default Text
