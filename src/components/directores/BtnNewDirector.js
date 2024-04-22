import React from 'react'

export default function BtnNewDirector() {
  return (
    <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#modalDirector"
        data-bs-whatever="@getbootstrap"
      >
        Agregar Nuevo
      </button>
  )
}
