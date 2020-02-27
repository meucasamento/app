import React from 'react'
import { Formik } from 'formik'
import {
    View
} from 'react-native'

import Guest from '../../models/guest.model'

import {
    ButtonField,
    TextField
} from '../../components/Form/Fields'

import styles from './styles'

type FormValues = {
    name?: string,
}

type Props = {
    isLoading?: boolean,
    formValues?: FormValues,
    onSubmit(result: FormValues): void,
    onCancel(): void,
    onDelete?(guest: Guest): void
}

const NewGuestForm = (props: Props) => {
    return (
        <Formik 
            initialValues={props.formValues}
            onSubmit={() => {}}>
                {({ 
                handleSubmit, 
                setFieldValue,
                touched,
                errors,
                values
             }) => (
                <View style={styles.loginForm}>
                    <TextField 
                        label="Nome"
                        value={values.name}
                        error={touched.name && errors.name}
                        keyboardType="email-address"
                        isEnabled={!props.isLoading}
                        placeholder="Informe seu email"
                        returnKeyType="next"
                        onChangeText={email => setFieldValue("email", email)}
                        />
                    <ButtonField
                        text="Salvar"
                        isLoading={props.isLoading}
                        onPress={handleSubmit}
                        />
                    <ButtonField
                        text="Apagar"
                        isLoading={props.isLoading}
                        onPress={handleSubmit}
                        />
                    <ButtonField
                        text="Cancel"
                        isLoading={props.isLoading}
                        onPress={handleSubmit}
                        />
                </View>
            )}
        </Formik>
    )
}

export default NewGuestForm