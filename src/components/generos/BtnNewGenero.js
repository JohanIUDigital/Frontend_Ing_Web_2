import React from 'react'

export default function BtnNewGenero() {
  return (
    <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#modalGenero"
        data-bs-whatever="@getbootstrap"
      >
        Agregar Nuevo
      </button>
  )
}
