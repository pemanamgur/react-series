import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import BtnColor from './btnColor/btncolor'

function App() {
  const [color,setColor] = useState("cyan");
   
  return (
 
     <div className="w-full h-screen duration-200" style={{backgroundColor : color}}>
      <div className='fixed flex flex-wrap justify-center fixed bottom-12 inset-x-0  px-2 '>
       <div className='flex flex-wrap justify-center shadow-lg px-3 py-2 rounded-3xl bg-white-300 '>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-sm' onClick={()=> setColor("red")} style={{backgroundColor : "red"}}>Red</button>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-sm' onClick={()=> setColor("green")} style={{backgroundColor : "green"}}>green</button>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-sm' onClick={()=> setColor("magenta")} style={{backgroundColor : "magenta"}}>magenta</button>
        <button className='outline-none px-4 py-1 rounded-full text-black shadow-sm' onClick={()=> setColor("yellow")} style={{backgroundColor : "yellow"}}>yellow</button>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-sm' onClick={()=> setColor("brown")} style={{backgroundColor : "brown"}}>brown</button>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-sm' onClick={()=> setColor("black")} style={{backgroundColor : "black"}}>black</button>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-sm' onClick={()=> setColor("gray")} style={{backgroundColor : "gray"}}>gray</button>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-sm' onClick={()=> setColor("violet")} style={{backgroundColor : "violet"}}>violet</button>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-sm' onClick={()=> setColor("black")} style={{backgroundColor : "black"}}>black</button>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-sm' onClick={()=> setColor("red")} style={{backgroundColor : "red"}}>Red</button>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-sm' onClick={()=> setColor("blue")} style={{backgroundColor : "blue"}}>blue</button>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-sm' onClick={()=> setColor("purple")} style={{backgroundColor : "purple"}}>purple</button>
       </div>
      </div>
     </div>
  
  )
}

export default App
