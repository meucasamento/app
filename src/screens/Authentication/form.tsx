import React, { Component } from 'react'

import { 
    View, 
} from 'react-native'

import styles from './style'
import TextInputForm from '../../components/Form/TextFieldForm'
import ButtonForm from '../../components/Form/ButtonField'

type FormSubmitedData = {
    email?: string,
    password?: string
}

type Props = {
    isLoading?: boolean,
    onSubmit(result: FormSubmitedData): void
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
        const {
            isLoading
        } = this.props

        return(
            <View style={styles.loginForm}>
                <TextInputForm 
                    label="Email"
                    isEnabled={!isLoading}
                    placeholder="Insira seu email"
                    onChangeText={email => this.setState({email})}
                />
                <TextInputForm 
                    label="Senha"
                    isEnabled={!isLoading}
                    placeholder="Insira sua senha"
                    onChangeText={password => this.setState({password})}
                />
                <ButtonForm
                    text="Fazer Login"
                    isLoading={isLoading}
                    onPress={() => this.submit()}/>
            </View>
        )
    }

}

export default SignupForm