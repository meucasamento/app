import React from 'react';
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { Button, Text, FlatList } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';

import { GuestState, Guest } from './../../redux/types/guests.types'
import { deleteGuest } from './../../redux/actions/guests.actions'

type Props = {
    navigation: NavigationStackProp,
    guestState: GuestState,
    deleteGuest(guest: Guest): void
}

type State = {}

class ProfileScreen extends React.Component<Props, State> {
    static navigationOptions = {
        title: 'Profile'
    }

    private row = (guest: Guest) => (
        <Button 
            title={guest.name}
            onPress={() => {
                this.props.deleteGuest(guest)
            }}
        />
    )

    render() {
        const { guests } = this.props.guestState
    
        return(
            <FlatList<Guest> 
                data={guests}
                keyExtractor={guest => String(guest.id)}
                initialNumToRender={10}
                renderItem={({ item }) => this.row(item) }
            />
        )
    }
}

const mapStateToProps = (state: any) => state

const mapDipatchToProps = (dispatch: Dispatch) => ({
    deleteGuest: (guest: Guest) => dispatch(deleteGuest(guest))
})

export default connect(
    mapStateToProps,
    mapDipatchToProps
)(ProfileScreen)