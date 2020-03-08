import React from 'react';

import { 
    View, 
    Image,
    StyleProp,
    ViewStyle
} from 'react-native';

import { 
    WeddingState
} from '../../store/modules/wedding/wedding.types'

import Text from '../Text'
import styles from './style';

type Props = {
    style?: StyleProp<ViewStyle>,
    wedding: WeddingState
}

const WeddingBox = (props: Props) => {
    
    const {
        formattedDate,
        formattedDaysLeft
    } = props.wedding.wedding

    return (
        <View style={[styles.container, props.style]}>
            <Image 
            style={ styles.cover }
            source={ require('./../../assets/cover.jpg') }
            resizeMode="contain"/>
            <Text style={ styles.label }>Data do casamento</Text>
            <Text style={ styles.date }>{ formattedDate }</Text>
            <Text style={ styles.label }>Faltam apenas</Text>
            <Text style={ styles.count }>{ formattedDaysLeft }</Text>
        </View>
    )

}

export default WeddingBox