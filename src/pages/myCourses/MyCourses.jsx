import React, { useState, useEffect } from "react";
import axios from "axios";
import Cards from "../../components/cards/Cards";
import { URL } from "../../App";

const MyCourses = (props) => {
  const [dataRequired, setdatareq] = useState([]);
  useEffect(() => {
    axios
      .get(URL + "/mycourses/" + props.id)
      .then((response) => {
        setdatareq(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.id]);
  return (
    <div>
      {dataRequired.length > 0 ? (
        <div className="search-container">
          <div className="result-heading">
            <span>Total {dataRequired.length} courses created</span>
          </div>
          <div className="search-result">
            {dataRequired.map((card) => {
              return (
                <Cards
                  key={card._id}
                  _id={card._id}
                  title={card.title}
                  thumbnail={card.vidinfo ? card.vidinfo.thumbnail_url : null}
                  introduction={card.introduction}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <div>
          <div className="result-heading">
            <span>No courses created Yet !</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyCourses;
