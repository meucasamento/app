import React from 'react'
import { Formik } from 'formik'
import {} from 'react-native'

import {
    ButtonField,
    TextField
} from '../../components/Form/Fields'

import Guest from '../../models/guest.model'

type FormValues = {
    name: string,
    isGodfather: boolean,
    isConfirmed: boolean
}

type Props = {
    guest?: Guest,
    onSubmit(result: FormValues): void,
    onCancel(): void,
    onDelete?(guest: Guest): void
}

const NewGuestForm = (props: Props) => {

    const initialValues = {}

    return (
        <Formik 
            initialValues={initialValues}
            onSubmit={() => {}}>

        </Formik>
    )
}

export default NewGuestForm