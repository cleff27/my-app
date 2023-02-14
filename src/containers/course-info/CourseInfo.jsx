import React, { useContext, useEffect, useState } from "react";
import "./course_info.css";
import axios from "axios";
import { URL } from "../../App";
import ErrorPage from "../../pages/errorPage/ErrorPage";
import LoadingPage from "../../pages/LoadingPage/LoadingPage";
import { UserContext } from "../../App";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
const CourseInfo = (props) => {
  const [dataRequired, setdatareq] = useState([]);
  const [available, setAvailable] = useState(false);
  const [loading, setloading] = useState(false);
  const [likes, setlike] = useState(0);
  const [isliked, setIsLiked] = useState(false);
  const { user } = useContext(UserContext);
  const [userId, setuser] = useState(null);
  console.log(userId);
  useEffect(() => {
    setuser(user ? user._id : null);
    setIsLiked(false);
    if (props.isLoggedIn && props.likedCourses.includes(props.id)) {
      setIsLiked(true);
    }
  }, [props.isLoggedIn, props.likedCourses, props.id, user]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setloading(true);
    axios
      .get(URL + "/course/" + props.id)
      .then((response) => {
        setdatareq(response.data);
        setAvailable(true);
        setlike(response.data.liked);
      })
      .finally(() => {
        setloading(false);
      });
  }, [props.id]);

  function handleLike() {
    if (!props.isLoggedIn) {
      window.alert("Login to like");
      return;
    }

    if (!isliked) {
      axios
        .post(URL + "/like-course", { userId, courseId: props.id })
        .then((res) => {
          props.setLikedCourses([...props.likedCourses, props.id]);
          setIsLiked(true);
          setlike(likes + 1);
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      axios
        .post(URL + "/unlike-course", { userId, courseId: props.id })
        .then((res) => {
          props.setLikedCourses(
            props.likedCourses.filter((c) => c !== props.id)
          );
          setIsLiked(false);
          setlike(likes - 1);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }

  return loading ? (
    <LoadingPage />
  ) : available ? (
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
      <div className="video-title">
        {dataRequired.title}
        <div className="like-div">
          {
            <ThumbUpIcon
              baseClassName="material-icons-outlined"
              fontSize="large"
              onClick={handleLike}
            />
          }{" "}
          : {likes}
        </div>
      </div>

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
