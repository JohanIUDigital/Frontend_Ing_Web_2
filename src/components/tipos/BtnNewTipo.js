import React from 'react'

export default function BtnNewTipo() {
  return (
    <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#modalTipo"
        data-bs-whatever="@getbootstrap"
      >
        Agregar Nuevo
      </button>
  )
}
