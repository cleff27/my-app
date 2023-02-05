import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./thumbnail.css";
import axios from "axios";

function Thumbnail() {
  const [courses, setcourses] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/thumbnail").then((response) => {
      setcourses(response.data);
    });
  }, []);

  function T1(name) {
    return (
      <div>
        <Link to={"/content/" + name._id}>
          <div className="single-thumbnail">
            <img src="" alt="img placeholder" />
            content {name.title}
          </div>
        </Link>
      </div>
    );
  }
  // function printtnails(x) {
  //   return x;
  // }

  // const tnails = T1(courses[0]);
  // for (let i = 0; i < 1; i += 1) {
  //   const thumbnail = T1(courses[i]);
  //   tnails.push(thumbnail);
  // }
  return (
    <div className="group-thumbnails">
      <div className="similar-options">Similar options</div>
      {courses.map(T1)}
    </div>
  );
}

export default Thumbnail;
