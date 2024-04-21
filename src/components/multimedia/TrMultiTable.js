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
      </tr>
  );
}
