import React, { useEffect, useState } from "react";
import "./course_info.css";
import axios from "axios";
import { URL } from "../../App";
const CourseInfo = (props) => {
  const [dataRequired, setdatareq] = useState([]);
  useEffect(() => {
    axios.get(URL + "/course/" + props.id).then((response) => {
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
