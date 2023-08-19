import React ,{useState} from 'react'

export default function TextForm(props) {
    const[text ,setText]=useState("")
    const[dummyText ,setdummyText]=useState("")
    const[speak ,setSpeak]=useState(true)
    const[vcount,setvCount]=useState(0)
    const[concount,setconCount]=useState(0)
    const [word, setWord] = useState([])
   

    const handleUpTextChange=()=>{
       let newText=dummyText.toUpperCase();
       setdummyText(newText)
       props.showAlert("converted to uppercase!","success")
       
    }
    const handleLowTextChange=()=>{
       let newText=dummyText.toLowerCase();
       setdummyText(newText)
       props.showAlert("converted to lowercase!","success")
    }
    const handleSpeakText=()=>{
        let msg=new SpeechSynthesisUtterance(text);
         window.speechSynthesis.speak(msg);
        setSpeak(false)
        props.showAlert("speak text is enabled","success")
    }
    const handleStopText=()=>{
        window.speechSynthesis.cancel()
        setSpeak(true)
        props.showAlert("speak text is disabled","success")
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
        props.showAlert("text is cleared","success")
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
    props.showAlert("text summary enabled","success")
      
    }
    const capitalized=()=>{
        let arr = text.split(" ")
        let temp = ""
        for(let i=0;i<arr.length;i++){
            temp+= arr[i].charAt(0).toUpperCase()+arr[i].substring(1).toLowerCase()+" "
        }

        setdummyText(temp)
        props.showAlert("capitalized the text","success")
    }
    const handleReverse=()=>{
      let arr=text.split(" ");
      arr.reverse();
      let tmp="";
      for(let i=0;i<arr.length;i++){
        tmp+=arr[i]+" ";
      }
      setdummyText(tmp)
      props.showAlert("text is reversed","success")

    }
  
   const handleCopy=()=>{
     var txt=document.getElementById("exampleFormControlTextarea1");
     txt.select();
     navigator.clipboard.writeText(txt.value)
     props.showAlert("text copied","success")
   }
   const handleExtraSpaces=()=>{
     let newtxt=text.split(/[ ]+/);
     setText(newtxt.join(" "))
     props.showAlert("extra spaces removed","success")
   }
  return (
    
    <div style={{backgroundColor:props.colormode.body , color:props.colormode.nav==='white'?'black':'white'}}>
     <div className='container' >
        <div className="mb-3">
  
            <h1>{props.title}</h1>
            
        <textarea style={{backgroundColor:props.colormode.body, color:props.colormode.nav==='white'?'black':'white'}} value={text}  onChange={handleOnChange} className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
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
    <div className="container my-3" style={{}}>
        <h1>Your Text Summary</h1>
        <hr />
        <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p>
        <p>{0.008*(text.trim() === '' ? 0 : text.match(/\S+/g).length)} Minutes read </p>
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
        <p id="myText" >{text.length>0?dummyText:"Enter something in Textbox.."}</p>
    </div>
    
    </div>
   
  )
}
