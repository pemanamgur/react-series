import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData();
    // const [data,setData] = useState({});
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/pemanamgur')
    //     .then((Response)=> Response.json())
    //     .then((data)=>{
    //         console.log(data);
    //         setData(data);
    // },[])
    // })
  return (
    <div className='bg-gray-600 text-lg text-white text-center p-4'>
      Github follower :{data.followers}
      <img src={data.avatar_url} alt="Git Pic" width={300} />
    </div>
  )
}

export default Github;

export const githubInfo = async ()=>{
  const response =  await fetch('https://api.github.com/users/pemanamgur')
  return response.json();
}
