import React, { useContext } from 'react'
import AppContext from './AppContext';

const Historico = () => {

    const {status} = useContext(AppContext);
    const ListaOperaciones = status.OperacionesList
  return (
    <div>
         <table className="table">
        <thead>
          <tr>
            <th>Historico</th>
          </tr>
        </thead>
        <tbody>
          {ListaOperaciones.map((item, index) => (
            <tr key={index}>
              <td>{item}</td>
             
                <td>
                <button type="button" className="btn btn-primary">
                  Eliminar
                </button>
              </td> 
            </tr>
          ))}
        </tbody>
      </table>


    </div>
  )
}

export default Historico