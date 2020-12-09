import React from 'react';
import {UserScreen} from './UserScreen';



export const CalendarEvent = ({ event }) => {

    const { type, usersClase, users } = event;
    return (
        <div className="">
            <h2 className="text-white "> { type }</h2>
            <p>Usuarios por clase { usersClase} </p>
            { (users.length === 0) ? <p>No hay usuarios en clase</p> : users.map(user => <UserScreen key={user.id} {...user} />) }
        </div>
    )
}