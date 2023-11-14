import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
  return (
    <div>
<ul className="nav">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href='/'>{props.about}</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href='/'>Home</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href='/about'>About</a>
  </li>
  <li className="nav-item">
  
  </li>
</ul>
       Hello 
   </div> 
  )
}
Navbar.propTypes={
    title:PropTypes.string.isRequired,
    abouts:PropTypes.string
    }

    Navbar.defaultProps={
        title:"hello world",
        about:"helloeveryone"
        }


