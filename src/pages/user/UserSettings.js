import React  from 'react';
import { useSelector} from "react-redux";



const UserSettings = () => {

    const user = useSelector( state => state.auth)

    console.log(user)

    const handleSubmit = () => {

        console.log("Settings")
    }

    return(
        <div className="container mx-auto pt-24">
            <div className="md:flex h-screen flex justify-center align-content-center">
                <form className="w-4/12" onSubmit={ handleSubmit }>
                    <img src="http://www.jdevoto.cl/web/wp-content/uploads/2018/04/default-user-img.jpg"
                         className="rounded-full h-16 w-16 mx-auto object-cover mb-10" alt=""/>
                    <div className="w-full max-w-lg">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-1" htmlFor="name">Username</label>
                        <input
                            type="text"
                            name="username"
                            value={user.name}
                            //onChange={ handleInputChange }
                            className="appearance-none block w-full bg-blue-50 text-gray-700 border border-blue-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" />
                    </div>
                    <div className="w-full max-w-lg">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-1" htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            //value={email}
                            //onChange={ handleInputChange }
                            className="appearance-none block w-full bg-blue-50 text-gray-700 border border-blue-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" />
                    </div>
                    <button
                        type="submit"
                        className="btn bg-blue-600 hover:bg-blue-700 py-2 px-2 rounded text-white float-right transitions" disabled>
                        Guardar datos
                    </button>
                </form>
            </div>
        </div>
    )
}

export default UserSettings;