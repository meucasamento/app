import React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux';

import { 
    View, 
    ScrollView
} from 'react-native'

import Report from '../../components/Report'
import WeedingBox from '../../components/WeddingBox'
import { WeddingState } from '../../store/modules/wedding/wedding.types';
import styles from './style'

type Props = {
    wedding: WeddingState
}

const HomePage = (props: Props) => {
    
    return(
        <ScrollView 
            contentContainerStyle={styles.scrollView}>
            <View style={styles.container}>
                <WeedingBox 
                    style={styles.header}
                    wedding={props.wedding} />
                <Report/>
            </View>
        </ScrollView>
    )

}

const mapStateToProps = (state: Props) => state

const mapDipatchToProps = (dispatch: Dispatch) => ({})

export default connect(
    mapStateToProps,
    mapDipatchToProps
)(HomePage)