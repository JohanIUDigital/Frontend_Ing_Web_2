import React from "react";
import TrMultiTable from "./TrMultiTable";
import ThMultiTable from "./ThMultiTable";

export default function MultiTable({ MultimediaState = [] }) {
  return (
    <div>
      <div>
        <table className="table table-striped">
          <ThMultiTable />
          <tbody>
            {MultimediaState.map((multi, index) => {
              return (
                <TrMultiTable
                  key={multi._id + index}
                  multi={multi}
                  index={index}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
