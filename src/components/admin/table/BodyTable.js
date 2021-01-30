import React from 'react';


export const BodyTable = (userLoad) => {



    return (
        <tbody>
        {
            userLoad.map( user =>
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
                        <button onClick={(user) => user._id}> edit </button>
                    </td>
                </tr>
            )
        }
        </tbody>
    )
}