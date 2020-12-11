import React from 'react';
import {UserScreen} from './UserScreen';



export const CalendarEvent = ({ event }) => {

    const { type, userclase:usersClase, users } = event;
    return (
        <div className="event">
            <h2>Tipo: <span className="text-white text-xl font-bold underline">{ type }</span></h2>
            <p >Usuarios por clase: <span className="text-white -mt-5 text-xl font-bold">{ usersClase}</span></p>
            { (users.length === 0) ? <p className="text-red-400">No hay usuarios en clase</p> : users.map(user => <UserScreen key={user.id} {...user} />) }
        </div>
    )
}