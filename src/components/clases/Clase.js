import React from 'react'


export const Clase = ( clase ) => {
    console.log(clase)
    return (
        <div className="clase rounded bg-blue-500 text-white px-5 py-5 h-50 relative">
        <div className="clase__usuarios block h-8">
            <span className="absolute top-0 left-0 clase__usuarios-maximos py-1 px-3 bg-orange-500 text-2xl">
                    { clase.maximo_alumnos}
            </span> 
            <span className="absolute top-0 right-0 clase__usuarios-count bg-green-500 py-1 px-3 text-2xl">
            {clase.users_count}
            </span>  
        </div>          

         <div className="">
            <h1 className="title uppercase text-center text-xl mb-2">{ clase.name }</h1>
         </div>   
    
        <div className="clase__usuarios-registrados my-3 h-20 grid sm:grid-cols-12 md:grid-cols-14 lg:grid-cols-14 xl:grid-cols-14 gap-1 gap-y-1">
            <img className="object-cover rounded-full h-6" alt="" src="http://www.jdevoto.cl/web/wp-content/uploads/2018/04/default-user-img.jpg" />
            <img className="object-cover rounded-full h-6" alt="" src="http://www.jdevoto.cl/web/wp-content/uploads/2018/04/default-user-img.jpg" />
            <img className="object-cover rounded-full h-6" alt="" src="http://www.jdevoto.cl/web/wp-content/uploads/2018/04/default-user-img.jpg" />
            <img className="object-cover rounded-full h-6" alt="" src="http://www.jdevoto.cl/web/wp-content/uploads/2018/04/default-user-img.jpg" />
        </div>

            <button className="bg-orange-500 block w-full py-2 absolute bottom-0 left-0"> Apuntate </button>

        </div>
        
    )
}