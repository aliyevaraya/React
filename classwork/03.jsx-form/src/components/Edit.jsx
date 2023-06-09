import React from "react";
import Form from "./Form";
import { useParams } from "react-router";
import axios from "axios";
const BASE_URL = "http://localhost:8080/movies";

const Edit = ({ movies, setMovies }) => {
  const params = useParams();


/////// MUGGLE CAN'T SEE ALL CODES 

  const editMovie = async (inputValue) => {
    // fillInput();
    // inputValue=data
    // let obj = {
    //   ...data,
    // };
    await axios.patch(BASE_URL, obj);
    setMovies([...movies, obj]);
  };
  return (
    <div>
      <Form movies={movies} setMovies={setMovies} editMovie={editMovie} />
    </div>
  );
};

export default Edit;
