import React from 'react';
import {UserScreen} from './UserScreen';



export const CalendarEvent = ({ event }) => {

    const { type, userclase:usersClase, users } = event;
    return (
        <div className="event">
            <h2>Tipo: <span className="text-white text-md font-bold underline">{ type }</span></h2>
            <p >Usuarios por clase: <span className="text-white -mt-2 text-md font-bold">{ usersClase}</span></p>
            { (users.length === 0) ? <p className="text-blue-500 text-sm">No hay usuarios en clase</p> : users.map(user => <UserScreen key={user.id} {...user} />) }
        </div>
    )
}