import React from 'react'
import {BonoScreenUser} from "./BonoScreenUser";
import {useDispatch} from "react-redux";
import {setUserActive} from "../../actions/user";
import {uiOpenModal} from "../../actions/ui";


export const UserScreen = ( user ) => {

    const dispatch = useDispatch()
    const { name, email, telefono, bonos } = user;

    const totalPagar = () => {

        let total = 0
        if(bonos.length > 0 ) {
            bonos.map( bono => total = total + bono.precio)
        } else {
            total = 0;
        }

        return total + '€';
    }

    const handleSelectUser = () => {

        dispatch( setUserActive( user ))
        dispatch( uiOpenModal())
    }



    return (

        <div onClick={handleSelectUser} className="border-blue-50 border-b-2 table-flex min-h-full hover:bg-blue-200 hover:text-white transition-all ease-in-out duration-200 rounded px-2 cursor-pointer">
            <div className="grid table__header sm:justify-start container mx-auto py-5">
                <p><img className="object-cover rounded-full h-12" alt={name} src="http://www.jdevoto.cl/web/wp-content/uploads/2018/04/default-user-img.jpg" /></p>
                <p className="flex items-center uppercase" >{ name }</p>
                <p className="flex items-center">{ email }</p>
                <p className="flex items-center">{ telefono }</p>
                <div className="flex items-center">
                    {
                        ( bonos.length > 0) ? bonos.map(bono => <BonoScreenUser
                            key={bono._id} {...user} {...bono} />) : "Sin bonos activos"
                    }
                </div>
                <div className="flex flex-col mb-4 items-center">
                    <span className="text-xl font-bold">

                        {
                            totalPagar()
                        }

                    </span>

                </div>
            </div>

        </div>


    )


}