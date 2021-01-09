import { Link } from "react-router-dom"

export const Error = ( { header, body} ) => {

    return (
        <div className="h-screen grid justify-center items-center">
        <div>
            <div className="bg-blue-700 shadow-2xl text-red-700 px-4 py-3 rounded text-center" role="alert">
                <p className="block"><strong className="font-bold">{header}</strong></p>
                <p className="block"><span className="block sm:inline">{body}</span></p>
            </div>
            <button className="transition-all float-right flex items-center ease-in-out duration-1000 block mt-3 uppercase bg-blue-700 hover:bg-blue-900 text-white font-semibold hover:text-blue-50 text-xs py-2 px-10">
                <Link to="/user" className="text-center flex items-center inline-flex"> Volver</Link>
            </button>
        </div>
        </div>
        
    )

}