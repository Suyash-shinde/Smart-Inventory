'use client'
import React, { useEffect, useState } from 'react'
import { Form } from 'react-router-dom'
import Layout from '../components/Layout';

const page = () => {
  const [lab,setLab]=useState({});
  const [grid,setGrid]=useState({});
  const handleSubmit=()=>{
    console.log("helllo")
  }
  const handleChange=(e)=>{
    setLab({...lab,[e.target.name]:e.target.value});
    console.log(lab);
  }
  const setGridSize=()=>{
    const {gridc,gridr}=lab;
    setGrid({gridr:gridr, gridc:gridc});
  }
  useEffect(()=>{
    const console12=()=>{
      console.log("hello",grid.gridr);
    }
    console12();
  },[grid])
  return (
    <>
    <div className="h-screen w-full">

      <div className="w-full flex-col">
        <label >
          Lab No.
        </label>
        <input className="rounded text-gray-500" placeholder="Enter Lab Number">
        </input>
      </div>
      <div className=" w-full flex-col p-3">
        <label >
          Grid Columns 
        </label>
        <input className="rounded text-gray-500" placeholder="0" name="gridc" onChange={handleChange}>
        </input>
        <label >
          Grid Rows
        </label>
        <input className="rounded text-gray-500" placeholder="0" name="gridr" onChange={handleChange}>
        </input>
        <button className="outline" onClick={setGridSize}>Load Layout</button>
      </div>
      <Layout grid={grid}></Layout>
    </div>
    </>
  )
}

export default page