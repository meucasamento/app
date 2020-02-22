import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { 
    View, 
    SectionList,
    FlatList,
    RefreshControl,
    ActivityIndicator,
    SectionListData
} from 'react-native';

import KeyboardSpacer from 'react-native-keyboard-spacer'

import Guest from '../../models/guest.model';

import { GuestState } from '../../store/modules/guest/guest.types'
import { fetch } from '../../store/modules/guest/guest.actions'

import Text from '../../components/Text'
import Search from '../../components/Search';

import styles from './style'

import GuestRow from '../../components/Guests/GuestRow';
import GuestSectionHeader from '../../components/Guests/GuestSectionHeader'

type Props = {
    guest: GuestState,
    fetch(page: number): void
}

const GuestScreen = (props: Props) => {

    useEffect(() => {
        onRefresh()
    }, [])

    const onRefresh = () => {
        props.fetch(1)
    }

    const nextPage = () => { 
        if (props.guest.loading) return

        const page = props.guest.pagination.page
        const nextPage = page + 1

        props.fetch(nextPage)
    }

    const renderGuestSectionHeader = (section: SectionListData<Guest>) => (
        <GuestSectionHeader section={section}/>
    )

    const renderGuestRow = (guest: Guest) => (
        <GuestRow guest={guest} />
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
            onRefresh={() => onRefresh()} />
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

    const { 
        sections
    } = props.guest

    return(
        <View style={{ flex: 1 }}>
            <Search 
                placeholder="Pesquisar por um convidado"
                onChangedText={text => {}}/>
            <SectionList<Guest>
                style={styles.list}
                renderSectionHeader={({section}) => renderGuestSectionHeader(section)}
                sections={sections}
                keyExtractor={item => item._id}
                renderItem={({item}) => renderGuestRow(item)}
                refreshControl={renderRefreshControl()}
                ListEmptyComponent={renderEmptyRow}
                ItemSeparatorComponent={renderSeparator}
                ListFooterComponent={renderFooter}
                showsVerticalScrollIndicator={false}
                onEndReached={nextPage}
                onEndReachedThreshold={0.2}/>
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