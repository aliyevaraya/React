import "./App.css";
import Users from "./components/Users"

function App() {
  const data=[
    {
        id:1,
        username: "smone",
        email: "smone@gmail.com",
        city: "smwhere"
    },
    {
        id:0,
        username: "smone",
        email: "smone@gmail.com",
        city: "smwhere"
    },
    {
        id:2,
        username: "smbody",
        email: "smbody@gmail.com",
        city: "smwhere"
    },
    {
        id:3,
        username: "noone",
        email: "noone@gmail.com",
        city: "nowhere"
    },
    {
        id:4,
        username: "nobody",
        email: "nobody@gmail.com",
        city: "nowhere"
    },
    {
        id:5,
        username: "everyone",
        email: "everyone@gmail.com",
        city: "everywhere"
    },
    {
        id:6,
        username: "everybody",
        email: "everybody@gmail.com",
        city: "everywhere"
    }
]
  return (
    <div className="App">
      <Users data={data}/>
    </div>
  );
}

export default App;
