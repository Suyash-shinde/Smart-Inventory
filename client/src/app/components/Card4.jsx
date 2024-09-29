'use client'
import React, { useState } from 'react'

const Card4 = ({status, isVisible, deviceId}) => {
  return (
    <>
    <div className="m-3" key={deviceId}>
      
    {isVisible? !status ? 
    <div key={deviceId} className=" group absolute h-6 w-6 flex items-center justify-center font-extrabold rounded border-red-500 bg-red-500 text-white font-mono hover:cursor-pointer">
        
      <div className=" transition transform translate-y-8 ease-in-out  h-20 w-30  invisible group-hover:visible absolute pr-10 pl-10 pt-2 pb-2 group-hover:translate-y-0 mb-28 z-1 bg-red-300 text-black rounded flex items-center justify-center">
        Device ID: {deviceId}
      </div>
      </div>
    :<div key={deviceId} className=" group absolute h-6 w-6 rounded border-4 flex items-center justify-center border-green-500 font-extrabold text-green-500 font-mono hover:cursor-pointer">
      
      <div className=" transition transform translate-y-8 ease-in-out  h-20 w-30  invisible group-hover:visible absolute pr-10 pl-10 pt-2 pb-2 group-hover:translate-y-0 mb-28 z-1 bg-green-300 text-black rounded flex items-center justify-center">
        Device ID: {deviceId}
      </div>
    </div>
    :<div className="h-5 w-5 border-none bg-transparent "></div>}
    </div>
    </>
  )
}

export default Card4