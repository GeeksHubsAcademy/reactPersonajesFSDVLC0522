

import React from 'react';
import './Clicker.css';
import {useNavigate} from 'react-router-dom';
 
const Clicker = (props) => {

    //Recordaros que useNavigate tiene que instanciarse

    let variableNavega = useNavigate();

    //Nosotros aqui podemos generar funciones

    const viaja = () => {

        setTimeout(()=>{

            variableNavega(props.destino);
        },250)
    }


     return (
         <div className='clickerDesign' onClick={()=>viaja()}>
            {props.nombreBoton}
        </div>
     )
}
export default Clicker;