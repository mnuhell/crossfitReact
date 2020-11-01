import React from 'react';
import { Link } from 'react-router-dom';
import { Error } from '../../components/alerts/Alerts';
//import { getClases } from '../../api/callsApi'; 


const UserReserva = () => {

    const clases = 0;

    console.log(clases);

    return (
        <div className="flex justify-center content-center setting">
            {clases ? 'Hay clases' : <Error header="Lo sentimos! " body=" No hay clases previstas para el dia de hoy" />}
        </div>
    )
}

export default UserReserva