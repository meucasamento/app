import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Dispatch, bindActionCreators } from 'redux'

import { 
    View, 
    Switch, 
    SafeAreaView,
    SectionList,
    TouchableHighlight,
    SectionListData
} from 'react-native';

import KeyboardSpacer from 'react-native-keyboard-spacer'

import { GuestState, Guest } from '../../redux/types/guests.types'
import { WeddingState } from './../../redux/types/wedding.types'
import { searchGuests, updateGuest } from '../../redux/actions/guests.actions'

import Text from './../../components/Text'
import Search from '../../components/Search';

import styles from './stylesheet'

type Props = {
    guestState: GuestState,
    weddingState: WeddingState,
    searchGuests(query?: string): void,
    updateGuest(guest: Guest, status: boolean): void
}

type State = {}

class GuestScreen extends Component<Props, State> {
    static navigationOptions = {
        title: 'Convidados',
    }

    componentDidMount() {
        this.props.searchGuests()
    }

    private addGuest = () => {
        // this.props.navigation.navigate('Profile')
    }

    private toggleGuestConfirmation = (item: Guest, status: boolean) => {
        this.props.updateGuest(item, status)
    }

    private sectionView = (section: SectionListData<Guest>) => (
        <View style={styles.section}>
            <SafeAreaView>
                <Text style={styles.sectionText}> {section.title}</Text>
            </SafeAreaView>
        </View>
    )

    private rowView = (guest: Guest) => (
        <SafeAreaView>
            <TouchableHighlight
                onPress={() => this.toggleGuestConfirmation(guest, !guest.isConfirmed)}
                underlayColor="gray">
                <View style={styles.row}>
                    <View style={styles.leftContainer}>
                        <Text>{guest.name}</Text>
                    </View>
                    <View style={styles.rightContainer}>
                        <Switch
                            value={guest.isConfirmed }
                            onValueChange={status => this.toggleGuestConfirmation(guest, status)}/>
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
            sections,
        } = this.props.guestState
    
        return(
            <View style={{ flex: 1 }}>
                <Search 
                    placeholder="Pesquisar por um convidado"
                    onChangedText={text => this.props.searchGuests(text)}/>
                <SectionList
                        style={styles.list}
                        sections={sections}
                        renderSectionHeader={({section}) => this.sectionView(section)}
                        renderItem={({item}) => this.rowView(item)}
                        ListEmptyComponent={this.emptyRow}
                        ItemSeparatorComponent={this.separator}
                        showsVerticalScrollIndicator={false}
                        stickySectionHeadersEnabled={false}
                        initialNumToRender={10}/>
                <KeyboardSpacer/>
            </View>
        )
    }

}

const mapStateToProps = (state: Props) => state

const mapDipatchToProps = (dispatch: Dispatch) => ({
    searchGuests: bindActionCreators(searchGuests, dispatch),
    updateGuest: (guest: Guest, status: boolean) => dispatch(updateGuest(guest, status))
})

export default connect(
    mapStateToProps,
    mapDipatchToProps
)(GuestScreen)