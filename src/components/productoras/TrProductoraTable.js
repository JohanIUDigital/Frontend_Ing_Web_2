import  Dayjs  from 'dayjs'
import React from 'react'

export default function TrProductoraTable({productora, index}) {
  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{productora.nombre}</td>
      <td>{productora.slogan}</td>
      <td>{productora.descripcion}</td>
      <td>{Dayjs(productora.fechaCreacion).format("DD/MM/YYYY")}</td>
      <td>{productora.activo ? "Activo" : "Inactivo"}</td>
      <td><button type="button" className="btn btn-primary btn-sm">Editar</button></td>
      <td><button type="button" className="btn btn-secondary btn-sm">Eliminar</button></td>
    </tr>
  )
}
