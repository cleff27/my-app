import React, { useEffect, useState } from "react";
import "./course_info.css";
import axios from "axios";
const CourseInfo = (props) => {
  const [dataRequired, setdatareq] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/course/" + props.id).then((response) => {
      setdatareq(response.data);
    });
  }, [props.id]);

  return (
    <div className="course-info-div">
      <div className="video-div">
        <video
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          controls
          width="800"
          height="auto"
          type="video/mp4"
        ></video>
      </div>
      <div className="video-title">{dataRequired.title}</div>
      <div className="video-content">{dataRequired.content}</div>
    </div>
  );
};

export default CourseInfo;
