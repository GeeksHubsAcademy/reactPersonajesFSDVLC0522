
import React, {useEffect,useState} from 'react';
import Clicker from '../../Components/Clicker/Clicker';
import './Home.css';

const Home = () => {

    //Hook
    const [variableMaravillosa, setVariableMaravillosa] = useState("");


    //El siguiente useEffect se ejecutará SÓLO la primera vez que se monta el componente.

    useEffect(()=>{
        console.log("La tienda quechua se ha montado");

        //Este useEffect es muy útil por ejemplo, para llamar a los datos del backend mediante axios, cuando entramos
        //en un container y queremos que de entrada, se muestre información en él. ej: perfil de usuario

        setVariableMaravillosa("Zumo de piña");
    },[]);

    useEffect(()=>{
        //Este useEffect se ejecutará SIEMPRE que se actualice un hook o se actualice un componente.

        if(variableMaravillosa === "Zumo de piña"){
            setVariableMaravillosa("Zumo de Manzana");
        }
        
        console.log("me he actualizado",variableMaravillosa);
    });

    return (
        <div className="homeDesign">
            hola soy Home
            <Clicker nombreBoton="Login" destino="/login"/>
        </div>
    )

};

export default Home;
