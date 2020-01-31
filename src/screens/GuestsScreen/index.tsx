import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Dispatch, bindActionCreators } from 'redux'
import { NavigationStackProp } from 'react-navigation-stack';

import { 
    View, 
    Text, 
    Switch, 
    SafeAreaView,
    SectionList,
    TouchableHighlight,
    SectionListData,
    Alert
} from 'react-native';

import { GuestState, Guest } from '../../redux/types/guests.types'
import { WeddingState } from './../../redux/types/wedding.types'
import { fetchGuests, updateGuest } from '../../redux/actions/guests.actions'

import Report from './components/Report'
import MarriageBox from './components/MarriageBox'

import styles from './stylesheet'

type Props = {
    navigation: NavigationStackProp,
    guestState: GuestState,
    weddingState: WeddingState,
    fetchGuests(): void,
    updateGuest(guest: Guest, status: boolean): void
}

type State = {}

class GuestScreen extends Component<Props, State> {
    static navigationOptions = {
        title: 'Convidados'
    }

    componentDidMount() {
        this.props.fetchGuests()
    }

    private addGuest = () => {
        this.props.navigation.navigate('Profile')
    }

    private toggleGuestConfirmation = (item: Guest, status: boolean) => {
        this.props.updateGuest(item, status)
    }

    private headerView = () => (
        <View style={styles.header}>
            <MarriageBox/>
            <Report/>
        </View>
    )

    private sectionView = (section: SectionListData<Guest>) => (
        <View style={ styles.section }>
            <SafeAreaView>
                <Text style={ styles.sectionText }> { section.title } </Text>
            </SafeAreaView>
        </View>
    )

    private rowView = (guest: Guest) => (
        <SafeAreaView>
            <TouchableHighlight
                onPress={ () => this.toggleGuestConfirmation(guest, !guest.isConfirmed) }
                underlayColor="gray">
                <View style={ styles.row }>
                    <View style={ styles.leftContainer }>
                        <Text>{ guest.name }</Text>
                    </View>
                    <View style={ styles.rightContainer }>
                        <Switch
                            value={ guest.isConfirmed }
                            onValueChange={ status => this.toggleGuestConfirmation(guest, status) }/>
                    </View>
                </View>
            </TouchableHighlight>
        </SafeAreaView>
    )

    private emptyRow = () => (
        <Text>sem conteúdo</Text>
    )

    private separator = () => (
        <View style={ styles.separator }></View>
    )

    render() {
        const { 
            guests
        } = this.props.guestState

        const sections = [
            {
                title: "Padrinhos & Madrinhas",
                data: guests.filter(guest => guest.isGodfather)
            },
            {
                title: "Convidados",
                data: guests.filter(guest => !guest.isGodfather)
            },
        ]
    
        return(
            <SectionList
                style={styles.list}
                ListHeaderComponent={ this.headerView }
                sections={ sections }
                renderSectionHeader={ ({ section }) => this.sectionView(section) }
                renderItem={ ({ item }) => this.rowView(item) }
                ListEmptyComponent={this.emptyRow}
                ItemSeparatorComponent={ this.separator }
                showsVerticalScrollIndicator={false}/>
        )
    }

}

const mapStateToProps = (state: Props) => state

const mapDipatchToProps = (dispatch: Dispatch) => ({
    fetchGuests: bindActionCreators(fetchGuests, dispatch),
    updateGuest: (guest: Guest, status: boolean) => dispatch(updateGuest(guest, status))
})

export default connect(
    mapStateToProps,
    mapDipatchToProps
)(GuestScreen)