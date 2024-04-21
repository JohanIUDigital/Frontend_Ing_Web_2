import { axiosConfig } from "../config/axiosConfig";

const obtenerMultimedia = () => {
  return axiosConfig.get("producciones?estado=true", {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export {
    obtenerMultimedia
}