import React from 'react';
import { connect } from 'react-redux'
import { Dispatch } from 'redux';

import { 
    View, 
    ScrollView,
    StyleProp,
    ViewStyle
} from 'react-native';

import {  GuestState } from '../../store/modules/guest/guest.types';

import Text from '../Text'
import styles from './style';

type Props = {
    guest: GuestState,
    style?: StyleProp<ViewStyle>
}

const Report = (props: Props) => {

    const { 
        report
    } = props.guest

    return (
        <View style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.scrollView}
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <View style={styles.report_content_container}>
                    <View style={styles.report_content}>
                        <Text style={styles.label}>Total de pessoas</Text>
                        <Text style={styles.value}>{ report.confirmed }</Text>
                    </View>
                </View>

                <View style={styles.report_content_container}>
                    <View style={styles.report_content}>
                        <Text style={styles.label}>Convidados Jenifer</Text>
                        <Text style={styles.value}>{ report.confirmed }</Text>
                    </View>
                </View>

                <View style={styles.report_content_container}>
                    <View style={styles.report_content}>
                        <Text style={styles.label}>Convidados Adriano</Text>
                        <Text style={styles.value}>{ report.confirmed }</Text>
                    </View>
                </View>

                <View style={styles.report_content_container}>
                    <View style={styles.report_content}>
                        <Text style={styles.label}>Padrinhos Jenifer</Text>
                        <Text style={styles.value}>{ report.confirmed }</Text>
                    </View>
                </View>

                <View style={styles.report_content_container}>
                    <View style={styles.report_content}>
                        <Text style={styles.label}>Padrinhos Adriano</Text>
                        <Text style={styles.value}>{ report.confirmed }</Text>
                    </View>
                </View>

                <View style={styles.report_content_container}>
                    <View style={styles.report_content}>
                        <Text style={styles.label}>Total de convites</Text>
                        <Text style={styles.value}>{ report.total }</Text>
                    </View>
                </View>

                <View style={styles.report_content_container}>
                    <View style={styles.report_content}>
                        <Text style={styles.label}>Convites entregues</Text>
                        <Text style={styles.value}>{ report.unconfirmed }</Text>
                    </View>
                </View>

                <View style={styles.report_content_container}>
                    <View style={styles.report_content}>
                        <Text style={styles.label}>Convites não entregues</Text>
                        <Text style={styles.value}>{ report.godfathers }</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )

}

const mapStateToProps = (state: Props) => state

const mapDipatchToProps = (dispatch: Dispatch) => ({})

export default connect(
    mapStateToProps,
    mapDipatchToProps
)(Report)