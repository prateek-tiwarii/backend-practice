import React from 'react'
import UserList from '../components/userList'

const User = () => {

    const USERS = [
        {
            id : 1,
            name : "mark zukerberg",
            image : "https://picsum.photos/200",
            places: 3
        }
    ]
  return (
    <div>
        <UserList items = {USERS}/>
    </div>
  )
}

export default User