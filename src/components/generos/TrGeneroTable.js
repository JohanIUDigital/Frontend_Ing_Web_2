import  Dayjs  from 'dayjs'
import React from 'react'

export default function TrGeneroTable({genero, index}) {
  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{genero.nombre}</td>
      <td>{genero.descripcion}</td>
      <td>{Dayjs(genero.fechaCreacion).format("DD/MM/YYYY")}</td>
      <td>{genero.activo ? "Activo" : "Inactivo"}</td>
      <td><button type="button" className="btn btn-primary btn-sm">Editar</button></td>
      <td><button type="button" className="btn btn-secondary btn-sm">Eliminar</button></td>
    </tr>
  )
}
