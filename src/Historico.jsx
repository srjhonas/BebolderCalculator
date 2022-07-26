import React, { useContext } from 'react'
import AppContext from './AppContext';

const Historico = () => {

    const {status} = useContext(AppContext);
    const ListaOperaciones = status.OperacionesList
  return (
    <div className='container2'>
     <div>Historial de Operaciones</div>
     <div>     
      <ul>
      {ListaOperaciones.map((item, index) => (
            <li key={index}>
              <span>{item}</span>
            </li>
          ))}
      </ul>
      </div>

    </div>
  )
}

export default Historico