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
                includeFamily: props.guest?.includeFamily ?? false,
                hasCompanion: false,
                companion: null
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
                <ScrollView 
                    style={styles.formScroll} 
                    keyboardDismissMode="interactive">
                    <View style={styles.form}>
                        <View style={styles.fieldsBox}>
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
                                label="Tem acompanhante?"
                                value={values.hasCompanion}
                                isEnabled={!props.isLoading}
                                onValueChange={value => setFieldValue("hasCompanion", value)}/>
                            <TextField 
                                label="Acompanhante"
                                value={values.companion}
                                error={touched.name && errors.name}
                                autoFocus={!values.companion}
                                isVisible={values.hasCompanion}
                                isEnabled={!props.isLoading}
                                placeholder="Nome do acompanhante"
                                returnKeyType="done"
                                onChangeText={value => setFieldValue("companion", value)}/>
                            <SwitchField 
                                label="E um padrinho ou madrinha?"
                                value={values.isGodfather}
                                isEnabled={!props.isLoading}
                                onValueChange={value => {
                                    setFieldValue("isGodfather", value)
                                    setFieldValue("includeFamily", false)
                                }}/>
                            <SwitchField 
                                label="Incluir família?"
                                isVisible={!values.isGodfather}
                                value={values.includeFamily}
                                isEnabled={!props.isLoading}
                                onValueChange={value => {
                                    setFieldValue("includeFamily", value)
                                    setFieldValue("peopleCount", null)
                                }}/>
                            <TextField 
                                label="Quantidade de pessoas"
                                autoFocus={!values.peopleCount}
                                isVisible={values.includeFamily}
                                value={values.peopleCount && `${values.peopleCount}`}
                                error={touched.name && errors.name}
                                isEnabled={!props.isLoading}
                                placeholder="Quantidade"
                                keyboardType="numeric"
                                onChangeText={value => setFieldValue("peopleCount", value)}/>
                            <SwitchField 
                                label="Convite entregue"
                                value={values.invitationDelivered}
                                isEnabled={!props.isLoading}
                                onValueChange={value => setFieldValue("invitationDelivered", value)}/>
                        </View>
                        <View style={styles.actionsBox}>
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
                </ScrollView>
            )}
        </Formik>
    )
}

export default NewGuestForm