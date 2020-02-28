import React from 'react'
import { View } from 'react-native'

type Props = {
    height?: number 
}

const Space = (props: Props) => (
    <View style={{ height: props.height }} />
)

Space.defaultProps = {
    height: 8
}

export default Space