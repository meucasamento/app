import React from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik'

import { 
    View
} from 'react-native'

import {
    ButtonField,
    TextField
} from '../../components/Form/Fields'

import styles from './style'

export type FormValues = {
    email?: string,
    password?: string
}

type FormProps = {
    email?: string
    password?: string
}

type Props = {
    isLoading?: boolean,
    formProps?: FormProps,
    onSubmit(result: FormValues): void
}

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email("Informe um email válido")
        .required("Campo obrigatório"),
    password: Yup.string()
        .min(4, "A senha deve ter no mínimo 4 caracteres")
        .required("Campo obrigatório")
})

const SignupForm = (props: Props) => {
    const initialValues = { 
        email: props.formProps?.email, 
        password: props.formProps?.password
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={props.onSubmit}
            validationSchema={validationSchema}>
            {({ 
                handleSubmit, 
                setFieldValue,
                touched,
                errors,
                values
             }) => (
                <View style={styles.loginForm}>
                    <TextField 
                        label="Email"
                        value={values.email}
                        error={touched.email && errors.email}
                        keyboardType="email-address"
                        isEnabled={!props.isLoading}
                        placeholder="Informe seu email"
                        returnKeyType="next"
                        onChangeText={email => setFieldValue("email", email)}
                        />
                    <TextField 
                        label="Senha"
                        value={values.password}
                        error={touched.password && errors.password}
                        keyboardType="visible-password"
                        isEnabled={!props.isLoading}
                        isSecure={true}
                        placeholder="Insira sua senha"
                        returnKeyType="done"
                        onChangeText={password => setFieldValue("password", password)}
                        onSubmitEditing={handleSubmit}
                        />
                    <ButtonField
                        text="Fazer Login"
                        isLoading={props.isLoading}
                        onPress={handleSubmit}
                        />
                </View>
            )}
        </Formik>
    )
}

export default SignupForm