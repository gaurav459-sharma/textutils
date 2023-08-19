import React from 'react'
import PropTypes from 'prop-types'
import {Link } from "react-router-dom";
function Navbar(props) {
  
  return (
    props.colormode&& <nav style={{backgroundColor:props.colormode.nav,  color:props.colormode.nav==='white'?'black':'white'}} className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
            <Link to="/textutils" className="nav-link active" aria-current="page" >Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/about" className="nav-link active" aria-current="page" >About</Link>
        </li>
  </ul>
  
      <div>
        <button onClick={props.redtoggleMode}  style={{backgroundColor:"red",height:"18px",width:"18px",borderRadius:"50%",marginRight:"5px"}}></button>
        <button onClick={props.bluetoggleMode}  style={{backgroundColor:"blue",height:"18px",width:"18px",borderRadius:"50%",marginRight:"5px"}}></button>
        <button  onClick={props.greentoggleMode} style={{backgroundColor:"green",height:"18px",width:"18px",borderRadius:"50%",marginRight:"5px"}}></button>
        <button  onClick={props.darktoggleMode} style={{backgroundColor:"black",height:"18px",width:"18px",borderRadius:"50%",marginRight:"5px"}}></button>
        <button  onClick={props.lighttoggleMode} style={{backgroundColor:"white",height:"18px",width:"18px",borderRadius:"50%",marginRight:"5px"}}></button>
      </div>
      
    </div>
  </div>
</nav>

  )
}
Navbar.propTypes={
    title:PropTypes.string
}

export default Navbar