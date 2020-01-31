import React, { Component } from 'react';
import { View, SafeAreaView, Text } from 'react-native';

import styles from './stylesheet';
import { Guest, GuestReport } from '../../../../redux/types/guests.types';

type Props = {
    report: GuestReport
}
type State = {}

class Report extends Component<Props, State> {
    render() {
        const { 
            report
        } = this.props

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

export default Report