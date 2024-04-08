import React from 'react'
import UserList from '../components/userList'

const User = () => {

    const USERS = [
        {
            id : "kal3",
            name : "mark zukerberg",
            image : "https://picsum.photos/200",
            places: 3
        }
    ]
  return (
    <div className='flex justify-center my-3  '>
        <UserList items = {USERS}/>
    </div>
  )
}

export default User