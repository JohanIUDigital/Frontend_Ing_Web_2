import React from "react";

export default function ModalMultimedia({newMultiState,handleChange,saveMultimedia}) {
  return (
    <div
      className="modal fade"
      id="modalMultimedia"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Nueva Multimedia
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
                  Título:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="recipient-titulo"
                  name="Titulo"
                  value={newMultiState.Titulo}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="recipient-name" className="col-form-label">
                  Sinopsis:
                </label>
                <textarea
                  className="form-control"
                  id="recipient-Sinopsis"
                  name="Sinopsis"
                  value={newMultiState.Sinopsis}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="recipient-name" className="col-form-label">
                  Tipo:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="recipient-Tipo"
                  name="Tipo"
                  value={newMultiState.Tipo}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="recipient-name" className="col-form-label">
                  Género:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="recipient-Genero"
                  name="Genero"
                  value={newMultiState.Genero}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="recipient-name" className="col-form-label">
                  Director:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="recipient-Director"
                  name="Director"
                  value={newMultiState.Director}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="recipient-name" className="col-form-label">
                  Productora:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="recipient-Productora"
                  name="Productora"
                  value={newMultiState.Productora}
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
                  onClick={saveMultimedia}
                >
                  Crear
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
