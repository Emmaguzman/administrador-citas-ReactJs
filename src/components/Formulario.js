import React, { Fragment,useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const Formulario = ({crearCita}) => {

    const [cita,setCita]=useState({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''
    });
    const [error,setError]=useState(false);

    const {mascota,propietario,fecha,hora,sintomas}=cita;
    const actualizarCita=e=>{
       setCita({
           ...cita,
           [e.target.name]:e.target.value
       })
    }
    const _crearCita=e=>{     
        e.preventDefault();
        //valildar 
        if(mascota.trim()===''||
           propietario.trim()===''||
           fecha.trim()===''||
           hora.trim()===''||
           sintomas.trim()===''){
               setError(true);
               return;
           }
      setError(false);
      
     cita.id=uuidv4();
     //console.log(cita);

     //crearCita
     crearCita(cita);
     //reiniciar form
        setCita({
            mascota:'',
            propietario:'',
            fecha:'',
            hora:'',
            sintomas:''
        })

    }

    return (
        <Fragment>
            <h2>Crear Cita</h2>
            {error?<p className="alerta-error">Todos los campos son obligatorios</p> :null}
            <form
            onSubmit={_crearCita}
            >
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={actualizarCita}
                    value={mascota}
                />
                <label>Nombre Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre dueño mascota"
                    onChange={actualizarCita}
                    value={propietario}
                />
                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarCita}
                    value={fecha}
                   

                />
                   <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarCita}
                    value={hora}
                   

                />
                <label>Sintomas</label>
                <textarea
                    name="sintomas"
                    className="u-full-width"
                    onChange={actualizarCita}
                    value={sintomas}
                  
                />

                <button
                    type="submit"
                    className="u-full-width button-primary"
                    
                >Agregar Cita</button>

            </form>
        </Fragment>
    );
}
Formulario.propTypes={
    crearCita:PropTypes.func.isRequired
}

export default Formulario;