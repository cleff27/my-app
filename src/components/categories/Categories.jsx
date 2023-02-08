import React from "react";
import { Link } from "react-router-dom";
import "./categories.css";

const Categories = (props) => {
  return (
    <div className="dropdown1">
      <ul className="category-items">
        {props.categories.map((category, i) => {
          return (
            <Link
              key={i}
              onClick={() => {
                props.setDropdownVisibility(false);
              }}
              to={"/category/" + category.title}
            >
              <li>{category.title}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
