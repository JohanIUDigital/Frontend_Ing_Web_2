import React from 'react'
import ThTiposTable from './ThTiposTable';
import TrTiposTable from './TrTiposTable';

export default function TiposTable({TipoState}) {
  return (
    <div>
      <div>
        <table className="table table-striped">
          <ThTiposTable/>
          <tbody>
            {TipoState.map((tipo, index) => {
              return (
                <TrTiposTable
                  key={index}
                  tipo={tipo}
                  index={index}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
