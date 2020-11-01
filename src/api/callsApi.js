import { AXIOSINSTANCE, LESSONS } from './endpoint/config';

export const getClases = async() => {

    await AXIOSINSTANCE.get(`${LESSONS}`).then( res => {
        console.log(res)
    }).then( clases => {
        console.log(clases)
    }).catch( (error) => {
        console.log(error)
    })


}