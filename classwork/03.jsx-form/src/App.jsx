import { useState , useEffect} from "react";
import "./App.css";
import axios from "axios";
import Movies from "./components/Movies";
import Add from "./components/Add";
import { Route, Routes } from "react-router";
import Edit from "./components/Edit";
import Header from "./components/Header";
import NoteFound from "./components/NoteFound";
const BASE_URL = "http://localhost:8080/movies";

function App() {
  const [movies, setMovies] = useState([]);

  const getMovie =  async() => {
    const res = await axios(BASE_URL);
    const data = res.data;
    setMovies(data);
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
      <div className="App">
        <Header />
       <Routes>
        <Route path="/" element={<Movies movies={movies} setMovies={setMovies}/>}/>
        <Route path="/add" element={<Add movies={movies} setMovies={setMovies}/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
        <Route path="*" element={<NoteFound/>}/>
       </Routes>
      </div>
  );
}

export default App;
