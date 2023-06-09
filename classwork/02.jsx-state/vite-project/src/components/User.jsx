import React from 'react'

const User = ({user}) => {
  return (
    <div className='card'>
        <h3>{user.name}</h3>
        <h3>{user.email}</h3>
    </div>
  )
}

export default User