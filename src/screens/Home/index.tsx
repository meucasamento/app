import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux';

import { 
    View, 
    ScrollView
} from 'react-native'

import ReportBox from '../../components/ReportBox'
import WeedingBox from '../../components/WeddingBox'
import { WeddingState } from '../../store/modules/wedding/wedding.types';
import { ReportState } from '../../store/modules/report/report.types';
import { fetch } from './../../store/modules/report/report.actions'
import styles from './style'

type Props = {
    weddingState: WeddingState,
    reportState: ReportState,
    fetch(): void
}

const HomePage = (props: Props) => {
    
    useEffect(() => {
        props.fetch()
    }, [])

    return(
        <ScrollView 
            contentContainerStyle={styles.scrollView}>
            <View style={styles.container}>
                <WeedingBox 
                    style={styles.header}
                    wedding={props.weddingState} />
                <ReportBox 
                    report={props.reportState.report}
                    isLoading={props.reportState.isLoading} />
            </View>
        </ScrollView>
    )

}

const mapStateToProps = (state: Props) => state

const mapDipatchToProps = (dispatch: Dispatch) => ({
    fetch: () => dispatch(fetch())
})

export default connect(
    mapStateToProps,
    mapDipatchToProps
)(HomePage)