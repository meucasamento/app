import React from 'react';

import { 
    View, 
    ScrollView,
    ActivityIndicator
} from 'react-native';

import Text from '../Text'
import styles from './style';
import Report from '../../models/report.model';

type Props = {
    report: Report,
    isLoading?: boolean
}

type Info = {
    title: string,
    value: number
}

const ReportBox = (props: Props) => {

    const {
        godfathers,
        guests,
        invitations
    } = props.report

    const infos: Info[] = [
        { title: "Total de convidados", value: guests.total },
        { title: "Convidados Jenifer", value: guests.fiancee },
        { title: "Convidados Adriano", value: guests.engaged },
        { title: "Padrinhos Jenifer", value: godfathers.fiancee },
        { title: "Padrinhos Adriano", value: godfathers.engaged },
        { title: "Total de convites", value: invitations.total },
        { title: "Convites entregues", value: invitations.delivered },
        { title: "Convites não engregues", value: invitations.undelivered }
    ]

    const infoBox = (info: Info, index: number) => (
        <View 
            style={styles.report_content_container}
            key={index}>
            <View style={styles.report_content}>
                <Text style={styles.label}>{ info.title }</Text>
                {props.isLoading && <ActivityIndicator style={styles.loader} />}
                {!props.isLoading && <Text style={styles.value}>{ info.value }</Text>}
            </View>
        </View>
    )

    return (
        <View style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.scrollView}
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                { infos.map((info, index) => infoBox(info, index)) }
            </ScrollView>
        </View>
    )

}

export default ReportBox