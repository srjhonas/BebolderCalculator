import React, { useContext } from "react";
import AppContext from "./AppContext";

const Boton = (props) => {

  const { status, setStatus } = useContext(AppContext);

  const funcionGeneral = (value) => {
    if (status.OperadorA == 0 && status.Operacion == '') {
      if (status.textDisplay != '') {
        ejecutarCalculo(value)
      }
    } else  {
      if (status.textDisplay == '') {
        setStatus({
          ...status,
          Operacion: value,
        });
      } else {
        ejecutarCalculo(value)
      }
    }
  }

  const ejecutarCalculo = (valorOperacion) => {
    if (status.OperadorA == 0) {
      setStatus({
        ...status,
        OperadorA: status.textDisplay,
        Operacion: valorOperacion,
        textDisplay: "",
      });
    } else {
      const numeroA = status.OperadorA;
      const numeroB = parseInt(status.textDisplay);
      var resultadoOperacion = 0;
      switch (status.Operacion) {
        case "+":
          resultadoOperacion = Number(numeroA) + Number(numeroB);
          console.log("resul", resultadoOperacion);
          break;
        case "-":
          resultadoOperacion = numeroA - numeroB;
          console.log("resul", resultadoOperacion);
          break;
        case "x":
          resultadoOperacion = numeroA * numeroB;
          console.log("resul", resultadoOperacion);
          break;
        case "÷":
          resultadoOperacion = numeroA / numeroB;
          console.log("resul", resultadoOperacion);
          break;
      }

      let UltimaOperacion = numeroA + status.Operacion + numeroB + '=' + resultadoOperacion;   
      
      const newOperacionesList = [...status.OperacionesList];
      newOperacionesList.unshift(UltimaOperacion);
      setStatus({
        ...status,
        OperadorA: resultadoOperacion,
        Operacion: valorOperacion,
        textDisplay: "",
        txtDUO: UltimaOperacion,
        OperacionesList: newOperacionesList
      });
      localStorage.setItem("RegHistorico", JSON.stringify(newOperacionesList));
      

    }
  };

  const handleChange = (value) => {
    if (Number(value) || value == 0 ) {
      
      const dato = parseInt(value);
      console.log("Value", dato);
      setStatus({
        ...status,
        textDisplay: status.textDisplay + dato,
      });
      
    } else {
      console.log("Ingreso de Operacion" , value);
      switch (value) {
        case "+":
        case "-":
        case "x":
        case "÷": 
          funcionGeneral(value)
          break;
        case "=": 
          funcionGeneral(status.Operacion)
          break;
        case "CE": 
        setStatus({
          ...status,
          textDisplay: '',
          });  
          break;
        case "C":
          setStatus({
            ...status,
            textDisplay: '',
            OperadorA: 0,
            OperadorB: 0,
            txtDUO:'',
          }); 
          break;
        case "+/-":
            let Xmenos1 = Number(status.textDisplay) * (-1); 
            setStatus({
              ...status,
              textDisplay: Xmenos1,
            }); 
            break;  
      }

    }
     
  };

  return (
    <div>
      <button value={props.name} onClick={(event) => {
          handleChange(event.target.value);
        }}>{props.name}</button>
    </div>
  );
};

export default Boton;
