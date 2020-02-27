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

type Props = {
    isLoading?: boolean,
    guest?: Guest,
    onSubmit(guest: Guest): void,
    onCancel(): void,
    onDelete?(guest: Guest): void
}

const NewGuestForm = (props: Props) => {
    return (
        <Formik 
            initialValues={{
                name: props.guest?.name
            }}
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
                        onChangeText={name => setFieldValue("name", name)}
                        />
                    <ButtonField
                        text="Salvar"
                        isLoading={props.isLoading}
                        onPress={handleSubmit}
                        />
                    {props.guest && <ButtonField
                        text="Apagar"
                        isLoading={props.isLoading}
                        onPress={() => props.onDelete(props.guest)}
                        />}
                    <ButtonField
                        text="Cancel"
                        isLoading={props.isLoading}
                        onPress={props.onCancel}
                        />
                </View>
            )}
        </Formik>
    )
}

export default NewGuestForm