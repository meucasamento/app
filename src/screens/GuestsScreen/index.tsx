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
import { fetchGuests, updateGuest } from '../../redux/actions/guests.actions'

import Text from './../../components/Text'
import Search from '../../components/Search';

import styles from './stylesheet'

type Props = {
    guestState: GuestState,
    weddingState: WeddingState,
    fetchGuests(): void,
    updateGuest(guest: Guest, status: boolean): void
}

type State = {}

class GuestScreen extends Component<Props, State> {
    static navigationOptions = {
        title: 'Convidados',
    }

    componentDidMount() {
        this.props.fetchGuests()
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
            guests
        } = this.props.guestState

        const sections = [
            {
                title: "Padrinhos",
                data: guests.filter(guest => guest.isGodfather)
            },
            {
                title: "Convidados",
                data: guests.filter(guest => !guest.isGodfather)
            },
        ]
    
        return(
            <View style={{ flex: 1 }}>
                <Search 
                    placeholder="Pesquisar por um convidado"
                    delay={400}
                    onChangedText={text => console.log(text)}/>
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
    fetchGuests: bindActionCreators(fetchGuests, dispatch),
    updateGuest: (guest: Guest, status: boolean) => dispatch(updateGuest(guest, status))
})

export default connect(
    mapStateToProps,
    mapDipatchToProps
)(GuestScreen)