'use client'
import React, { useEffect, useState } from 'react'
import ViewLayout from '../components/ViewLayout'
import { getLabPost } from '../utils/APIpost';
const page = () => {
  const [lab,setLab] = useState({});
  const [loading, setLoading] = useState(true);
  const getData = async()=>{

    try {
      const {data}= await getLabPost({labNo:510});
      console.log(data.data);
      setLab(data.data);  // Update the state with fetched data
    } catch (error) {
      console.error("Error fetching lab data:", error);
    } finally {
      setLoading(false);  // Stop loading once data is fetched (or failed)
    }

  }
  useEffect(()=>{

    getData();
  },[])

  if (loading) {
    return <div className='font-extrabold'>Loading...</div>;  // Display loading message or spinner
  }

  if (!lab) {
    return <div>No data available</div>;  // If no lab data is fetched or null
  }

 
  return (
    <ViewLayout data={lab}></ViewLayout>
  )
}

export default page