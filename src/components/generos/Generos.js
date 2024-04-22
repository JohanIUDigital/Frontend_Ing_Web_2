import React, { useEffect, useState } from 'react'
import { crearGenero, obtenerGeneros } from '../../services/GenerosService';
import ErrorData from '../ui/ErrorData';
import GenerosTable from './GenerosTable';
import BtnNewGenero from './BtnNewGenero';
import ModalGenero from './ModalGenero';

export default function Generos() {
  const [GeneroState, GeneroStateSet] = useState([]); //hook que cambia estado, nombre de estado, funcion que activa cambio de estado
  const [GeneroErrorState, GeneroErrorStateSet] = useState(false); //hook de parametro error
  const [newGeneroState, newGeneroStateSet] = useState({
    nombre: "",
    descripcion: "",
    activo: true
  });
  //hooks
  useEffect(() => {
    getGenero();
  }, []); //segundo parametro son estados, cada vez que cambie el estado se ejecuta, si es un array vacio solo se ejecuta la primera vez

  const getGenero = async () => {
    try {
      const { data } = await obtenerGeneros(true);
      console.log(data);
      GeneroStateSet(data);
      if (GeneroErrorState) {
        GeneroErrorStateSet(false);
      }
    } catch (error) {
      console.error(error);
      GeneroErrorStateSet(true);
    }
  };

  /*
  
  const onChangeEstado = () => {
    MultiEstadoStateSet(!MultiEstadoState);
  };
  */

  const handleChange = (e) => {
    newGeneroStateSet({
      ...newGeneroState,
      [e.target.name]: e.target.value,
    });
  };

  const saveGenero = async () => {
    console.log("si entro saveGenero");
    const { data } = await crearGenero(newGeneroState);
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
      {GeneroErrorState ? (
        <ErrorData />
      ) : (
        <GenerosTable GeneroState={GeneroState} />
      )}
      <BtnNewGenero/>
      <ModalGenero newGeneroState={newGeneroState} handleChange={handleChange} saveGenero={saveGenero} />
    </>
  );
}
