  "use client"
import React, { useState } from 'react'
import styles from './page.module.css';
import { loginRoute } from '../utils/APIroutes';
import axios from 'axios';    
import { useRouter } from 'next/navigation'; 
import toast,{ Toaster } from 'react-hot-toast';

const page = () => {
  const router=useRouter();
  
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
  
  const sendData = async () => {
    const { prn, password } = user;
    return axios.post(loginRoute, {
      prn,
      password,
    }, { withCredentials: true });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validate before sending the request
    if (!handleValidation()) {
      toast.error("PRN and password are required!");
      return;
    }
  
    // Create the promise for sending data
    const sendPromise = sendData();
  
    toast.promise(
      sendPromise,
      {
        loading: 'Logging in...',
        success: (data) => {
          if (data.data.status === false) {
            throw new Error(data.data.msg);  // Reject the promise if login fails
          }
          return 'Login successful! Redirecting...';
        },
        error: (err) => `Login failed: ${err.message}`,
      }
    );
  
    try {
      const { data } = await sendPromise; // Wait for the data to be sent
      if (data.status === true) {
        // Redirect to dashboard if login is successful
        router.push("/Dashboard");
      }
    } catch (error) {
      // Handle error state here (optional, as toast.promise will show an error message)
      console.error('Error during login:', error);
    }
  };
  
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