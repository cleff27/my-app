import React, { useEffect, useState } from "react";
import "./course_info.css";
import axios from "axios";
import { URL } from "../../App";
import ErrorPage from "../../pages/errorPage/ErrorPage";

const CourseInfo = (props) => {
  const [dataRequired, setdatareq] = useState([]);
  const [available, setAvailable] = useState(false);

  useEffect(() => {
    axios.get(URL + "/course/" + props.id).then((response) => {
      setdatareq(response.data);

      setAvailable(true);
    });
  }, [props.id]);
  console.log(dataRequired);

  return available ? (
    <div className="course-info-div">
      <div className="video-div">
        {dataRequired.vidinfo ? (
          <div
            dangerouslySetInnerHTML={{ __html: dataRequired.vidinfo.html }}
          ></div>
        ) : (
          <iframe
            src=""
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        )}
      </div>
      <div className="video-title">{dataRequired.title}</div>
      <div className="video-content">
        <div className="content-div">{dataRequired.introduction}</div>
        <br />
        <div className="content-div">
          {dataRequired.task.length > 0
            ? dataRequired.task.map((x, i) => {
                return (
                  <div className="content-div" key={i}>
                    <span className="sub-heading"> Task {i + 1}</span>:{x.value}
                    <br />
                  </div>
                );
              })
            : null}
        </div>
        <div className="content-div">
          <span className="sub-heading">Pros and Cons:</span>{" "}
          {dataRequired.pros}
        </div>
        <br />
        <h2>ROADMAP</h2>
        <br />
        <div className="content-div">
          <span className="sub-heading"> Beginner level</span>:
          {dataRequired.beginner}
        </div>
        <br />

        <div className="content-div">
          <span className="sub-heading"> Intermediate level</span>:
          {dataRequired.intermediate}
        </div>
        <br />
        <div className="content-div">
          <span className="sub-heading">Advance level</span>:
          {dataRequired.advance}
        </div>
        <br />
      </div>
    </div>
  ) : (
    <ErrorPage />
  );
};

export default CourseInfo;
