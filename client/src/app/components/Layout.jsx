'use client'
import React from 'react'
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
    ];


const Layout = ({grid}) => {
    const [seats,setSeats] = useState(json);
    const setSelect =(e)=>{
        setSeats(seats.map(seat=>
            seat.key===e.key ? {...seat,selected:!selected} : seat
        ));
    }
  return (
    <>
    <div className={`h-screen-full mt-5 ml-10 grid gap-y-10 grid-cols-${grid.gridc} grid-rows-${grid.gridr}`}>
        {seats.map((device)=>(
            <div key={device.key} onClick={(e)=>setSelect(e)}>
                <Card key={device.key} id={device.key} selected={device.selected} isVisible={device.isVisible}></Card>
            </div>
        ))}
    </div>
    </>
  )
}

export default Layout