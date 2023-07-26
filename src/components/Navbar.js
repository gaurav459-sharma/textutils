import React from 'react'
import PropTypes from 'prop-types'
import {Link } from "react-router-dom";
function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
            <Link to="/textutils" className="nav-link active" aria-current="page" >Home</Link>
        </li>
        <li className="nav-item">
        <Link to="/about" className="nav-link active" aria-current="page" >About</Link>
        </li>
      </ul>
      {/* <div className="d-flex" role="search">
        <button className="btn btn-primary" type="submit">Enable dark mode</button>
      </div> */}
    </div>
  </div>
</nav>

  )
}
Navbar.propTypes={
    title:PropTypes.string
}

export default Navbar