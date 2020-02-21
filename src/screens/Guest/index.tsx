import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { 
    View, 
    SafeAreaView,
    SectionList,
    SectionListData
} from 'react-native';

import KeyboardSpacer from 'react-native-keyboard-spacer'

import Guest from '../../models/guest.model';

import { GuestState } from '../../store/modules/guest/guest.types'
import { fetch } from '../../store/modules/guest/guest.actions'

import Text from '../../components/Text'
import Search from '../../components/Search';

import styles from './style'
import { GuestRow } from '../../components/GuestRow';

type Props = {
    guest: GuestState,
    fetch(page: number): void
}

type State = {}

class GuestScreen extends Component<Props, State> {
    static navigationOptions = {
        title: 'Convidados',
    }

    componentDidMount() {
        this.props.fetch(3)
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
                    onChangedText={text => {}}/>
                <SectionList
                    style={styles.list}
                    sections={sections}
                    renderSectionHeader={({section}) => this.sectionView(section)}
                    keyExtractor={item => item._id}
                    renderItem={({item}) => <GuestRow guest={item} />}
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
    fetch: (page: number) => dispatch(fetch(page))
})

export default connect(
    mapStateToProps,
    mapDipatchToProps
)(GuestScreen)