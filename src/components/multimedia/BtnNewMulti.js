import React from 'react'

export default function ButtonNewM() {
  return (
    <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#modalMultimedia"
        data-bs-whatever="@getbootstrap"
      >
        Agregar Nuevo
      </button>
  )
}
