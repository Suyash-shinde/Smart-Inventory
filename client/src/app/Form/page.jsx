"use client"
import React,{useState} from 'react'
import Navbar from '../Components/Navbar'
import styles from './form.css'
const page = () => {
        const [issueDetails,setIssueDetails] = useState({

        });
  return (
    <>
        <Navbar/>
        <div className='min-h-screen bg-green-200 py-2'>
                <div className='Form'>
                    <form >
                        <label className='' > Faculty Name: </label>
                        {/* We need to get this automatically from login details */}
                        <input className='border-2 '  id='FacultyName' placeholder='Faculty Name' type='text'/>
                        <br></br>
                        
                        <label > Faculty Lab Incharge: </label>
                        {/* We need to get this automatically from either lab ka details or something like that , maybe a hardcoded json of each lab to faculty,login details */}
                        <input type='text' id='FacultyLab' placeholder='Faculty Lab'/>
                        <br></br>
                        
                        <label  >Date:</label>
                        {/* Automatically from OS or something */}
                        <input type='Date' id='Date'></input>
                        <br></br>

                        <label  > Equipment : </label>
                            <select name='deviceType' >
                                <option value=''>Choose an Equipment</option>
                                <option value="Monitor">Monitor</option>
                                <option value="PC">PC</option>
                                <option value="Projector">Projector</option>
                                <option value="Fan">Fan</option>

                            </select>
                        <br></br>
                        
                        <label  >Device Id:</label>
                        {/* try to make a drop down select later */}
                        <input type='number' id='deviceId'></input>
                        
                        <br></br>
                        
                        <label >Issue</label>
                        <input type='text' id='Issue'></input>

                        <br></br>
                        <div className='bottomButtons'>
                        <input  className=' rounded-xl'type="reset" value="Clear" />
                        <input className=' rounded-full' type="submit" value="Send Request" />
                        </div>
                    </form>
                </div>
        </div>
    </>
    
  )
}

export default page