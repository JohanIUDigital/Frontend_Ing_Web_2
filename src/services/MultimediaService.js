import { axiosConfig } from "../config/axiosConfig";

const obtenerMultimedia = (estado = true) => {
  return axiosConfig.get(`producciones?activo=${estado}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export {
    obtenerMultimedia
}