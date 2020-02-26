import React from 'react'

import Guest from '../../models/guest.model'
import NewGuestForm from './form'

type Props = {
    guest?: Guest
}

const NewGuestScreen = (props: Props) => {
    return <>
        <NewGuestForm 
            guest={props.guest}
            onSubmit={result => {}}
            onCancel={() => {}} />
    </>
}

export default NewGuestScreen