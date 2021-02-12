import React from 'react'
import {BonoScreenUserView} from "./BonoScreenUserView";
import {useDispatch, useSelector} from "react-redux";
import {setUserActive} from "../../actions/user";
import {uiOpenModal} from "../../actions/ui";
import {totalBonosPagar} from "../../helpers/totalBonosPagar";


export const UserScreen = ( user ) => {

    const dispatch = useDispatch();

    const { name, email, telefono, bonos, bonoState } = user;
    const bonosState = useSelector( state => state.bonos.bonos)

	let total = totalBonosPagar(bonosState, bonos)

	let bonoStateColors = 'bg-green-500 grid items-center text-center justify-items-center rounded-full h-10 w-10 relative';
	let bonoStateColorsDanger = 'bg-red-500 grid items-center text-center rounded-full h-10 w-10 justify-items-center';

    const handleSelectUser = () => {

        dispatch( setUserActive( user ))
        dispatch( uiOpenModal())
    }

    return (
        <>
            <tr onClick={handleSelectUser} className="text-white border-blue-50 border-b-2 hover:bg-blue-600 hover:text-white transition-all ease-in-out duration-200 px-2 cursor-pointer">
                <td className="py-2 px-8 border border-white-600">
                        <img className="object-cover rounded-3xl w-16 overflow-hidden" alt={name} src="http://www.jdevoto.cl/web/wp-content/uploads/2018/04/default-user-img.jpg" />
                </td>
                <td className="py-2 px-8 border border-white-600">{ name }</td>
                <td className="py-2 px-8 border border-white-600">{ email }</td>
                <td className="py-2 px-8 border border-white-600">{ telefono }</td>
                <td className="py-2 px-8 border border-white-600">
                    {
                        ( bonos.length > 0) ? bonos.map(bono => <BonoScreenUserView
                            key={bono._id} {...user} {...bono} />) : <span className="text-md">Sin bonos activos</span>
                    }
                </td>

				<td className="py-2 px-8 border border-white-600">
					{
						((bonoState !== 0)) ? <span className={(bonoState < 2) ? bonoStateColorsDanger : bonoStateColors}>{bonoState}</span>
							: <span> Sin clases </span>
						}

                </td>
				<td className="py-2 px-8 border border-white-600">
                        {
                            total
                        }
				</td>
            </tr>
        </>
    )


}
