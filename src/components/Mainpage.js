import React from 'react'
import TextForm from './TextForm';

export default function Mainpage() {
  return (
    <div>
     <div className="container my-3 ">
        <TextForm title="Enter the text to analyze below" />
     </div>
    </div>
  )
}
