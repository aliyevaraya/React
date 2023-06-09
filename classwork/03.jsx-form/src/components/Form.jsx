import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";
const BASE_URL = "http://localhost:8080/movies";
const Form = ({addMovie,editMovie,params}) => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    Title: "",
    Year: "",
    imdbRating: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
    setInputValue({
      Title: "",
      Year: "",
      imdbRating: "",
    });
    addMovie(inputValue)
    // editMovie(inputValue)
  };

  const disbaledBtn = inputValue.Title && inputValue.Year && inputValue.imdbRating;
  return (
    <div>
      <div>
        <h2 style={{ textAlign: "center" }}>Movie Form</h2>

        <form className="movieForm" onSubmit={handleSubmit}>
          <label htmlFor="title">Title </label>
          <input
            value={inputValue.Title}
            onChange={(e) =>
              setInputValue({ ...inputValue, Title: e.target.value })
            }
            type="text"
            id="title"
            placeholder="Enter a movie name..."
          />
          <label htmlFor="year">Year</label>
          <input
            value={inputValue.Year}
            onChange={(e) =>
              setInputValue({ ...inputValue, Year: e.target.value })
            }
            type="number"
            placeholder="Enter a year..."
            id="year"
          />
          <label htmlFor="imbd">IMBD</label>
          <input
            value={inputValue.imdbRating}
            onChange={(e) =>
              setInputValue({ ...inputValue, imdbRating: e.target.value })
            }
            type="number"
            placeholder="Enter an imbd..."
            id="imbd"
          />
          <button disabled={!disbaledBtn} type="submit" className="btnForm" onClick={() => navigate("/")}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
