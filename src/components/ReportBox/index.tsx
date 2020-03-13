import React from 'react';

import { 
    View, 
    ScrollView
} from 'react-native';

import Text from '../Text'
import styles from './style';
import Report from '../../models/report.model';

type Props = {
    report: Report
}

const ReportBox = (props: Props) => {

    return (
        <View style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.scrollView}
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <View style={styles.report_content_container}>
                    <View style={styles.report_content}>
                        <Text style={styles.label}>Total de convidados</Text>
                        <Text style={styles.value}>{ props.report.guests.total }</Text>
                    </View>
                </View>

                <View style={styles.report_content_container}>
                    <View style={styles.report_content}>
                        <Text style={styles.label}>Convidados Jenifer</Text>
                        <Text style={styles.value}>{ props.report.guests.fiancee }</Text>
                    </View>
                </View>

                <View style={styles.report_content_container}>
                    <View style={styles.report_content}>
                        <Text style={styles.label}>Convidados Adriano</Text>
                        <Text style={styles.value}>{ props.report.guests.engaged }</Text>
                    </View>
                </View>

                <View style={styles.report_content_container}>
                    <View style={styles.report_content}>
                        <Text style={styles.label}>Padrinhos Jenifer</Text>
                        <Text style={styles.value}>{ props.report.godfathers.fiancee }</Text>
                    </View>
                </View>

                <View style={styles.report_content_container}>
                    <View style={styles.report_content}>
                        <Text style={styles.label}>Padrinhos Adriano</Text>
                        <Text style={styles.value}>{ props.report.godfathers.engaged }</Text>
                    </View>
                </View>

                <View style={styles.report_content_container}>
                    <View style={styles.report_content}>
                        <Text style={styles.label}>Total de convites</Text>
                        <Text style={styles.value}>{ props.report.invitations.total }</Text>
                    </View>
                </View>

                <View style={styles.report_content_container}>
                    <View style={styles.report_content}>
                        <Text style={styles.label}>Convites entregues</Text>
                        <Text style={styles.value}>{ props.report.invitations.delivered }</Text>
                    </View>
                </View>

                <View style={styles.report_content_container}>
                    <View style={styles.report_content}>
                        <Text style={styles.label}>Convites não entregues</Text>
                        <Text style={styles.value}>{ props.report.invitations.undelivered }</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )

}

export default ReportBox