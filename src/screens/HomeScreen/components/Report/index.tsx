import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Dispatch, bindActionCreators } from 'redux';

import { 
    View, 
    SafeAreaView, 
    Text
} from 'react-native';

import { fetchGuests } from '../../../../redux/actions/guests.actions'

import { 
    GuestReport, GuestState
} from '../../../../redux/types/guests.types';

import styles from './stylesheet';

type Props = {
    guestState: GuestState,
    fetchGuests(): void
}
type State = {}

class Report extends Component<Props, State> {
    static defaultProps = {}

    componentDidMount() {
        this.props.fetchGuests()
    }

    render() {
        const { 
            report
        } = this.props.guestState

        return (
            <View style={styles.container}>
                <View style={styles.report_content_container}>
                    <View style={styles.report_content}>
                        <Text style={styles.label}>Total convidados</Text>
                        <Text style={styles.report_content_text}>{ report.total }</Text>
                    </View>
                </View>
                
                <View style={styles.report_content_container}>
                    <View style={styles.report_content}>
                        <Text style={styles.label}>Confirmados</Text>
                        <Text style={styles.report_content_text}>{ report.confirmed }</Text>
                    </View>
                </View>

                <View style={styles.report_content_container}>
                    <View style={styles.report_content}>
                        <Text style={styles.label}>Não confirmados</Text>
                        <Text style={styles.report_content_text}>{ report.unconfirmed }</Text>
                    </View>
                </View>

                <View style={styles.report_content_container}>
                    <View style={styles.report_content}>
                        <Text style={styles.label}>Padrinhos</Text>
                        <Text style={styles.report_content_text}>{ report.godfathers }</Text>
                    </View>
                </View>
            </View>
        )
    }
}

// export default Report

const mapStateToProps = (state: Props) => state

const mapDipatchToProps = (dispatch: Dispatch) => ({
    fetchGuests: bindActionCreators(fetchGuests, dispatch)
})

export default connect(
    mapStateToProps,
    mapDipatchToProps
)(Report)