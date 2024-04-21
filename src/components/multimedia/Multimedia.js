import React, { useEffect } from "react";
import { axiosConfig } from "../../config/axiosConfig";
import { obtenerMultimedia } from "../../services/MultimediaService";

export default function Multimedia() {

  useEffect(()=>{
    getMultimedia();
  }, []);

  const getMultimedia = async () => {
    try {
      const data = await obtenerMultimedia();
      console.log(data.data);
    } catch (error) {
      console.error(error);
    }
  };
  return <div>Multimedia</div>;
}
