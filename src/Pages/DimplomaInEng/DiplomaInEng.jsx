import React, { useEffect, useState } from "react";
import Tech from "../Technology/Tech";

const DiplomaInEng = () => {
  const [technology, setTechnology] = useState([]);
  useEffect(() => {
    fetch("eng-technology.json")
      .then((res) => res.json())
      .then((data) => setTechnology(data));
  }, []);
  return (
    <div>
      <h2 className="fw-bold text-center p-3">Diploma in Engineering</h2>
      <div>
        <table className="w-75 mx-auto table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Technology</th>
              <th scope="col">Capacity</th>
            </tr>
          </thead>
          {technology.map((tech) => (
            <Tech key={tech.id} tech={tech}></Tech>
          ))}
        </table>
      </div>
    </div>
  );
};

export default DiplomaInEng;
