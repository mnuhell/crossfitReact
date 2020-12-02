import React from 'react';


export const ClasesPending = ({ bonos }) => {


    return (
        <>
        {

            (bonos.length > 0 ) ?
                <div className = "font-body absolute -mt-2 -ml-8 rounded-full h-6 w-6 text-md bg-green-700 text-white flex items-center justify-center">
                    10
                </div>
                    :
                <div className = "font-body absolute -mt-2 -ml-8 rounded-full h-6 w-6 text-md bg-red-700 text-white flex items-center justify-center mr-2">
                    0
                </div>

        }
        </>

    )
}
