import React from "react";
const Codedet = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th style={{ minWidth: "50px" }}>ID</th>
            <th style={{ minWidth: "150px" }}> DESCRIPTION</th>
            <th style={{ minWidth: "80px" }}>CLASS</th>
            <th style={{ minWidth: "50px" }}>SCORE</th>
            <th style={{ minWidth: "80px" }}> INDEX</th>
          </tr>
        </thead>
        <tbody>
          {global.values && (
            <tr>
              <td>{global.values._id}</td>
              <td>{global.values._source.description}</td>
              <td>{global.values._source._class}</td>
              <td>{global.values._score}</td>
              <td>{global.values._index}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
export default Codedet;
