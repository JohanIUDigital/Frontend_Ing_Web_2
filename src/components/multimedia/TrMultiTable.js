import React from "react";
import Dayjs from "dayjs";

export default function TrMultiTable({multi,index}) {
  return (
      <tr>
        <th scope="row">{index + 1}</th>
        <td>{multi.titulo}</td>
        <td>{multi.sinopsis}</td>
        <td>{multi.tipo}</td>
        <td>{multi.genero}</td>
        <td>{multi.director}</td>
        <td>{multi.productora}</td>
        <td>{Dayjs(multi.fechaCreacion).format("DD/MM/YYYY")}</td>
        <td>{multi.activo ? "Activo" : "Inactivo"}</td>
        <td><button type="button" className="btn btn-primary btn-sm">Editar</button></td>
        <td><button type="button" className="btn btn-secondary btn-sm">Eliminar</button></td>
      </tr>
  );
}
