import React from 'react'
import ThDirectorTable from './ThDirectorTable';
import TrDirectorTable from './TrDirectorTable';

export default function DirectoresTable({DirectorState}) {
  return (
    <div>
      <div>
        <table className="table table-striped">
          <ThDirectorTable/>
          <tbody>
            {DirectorState.map((director, index) => {
              return (
                <TrDirectorTable
                  key={index}
                  director={director}
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
