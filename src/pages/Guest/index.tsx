import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { 
    View, 
    Switch, 
    SafeAreaView,
    SectionList,
    TouchableHighlight,
    SectionListData
} from 'react-native';

import KeyboardSpacer from 'react-native-keyboard-spacer'

import Guest from '../../models/guest.model';

import { GuestState } from '../../store/modules/guest/guest.types'
import { search } from '../../store/modules/guest/guest.actions'

import Text from '../../components/Text'
import Search from '../../components/Search';

import styles from './style'

type Props = {
    guest: GuestState,
    search(query: string): void,
    // update(guest: Guest, status: boolean): void
}

type State = {}

class GuestPage extends Component<Props, State> {
    static navigationOptions = {
        title: 'Convidados',
    }

    componentDidMount() {
        this.props.search("sdfsdf")
    }

    private addGuest = () => {
        // this.props.navigation.navigate('Profile')
    }

    private toggleGuestConfirmation = (item: Guest, status: boolean) => {
        // this.props.update(item, status)
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
        } = this.props.guest
    
        return(
            <View style={{ flex: 1 }}>
                <Search 
                    placeholder="Pesquisar por um convidado"
                    onChangedText={text => this.props.search(text)}/>
                <SectionList
                    style={styles.list}
                    sections={sections}
                    renderSectionHeader={({section}) => this.sectionView(section)}
                    keyExtractor={item => item._id}
                    renderItem={({item}) => this.rowView(item)}
                    ListEmptyComponent={this.emptyRow}
                    ItemSeparatorComponent={this.separator}
                    showsVerticalScrollIndicator={false}
                    stickySectionHeadersEnabled={true}
                    initialNumToRender={10}/>
                <KeyboardSpacer/>
            </View>
        )
    }

}

const mapStateToProps = (state: Props) => state

const mapDipatchToProps = (dispatch: Dispatch) => ({
    search: (query: string) => dispatch(search(query))
})

export default connect(
    mapStateToProps,
    mapDipatchToProps
)(GuestPage)