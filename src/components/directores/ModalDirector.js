import React from 'react'

export default function ModalDirector({newDirectorState, handleChange, saveDirector}) {
  return (
    <div
      className="modal fade"
      id="modalDirector"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Nuevo Director
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
                  Cédula:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="recipient-cedula"
                  name="cedula"
                  value={newDirectorState.cedula}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="recipient-name" className="col-form-label">
                  Cédula:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="recipient-nombre"
                  name="nombre"
                  value={newDirectorState.nombre}
                  onChange={handleChange}
                />
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
                  onClick={saveDirector}
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
