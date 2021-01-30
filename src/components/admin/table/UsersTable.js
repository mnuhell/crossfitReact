import React, {useMemo, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setUserActive} from "../../../actions/user";
import {uiOpenModal} from "../../../actions/ui";




export const UsersTable = () => {

    const dispatch = useDispatch();
    const [ sortField, setSortField ] = useState(null);
    const users  = useSelector( state => state.user.users );
    
    let userLoad = useMemo(() => users, users);

    const Head = {
        imagen: 'Imagen',
        name: 'Name',
        email: 'Email',
        telefono: 'Telefono',
        bonos: 'Bonos activos',
        precio: 'Precio',
    }

    const handleSelectUser = ( ) => {
        console.log( "woqdhnwqo" )
        dispatch( setUserActive( ))
        dispatch( uiOpenModal())
    }

    return (
        <table className="border-collapse border border-green-800 table w-full text-white">
            <thead className="table-header-group">
                <tr>
                    <th className="border border-blue-400 py-2">{ Head.imagen }</th>
                    <th className="border border-blue-400 py-2" onClick={() => setSortField('name')}>{ Head.name }</th>
                    <th className="border border-blue-400 py-2" onClick={() => setSortField('email')}>{ Head.email }</th>
                    <th className="border border-blue-400 py-2">{ Head.telefono }</th>
                    <th className="border border-blue-400 py-2" onClick={() => setSortField('bonos')}>{ Head.bonos }</th>
                    <th className="border border-blue-400 py-2" onClick={() => setSortField('precio')}>{ Head.precio }</th>
                    <th className="border border-blue-400 py-2">Acciones</th>
                </tr>
            </thead>
            <tbody>

                {
                    userLoad.map( (user) => (
                        <tr key={user._id} className="text-left">
                            <td className="border border-blue-400 py-2 text-center pl-5">
                                <img className="object-cover rounded-full h-8" alt={user.name} src="http://www.jdevoto.cl/web/wp-content/uploads/2018/04/default-user-img.jpg" />
                            </td>
                            <td className="border border-blue-400 py-2 px-3">{user.name}</td>
                            <td className="border border-blue-400 py-2 px-3">{user.email}</td>
                            <td className="border border-blue-400 py-2 px-3">{user.telefono}</td>
                            <td className="border border-blue-400 py-2 px-3">Bonos</td>
                            <td className="border border-blue-400 py-2 px-3">precio</td>
                            <td className="border border-blue-400 py-2 px-3" >
                                <button onClick={handleSelectUser}> edit </button>
                            </td>
                        </tr>
                    ))
                }

            </tbody>
        </table>


    )
}