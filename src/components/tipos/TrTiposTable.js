import  Dayjs  from 'dayjs'
import React from 'react'

export default function TrTiposTable({tipo, index}) {
  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{tipo.nombre}</td>
      <td>{tipo.descripcion}</td>
      <td>{Dayjs(tipo.fechaCreacion).format("DD/MM/YYYY")}</td>
      <td>{tipo.activo ? "Activo" : "Inactivo"}</td>
      <td><button type="button" className="btn btn-primary btn-sm">Editar</button></td>
      <td><button type="button" className="btn btn-secondary btn-sm">Eliminar</button></td>
    </tr>
  )
}
