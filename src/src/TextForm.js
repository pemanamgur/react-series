import React, { useState } from 'react'

const TextForm = () => {

   const [text , setText] = useState('Enter text here');

   function handleChange(e){
    setText(e.target.value)
   }  

    // function handleUpperCase(){
    //     // text.toUpperCase()
    //     console.log("Uppercase btn was clicked.")
    //     setText(text.toUpperCase());
        
    // }

  return (
    <>
    <div className=' flex-col flex items-center'>
        <label htmlFor=""
               className='text-3xl  '
        >Enter a text below to solve </label>
        <textarea  cols="30" rows="10" value={text} onChange={handleChange} className='border-2 w-1/2' ></textarea>
     <button onClick={()=>{
        setText(text.toUpperCase())
     }} className='mx-auto p-2 bg-black text-white rounded-md'>convert to UpperCase</button>
    </div>
    </>
    
  )
}

export default TextForm
