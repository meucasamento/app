import React, { Component } from 'react'

import { 
    Text as RNText,
    StyleSheet,
    TextStyle
} from 'react-native'

type Props = {
    style?: TextStyle,
    children?: any
}
type State = {}

export default class Text extends Component<Props, State> {
    constructor(props: Readonly<Props>) {
        super(props)
    }

    render() {
        const { 
            style,
            children
        } = this.props

        return(
            <RNText style={{
                ...style,
                fontFamily: "Montserrat"
                }}>
                {children}
            </RNText>
        )
    }
}

const styles = StyleSheet.create({
    defaultStyle: {}
})
