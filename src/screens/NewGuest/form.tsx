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
    SwitchField,
    StepperField
} from '../../components/Form/Fields'

import styles from './styles'
import Space from '../../components/Space'
import KeyboardSpacer from 'react-native-keyboard-spacer'

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
                peopleCount: props.guest?.peopleCount,
                includeFamily: props.guest?.includeFamily ?? false,
                hasCompanion: props.guest?.hasCompanion ?? false,
                companion: props.guest?.companion
            }}
            onSubmit={data => {
                let guest = props.guest

                if (guest) {
                    guest.name = data.name
                    guest.invitationDelivered = data.invitationDelivered
                    guest.isGodfather = data.isGodfather
                    guest.includeFamily = data.includeFamily
                    guest.peopleCount = data.peopleCount
                    guest.hasCompanion = data.hasCompanion
                    guest.companion = data.companion
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
                <>
                    <ScrollView 
                        contentContainerStyle={styles.form}
                        keyboardShouldPersistTaps="always"
                        keyboardDismissMode="on-drag">
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
                                    label="Tem acompanhante"
                                    value={values.hasCompanion}
                                    isEnabled={!props.isLoading}
                                    onValueChange={value => {
                                        setFieldValue("hasCompanion", value)
                                        setFieldValue("companion", null)
                                    }}/>
                                <TextField 
                                    label="Acompanhante"
                                    value={values.companion}
                                    error={touched.name && errors.name}
                                    autoFocus={!values.companion}
                                    isVisible={values.hasCompanion}
                                    isEnabled={!props.isLoading}
                                    placeholder="Nome do(a) acompanhante"
                                    returnKeyType="done"
                                    onChangeText={value => setFieldValue("companion", value)}/>
                                <SwitchField 
                                    label="É um padrinho ou madrinha"
                                    value={values.isGodfather}
                                    isEnabled={!props.isLoading}
                                    onValueChange={value => setFieldValue("isGodfather", value)}/>
                                <SwitchField 
                                    label="Incluir família"
                                    value={values.includeFamily}
                                    isEnabled={!props.isLoading}
                                    onValueChange={value => {
                                        setFieldValue("includeFamily", value)
                                        setFieldValue("peopleCount", 0)
                                    }}/>
                                <StepperField
                                    label="Quantidade de pessoas"
                                    value={values.peopleCount}
                                    minValue={0}
                                    isVisible={values.includeFamily}
                                    isEnabled={!props.isLoading}
                                    onChangeValue={value => setFieldValue("peopleCount", value)}/>
                                <SwitchField 
                                    label="Convite entregue"
                                    value={values.invitationDelivered}
                                    isEnabled={!props.isLoading}
                                    onValueChange={value => setFieldValue("invitationDelivered", value)}/>
                            </View>
                            <View style={styles.actionsBox}>
                                <ButtonField
                                    text={props.guest ? "Atualizar" : "Salvar"}
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
                    </ScrollView>
                    <KeyboardSpacer/>
                </>
            )}
        </Formik>
    )
}

export default NewGuestForm