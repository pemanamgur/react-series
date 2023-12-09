import React from 'react'
import { useParams } from 'react-router-dom'
function User() {

             const {userid} = useParams();//You can call database or anything you want to display
  return (
    <div className='bg-gray-500 text-white text-3xl p-4'>
      User : {userid}
    </div>
  )
}

export default User
