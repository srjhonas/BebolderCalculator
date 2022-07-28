import React, { useContext } from "react";
import AppContext from "./AppContext";

const DisplayPrincipal = () => {
  const { status } = useContext(AppContext);
  const numero = status.textDisplay;
  return (
    <div>
      <div className="titleDisplay">
        <small>Valor a Ingresar </small>
      </div>
      <div className="displayPrincipal"> {numero}</div>
    </div>
  );
};

export default DisplayPrincipal;
