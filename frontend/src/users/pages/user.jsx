import React from 'react'
import UserList from '../components/userList'
import Navbar from '../sections/navbar'

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
    <div className='  '>
        
        <Navbar/>
        <UserList items = {USERS}/>
    </div>
    
  )
}

export default User