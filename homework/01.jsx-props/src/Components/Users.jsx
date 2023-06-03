import React from "react";
import User from "./User";

const Users = ({ data }) => {
  return (
    <div className="cards">
      {data.map((obj) => {
        return <User
         key={obj.id} obj={obj} />;
      })}
    </div>
  );
};

export default Users;
