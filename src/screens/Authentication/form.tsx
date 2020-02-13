import React from 'react'
import * as Yup from 'yup'
import { 
    withFormik, 
    FormikProps,
    Formik
} from 'formik'

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
    onSubmit(result: FormValues): void
}

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email("Informe um email válido"),
    password: Yup.string()
        .min(4, "A senha deve ter no mínimo 4 caracteres")
        .required("Campo obrigatório")
})

const SignupForm = (props: Props & FormikProps<FormValues>) => {
    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={props.onSubmit}
            validationSchema={validationSchema}
            validateOnChange={true}
            >
            {({ 
                handleSubmit, 
                setFieldValue,
                setFieldTouched,
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
                        placeholder="Insira seu email"
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
                        onChangeText={password => setFieldValue("password", password)}
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