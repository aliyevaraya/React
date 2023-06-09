import React from 'react'
import Form from './Form'
import axios from "axios";
import { uid } from 'uid';

const BASE_URL = "http://localhost:8080/movies";

const Add = ({movies,setMovies}) => {
 
  const addMovie=async(inputValue)=>{
    let obj={
      id: uid(),
      ...inputValue}
    await axios.post(BASE_URL,obj)
    console.log(obj);
    setMovies([...movies,obj])
  }
  return (
    <div>
      <Form movies={movies} setMovies={setMovies} addMovie={addMovie}/>
    </div>
  )
}

export default Add