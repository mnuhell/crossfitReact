

export const totalBonosPagar = (bonosState, bonos) => {

    let total = 0
    let bonosTotal = []
    if(bonos.length > 0 ) {

        bonos.map( bono => {
            bonosTotal.push(bonosState.find( bonoState => bonoState._id === bono.bono) || '')
        })

        bonosTotal.map( bono => total = total + bono.precio);
    } else {
        total = 0;
    }

    return total + '€';
}