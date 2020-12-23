import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {BonoScreen} from "./BonoScreen";
import {loading} from "../../actions/loading";
import {LoadingApp} from "../../components/LoadingApp";
import {uiOpenModal} from "../../actions/ui";
import {BonoModal} from "./BonoModal";





export const BonosScreen = () => {

    const bonos = useSelector( state => state.bonos.bonos);
    const active = useSelector(state => state.loading.active);
    const dispatch = useDispatch()
    setTimeout(() => {
        dispatch(loading(false))
    }, 1000)

    const handleNewBono = () => {

        dispatch( uiOpenModal())

    }
    
    return (
        (active) ? <LoadingApp /> :
        <section className="container mx-auto bono font-body">
            <h1 className="pt-32 grid items-center font-bold text-2xl w-full justify-items-center uppercase "> Bonos </h1>
            <hr />
            <div className="bono__button flex mx-3 items-center float-right mt-10 bg-blue-500 rounded">
                <button onClick={ handleNewBono } className="px-2 grid
                text-white py-2 uppercase font-bold">
                    Nuevo bono
                </button>
                <span>
                    <svg className="w-4 h-4 mr-1 text-white flex items-center justify-items-center" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"/></svg>
                </span>
            </div>

            <section className="w-full px-3 pt-32 font-body pb-32 ">
                <div className="container mx-auto flex-col items-center table-container py-3">
                    <div className="grid shadow-2xl table__header--bonos justify-between bg-blue-500 text-white uppercase rounded px-5 py-5">
                        <span>nombre</span>
                        <span>días</span>
                        <span>Precio</span>
                        <span>Acciones</span>
                    </div>
                        {
                           bonos.map( bono => <BonoScreen key={bono._id} { ...bono } />)
                        }
                </div>
            </section>

            <BonoModal />

        </section>
    )

}