import React, { useEffect, useState } from 'react';

import { 
    View, 
    ScrollView,
    ActivityIndicator,
    TouchableOpacity,
    Alert,

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
    value: number,
    description: string
}

const ReportBox = (props: Props) => {

    const {
        godfathers,
        guests,
        invitations
    } = props.report

    const infos: Info[] = [
        { title: "Total de convidados", value: guests.total, description: 'Contagem de pessoas, incluindo acompanhantes e familiares' },
        { title: "Convidados Jenifer", value: guests.fiancee, description: 'Contagem de convidados da noiva, incluindo acompanhantes e familiares' },
        { title: "Convidados Adriano", value: guests.engaged, description: 'Contagem de convidados do noivo, incluindo acompanhantes e familiares' },
        { title: "Padrinhos Jenifer", value: godfathers.fiancee, description: 'Contagem de padrinhos e madrinhas da noiva, incluindo acompanhantes' },
        { title: "Padrinhos Adriano", value: godfathers.engaged, description: 'Contagem de padrinhos e madrinhas do noivo, incluindo acompanhantes' },
        { title: "Total de convites", value: invitations.total, description: 'Total único de convites' },
        { title: "Convites entregues", value: invitations.delivered, description: 'Contagem total de convites que já foram entregues' },
        { title: "Convites não engregues", value: invitations.undelivered, description: 'Contagem total de convites que ainda não foram entregues' }
    ]

    const renderInfoBox = (info: Info, index: number) => {
        return (
            <TouchableOpacity 
                activeOpacity={0.6}
                onPress={() => Alert.alert(info.title, info.description)}>
                <View 
                    style={styles.report_content_container}
                    key={index}>
                    <View style={styles.report_content}>
                        <Text style={styles.label}>{ info.title }</Text>
                        {props.isLoading && <ActivityIndicator style={styles.loader} />}
                        {!props.isLoading && <Text style={styles.value}>{ info.value }</Text>}
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    const renderReportItens = () => infos.map((info, index) => renderInfoBox(info, index))

    return (
        <View style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.scrollView}
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                { renderReportItens() }
            </ScrollView>
        </View>
    )

}

export default ReportBox