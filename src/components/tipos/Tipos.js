import React, { useEffect, useState } from "react";
import { crearTipo, obtenerTipos } from "../../services/TiposService";
import ErrorData from "../ui/ErrorData";
import TiposTable from "./TiposTable";
import BtnNewTipo from "./BtnNewTipo";
import ModalTipo from "./ModalTipo";

export default function Tipos() {
  const [TipoState, TipoStateSet] = useState([]); //hook que cambia estado, nombre de estado, funcion que activa cambio de estado
  const [TipoErrorState, TipoErrorStateSet] = useState(false); //hook de parametro error
  const [newTipoState, newTipoStateSet] = useState({
    nombre: "",
    descripcion: "",
    activo: true,
  });
  //hooks
  useEffect(() => {
    getTipo();
  }, []); //segundo parametro son estados, cada vez que cambie el estado se ejecuta, si es un array vacio solo se ejecuta la primera vez

  const getTipo = async () => {
    try {
      const { data } = await obtenerTipos(true);
      console.log(data);
      TipoStateSet(data);
      if (TipoErrorState) {
        TipoErrorStateSet(false);
      }
    } catch (error) {
      console.error(error);
      TipoErrorStateSet(true);
    }
  };

  /*
  
  const onChangeEstado = () => {
    MultiEstadoStateSet(!MultiEstadoState);
  };
  */

  const handleChange = (e) => {
    newTipoStateSet({
      ...newTipoState,
      [e.target.name]: e.target.value,
    });
  };

  const saveTipo = async () => {
    console.log("si entro saveTipo");
    const { data } = await crearTipo(newTipoState);
    console.log(data);
  };
  /* 
      <MultiToggle
        MultiEstadoState={MultiEstadoState}
        onChangeEstado={onChangeEstado}
      />
 */
  return (
    <>
      {TipoErrorState ? <ErrorData/> : <TiposTable TipoState={TipoState} />}
      <BtnNewTipo />
      <ModalTipo
        newTipoState={newTipoState}
        handleChange={handleChange}
        saveTipo={saveTipo}
      />
    </>
  );
}
