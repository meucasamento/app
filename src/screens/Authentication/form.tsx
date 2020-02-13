import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { 
    View, 
} from 'react-native'

import {
    ButtonField,
    TextField
} from '../../components/Form/Fields'

import styles from './style'

export type SignupFormData = {
    email?: string,
    password?: string
}

type Props = {
    isLoading?: boolean,
    onSubmit(result: SignupFormData): void
}

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