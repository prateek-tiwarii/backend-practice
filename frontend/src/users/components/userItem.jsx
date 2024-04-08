import React from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';



const UserItem = props => {
  return (
    <div className='flex border border-black bg-black p-2 rounded-sm hover:bg-yellow-500'>
    <Stack direction="row" spacing={2}>

        <div>
        <Avatar alt="Remy Sharp" src={props.image}  sx={{ width: 56, height: 56 }}/>

        </div>

        <div>
          <h1 className='text-white font-semibold text-lg '>{props.name}</h1>

          <p className='text-white font-semibold'>{props.placeCount}   {props.placeCount == 1? "Place " : "Places"}</p>
        
      </div>

      </Stack>

        
    </div>
  )
}

export default UserItem