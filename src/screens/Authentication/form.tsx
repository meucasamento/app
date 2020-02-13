import React, { Component } from 'react'

import { 
    View, 
} from 'react-native'

import styles from './style'
import TextInputForm from '../../components/Form/Fields/TextFieldForm'
import ButtonForm from '../../components/Form/Fields/ButtonField'

import { 
    RequiredRule, EmailRule
} from '../../components/Form/Rules'

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
                    keyboardType="email-address"
                    isEnabled={!isLoading}
                    placeholder="Insira seu email"
                    onChangeText={email => this.setState({email})}
                    rules={[
                        new RequiredRule(),
                        new EmailRule()
                    ]}
                />
                <TextInputForm 
                    label="Senha"
                    keyboardType="visible-password"
                    isEnabled={!isLoading}
                    isSecure={true}
                    placeholder="Insira sua senha"
                    onChangeText={password => this.setState({password})}
                    rules={[
                        new RequiredRule()
                    ]}
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