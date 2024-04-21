import React from "react";

export default function MultiToggle({MultiEstadoState,onChangeEstado}) {
  return (
    <div className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckChecked"
        onClick={onChangeEstado}
        checked={MultiEstadoState}
      />
      <label className="form-check-label">Activos/Inactivos</label>
    </div>
  );
}
