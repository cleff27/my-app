import React from "react";
import data from "../../testData";

const CategoryInput = (props) => {
  return (
    <div>
      <select value={props.selectedOption} onChange={props.handleOptionChange}>
        <option value="">Select an option</option>
        {data.map((x, i) => {
          return (
            <option key={i} value={x.title}>
              {x.title}
            </option>
          );
        })}
      </select>
      <p>Selected option: {props.selectedOption}</p>
    </div>
  );
};
export default CategoryInput;
