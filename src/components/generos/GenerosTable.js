import React from 'react'
import ThGeneroTable from './ThGeneroTable';
import TrGeneroTable from './TrGeneroTable';

export default function GenerosTable({GeneroState = []}) {
  return (
    <div>
      <div>
        <table className="table table-striped">
          <ThGeneroTable/>
          <tbody>
            {GeneroState.map((genero, index) => {
              return (
                <TrGeneroTable
                  key={index}
                  genero={genero}
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
