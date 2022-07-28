import React, { useContext } from "react";
import AppContext from "./AppContext";

const Historico = () => {
  const { status } = useContext(AppContext);
  const ListaOperaciones = status.OperacionesList;

  const LimpiarLocalStorage = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="container3">
      <div className="titleHistorial">
        Historial de Operaciones
        <button className="botonHistorial" onClick={LimpiarLocalStorage}>
          Borrar Historial
        </button>
      </div>
      <div className="container2">
        <ul>
          {ListaOperaciones.map((item, index) => (
            <li key={index}>
              <span>{item}</span>
              <hr />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Historico;
