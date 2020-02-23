import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Dispatch } from 'redux';

import { 
    View, 
} from 'react-native';

import {  GuestState } from '../../store/modules/guest/guest.types';

import Text from '../Text'
import styles from './style';

type Props = {
    guest: GuestState
}

type State = {}

class Report extends Component<Props, State> {

    render() {
        const { 
            report
        } = this.props.guest

        return (
            <View style={styles.container}>
                <View style={styles.report_content_container}>
                    <View style={styles.report_content}>
                        <Text style={styles.label}>Total convidados</Text>
                        <Text style={styles.label}>{ report.total }</Text>
                    </View>
                </View>
                
                <View style={styles.report_content_container}>
                    <View style={styles.report_content}>
                        <Text style={styles.label}>Confirmados</Text>
                        <Text style={styles.label}>{ report.confirmed }</Text>
                    </View>
                </View>

                <View style={styles.report_content_container}>
                    <View style={styles.report_content}>
                        <Text style={styles.label}>Não confirmados</Text>
                        <Text style={styles.label}>{ report.unconfirmed }</Text>
                    </View>
                </View>

                <View style={styles.report_content_container}>
                    <View style={styles.report_content}>
                        <Text style={styles.label}>Padrinhos</Text>
                        <Text style={styles.label}>{ report.godfathers }</Text>
                    </View>
                </View>
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