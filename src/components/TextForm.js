import React ,{useState} from 'react'

export default function TextForm(props) {
    const[text ,setText]=useState("")


    const handleTextChange=()=>{
       let newText=text.toUpperCase();
       setText(newText)
    }
    const handleOnChange=(event)=>{
        // console.log("changes updated")
        setText(event.target.value)
    }
  return (
    <div>
        <div className="mb-3">
            <h1>{props.title}</h1>
        <textarea value={text} onChange={handleOnChange} className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
         </div>
         <button onClick={handleTextChange} className="btn btn-primary">Convert to UpperCase</button>
    </div>
  )
}
