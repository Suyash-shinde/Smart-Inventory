'use client'
import React, {useRef} from 'react'
import { useReactToPrint } from 'react-to-print';
import { usePDF } from 'react-to-pdf';
import FormIssue from './formIssue';
const page = () => {
  const componentRef = useRef(null);
  const toPrint = useReactToPrint({
    contentRef: componentRef,
    documentTitle: "IssueForm",

    // onAfterPrint: handleAfterPrint,
    // onBeforePrint: handleBeforePrint,
  });
  return (
    <>
  <FormIssue ref={componentRef}/>
  <button onClick={toPrint}>Print</button>
  </>
  )
}

export default page