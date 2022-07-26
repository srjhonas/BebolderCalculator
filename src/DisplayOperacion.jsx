import React, { useContext } from 'react'
import AppContext from './AppContext';

const DisplayOperacion = () => {

    const {status} = useContext(AppContext);
    const numero1 = status.OperadorA;
    const tipoOperacion = status.Operacion;

  return (
    <div >
      <div className='titleDisplay'><small>Calculo Actual</small></div> 
      <div className='calculoActual'>{numero1} {tipoOperacion}</div>
      </div>
  )
}

export default DisplayOperacion