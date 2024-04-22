import { axiosConfig } from "../config/axiosConfig";

const obtenerDirectores = (estado = true) => {
  return axiosConfig.get(`directores?activo=${estado}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const crearDirector = (data = {}) => {
  console.log("si entro crearDirector");

  const oData = {
    nombre: data.nombre,
    cedula: data.cedula,
    activo: true,
    fechaCreacion: new Date().toISOString(),
    fechaActualizacion: new Date().toISOString()
  };
  return axiosConfig.post(`directores`, oData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const modificarDirector = (id, data = {}) => {
  return axiosConfig.put(`directores/${id}`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const eliminarDirector = (id, data = {}) => {
  return axiosConfig.delete(
    `directores/${id}`,
    {},
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

export {
  obtenerDirectores,
  crearDirector,
  modificarDirector,
  eliminarDirector,
};
