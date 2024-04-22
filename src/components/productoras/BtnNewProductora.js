import React from 'react'

export default function BtnNewProductora() {
  return (
    <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#modalProductora"
        data-bs-whatever="@getbootstrap"
      >
        Agregar Nuevo
      </button>
  )
}
