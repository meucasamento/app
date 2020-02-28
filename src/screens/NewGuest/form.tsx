import React from 'react'
import { Formik } from 'formik'
import {
    View,
    Button
} from 'react-native'

import Guest from '../../models/guest.model'

import {
    ButtonField,
    TextField,
    SwitchField
} from '../../components/Form/Fields'

import styles from './styles'
import Space from '../../components/Space'

type Props = {
    isLoading?: boolean,
    guest?: Guest,
    onSubmit(guest: Guest): void,
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
                <View style={styles.form}>
                    <View>
                        <TextField 
                            label="Nome"
                            value={values.name}
                            error={touched.name && errors.name}
                            autoFocus={!values.name}
                            isEnabled={!props.isLoading}
                            placeholder="Nome do convidado"
                            returnKeyType="done"
                            onChangeText={name => setFieldValue("name", name)}
                            />
                        <SwitchField 
                            label="É um padrinho(a)"
                            onChangeText={value => {}}/>
                        <SwitchField 
                            label="Convite entregue"
                            onChangeText={value => {}}/>
                    </View>
                    <View>
                        <ButtonField
                            text="Salvar"
                            isLoading={props.isLoading}
                            onPress={handleSubmit}/>
                        {props.onDelete && 
                        <>
                        <Space/>
                        <Button 
                            title="Apagar convidado"
                            color="red"
                            onPress={() => props.onDelete(props.guest)}/>
                        </>
                        }
                    </View>
                </View>
            )}
        </Formik>
    )
}

export default NewGuestForm