import React, { useEffect, useState } from "react";
import { obtenerMultimedia } from "../../services/MultimediaService";

export default function Multimedia() {
  //hooks
  useEffect(() => {
    getMultimedia();
  }, []); //segundo parametro son estados, cada vez que cambie el estado se ejecuta, si es un array vacio solo se ejecuta la primera vez

  const [MultimediaState, MultimediaStateSet] = useState([]);

  const getMultimedia = async () => {
    try {
      const { data } = await obtenerMultimedia();
      console.log(data);
      MultimediaStateSet(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <div>
        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckChecked"
            checked
          />
          <label class="form-check-label" for="flexSwitchCheckChecked">
            Checked switch checkbox input
          </label>
        </div>

        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Título</th>
              <th scope="col">Sinopsis</th>
              <th scope="col">Tipo</th>
              <th scope="col">Género</th>
              <th scope="col">Director</th>
              <th scope="col">Productora</th>
              <th scope="col">Fecha de Creación</th>
              <th scope="col">Estado</th>
            </tr>
          </thead>
          <tbody>
            {MultimediaState.map((multi, index) => {
              return (
                <tr>
                  <th scope="row">{index+1}</th>
                  <td>{multi.titulo}</td>
                  <td>{multi.sinopsis}</td>
                  <td>{multi.tipo}</td>
                  <td>{multi.genero}</td>
                  <td>{multi.director}</td>
                  <td>{multi.productora}</td>
                  <td>{multi.fechaCreacion}</td>
                  <td>{multi.activo}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
