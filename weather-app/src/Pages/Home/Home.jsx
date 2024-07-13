import React, { useState } from 'react'
import { useStore } from 'zustand';


function Home() {
//   const [data, setData] = useState('')
const { data, setData } = useStore(); 
//   const data = useStore((state) => state.data);
console.log("response data>>>>>>>>>>>>>>>>>>",data); 

  return (
<div className="flex  h-screen">
      <div className="flex-1/3 w-1/3 bg-gray-300">
        {/* First part - takes 1/3 of the screen height */}
       div 1ldlldld
       setDatasdf
       sd
      {/* {data} */}
      </div>
      <div className="flex-2/3 w-2/3 bg-gray-100">
        {/* Second part - takes 2/3 of the screen height */}
     div 2
      </div>
    </div>
  )
}

export default Home