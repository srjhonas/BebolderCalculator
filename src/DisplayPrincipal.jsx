import React, { useContext } from 'react'
import AppContext from './AppContext';

const DisplayPrincipal = () => {

    const {status} = useContext(AppContext);
    const numero = status.textDisplay
  return (
    <div><small>DisplayPrincipal</small> {numero}</div>
  )
}

export default DisplayPrincipal