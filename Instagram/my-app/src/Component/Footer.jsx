import React from 'react'
import './styles.css'
import './media-queries.css';
export default function Footer() {
  return (
    <footer className='footer'>
        <nav>
            <div><i className="fa-solid fa-house"></i></div>
            <div> <i className="fa-solid fa-magnifying-glass"></i></div>
            <div><i className="fa-regular fa-square-plus"></i></div>
            <div><i className="fa-solid fa-play"></i></div>
            <div className="round-icon">
                <div className="inner-circle">
                </div>
            </div>
        </nav>
    </footer> 
 )
}
