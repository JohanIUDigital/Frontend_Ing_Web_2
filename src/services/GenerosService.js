import { axiosConfig } from "../config/axiosConfig";

const obtenerGeneros = (estado = true) => {
  return axiosConfig.get(`generos?activo=${estado}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const crearGenero = (data = {}) => {
  console.log("si entro crearGenero");

  const oData = {
    nombre: data.nombre,
    descripcion: data.descripcion,
    activo: true,
    fechaCreacion: new Date().toISOString(),
    fechaActualizacion: new Date().toISOString()
  };
  return axiosConfig.post(`generos`, oData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const modificarGenero = (id, data = {}) => {
  return axiosConfig.put(`generos/${id}`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const eliminarGenero = (id, data = {}) => {
  return axiosConfig.delete(
    `generos/${id}`,
    {},
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

export {
  obtenerGeneros,
  crearGenero,
  modificarGenero,
  eliminarGenero,
};
