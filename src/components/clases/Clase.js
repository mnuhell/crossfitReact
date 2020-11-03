import React from 'react'


export const Clase = ( clase ) => {

    return (
        <div className="flex justify-center content-center pt-20 setting">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <h1>{ clase.name }</h1>
            </div>
        </div>
        
    )
}