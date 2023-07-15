import React ,{useState} from 'react'

export default function TextForm(props) {
    const[text ,setText]=useState("")


    const handleUpTextChange=()=>{
       let newText=text.toUpperCase();
       setText(newText)
    }
    const handleLowTextChange=()=>{
       let newText=text.toLowerCase();
       setText(newText)
    }
    const handleSpeakText=()=>{
        let msg=new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(msg);

    }
    const handleStopText=()=>{
        window.speechSynthesis.cancel()
    }
    
    const handleOnChange=(event)=>{
        // console.log("changes updated")
        setText(event.target.value)
    }
    let sp=false;
  return (
    <>
     <div className='container'>
        <div className="mb-3">
            <h1>{props.title}</h1>
        <textarea value={text} onChange={handleOnChange} className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
         </div>
         <button onClick={handleUpTextChange} className="btn btn-primary mx-2">Convert to UpperCase</button>
         <button onClick={handleLowTextChange} className="btn btn-primary mx-2">Convert to LowerCase</button>
         <button onClick={handleSpeakText} className="btn btn-primary mx-2">Speak</button>
         <button onClick={handleStopText} className="btn btn-primary mx-2">Stop</button>
         
    </div>
    <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length-1} Words and {text.length} Characters</p>
        <p>{0.008*text.split(" ").length} Minutes read </p>
        <h2>Preview</h2>
        <p style={{backgroundColor:"whitesmoke", width:"100%", border:"2px solid black" ,borderRadius:"10px",paddingLeft:"5px"}}>{text}</p>
    </div>
    
    </>
   
  )
}
