import { axiosConfig } from "../config/axiosConfig";

const obtenerTipos = (estado = true) => {
  return axiosConfig.get(`tipos?activo=${estado}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const crearTipo = (data = {}) => {
  console.log("si entro crearTipo");

  const oData = {
    nombre: data.nombre,
    descripcion: data.descripcion,
    activo: true,
    fechaCreacion: new Date().toISOString(),
    fechaActualizacion: new Date().toISOString()
  };
  return axiosConfig.post(`tipos`, oData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const modificarTipo = (id, data = {}) => {
  return axiosConfig.put(`tipos/${id}`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const eliminarTipo = (id, data = {}) => {
  return axiosConfig.delete(
    `tipos/${id}`,
    {},
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

export {
  obtenerTipos,
  crearTipo,
  modificarTipo,
  eliminarTipo,
};
