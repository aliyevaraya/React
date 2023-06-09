import React from "react";
// import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      {/* <div className="buttons" >
        <button style={{background: "blue", padding: '10px 20px', marginLeft: "20px"}}  onClick={() => navigate("/")}>Movies</button>
        <button style={{background: "green", padding: '10px 20px', marginLeft: "20px"}} onClick={() => navigate("/add")}>Add</button>
      </div> */}
      <nav style={{ display: 'flex', justifyContent: 'space-around' }}>
                <NavLink  to={'/'}>Home</NavLink>
                <NavLink to='/add'>Add</NavLink>
            </nav>
    </div>
  );
};

export default Header;
