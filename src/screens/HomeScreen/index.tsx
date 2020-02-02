import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { 
    View
} from 'react-native'

import Report from './components/Report'
import MarriageBox from './components/MarriageBox'

import styles from './stylesheet'

type Props = {}

class HomeScreen extends Component<Props> {
    static navigationOptions = {
        title: 'Casamento'
    }

    render() {
        return(
            <View style={styles.container}>
                <MarriageBox/>
                <Report/>
            </View>
        )
    }
}

const mapStateToProps = (state: Props) => state

const mapDipatchToProps = (dispatch: Dispatch) => ({})

export default connect(
    mapStateToProps,
    mapDipatchToProps
)(HomeScreen)