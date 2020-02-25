import React, { useState } from 'react'

import {
    View,
    Modal,
    TouchableHighlight
} from 'react-native'

import Text from '../../Text'

type Props = {

}

const GuestModal = (props: Props) => {

    const [visible, setVisible] = useState(false)

    return (
        <View>
            <Modal
            animationType="slide"
            visible={visible}>
            <View style={{padding: 40, backgroundColor: "red"}}>
                <View>
                <Text>Hello World!</Text>

                <TouchableHighlight
                    onPress={() => {
                    setVisible(!visible)
                    }}>
                    <Text>Hide Modal</Text>
                </TouchableHighlight>
                </View>
            </View>
            </Modal>

            <TouchableHighlight
            onPress={() => {
                setVisible(true)
            }}>
            <Text>Show Modal</Text>
            </TouchableHighlight>
        </View>
    )
}

export default GuestModal