import React from "react";

const Tech = (props) => {
  const { id, technology, capacity } = props.tech;
  return (
    <tbody>
      <tr>
        <th scope="row">{id}</th>
        <td>{technology}</td>
        <td>{capacity}</td>
      </tr>
    </tbody>
  );
};

export default Tech;
