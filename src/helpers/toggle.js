import React, {useState} from 'react'


export const useToggle = ( initialState = false ) => {

    const [ value, setValue ] = useState( false )

    const showMenu = () => {
        setValue( v => !v)
    }

    return [ value, showMenu ]

}