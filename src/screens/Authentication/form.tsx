import React, { Component } from 'react'

import { 
    View, 
} from 'react-native'

import styles from './style'
import TextInputForm from '../../components/Form/TextInputForm'
import ButtonForm from '../../components/Form/ButtonForm'

type Props = {
    onSubmit(result: State): void
}

type State = {
    email?: string,
    password?: string
}

class SignupForm extends Component<Props, State> {

    private submit() {
        this.props?.onSubmit(this.state)
    }

    render() {
        return(
            <View style={styles.loginForm}>
                <TextInputForm 
                    label="Email"
                    placeholder="Insira seu email"
                    onChangeText={email => this.setState({email})}
                />
                <TextInputForm 
                    label="Senha"
                    placeholder="Insira sua senha"
                    onChangeText={password => this.setState({password})}
                />
                <ButtonForm
                    text="Fazer Login"
                    onPress={() => this.submit()}/>
            </View>
        )
    }

}

export default SignupForm