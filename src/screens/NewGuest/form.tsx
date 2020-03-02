import React from 'react'
import { Formik } from 'formik'
import {
    View,
    Button,
    ScrollView
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
                isGodfather: props.guest?.isGodfather,
                godfatherCompanion: "",
                peopleCount: props.guest?.peopleCount,
                includeFamily: props.guest?.includeFamily
            }}
            onSubmit={data => {
                let guest = props.guest

                if (guest) {
                    guest.name = data.name
                    guest.invitationDelivered = data.invitationDelivered
                    guest.isGodfather = data.isGodfather
                    guest.includeFamily = data.includeFamily
                } else {
                    guest = {
                        ...data,
                        _id: null
                    }
                }

                props.onSubmit(guest)
            }}>
                {({ 
                handleSubmit, 
                setFieldValue,
                touched,
                errors,
                values
             }) => (
                <View style={styles.form}>
                    <ScrollView style={styles.formScroll} keyboardDismissMode="on-drag">
                        <TextField 
                            label="Nome"
                            value={values.name}
                            error={touched.name && errors.name}
                            autoFocus={!values.name}
                            isEnabled={!props.isLoading}
                            placeholder="Nome do convidado"
                            returnKeyType="done"
                            onChangeText={name => setFieldValue("name", name)}
                            onSubmitEditing={handleSubmit}/>
                        <SwitchField 
                            label="É um padrinho(a)"
                            value={values.isGodfather}
                            isEnabled={!props.isLoading}
                            onValueChange={value => setFieldValue("isGodfather", value)}/>
                        <SwitchField 
                            label="Incluir família?"
                            value={values.includeFamily}
                            isEnabled={!props.isLoading}
                            onValueChange={value => setFieldValue("includeFamily", value)}/>
                        <SwitchField 
                            label="Convite entregue"
                            value={values.invitationDelivered}
                            isEnabled={!props.isLoading}
                            onValueChange={value => setFieldValue("invitationDelivered", value)}/>
                        {/* <TextField 
                            label="Companheiro(a) do padrinho"
                            value={values.godfatherCompanion}
                            error={touched.name && errors.name}
                            autoFocus={true}
                            isEnabled={!props.isLoading}
                            isVisible={values.isGodfather}
                            placeholder="Nome do companheiro(a) do padrinho"/>
                        <TextField 
                            label="Quantidade de pessoas"
                            value={values.godfatherCompanion}
                            error={touched.name && errors.name}
                            isEnabled={!props.isLoading}
                            placeholder="Quantidade"/> */}
                    </ScrollView>
                    <View style={styles.actionBox}>
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
                            disabled={props.isLoading}
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