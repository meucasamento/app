import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Dispatch } from 'redux';

import { 
    View, 
    Image
} from 'react-native';

import { 
    WeddingState
} from '../../store/modules/wedding/wedding.types'

import Text from '../Text'
import styles from './style';

type Props = {
    wedding: WeddingState
}

type State = {}

class WeddingBox extends Component<Props, State> {
    static defaultProps = {}

    render() {
        const {
            formattedDate,
            formattedDaysLeft
        } = this.props.wedding.wedding

        return (
            <View style={ styles.container }>
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
}

const mapStateToProps = (state: Props) => state

const mapDipatchToProps = (dispatch: Dispatch) => ({})

export default connect(
    mapStateToProps,
    mapDipatchToProps
)(WeddingBox)