import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { useHistory } from 'react-router-dom';
import {changePassword} from "../../actions/auth";

export const ResetPassword = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [ formValues, setFormValues ] = useState({});
    const [ error, setError ] = useState( false );
    const [ message, setMessage ] = useState('')
    const id = useSelector( state => state.messages.userId)
    const change = useSelector( state => state.messages.change)

    const handleInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        })

        setError(false)
    }

    const { password } = formValues;

    const data = {
        password: password,
        id
    }

    if( !id ) {
        history.push("/login");
    }

    const onSubmitPassordReset = (e) => {
        e.preventDefault();

        if( password.trim() === "") {
            setError( true );
            setMessage("La contraseña no puede estar vacia")
            return;
        }

        if( password.length <= 5 ) {
            setError( true );
            setMessage("La contraseña que tenga al menos 6 caracteres")
            return;
        }

        dispatch( changePassword(data))
    }

    return (

        <div className="reset-password container mx-auto h-screen flex items-center justify-center login bg-blue-500 font-body">
            <form onSubmit={onSubmitPassordReset} className="sm:w-1/1 lg:w-1/3 gap-y-3 grid w-full py-6 px-3">

                <div className="reset-password__password flex flex-col">
                    <label htmlFor="" className="text-white uppercase">Nueva contraseña</label>
                    <input onChange={handleInputChange} type="password" name="password" placeholder="*******" className="py-1 px-2 w-full" />
                    { error ? <p className="bg-red-500 text-xs text-white py-1 px-2">{message}</p> : null}
                </div>

                <button className="btn py-2 px-4 bg-blue-900 text-white" type="submit"> Cambiar </button>
            </form>

        </div>

    )
}
