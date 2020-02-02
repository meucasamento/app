import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Dispatch } from 'redux';

import { 
    View, 
    Text, 
    Image
} from 'react-native';

import { 
    WeddingState
} from '../../../../redux/types/wedding.types'

import styles from './stylesheet';

type Props = {
    weddingState: WeddingState
}

type State = {}

class Report extends Component<Props, State> {
    static defaultProps = {}

    render() {
        const {
            formattedDate,
            formattedDaysLeft
        } = this.props.weddingState.wedding

        return (
            <View style={ styles.container }>
                <Image 
                style={ styles.cover }
                source={ require('./../../../../../assets/cover.jpg') }
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
)(Report)