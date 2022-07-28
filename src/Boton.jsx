import React, { useContext } from "react";
import AppContext from "./AppContext";

const Boton = (props) => {
  const { status, setStatus } = useContext(AppContext);

  const funcionGeneral = (value) => {
    if (status.operadorA == 0 && status.Operacion == "") {
      if (status.textDisplay != "") {
        ejecutarCalculo(value);
      }
    } else {
      if (status.textDisplay == "") {
        setStatus({
          ...status,
          Operacion: value,
        });
      } else {
        ejecutarCalculo(value);
      }
    }
  };

  const ejecutarCalculo = (valorOperacion) => {
    if (status.operadorA == 0) {
      setStatus({
        ...status,
        operadorA: status.textDisplay,
        Operacion: valorOperacion,
        textDisplay: "",
      });
    } else {
      const numeroA = status.operadorA;
      const numeroB = Number(status.textDisplay);
      var resultadoOperacion = 0;
      switch (status.Operacion) {
        case "+":
          resultadoOperacion = Number(numeroA) + Number(numeroB);
          break;
        case "-":
          resultadoOperacion = Number(numeroA) - Number(numeroB);
          break;
        case "x":
          resultadoOperacion = Number(numeroA) * Number(numeroB);
          break;
        case "÷":
          if (numeroB == 0) {
            alert("No se puede dividir entre 0 Parce!");
            resultadoOperacion = 0;
            break;
          } else {
            resultadoOperacion = Number(numeroA) / Number(numeroB);
            break;
          }
      }

      let UltimaOperacion = numeroA + " " + status.Operacion + " " + numeroB + " = " + resultadoOperacion;
      const newOperacionesList = [...status.OperacionesList];
      newOperacionesList.unshift(UltimaOperacion);
      setStatus({
        ...status,
        operadorA: resultadoOperacion,
        Operacion: valorOperacion,
        textDisplay: "",
        txtDUO: UltimaOperacion,
        OperacionesList: newOperacionesList,
      });
      localStorage.setItem("RegHistorico", JSON.stringify(newOperacionesList));
    }
  };

  const handleChange = (value) => {
    if (Number(value) || value == 0) {
      const dato = parseInt(value);
      setStatus({
        ...status,
        textDisplay: status.textDisplay + dato,
      });
    } else {
      switch (value) {
        case "+":
        case "-":
        case "x":
        case "÷":
          funcionGeneral(value);
          break;
        case "=":
          funcionGeneral(status.Operacion);
          break;
        case "CE":
          setStatus({
            ...status,
            textDisplay: "",
          });
          break;
        case "C":
          setStatus({
            ...status,
            textDisplay: "",
            operadorA: 0,
            Operacion: "",
            txtDUO: "",
          });
          break;
        case "+/-":
          setStatus({
            ...status,
            textDisplay: String(status.textDisplay * -1),
          });
          break;
        case "%":
          setStatus({
            ...status,
            textDisplay: String(status.textDisplay / 100),
          });
          break;
        case ".":
          let datoingresado = status.textDisplay;
          let haypunto = false;
          for (let x of datoingresado) {
            if (x == ".") {
              haypunto = true;
              console.log(haypunto + x);
              break;
            }
          }
          if (haypunto != true) {
            setStatus({
              ...status,
              textDisplay: String(status.textDisplay + "."),
            });
          }
          break;
      }
    }
  };

  return (
    <div>
      <button className="boton" value={props.name}
        onClick={(event) => {
          handleChange(event.target.value);
        }}>{props.name}
      </button>
    </div>
  );
};

export default Boton;
