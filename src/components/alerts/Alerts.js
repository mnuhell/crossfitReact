import { Link } from "react-router-dom"

export const Error = ( { header, body} ) => {

    return (
        <div className="h-screen grid justify-center items-center">
            <div className="px-3 py-3">
                <div className="bg-blue-700 shadow-2xl text-red-700 px-4 py-3 rounded text-center" role="alert">
                    <p className="block"><strong className="font-bold">{header}</strong></p>
                    <p className="block"><span className="block sm:inline">{body}</span></p>
                </div>
                <button className="transition-all ease-in-out duration-1000 w-full mt-3 uppercase bg-blue-700 hover:bg-blue-900 text-white font-semibold hover:text-blue-50 text-xs py-2">
                    <Link to="/user">Volver</Link>
                </button>
            </div>
        </div>
        
    )

}