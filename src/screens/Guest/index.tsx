import React, { useEffect, useState } from 'react';
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
import { navigateTo } from './../../services/navigation.service'

type Props = {
    guestState: GuestState,
    fetch(page: number, completion: (response: Promise<void>) => void): void
}

const GuestScreen = (props: Props) => {

    const [isLoading, setIsLoading] = useState(false)
    const [refreshing, setRefreshing] = useState(false)

    const canDisplayLoading = isLoading && props.guestState.guests.length == 0

    useEffect(() => {
        loadPage(1)
    }, [])

    const renderSectionHeader = (section: SectionListData<Guest>) => (
        <GuestSectionHeader section={section}/>
    )

    const renderSectionFooter = (section: SectionListData<Guest>) => {
        if (section.data.length > 0) return
        return <EmptyGuestRow message={`Ainda não existe nenhum dado`}/>
    }

    const renderGuestRow = (guest: Guest) => (
        <GuestRow 
            guest={guest}
            onPress={handleOnPressNewGuest}/>
    )

    const renderPageLoad = () => (
        <View style={styles.loadContainer}>
            <ActivityIndicator size="large" />
        </View>
    )

    const renderRefreshControl = () => {
        return (
            <RefreshControl 
                refreshing={refreshing} 
                onRefresh={() => {
                    setRefreshing(true)
                    loadPage(1)
                }}/>
        )
    }

    const renderFooter = () => {
        return (
            <ActivityIndicator 
                style={styles.footerLoading}
                animating={isLoading && organizeSections().length > 0}
                hidesWhenStopped={true}/>
        )
    }

    const organizeSections = (): GuestSection[] => {
        const guests = props.guestState.guests
        
        const godfathers = guests.filter(guest => guest.isGodfather)
        const jeniferGodfathers = godfathers.filter(guest => guest.guestOf === "jenifer")
        const adrianoGodfathers = godfathers.filter(guest => guest.guestOf === "adriano")
        
        const others = guests.filter(guest => !guest.isGodfather)
        const jeniferGuests = others.filter(guest => guest.guestOf === "jenifer")
        const adrianoGuests = others.filter(guest => guest.guestOf === "adriano")
    
        const sections = [
            { title: `Padrinhos Jenifer (👰🏽)`, data: jeniferGodfathers },
            { title: `Padrinhos Adriano (🤵🏻)`, data: adrianoGodfathers },
            { title: `Convidados Jenifer`, data: jeniferGuests },
            { title: `Convidados Adriano`, data: adrianoGuests }
        ]

        return sections.filter(section => section.data.length > 0)
    }

    const handleOnPressNewGuest = (guest?: Guest) => {
        navigateTo("NewGuest", { guest })
    }

    const loadPage = (page: number) => {
        setIsLoading(true)
        props.fetch(page, response => 
            response.then(() => {
                setIsLoading(false)
                setRefreshing(false)
            }).catch(err => console.log(err))
        )
    }

    const handleNextPage = () => { 
        if (isLoading) return
        const currentPage = props.guestState.pagination.page
        loadPage(currentPage + 1)
    }

    return(
        <>
        { 
        canDisplayLoading ? 
        renderPageLoad() :
        <View style={styles.container}>
            <Search 
                placeholder="Pesquisar por um convidado"
                onChangedText={text => {}}/>
            <AddButton 
                onPressed={() => handleOnPressNewGuest()}>
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
                ListFooterComponent={renderFooter}
                showsVerticalScrollIndicator={false}
                onEndReached={handleNextPage}
                onEndReachedThreshold={0.3}/>
            <KeyboardSpacer/>
        </View>
        }
        </>
    )

}

const mapStateToProps = (state: Props) => state

const mapDipatchToProps = (dispatch: Dispatch) => ({
    fetch: (page: number, completion: (response: Promise<void>) => void) => dispatch(fetch(page, completion))
})

export default connect(
    mapStateToProps,
    mapDipatchToProps
)(GuestScreen)