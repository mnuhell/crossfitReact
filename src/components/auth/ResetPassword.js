import React from 'react';

export const ResetPassword = () => {

    const onSubmitPassordReset = (e) => {
        e.preventDefault();
        console.log( " reset password ");
    }

    return (

        <div className="reset-password h-screen flex items-center justify-center login bg-blue-500 font-body py-6">
            <form onSubmit={onSubmitPassordReset} className=" lg:w-1/6 gap-y-6 grid ">

                <div className="reset-password__password flex flex-col">

                    <label htmlFor="" className="text-white uppercase">Contraseña</label>
                    <input type="password" name="password" placeholder="*******" className="py-1 px-2" />

                </div>

                <div className="reset-password__password">

                    <label htmlFor="" className="text-white uppercase">Repite la contraseña</label>
                    <input type="password" name="repit-password" placeholder="*******" className="py-1 px-2" />

                </div>
                <button className="btn py-2 px-4 bg-blue-900 text-white" type="submit"> Cambiar </button>
            </form>

        </div>

    )
}
