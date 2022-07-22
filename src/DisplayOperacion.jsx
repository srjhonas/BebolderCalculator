import React, { useContext } from 'react'
import AppContext from './AppContext';

const DisplayOperacion = () => {

    const {status} = useContext(AppContext);
    const numero1 = status.OperadorA;
    const tipoOperacion = status.Operacion;

  return (
    <div><small>Calculo Actual</small> {numero1} {tipoOperacion}</div>
  )
}

export default DisplayOperacion