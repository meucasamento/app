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
                name: props.guest?.name,
                invitationDelivered: props.guest?.invitationDelivered,
                isGodfather: props.guest?.isGodfather
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
                            onChangeText={name => setFieldValue("name", name)}/>
                        <SwitchField 
                            label="É um padrinho(a)"
                            value={values.isGodfather}
                            onValueChange={value => setFieldValue("isGodfather", value)}/>
                        <SwitchField 
                            label="Convite entregue"
                            value={values.invitationDelivered}
                            onValueChange={value => setFieldValue("invitationDelivered", value)}/>
                    </View>
                    <View>
                        <ButtonField
                            text="Salvar"
                            isLoading={props.isLoading}
                            onPress={handleSubmit}/>
                        {props.onDelete && props.guest && 
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