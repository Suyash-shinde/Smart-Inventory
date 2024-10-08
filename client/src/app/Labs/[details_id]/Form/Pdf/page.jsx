'use client'
import React, {useRef} from 'react'
import { useReactToPrint } from 'react-to-print';
import { usePDF } from 'react-to-pdf';
import FormIssue from './formIssue';
import { useSearchParams } from "next/navigation";

const page = ({params}) => {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const deviceId=searchParams.get('deviceId')
  const componentRef = useRef(null);
  const toPrint = useReactToPrint({
    contentRef: componentRef,
    documentTitle: "IssueForm",

    // onAfterPrint: handleAfterPrint,
    // onBeforePrint: handleBeforePrint,
  });
  return (
    
    <div className='flex items-center flex-col'>
  <FormIssue ref={componentRef} location ={id} deviceId={deviceId}/>
  <button className="bg-blue-500 py-3 px-8 my-4 rounded-md text-white font-bold " onClick={toPrint}>Print</button>
  </div>
  
  )
}

export default page