import React, {useState} from 'react'


export const useToggle = ( initialState = true ) => {

    const [ value, setValue ] = useState( true )

    const showMenu = () => {
        setValue( v => !value)
    }

    return [ value, showMenu ]

}