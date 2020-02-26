import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { 
    View
} from 'react-native'

import { logout } from './../../store/modules/session/session.actions'

import styles from './style'
import Button from '../../components/Form/Fields/Button'

type Props = {
    logout(): void
}

type State = {}

class ProfileScreen extends Component<Props, State> {
    render() {
        return(
            <View style={styles.container}>
                <Button 
                text="Logout"
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