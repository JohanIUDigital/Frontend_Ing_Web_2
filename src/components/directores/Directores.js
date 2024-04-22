import React, { useEffect, useState } from 'react'
import { crearDirector, obtenerDirectores } from '../../services/DirectoresService';
import ErrorData from '../ui/ErrorData';
import DirectoresTable from './DirectoresTable';
import BtnNewDirector from './BtnNewDirector';
import ModalDirector from './ModalDirector';

export default function Directores() {
  const [DirectorState, DirectorStateSet] = useState([]); //hook que cambia estado, nombre de estado, funcion que activa cambio de estado
  const [DirectorErrorState, DirectorErrorStateSet] = useState(false); //hook de parametro error
  const [newDirectorState, newDirectorStateSet] = useState({
    cedula: "",
    nombre: "",
    activo: true
  });
  //hooks
  useEffect(() => {
    getDirector();
  }, []); //segundo parametro son estados, cada vez que cambie el estado se ejecuta, si es un array vacio solo se ejecuta la primera vez

  const getDirector = async () => {
    try {
      const { data } = await obtenerDirectores(true);
      console.log(data);
      DirectorStateSet(data);
      if (DirectorErrorState) {
        DirectorErrorStateSet(false);
      }
    } catch (error) {
      console.error(error);
      DirectorErrorStateSet(true);
    }
  };

  /*
  
  const onChangeEstado = () => {
    MultiEstadoStateSet(!MultiEstadoState);
  };
  */

  const handleChange = (e) => {
    newDirectorStateSet({
      ...newDirectorState,
      [e.target.name]: e.target.value,
    });
  };

  const saveDirector = async () => {
    console.log("si entro saveDirector");
    const { data } = await crearDirector(newDirectorState);
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
      {DirectorErrorState ? (
        <ErrorData />
      ) : (
        <DirectoresTable DirectorState={DirectorState} />
      )}
      <BtnNewDirector/>
      <ModalDirector newDirectorState={newDirectorState} handleChange={handleChange} saveDirector={saveDirector} />
    </>
  );
}
