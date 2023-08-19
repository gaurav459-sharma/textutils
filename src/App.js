
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TextForm from './components/TextForm';
import Alert from './components/Alert';
function App() {

  const [alert,setAlert]=useState(null)
  const [colormode,setColormode]=useState(['white','white','blue'])

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000)

  }

  const redtoggleMode=()=>{
    setColormode({
      nav:'#de5d69',
      body:'#ea2134',
      button:
    });
    showAlert("red mode is enabled","success")
  }
  const bluetoggleMode=()=>{
    setColormode({
      nav:'#8cafe2',
      body:'#4d75af'
    });
    showAlert("blue mode is enabled","success")
    
  }
  const greentoggleMode=()=>{
    setColormode({
      nav:'#74b28a',
      body:'#54d080'
    });
    showAlert("green mode is enabled","success")
  }
  const darktoggleMode=()=>{
    setColormode({
      nav:'#5a6a60',
      body:'#505050'
    });
    showAlert("Dark mode is enabled","success")
  }
  const lighttoggleMode=()=>{
    setColormode({
      nav:'white',
      body:'white'
    });
    showAlert("light mode is enabled","success")
  }
  return (
    <>
    <BrowserRouter>
    <Navbar colormode={colormode} darktoggleMode={darktoggleMode} lighttoggleMode={lighttoggleMode} redtoggleMode={redtoggleMode} bluetoggleMode={bluetoggleMode} greentoggleMode={greentoggleMode} />
    <Alert alert={alert}/>
    <Routes>
      <Route exact path="/textutils" element={<TextForm showAlert={showAlert} title="Enter the text to analyze below" colormode={colormode} ></TextForm>}/>
      <Route exact path="/about" element={<About></About>}/>
    </Routes>
    </BrowserRouter>
    
     
    
    </>
  );
}

export default App;
