import React from 'react'
import UserItem from './userItem'

const UserList = props => {
  
    if(props.items.length === 0){
        return(
            <div>
                <h1>No user found</h1>
            </div>
        )
    }

    return(
        <ul>
            {props.items.map(user => <UserItem
            key = {user.id}
            id = {user.id}
            name = {user.name}
            placeCount = {user.places}
            image = {user.image}
            
            />)}
        </ul>
    )
}

export default UserList