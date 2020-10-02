import React, { Fragment, useState, useEffect } from 'react';
import Cita from './components/Cita';
import Formulario from './components/Formulario';


function App() {

  //Citas en local Storage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if (!citasIniciales) {
    citasIniciales = [];
  }

  //Array Citas
  const [citas, setCitas] = useState(citasIniciales);

  //Tomar cita actual y agrege la nueva
  const _crearCita = cita => {
    setCitas([
      ...citas,
      cita
    ]);
  }

  //Use Effect -> state cambia ->ComponentDidMount/ ComponentDidUpdate
  useEffect(() => {
    if (citasIniciales) {
      localStorage.setItem('citas', JSON.stringify(citas));
    } else {
      localStorage.setItem('citas', JSON.stringify([]));
    }
  }, [citas,citasIniciales])

  //funcion que elimina la cita por id
  const _eliminarCita = id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id)
    setCitas(nuevasCitas)
  }

  //administrar lista citas
  const _titulo = citas.length === 0 ? 'No hay citas' : ' Administra tus citas'

  return (
    <Fragment>
      <h2>Administrador de citas</h2>
      <div className="conteiner">
        <div className="row">
          <div className="one-half column">
            <Formulario
              crearCita={_crearCita}
            />
          </div>
          <div className="one-half column">
            <h2>{_titulo}</h2>
            {citas.map(cita => (
              <Cita
                key={cita.id}
                cita={cita}
                eliminarCita={_eliminarCita}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
