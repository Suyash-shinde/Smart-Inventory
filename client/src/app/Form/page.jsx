"use client"
import React,{useState,useEffect} from 'react'

import 'dotenv/config'
import styles from './form.css'
import { issuePost } from '../utils/APIpost'
const page = () => {
    const getDate = () => {
        const today=new Date();
        const month=today.getMonth()+1;
        const year=today.getFullYear();
        const date=today.getDate();
        const currentDate = date + "/" +month  + "/" + year;
        return currentDate;
    }
    const date=getDate();
        const [issueDetails,setIssueDetails] = useState({
            deviceId:'',
            deviceType:'',
            date:date,
            facultyName:'',
            facultyLabIncharge:'',
            details:''
        });
        

        const handleChange = (e) =>{
                const {name,value} =e.target;
             setIssueDetails((prevState)=> ({...prevState,[name]:e.target.value}));                  
            };
    
    
    const sendData = async () => {
        const myData=issueDetails;
        const result = await issuePost(myData);
        //const resultInJson= await result.json();
        console.log(result);
    }
    
  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendData()
    console.log(issueDetails);
    
  }; 

  const handleReset = (e) =>{
    window.alert("You are about to reset");
  }

  return (
    <>
        {/* <Navbar/> */}
        <div className='min-h-screen bg-green-200 py-2'>
                <div className='Form'>
                    <form >
                        <div>
                        <label className='' > Faculty Name: </label>
                        {/* We need to get this automatically from login details */}
                        <input className='border-2 '  id='facultyName' name='facultyName' placeholder='Faculty Name' type='text' value={issueDetails.facultyName} onChange={handleChange} />
                        </div>
                        
                        <div>
                        <label > Faculty Lab Incharge: </label>
                        {/* We need to get this automatically from either lab ka details or something like that , maybe a hardcoded json of each lab to faculty,login details */}
                        <input type='text' name='facultyLabIncharge'id='FacultyLab' placeholder='Faculty Lab' value={issueDetails.facultyLabIncharge} onChange={handleChange}/>
                        </div>
                        
                        <div>
                        <label  >Date:</label>
                        {/* Automatically from OS or something */}
                        <input type='date' placeholder="dd-mm-yyyy" name='date'  id='Date'  value={issueDetails.date} onChange={handleChange}></input>
                        </div>

                        <div>
                        <label  > Equipment : </label>
                            <select name='deviceType' value={issueDetails.deviceType} onChange={handleChange}>
                                <option value=''>Choose an Equipment</option>
                                <option value="Monitor">Monitor</option>
                                <option value="PC">PC</option>
                                <option value="Projector">Projector</option>
                                <option value="Fan">Fan</option>

                            </select>
                        </div>
                        
                        <div>
                        <label  >Device Id:</label>
                        {/* try to make a drop down select later */}
                        <input type='text' name='deviceId' value={issueDetails.deviceId} onChange={handleChange}></input>
                        
                        </div>
                        
                        <div>
                        <label >Issue</label>
                        <textarea  name='details' value={issueDetails.details} onChange={handleChange}></textarea>
                        </div>
                        
                        <div className='bottomButtons'>
                        <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mr-[58%] " type='reset'
                        onClick={handleReset} >Delete </button>
                        <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"  type='submit' onClick={handleSubmit}  > Submit</button>
                        </div>
                    </form>
                </div>
        </div>
    </>
    
  )
}

export default page