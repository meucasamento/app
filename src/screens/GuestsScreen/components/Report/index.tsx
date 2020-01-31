import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Dispatch } from 'redux';

import { 
    View, 
    SafeAreaView, 
    Text
} from 'react-native';

import { 
    GuestReport, GuestState
} from '../../../../redux/types/guests.types';

import styles from './stylesheet';

type Props = {
    guestState: GuestState
}
type State = {}

class Report extends Component<Props, State> {
    static defaultProps = {}

    render() {
        const { 
            report
        } = this.props.guestState

        return (
            <SafeAreaView>
                <View style={styles.container}>

                    <View style={styles.report_content_container}>
                        <View style={styles.report_content}>
                            <Text>Total convidados</Text>
                            <Text style={styles.report_content_text}>{ report.total }</Text>
                        </View>
                    </View>
                    
                    <View style={styles.report_content_container}>
                        <View style={styles.report_content}>
                            <Text>Confirmados</Text>
                            <Text style={styles.report_content_text}>{ report.confirmed }</Text>
                        </View>
                    </View>

                    <View style={styles.report_content_container}>
                        <View style={styles.report_content}>
                            <Text>Não confirmados</Text>
                            <Text style={styles.report_content_text}>{ report.unconfirmed }</Text>
                        </View>
                    </View>

                    <View style={styles.report_content_container}>
                        <View style={styles.report_content}>
                            <Text>Padrinhos</Text>
                            <Text style={styles.report_content_text}>{ report.godfathers }</Text>
                        </View>
                    </View>

                </View>
            </SafeAreaView>
        )
    }
}

// export default Report

const mapStateToProps = (state: Props) => state

const mapDipatchToProps = (dispatch: Dispatch) => ({})

export default connect(
    mapStateToProps,
    mapDipatchToProps
)(Report)