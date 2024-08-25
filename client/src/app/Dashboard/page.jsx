"use client"
import React, { useState } from 'react'
import styles from './Dashboard.css'
import axios from 'axios'
const page = () => {
  const [issues,setIssuesDetails]=useState({
            deviceId:'',
            deviceType:'',
            date:'',
            facultyName:'',
            facultyLabIncharge:'',
            details:''
  })

  return (
    <>
      <div className='Navbar'>
          hi
      </div>

    </>
  )
}

export default page