'use client'
import React, { useEffect } from 'react'
import Card from './Card';
import { useState } from 'react';


const json=[
    { "key": 1, "name": "item 1", "isVisible": true,"selected":false },
    { "key": 2, "name": "item 2", "isVisible": true,"selected":false },
    { "key": 3, "name": "item 3", "isVisible": true,"selected":false },
    { "key": 4, "name": "item 4", "isVisible": true,"selected":false },
    { "key": 5, "name": "item 5", "isVisible": true,"selected":false },
    { "key": 6, "name": "item 6", "isVisible": true,"selected":false },
    { "key": 7, "name": "item 7", "isVisible": true,"selected":false },
    { "key": 8, "name": "item 8", "isVisible": true,"selected":false },
    { "key": 9, "name": "item 9", "isVisible": true,"selected":false },
    { "key": 10, "name": "item 10", "isVisible": true, "selected":false },
    { "key": 11, "name": "item 11", "isVisible": true, "selected":false },
    { "key": 12, "name": "item 12", "isVisible": true, "selected":false },
    { "key": 13, "name": "item 13", "isVisible": true, "selected":false },
    { "key": 14, "name": "item 14", "isVisible": true, "selected":false },
    { "key": 15, "name": "item 15", "isVisible": true, "selected":false },
    { "key": 16, "name": "item 16", "isVisible": true, "selected":false },
    { "key": 17, "name": "item 17", "isVisible": true, "selected":false },
    { "key": 18, "name": "item 18", "isVisible": true, "selected":false },
    { "key": 19, "name": "item 19", "isVisible": true, "selected":false },
    { "key": 20, "name": "item 20", "isVisible": true, "selected":false },
    { "key": 21, "name": "item 21", "isVisible": true, "selected":false },
    { "key": 22, "name": "item 22", "isVisible": true, "selected":false },
    { "key": 23, "name": "item 23", "isVisible": true, "selected":false },
    { "key": 24, "name": "item 24", "isVisible": true, "selected":false },
    { "key": 25, "name": "item 25", "isVisible": true, "selected":false },
    { "key": 26, "name": "item 26", "isVisible": true, "selected":false },
    { "key": 27, "name": "item 27", "isVisible": true, "selected":false },
    { "key": 28, "name": "item 28", "isVisible": true, "selected":false },
    { "key": 29, "name": "item 29", "isVisible": true, "selected":false },
    { "key": 30, "name": "item 30", "isVisible": true, "selected":false },
    { "key": 31, "name": "item 31", "isVisible": true, "selected":false },
    { "key": 32, "name": "item 32", "isVisible": true, "selected":false },
    { "key": 33, "name": "item 33", "isVisible": true, "selected":false },
    { "key": 34, "name": "item 34", "isVisible": true, "selected":false },
    { "key": 35, "name": "item 35", "isVisible": true, "selected":false },
    { "key": 36, "name": "item 36", "isVisible": true, "selected":false },
    { "key": 37, "name": "item 37", "isVisible": true, "selected":false },
    { "key": 38, "name": "item 38", "isVisible": true, "selected":false },
    { "key": 39, "name": "item 39", "isVisible": true, "selected":false },
    { "key": 40, "name": "item 40", "isVisible": true, "selected":false },
    { "key": 41, "name": "item 41", "isVisible": true, "selected":false },
    { "key": 42, "name": "item 42", "isVisible": true, "selected":false },
    { "key": 43, "name": "item 43", "isVisible": true, "selected":false },
    { "key": 44, "name": "item 44", "isVisible": true, "selected":false },
    { "key": 45, "name": "item 45", "isVisible": true, "selected":false },
    { "key": 46, "name": "item 46", "isVisible": true, "selected":false },
    { "key": 47, "name": "item 47", "isVisible": true, "selected":false },
    { "key": 48, "name": "item 48", "isVisible": true, "selected":false },
    { "key": 49, "name": "item 49", "isVisible": true, "selected":false },
    { "key": 50, "name": "item 50", "isVisible": true, "selected":false },
    { "key": 51, "name": "item 51", "isVisible": true, "selected":false },
    { "key": 52, "name": "item 52", "isVisible": true, "selected":false },
    { "key": 53, "name": "item 53", "isVisible": true, "selected":false },
    { "key": 54, "name": "item 54", "isVisible": true, "selected":false },
    { "key": 55, "name": "item 55", "isVisible": true, "selected":false },
    { "key": 56, "name": "item 56", "isVisible": true, "selected":false },
    { "key": 57, "name": "item 57", "isVisible": true, "selected":false },
    { "key": 58, "name": "item 58", "isVisible": true, "selected":false },
    { "key": 59, "name": "item 59", "isVisible": true, "selected":false },
    { "key": 60, "name": "item 60", "isVisible": true, "selected":false },
    { "key": 61, "name": "item 61", "isVisible": true, "selected":false },
    { "key": 62, "name": "item 62", "isVisible": true, "selected":false },
    { "key": 63, "name": "item 63", "isVisible": true, "selected":false },
    { "key": 64, "name": "item 64", "isVisible": true, "selected":false },
    { "key": 65, "name": "item 65", "isVisible": true, "selected":false },
    { "key": 66, "name": "item 66", "isVisible": true, "selected":false },
    { "key": 67, "name": "item 67", "isVisible": true, "selected":false },
    { "key": 68, "name": "item 68", "isVisible": true, "selected":false },
    { "key": 69, "name": "item 69", "isVisible": true, "selected":false },
    { "key": 70, "name": "item 70", "isVisible": true, "selected":false },
    { "key": 71, "name": "item 71", "isVisible": true, "selected":false },
    { "key": 72, "name": "item 72", "isVisible": true, "selected":false },
    { "key": 73, "name": "item 73", "isVisible": true, "selected":false },
    { "key": 74, "name": "item 74", "isVisible": true, "selected":false },
    { "key": 75, "name": "item 75", "isVisible": true, "selected":false },
    { "key": 76, "name": "item 76", "isVisible": true, "selected":false },
    { "key": 77, "name": "item 77", "isVisible": true, "selected":false },
    { "key": 78, "name": "item 78", "isVisible": true, "selected":false },
    { "key": 79, "name": "item 79", "isVisible": true, "selected":false },
    { "key": 80, "name": "item 80", "isVisible": true, "selected":false },
    { "key": 81, "name": "item 81", "isVisible": true, "selected":false },
    { "key": 82, "name": "item 82", "isVisible": true, "selected":false },
    { "key": 83, "name": "item 83", "isVisible": true, "selected":false },
    { "key": 84, "name": "item 84", "isVisible": true, "selected":false },
    { "key": 85, "name": "item 85", "isVisible": true, "selected":false },
    { "key": 86, "name": "item 86", "isVisible": true, "selected":false },
    { "key": 87, "name": "item 87", "isVisible": true, "selected":false },
    { "key": 88, "name": "item 88", "isVisible": true, "selected":false },
    { "key": 89, "name": "item 89", "isVisible": true, "selected":false },
    { "key": 90, "name": "item 90", "isVisible": true, "selected":false },
    { "key": 91, "name": "item 91", "isVisible": true, "selected":false },
    { "key": 92, "name": "item 92", "isVisible": true, "selected":false },
    { "key": 93, "name": "item 93", "isVisible": true, "selected": false },
  { "key": 94, "name": "item 94", "isVisible": true, "selected": false },
  { "key": 95, "name": "item 95", "isVisible": true, "selected": false },
  { "key": 96, "name": "item 96", "isVisible": true, "selected": false },
  { "key": 97, "name": "item 97", "isVisible": true, "selected": false },
  { "key": 98, "name": "item 98", "isVisible": true, "selected": false },
  { "key": 99, "name": "item 99", "isVisible": true, "selected": false },
  { "key": 100, "name": "item 100", "isVisible": true, "selected": false },
  { "key": 101, "name": "item 101", "isVisible": true, "selected": false },
  { "key": 102, "name": "item 102", "isVisible": true, "selected": false },
  { "key": 103, "name": "item 103", "isVisible": true, "selected": false },
  { "key": 104, "name": "item 104", "isVisible": true, "selected": false },
  { "key": 105, "name": "item 105", "isVisible": true, "selected": false },
  { "key": 106, "name": "item 106", "isVisible": true, "selected": false },
  { "key": 107, "name": "item 107", "isVisible": true, "selected": false },
  { "key": 108, "name": "item 108", "isVisible": true, "selected": false },
  { "key": 109, "name": "item 109", "isVisible": true, "selected": false },
  { "key": 110, "name": "item 110", "isVisible": true, "selected": false },
  { "key": 111, "name": "item 111", "isVisible": true, "selected": false },
  { "key": 112, "name": "item 112", "isVisible": true, "selected": false },
  { "key": 113, "name": "item 113", "isVisible": true, "selected": false },
  { "key": 114, "name": "item 114", "isVisible": true, "selected": false },
  { "key": 115, "name": "item 115", "isVisible": true, "selected": false },
  { "key": 116, "name": "item 116", "isVisible": true, "selected": false },
  { "key": 117, "name": "item 117", "isVisible": true, "selected": false },
  { "key": 118, "name": "item 118", "isVisible": true, "selected": false },
  { "key": 119, "name": "item 119", "isVisible": true, "selected": false },
  { "key": 120, "name": "item 120", "isVisible": true, "selected": false },
  { "key": 121, "name": "item 121", "isVisible": true, "selected": false },
  { "key": 122, "name": "item 122", "isVisible": true, "selected": false },
  { "key": 123, "name": "item 123", "isVisible": true, "selected": false },
  { "key": 124, "name": "item 124", "isVisible": true, "selected": false },
  { "key": 125, "name": "item 125", "isVisible": true, "selected": false },
  { "key": 126, "name": "item 126", "isVisible": true, "selected": false },
  { "key": 127, "name": "item 127", "isVisible": true, "selected": false },
  { "key": 128, "name": "item 128", "isVisible": true, "selected": false },
  { "key": 129, "name": "item 129", "isVisible": true, "selected": false },
  { "key": 130, "name": "item 130", "isVisible": true, "selected": false },
  { "key": 131, "name": "item 131", "isVisible": true, "selected": false },
  { "key": 132, "name": "item 132", "isVisible": true, "selected": false },
  { "key": 133, "name": "item 133", "isVisible": true, "selected": false },
  { "key": 134, "name": "item 134", "isVisible": true, "selected": false },
  { "key": 135, "name": "item 135", "isVisible": true, "selected": false },
  { "key": 136, "name": "item 136", "isVisible": true, "selected": false },
  { "key": 137, "name": "item 137", "isVisible": true, "selected": false },
  { "key": 138, "name": "item 138", "isVisible": true, "selected": false },
  { "key": 139, "name": "item 139", "isVisible": true, "selected": false },
  { "key": 140, "name": "item 140", "isVisible": true, "selected": false },
  { "key": 141, "name": "item 141", "isVisible": true, "selected": false },
  { "key": 142, "name": "item 142", "isVisible": true, "selected": false },
  { "key": 143, "name": "item 143", "isVisible": true, "selected": false },
  { "key": 144, "name": "item 144", "isVisible": true, "selected": false },
  { "key": 145, "name": "item 145", "isVisible": true, "selected": false },
  { "key": 146, "name": "item 146", "isVisible": true, "selected": false },
  { "key": 147, "name": "item 147", "isVisible": true, "selected": false },
  { "key": 148, "name": "item 148", "isVisible": true, "selected": false },
  { "key": 149, "name": "item 149", "isVisible": true, "selected": false },
  { "key": 150, "name": "item 150", "isVisible": true, "selected": false },
  { "key": 151, "name": "item 151", "isVisible": true, "selected": false },
  { "key": 152, "name": "item 152", "isVisible": true, "selected": false },
  { "key": 153, "name": "item 153", "isVisible": true, "selected": false },
  { "key": 154, "name": "item 154", "isVisible": true, "selected": false },
  { "key": 155, "name": "item 155", "isVisible": true, "selected": false },
  { "key": 156, "name": "item 156", "isVisible": true, "selected": false },
  { "key": 157, "name": "item 157", "isVisible": true, "selected": false },
  { "key": 158, "name": "item 158", "isVisible": true, "selected": false },
  { "key": 159, "name": "item 159", "isVisible": true, "selected": false },
  { "key": 160, "name": "item 160", "isVisible": true, "selected": false },
  { "key": 161, "name": "item 161", "isVisible": true, "selected": false },
  { "key": 162, "name": "item 162", "isVisible": true, "selected": false },
  { "key": 163, "name": "item 163", "isVisible": true, "selected": false },
  { "key": 164, "name": "item 164", "isVisible": true, "selected": false },
  { "key": 165, "name": "item 165", "isVisible": true, "selected": false },
  { "key": 166, "name": "item 166", "isVisible": true, "selected": false },
  { "key": 167, "name": "item 167", "isVisible": true, "selected": false },
    ];


const Layout = ({grid, handleAddPC}) => {
    const [deviceId,setDeviceId] = useState({});
    const [seats,setSeats] = useState(json);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [deviceString, setDeviceString]=useState("");
    const [position,setPosition]=useState(null);
    const setSelect =(e)=>{ 
        setSeats(seats.map(seat=>
            seat.key===e.key ? {...seat,selected:!selected} : seat
        ));
    }
    const setId=(e)=>{
      setDeviceId({...deviceId,[e.target.name]:e.target.value});
    }
  const handleOpenModal = (e) => {
      setIsModalOpen(true);
      setPosition(e);

  };
  
  const handleChange=(e)=>{
    setDeviceString(e.target.value);

  }
  const handleCloseModal = (e) => {
      if(deviceString===""){
        setIsModalOpen(false);
        //set a minimun limit 
      }
      else{
        handleAddPC({
          uniqueID:deviceString,
          pos:position})
        setIsModalOpen(false);
      }
  };

  return (
    <>
    
    <div className={`h-screen-full mt-5 mb-10 ml-10 grid gap-y-10 `}
        style={{
          display:grid,
          gridTemplateColumns: `repeat(${grid.gridc}, 1fr)`,
            
        }}>
        {seats.map((device)=>{
            if(device.key<=(grid.gridr)*(grid.gridc)){
             return(
              <div key={device.key} onClick={(e)=>{setSelect(e);handleOpenModal(device.key);}} >
              <Card type="button"  aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-basic-modal" data-hs-overlay="#hs-basic-modal" key={device.key} id={device.key} selected={device.selected} isVisible={device.isVisible}></Card>
              </div>
             )
            }
          })}
    </div>
    {isModalOpen && (
                <div id="hs-basic-modal" className="hs-overlay is-visible absolute z-10  w-full flex justify-center ">
                    <div className="modal-content bg-gray-500 rounded h-80 w-80 z-10">
                        <input placeholder='DeviceId' name='id' onChange={(e)=>handleChange(e)}></input>
                        <button onClick={(e)=>handleCloseModal(e)}>Submit</button>
                        <p>Modal Content Here</p>
                    </div>
                </div>
            )}
    </>
  )
}

export default Layout

