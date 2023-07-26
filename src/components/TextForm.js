import React ,{useState} from 'react'

export default function TextForm(props) {
    const[text ,setText]=useState("")
    const[dummyText ,setdummyText]=useState("")
    const[speak ,setSpeak]=useState(true)
    const[vcount,setvCount]=useState(0)
    const[concount,setconCount]=useState(0)
    const [word, setWord] = useState([])
    const [myStyle, setMyStyle] = useState({
      color:'black',
      backgroundColor:'white'
    })
    const [myPreviewStyle, setmyPreviewStyle] = useState({
      backgroundColor:"whitesmoke", 
      width:"100%", 
      border:"2px solid #b5b4b0" ,
      borderRadius:"10px",
      paddingLeft:"5px"
    })


    const handleUpTextChange=()=>{
       let newText=dummyText.toUpperCase();
       setdummyText(newText)
       
    }
    const handleLowTextChange=()=>{
       let newText=dummyText.toLowerCase();
       setdummyText(newText)
    }
    const handleSpeakText=()=>{
        let msg=new SpeechSynthesisUtterance(text);
         window.speechSynthesis.speak(msg);
        setSpeak(false)
    }
    const handleStopText=()=>{
        window.speechSynthesis.cancel()
        setSpeak(true)
    }
    
    const handleOnChange=(event)=>{
        // console.log("changes updated")
        setdummyText(event.target.value)
        setText(event.target.value)

    }
    const handleClearText=()=>{
        setText('')
        setdummyText('')
        setconCount(0)
        setvCount(0)
    }
    function getFrequency(string) {
        let freq = {};
        for (var i=0; i<string.length;i++) {
            var character = string.charAt(i);
            if (freq[character]) {
               freq[character]++;
            } else {
               freq[character] = 1;
            }
        }
    
        return freq;
    };
    const handleSummaryText=()=>{
        let ctv=0,ctcon=0;
      for(let i=0;i<=text.length;i++){
        if(text.charAt(i).match(/[aeiouAEIOU]/)){
            ctv++;
            setvCount(ctv);
        }
      }
      for(let i=0;i<=text.length;i++){
        if(text.charAt(i).match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/)){
            ctcon++;
            setconCount(ctcon);
        }
      }
    // console.log(getFrequency(text));
    const arr1=getFrequency(text);
    for(let i=0;i<arr1.length;i++){
        word[i]=arr1[i]
        setWord(word[i])
    }
    setWord(word)
    console.log(word)
      
    }
    const capitalized=()=>{
        let arr = text.split(" ")
        let temp = ""
        for(let i=0;i<arr.length;i++){
            temp+= arr[i].charAt(0).toUpperCase()+arr[i].substring(1).toLowerCase()+" "
        }

        setdummyText(temp)
    }
    const handleReverse=()=>{
      let arr=text.split(" ");
      arr.reverse();
      let tmp="";
      for(let i=0;i<arr.length;i++){
        tmp+=arr[i]+" ";
      }
      setdummyText(tmp)

    }
    const handeleStyle=()=>{
      if(myStyle.color==='black'){
        setMyStyle({
          color:'white',
          backgroundColor:'black'
        })
        setmyPreviewStyle({
          backgroundColor:"black",
          color:'white',
          width:"100%", 
          border:"2px solid #b5b4b0" ,
          borderRadius:"10px",
          paddingLeft:"5px"
        })
      }
      else{
       setMyStyle({
         color:'black',
        backgroundColor:'white'
       })
       setmyPreviewStyle({
        backgroundColor:"whitesmoke", 
        width:"100%", 
        border:"2px solid #b5b4b0" ,
        borderRadius:"10px",
        paddingLeft:"5px"
       })
      }
    }
   const handleCopy=()=>{
     var txt=document.getElementById("exampleFormControlTextarea1");
     txt.select();
     navigator.clipboard.writeText(txt.value)
   }
   const handleExtraSpaces=()=>{
     let newtxt=text.split(/[ ]+/);
     setText(newtxt.join(" "))
   }
  return (
    
    <>
     <div className='container' style={myStyle}>
        <div className="mb-3">
          <div className="d-flex" role="search">
          <button onClick={handeleStyle} className="btn btn-primary" type= "submit">Enable dark mode</button>
        </div>
            <h1>{props.title}</h1>
            
        <textarea style={myStyle} value={text}  onChange={handleOnChange} className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
         </div>
         <button onClick={handleUpTextChange} className="btn btn-primary mx-2 my-2">Convert to UpperCase</button>
         <button onClick={handleLowTextChange} className="btn btn-primary mx-2 my-2">Convert to LowerCase</button>
          {speak? (<button onClick={handleSpeakText} className="btn btn-primary mx-2 my-2">Speak</button>):
           (<button onClick={handleStopText} className="btn btn-primary mx-2 my-2">Stop</button>)
          }
        <button onClick={handleSummaryText} className="btn btn-primary mx-2 my-2">Summary</button>
        <button onClick={capitalized} className="btn btn-primary mx-2 my-2">Capitalized</button>
        <button onClick={handleReverse} className="btn btn-primary mx-2 my-2">Reverse</button>
        <button onClick={handleExtraSpaces} className="btn btn-primary mx-2 my-2">Remove Extra Spaces</button>
        <button onClick={handleCopy} className="btn btn-primary mx-2 my-2">Copy</button>
        <button onClick={handleClearText} className="btn btn-primary mx-2 my-2">Clear</button>

                  
    </div>
    <div className="container my-3" style={myStyle}>
        <h1>Your Text Summary</h1>
        <hr />
        <p>{text.split(" ").length-1} Words and {text.length} Characters</p>
        <p>{0.008*text.split(" ").length} Minutes read </p>
        <hr />
        <p>No. of vowels: {vcount} </p>
        <p>No. of consonant:{concount} </p>
        <p>
        {/* {myArray.map(name => (  
          <li>  
            {name}  
          </li>  
        ))}   */}
       </p>
        <h2>Preview</h2>
        <p id="myText" style={myPreviewStyle}>{dummyText}</p>
    </div>
    
    </>
   
  )
}
