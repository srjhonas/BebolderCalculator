import React, { useContext } from "react";
import AppContext from "./AppContext";

const DisplayOperacion = () => {
  const { status } = useContext(AppContext);
  const numero1 = status.operadorA;
  const tipoOperacion = status.Operacion;

  return (
    <div>
      <div className="titleDisplay">
        <small>Calculo Actual</small>
      </div>
      <div className="calculoActual">
        {numero1} <big> {tipoOperacion} </big>
      </div>
    </div>
  );
};

export default DisplayOperacion;
