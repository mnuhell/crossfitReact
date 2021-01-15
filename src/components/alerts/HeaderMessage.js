import React from "react";



export const HeaderMessage = (clasesTotales ) => {

    if( clasesTotales.totalClasses === 1) {
        return (
                <div
                    className="alert-header font-body py-1 px-3 -mt-3 xs:py-4 xl:px-0 flex items-center uppercase font-bold justify-center mb-4 bg-yellow-500 text-blue-900">
                    <div>
                        <div
                            className="w-4 float-left justify-center mr-2 xs:py-5 xs:h-12 lg:h-6 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                        </div>
                        <div className="flex items-center xs:h-12 lg:h-6">
                            Tu bono esta próximo a agotarse. No olvides renovarlo en tu próxima visita al box
                        </div>

                    </div>

                </div>

            )
    }

    if( clasesTotales.totalClasses === 0) {
        return (
            <div
                className="alert-header font-body py-1 px-3 -mt-3 xs:py-4 xl:px-0 flex items-center uppercase font-bold justify-center mb-4 bg-yellow-500 text-blue-900">
                <div>
                    <div
                        className="w-4 float-left justify-center mr-2 xs:py-5 xs:h-12 lg:h-6 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                    </div>
                    <div className="flex items-center xs:h-12 lg:h-6">
                        Tu bono esta agotado, renuevalo cuanto antes para pdoer seguir reservando tús clases
                    </div>

                </div>

            </div>

        )
    }

    return '';


}