import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { 
    View, 
} from 'react-native'

import styles from './style'

import {
    ButtonField,
    TextField
} from '../../components/Form/Fields'

type FormSubmitedData = {
    email?: string,
    password?: string
}

type Props = {
    isLoading?: boolean,
    onSubmit(result: FormSubmitedData): void
}

// class SignupForm extends Component<Props, State> {
const SignupForm = (props: Props) => {

    const {
        isLoading,
        onSubmit
    } = props

    const {
        register,
        handleSubmit,
        setValue
    } = useForm()

    useEffect(() => {
        register('email'),
        register('password')
    }, [register])

    return(
        <View style={styles.loginForm}>
            <TextField 
                label="Email"
                keyboardType="email-address"
                isEnabled={!isLoading}
                placeholder="Insira seu email"
                onChangeText={email => setValue("email", email)}
            />
            <TextField 
                label="Senha"
                keyboardType="visible-password"
                isEnabled={!isLoading}
                isSecure={true}
                placeholder="Insira sua senha"
                onChangeText={password => setValue("password", password)}
            />
            <ButtonField
                text="Fazer Login"
                isLoading={isLoading}
                onPress={handleSubmit(onSubmit)}/>
        </View>
    )

}

export default SignupForm