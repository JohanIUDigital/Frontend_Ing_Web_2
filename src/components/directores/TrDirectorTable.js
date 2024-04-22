import  Dayjs  from 'dayjs'
import React from 'react'

export default function TrDirectorTable({director, index}) {
  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{director.cedula}</td>
      <td>{director.nombre}</td>
      <td>{Dayjs(director.fechaCreacion).format("DD/MM/YYYY")}</td>
      <td>{director.activo ? "Activo" : "Inactivo"}</td>
      <td><button type="button" className="btn btn-primary btn-sm">Editar</button></td>
      <td><button type="button" className="btn btn-secondary btn-sm">Eliminar</button></td>
    </tr>
  )
}
