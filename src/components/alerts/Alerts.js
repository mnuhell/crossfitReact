import { Link } from "react-router-dom"

export const Error = ( { header, body} ) => {

    return (
        <div className="h-screen grid justify-center items-center">
        <div>
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded text-center" role="alert">
                <p className="block"><strong className="font-bold">{header}</strong></p>
                <p className="block"><span className="block sm:inline">{body}</span></p>
            </div>
            <button className="text-center transition-all ease-in-out duration-1000 block mt-3 uppercase bg-transparent hover:bg-blue-600 text-blue-500 font-semibold hover:text-blue-50 text-xs py-1 px-6 border border-blue-500 hover:border-transparent rounded">
                <Link to="/user"> Volver</Link>
            </button>
        </div>
        </div>
        
    )

}