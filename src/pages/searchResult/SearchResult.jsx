import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import axios from "axios";
import { URL } from "../../App";
import ErrorPage from "../errorPage/ErrorPage";
import Cards from "../../components/cards/Cards";
import "./searchresult.css";
const SearchResult = () => {
  const { id } = useParams();
  const [dataRequired, setdatareq] = useState([]);
  useEffect(() => {
    axios
      .get(URL + "/category/" + id)
      .then((response) => {
        setdatareq(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  return (
    <div>
      {Array.from(dataRequired).length > 0 ? (
        <div className="search-container">
          <div className="result-heading">
            <span>Total {dataRequired.length} Results</span>
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
          <ErrorPage />
        </div>
      )}
    </div>
  );
};

export default SearchResult;
