
import './App.css';
import Mainpage from './components/Mainpage';
import About from './components/About';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact path="/textutils" element={<Mainpage></Mainpage>}/>
      <Route exact path="/about" element={<About></About>}/>
    </Routes>
    </BrowserRouter>
    
     
    
    </>
  );
}

export default App;
