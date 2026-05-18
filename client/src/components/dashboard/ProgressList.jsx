import React from "react";

const ProgressList = ({ items }) => {
  return (
    <ul>
      {items?.map((item, idx) => (
        <li key={idx}>
          {item.name} - {item.progress}%
        </li>
      ))}
    </ul>
  );
};

export default ProgressList;
