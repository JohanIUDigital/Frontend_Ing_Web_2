import { axiosConfig } from "../config/axiosConfig";

const obtenerMultimedia = (estado = true) => {
  return axiosConfig.get(`producciones?activo=${estado}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const crearMultimedia = (data = {}) => {
  console.log("si entro crearMultimedia");

  const oData = {
    titulo: data.Titulo,
    sinopsis: data.Sinopsis,
    link: "www.cuevana.com/",
    portada: "null",
    anio: "2024",
    genero: data.Genero,
    genero_id: Date.now() + 1,
    director: data.Director,
    director_id: Date.now() + 2,
    productora: data.Productora,
    productora_id: Date.now() + 3,
    tipo: data.Tipo,
    tipo_id: Date.now() + 4,
    activo: true,
    fechaCreacion: new Date().toISOString(),
    fechaActualizacion: new Date().toISOString(),
  };
  return axiosConfig.post(`producciones`, oData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const modificarMultimedia = (id, data = {}) => {
  return axiosConfig.put(`producciones/${id}`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const eliminarMultimedia = (id, data = {}) => {
  return axiosConfig.delete(
    `producciones/${id}`,
    {},
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

export {
  obtenerMultimedia,
  crearMultimedia,
  modificarMultimedia,
  eliminarMultimedia,
};
