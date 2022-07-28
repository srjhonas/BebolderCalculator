import React, { useContext } from "react";
import AppContext from "./AppContext";

const DisplayUltimaOperacion = () => {
  const { status } = useContext(AppContext);
  const operacionCompleta = status.txtDUO;

  return (
    <div>
      <div className="titleDisplay">
        <small> Última Operación </small>
      </div>
      <div className="ultimaOperacion">{operacionCompleta}</div>
    </div>
  );
};

export default DisplayUltimaOperacion;
