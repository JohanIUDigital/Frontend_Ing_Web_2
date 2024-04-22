import React from 'react'

export default function ModalTipo({newTipoState, handleChange, saveTipo}) {
  return (
    <div
      className="modal fade"
      id="modalTipo"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Nuevo Tipo
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="recipient-name" className="col-form-label">
                  Nombre:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="recipient-nombre"
                  name="nombre"
                  value={newTipoState.nombre}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="recipient-name" className="col-form-label">
                  Descripción:
                </label>
                <textarea
                  className="form-control"
                  id="recipient-descripcion"
                  name="descripcion"
                  value={newTipoState.descripcion}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={saveTipo}
                >
                  Crear
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
