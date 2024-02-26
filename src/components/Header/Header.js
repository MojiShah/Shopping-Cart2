import React from 'react';
import '../../styles/bootstrap.min.css';

export default function Header() {
  return (
    <>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link active" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Products</a>
        </li>
      </ul>
      
        <img src="img/Shopping.jfif" alt="Shopping" style={{width:'100%',height:'80vh'}} />
    
    </>
  )
}
