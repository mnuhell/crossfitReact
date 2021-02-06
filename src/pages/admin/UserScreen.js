import React from 'react'
import {BonoScreenUserView} from "./BonoScreenUserView";
import {useDispatch, useSelector} from "react-redux";
import {setUserActive} from "../../actions/user";
import {uiOpenModal} from "../../actions/ui";
import {totalBonosPagar} from "../../helpers/totalBonosPagar";


export const UserScreen = ( user ) => {

    const dispatch = useDispatch();

    const { name, email, telefono, bonos } = user;
    const bonosState = useSelector( state => state.bonos.bonos)

    let total = totalBonosPagar(bonosState, bonos)

    const handleSelectUser = () => {

        dispatch( setUserActive( user ))
        dispatch( uiOpenModal())
    }

    return (
        <>
            <tr onClick={handleSelectUser} className="text-white border-blue-50 border-b-2 hover:bg-blue-600 hover:text-white transition-all ease-in-out duration-200 px-2 cursor-pointer">
                <td className="py-4 px-8 border border-white-600">
                        <img className="object-cover rounded-3xl w-16 overflow-hidden" alt={name} src="http://www.jdevoto.cl/web/wp-content/uploads/2018/04/default-user-img.jpg" />
                </td>
                <td className="py-4 px-8 border border-white-600">{ name }</td>
                <td className="py-4 px-8 border border-white-600">{ email }</td>
                <td className="py-4 px-8 border border-white-600">{ telefono }</td>
                <td className="py-4 px-8 border border-white-600">
                    {
                        ( bonos.length > 0) ? bonos.map(bono => <BonoScreenUserView
                            key={bono._id} {...user} {...bono} />) : "Sin bonos activos"
                    }
                </td>
                <td className="py-4 px-8 border border-white-600">
                        {
                            total
                        }
				</td>
				<td className="py-4 px-8 border border-white-600">
                        5
                </td>
            </tr>
        </>
    )


}
