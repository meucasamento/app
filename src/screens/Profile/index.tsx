import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { 
    View, Button
} from 'react-native'

import { logout } from './../../store/modules/session/session.actions'

import styles from './style'

type Props = {
    logout(): void
}

type State = {}

class ProfileScreen extends Component<Props, State> {
    render() {
        return(
            <View style={styles.container}>
                <Button 
                title="Logout"
                onPress={() => this.props.logout()}/>
            </View>
        )
    }
}

const mapStateProps = (state: Props) => state

const mapDispatchToProps = (dispatch: Dispatch) => ({
    logout: () => dispatch(logout())
})

export default connect(
    mapStateProps,
    mapDispatchToProps
)(ProfileScreen)