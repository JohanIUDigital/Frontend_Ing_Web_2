import { axiosConfig } from "../config/axiosConfig";

const obtenerProductoras = (estado = true) => {
  return axiosConfig.get(`productoras?activo=${estado}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const crearProductora = (data = {}) => {
  console.log("si entro crearProductora");

  const oData = {
    nombre: data.nombre,
    slogan: data.slogan,
    descripcion: data.descripcion,
    activo: true,
    fechaCreacion: new Date().toISOString(),
    fechaActualizacion: new Date().toISOString()
  };
  return axiosConfig.post(`productoras`, oData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const modificarProductora = (id, data = {}) => {
  return axiosConfig.put(`productoras/${id}`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const eliminarProductora = (id, data = {}) => {
  return axiosConfig.delete(
    `productoras/${id}`,
    {},
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

export {
  obtenerProductoras,
  crearProductora,
  modificarProductora,
  eliminarProductora,
};
