import React, { Component, Children } from 'react'

import { 
    Text as RNText,
    TextStyle
} from 'react-native'

type Props = {
    style?: TextStyle,
    children?: any
}

type State = {}

export default class Text extends Component<Props, State> {
    render() {
        const { 
            style,
            children
        } = this.props

        return(
            <RNText style={{
                fontSize: 15,
                ...style
                }}>
                {children}
            </RNText>
        )
    }
}
