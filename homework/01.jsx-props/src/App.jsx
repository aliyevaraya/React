import "./App.css";
// import axios from "axios";
import Users from "./Components/Users";

async function App() {
  // const res = await axios("https://jsonplaceholder.typicode.com/users");
  // const data = res.data;
  const data = []
  console.log(data);
  return (
    <div className="App">
      <Users data={data} />
    </div>
  );
}

export default App;
