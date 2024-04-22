import React from 'react'
import ThProductoraTable from './ThProductoraTable';
import TrProductoraTable from './TrProductoraTable';

export default function ProductorasTable({ProductoraState}) {
  return (
    <div>
      <div>
        <table className="table table-striped">
          <ThProductoraTable/>
          <tbody>
            {ProductoraState.map((productora, index) => {
              return (
                <TrProductoraTable
                  key={index}
                  productora={productora}
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
