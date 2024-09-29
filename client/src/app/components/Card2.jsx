'use client'
import React, { useState } from 'react'

const Card2 = ({position,isVisible,selected, deviceId}) => {
    const [select,setSelect]=useState(selected);
    const setSeat=()=>{
        setSelect(!select);
        console.log(select);
    }
  return (
    <>
    <div className="m-3" key={deviceId} onClick={setSeat}>
      
    {isVisible? select? 
    <div key={deviceId} className=" group absolute h-10 w-10 flex items-center justify-center font-extrabold rounded border-green-500 bg-green-500 text-white font-mono hover:cursor-pointer">
      {position} 
        <div className=" transition transform translate-y-8 ease-in-out  h-14 w-20  invisible group-hover:visible absolute pr-10 pl-10 pt-2 pb-2 group-hover:translate-y-0 mb-28 z-1 bg-green-300 text-white rounded">
        {deviceId}
        </div>
      </div>
    :<div key={deviceId} className=" group absolute h-10 w-10 rounded border-4 flex items-center justify-center border-green-500 font-extrabold text-green-500 font-mono hover:cursor-pointer">
      {position}
      <div className=" transition transform translate-y-8 ease-in-out  h-14 w-20  invisible group-hover:visible absolute pr-10 pl-10 pt-2 pb-2 group-hover:translate-y-0 mb-28 z-1 bg-green-300 text-white rounded">
        {deviceId}
      </div>
    </div>
    :<div className="h-10 w-10 border-none bg-white "></div>}
    </div>
    </>
  )
}

export default Card2