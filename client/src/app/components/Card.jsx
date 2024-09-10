'use client'
import React, { useState } from 'react'

const Card = ({id,isVisible,selected}) => {
    const [select,setSelect]=useState(selected);
    const setSeat=()=>{
        setSelect(!select);
        console.log(select);
    }
  return (
    <>
    <div key={id} className="hover:cursor-pointer" onClick={setSeat}>
    {isVisible? select? <div key={id} className="h-10 w-10 flex items-center justify-center font-extrabold rounded border-green-500 bg-green-500 text-white font-mono">{id}</div>
    :<div key={id} className="h-10 w-10 rounded border-4 flex items-center justify-center border-green-500 font-extrabold text-green-500 font-mono">{id}</div>
    :<div className="h-10 w-10 border-none bg-white"></div>}
    </div>
    </>
  )
}

export default Card