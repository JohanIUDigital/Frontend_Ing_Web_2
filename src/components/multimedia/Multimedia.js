import React, { useEffect, useState } from "react";
import {
  crearMultimedia,
  obtenerMultimedia,
} from "../../services/MultimediaService";
import MultiTable from "./MultiTable";
import ErrorData from "../ui/ErrorData";
import MultiToggle from "./MultiToggle";
import ButtonNewM from "./ButtonNewM";
import ModalMultimedia from "./ModalMultimedia";

export default function Multimedia() {
  const [MultimediaState, MultimediaStateSet] = useState([]); //hook que cambia estado, nombre de estado, funcion que activa cambio de estado
  const [MultiEstadoState, MultiEstadoStateSet] = useState(false); //hook de parametro estadoa activo/inactivo
  const [MultiErrorState, MultiErrorStateSet] = useState(false); //hook de parametro error
  const [newMultiState, newMultiSet] = useState({
    Titulo: "",
    Sinopsis: "",
    Tipo: "",
    Genero: "",
    Director: "",
    Productora: "",
    activo: true,
  });
  //hooks
  useEffect(() => {
    getMultimedia();
  }, [MultiEstadoState]); //segundo parametro son estados, cada vez que cambie el estado se ejecuta, si es un array vacio solo se ejecuta la primera vez

  const getMultimedia = async () => {
    try {
      const { data } = await obtenerMultimedia(MultiEstadoState);
      console.log(data);
      MultimediaStateSet(data);
      if (MultiErrorState) {
        MultiErrorStateSet(false);
      }
    } catch (error) {
      console.error(error);
      MultiErrorStateSet(true);
    }
  };

  /*
  
  const onChangeEstado = () => {
    MultiEstadoStateSet(!MultiEstadoState);
  };
  */

  const handleChange = (e) => {
    newMultiSet({
      ...newMultiState,
      [e.target.name]: e.target.value,
    });
  };

  const saveMultimedia = async () => {
    console.log("si entro saveMultimedia");
    const { data } = await crearMultimedia(newMultiState);
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
      {MultiErrorState ? (
        <ErrorData />
      ) : (
        <MultiTable MultimediaState={MultimediaState} />
      )}
      <ButtonNewM></ButtonNewM>
      <ModalMultimedia newMultiState={newMultiState} handleChange={handleChange} saveMultimedia={saveMultimedia}></ModalMultimedia>
    </>
  );
}