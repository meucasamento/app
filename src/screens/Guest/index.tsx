import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import KeyboardSpacer from 'react-native-keyboard-spacer'

import { 
    View, 
    SectionList,
    RefreshControl,
    ActivityIndicator,
    SectionListData
} from 'react-native';

import Guest from '../../models/guest.model';
import { GuestState, GuestSection } from '../../store/modules/guest/guest.types'
import { fetch } from '../../store/modules/guest/guest.actions'

import Text from '../../components/Text'
import Search from '../../components/Search';
import styles from './style'

import {
    GuestRow,
    EmptyGuestRow
} from '../../components/Guests/GuestRow';

import GuestSectionHeader from '../../components/Guests/GuestSectionHeader'
import AddButton from '../../components/AddButton';
import { navigate } from './../../services/navigation.service'

type Props = {
    guest: GuestState,
    fetch(page: number): void
}

const GuestScreen = (props: Props) => {

    useEffect(() => {
        handlerOnRefresh()
    }, [])

    const renderSectionHeader = (section: SectionListData<Guest>) => (
        <GuestSectionHeader section={section}/>
    )

    const renderSectionFooter = (section: SectionListData<Guest>) => {
        if (section.data.length > 0) return
        return <EmptyGuestRow message={`Ainda não existem ${section.title.toLowerCase()}`}/>
    }

    const renderGuestRow = (guest: Guest) => (
        <GuestRow 
            guest={guest}
            onPress={handlerOnPressNewGuest}/>
    )

    const renderEmptyRow = () => (
        <Text>sem conteúdo</Text>
    )

    const renderSeparator = () => (
        <View style={ styles.separator }></View>
    )

    const renderRefreshControl = () => {
        const {
            page
        } = props.guest.pagination

        return (
            <RefreshControl 
            refreshing={false} 
            onRefresh={handlerOnRefresh} />
        )
    }

    const renderFooter = () => {
        const {
            page,
            pages
        } = props.guest.pagination

        return (
            <ActivityIndicator 
                animating={page < pages}
                hidesWhenStopped={true}/>
        )
    }

    const organizeSections = (): GuestSection[] => {
        const guests = props.guest.guests
        const godfathers = guests.filter(guest => guest.isGodfather)
        const others = guests.filter(guest => !guest.isGodfather)
    
        return [
            { title: `Padrinhos`, data: godfathers },
            { title: `Convidados`, data: others }
        ]
    }

    const handlerOnPressNewGuest = (guest?: Guest) => {
        navigate("NewGuest", { guest })
    }

    const handlerOnRefresh = () => {
        props.fetch(1)
    }

    const handlerNextPage = () => { 
        const {page, pages} = props.guest.pagination
        const isLoading = props.guest.loading

        if (isLoading || (page >= pages)) return

        props.fetch(page + 1)
    }

    const { 
    } = props.guest

    return(
        <View style={styles.container}>
            <Search 
                placeholder="Pesquisar por um convidado"
                onChangedText={text => {}}/>
            <AddButton onPressed={() => handlerOnPressNewGuest()}>
                <Text style={styles.add}>+</Text>
            </AddButton>
            <SectionList<Guest>
                style={styles.list}
                sections={organizeSections()}
                renderSectionHeader={({section}) => renderSectionHeader(section)}
                renderSectionFooter={({section}) => renderSectionFooter(section)}
                keyExtractor={item => item._id}
                renderItem={({item}) => renderGuestRow(item)}
                refreshControl={renderRefreshControl()}
                ListEmptyComponent={renderEmptyRow}
                ItemSeparatorComponent={renderSeparator}
                ListFooterComponent={renderFooter}
                showsVerticalScrollIndicator={false}
                onEndReached={handlerNextPage}
                onEndReachedThreshold={0.3}/>
            <KeyboardSpacer/>
        </View>
    )

}

const mapStateToProps = (state: Props) => state

const mapDipatchToProps = (dispatch: Dispatch) => ({
    fetch: (page: number) => dispatch(fetch(page))
})

export default connect(
    mapStateToProps,
    mapDipatchToProps
)(GuestScreen)