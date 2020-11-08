import React  from 'react';
import useForm from "../../components/hooks/useForm";
import {useDispatch} from "react-redux";
import {updateUser} from "../../actions/user";



const UserSettings = () => {

    const dispatch = useDispatch()

    const user = JSON.parse(localStorage.getItem('user'));
    const [ formValues, handleInputChange ] = useForm({
        name: user.username,
        email: 'm.villagordovera@gmail.com'
    });

    const { name, email} = formValues;

    const handleSubmit = e => {
        e.preventDefault();
        const user = {
            name: name,
            email: email
        }

        // Hacemos la comprobación antes de enviar el usuario
        dispatch( updateUser( user ))

    }



    return(
        <div className="container mx-auto pt-24">
            <div className="md:flex h-screen flex justify-center align-content-center">
                <form className="w-4/12" onSubmit={ handleSubmit }>
                    <img src="http://www.jdevoto.cl/web/wp-content/uploads/2018/04/default-user-img.jpg"
                         className="rounded-full h-16 w-16 mx-auto object-cover mb-10" alt=""/>
                    <div className="w-full max-w-lg">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-1" htmlFor="name">Nombre</label>
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={ handleInputChange }
                            className="appearance-none block w-full bg-blue-50 text-gray-700 border border-blue-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" />
                    </div>
                    <div className="w-full max-w-lg">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-1" htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={ handleInputChange }
                            className="appearance-none block w-full bg-blue-50 text-gray-700 border border-blue-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" />
                    </div>
                    <button
                        type="submit"
                        className="btn bg-blue-600 hover:bg-blue-700 py-2 px-2 rounded text-white float-right transitions">
                        Guardar datos
                    </button>
                </form>
            </div>
        </div>
    )
}

export default UserSettings;