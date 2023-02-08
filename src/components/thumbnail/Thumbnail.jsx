import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./thumbnail.css";
import axios from "axios";
import { URL } from "../../App";
function Thumbnail() {
  const [courses, setcourses] = useState([]);
  useEffect(() => {
    axios.get(URL + "/thumbnail").then((response) => {
      setcourses(response.data);
    });
  }, []);

  function T1(name) {
    return (
      <div key={name._id}>
        <Link to={"/content/" + name._id}>
          <div className="single-thumbnail">
            <img
              className="img-box"
              src={name.vidinfo ? name.vidinfo.thumbnail_url : null}
              alt="img placeholder"
            />
            <br />
            {name.title}
          </div>
        </Link>
      </div>
    );
  }
  return (
    <div className="group-thumbnails">
      <div className="similar-options">Similar options</div>
      {Array.from(courses).map(T1)}
    </div>
  );
}

export default Thumbnail;
