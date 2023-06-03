import React from 'react'

const User = ({obj}) => {
  return (
    <div className="card">
        <h3>Username: {obj.username}</h3>
        <h4>Email: {obj.email}</h4>
        <h5>City: {obj.city}</h5>
    </div>
  )
}

export default User