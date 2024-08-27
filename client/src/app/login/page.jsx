"use client"
import React, { useState } from 'react'
import styles from './page.module.css';
import { loginRoute } from '../utils/APIroutes';
import axios from 'axios';
 
const page = () => {
  const [user,setUser] = useState({});
  const handleChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value});
  }
  const handleValidation = () => {
    const { prn, password } = user; 
    if (prn === "" || password === "") {
      return false;
    }
    return true;
  }; 

  const handleSubmit = async()=>{
      if(handleValidation){
        const {prn,password} = user; 

        const {data}= await axios.post(loginRoute,{
          prn,
          password,
        },{withCredentials:true});
        if(data.status===false){
          console.log(data.msg);
        }
        else{
          console.log(data.msg);
        }
      }
  }
  return (
    <>
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <h1 className={styles.header}>Login</h1>
                <div className={styles.subContainer}>
                    <label className={styles.title}>PRN</label>
                    <input className={styles.input} 
                    placeholder='PRN' 
                    type='text' 
                    name='prn' 
                    onChange={(e)=> handleChange(e)}></input>
                </div>
                <div className={styles.subContainer}>
                <label className={styles.title}>Password</label>
                <input className={styles.input}
                placeholder='Password'
                type='text' name='password' 
                onChange={(e)=> handleChange(e)}></input>
                </div>
                <button className={styles.submit} onClick={(e)=>handleSubmit(e)}>Login</button>
                <div className={styles.buttons}>
                  Do not have an account?   
                  <button className={styles.register}>Sign Up</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default page