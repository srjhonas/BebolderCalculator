import React, { useState } from "react";
import PanelBotones from "./PanelBotones";
import AppContext from "./AppContext";
import DisplayPrincipal from "./DisplayPrincipal";
import DisplayOperacion from "./DisplayOperacion";
import DisplayUltimaOperacion from "./DisplayUltimaOperacion";
import Historico from "./Historico";
import Credenciales from "./Credenciales";

const App = () => {
  const localStorageItems = localStorage.getItem("RegHistorico");

  if (!localStorageItems) {
    localStorage.setItem("RegHistorico", JSON.stringify([]));
  }

  const [status, setStatus] = useState({
    textDisplay: "",
    operadorA: 0,
    Operacion: "",
    txtDUO: "",
    OperacionesList: JSON.parse(localStorage.getItem("RegHistorico")),
  });

  return (
    <AppContext.Provider value={{ status, setStatus }}>
      <div className="container">
        
        <div className="panel-botones">
          <div>
            <DisplayUltimaOperacion></DisplayUltimaOperacion>
            <DisplayOperacion></DisplayOperacion>
            <DisplayPrincipal></DisplayPrincipal>
            <PanelBotones></PanelBotones>
          </div>
        </div>
        <Historico></Historico>
      </div>
    </AppContext.Provider>
  );
};

export default App;
