import React, { useContext } from 'react'
import AppContext from './AppContext';

const DisplayUltimaOperacion = () => {

    const {status} = useContext(AppContext);
    const operacionCompleta = status.txtDUO;
    



  return (
    <div>Ultima Operacion {operacionCompleta}</div>
  )
}

export default DisplayUltimaOperacion