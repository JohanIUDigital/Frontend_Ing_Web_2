import React, { useEffect, useState } from 'react'
import { crearProductora, obtenerProductoras } from '../../services/ProdutorasSerice';
import ErrorData from '../ui/ErrorData';
import ProductorasTable from './ProductorasTable';
import BtnNewProductora from './BtnNewProductora';
import ModalProductora from './ModalProductora';

export default function Productora() {
  const [ProductoraState, ProductoraStateSet] = useState([]); //hook que cambia estado, nombre de estado, funcion que activa cambio de estado
  const [ProductoraErrorState, ProductoraErrorStateSet] = useState(false); //hook de parametro error
  const [newProductoraState, newProductoraStateSet] = useState({
    nombre: "",
    slogan: "",
    descripcion: "",
    activo: true
  });
  //hooks
  useEffect(() => {
    getProductora();
  }, []); //segundo parametro son estados, cada vez que cambie el estado se ejecuta, si es un array vacio solo se ejecuta la primera vez

  const getProductora = async () => {
    try {
      const { data } = await obtenerProductoras(true);
      console.log(data);
      ProductoraStateSet(data);
      if (ProductoraErrorState) {
        ProductoraErrorStateSet(false);
      }
    } catch (error) {
      console.error(error);
      ProductoraErrorStateSet(true);
    }
  };

  /*
  
  const onChangeEstado = () => {
    MultiEstadoStateSet(!MultiEstadoState);
  };
  */

  const handleChange = (e) => {
    newProductoraStateSet({
      ...newProductoraState,
      [e.target.name]: e.target.value,
    });
  };

  const saveProductora = async () => {
    console.log("si entro saveProductora");
    const { data } = await crearProductora(newProductoraState);
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
      {ProductoraErrorState ? (
        <ErrorData />
      ) : (
        <ProductorasTable ProductoraState={ProductoraState} />
      )}
      <BtnNewProductora/>
      <ModalProductora newProductoraState={newProductoraState} handleChange={handleChange} saveProductora={saveProductora} />
    </>
  );
}