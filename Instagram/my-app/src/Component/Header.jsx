import React from 'react';
import './styles.css';
export default function Header() {
  return (
    <header className="mx-2">
        <div className="title-icon">
            <h1>Instagram</h1>
            <button>
                <div className="icon py-1">
                    <div className="option-icon bar1"></div>
                    <div className="option-icon bar2"></div>
                </div>
            </button>
        </div>
        <div className="header-icon">
            <div><i className="fa-regular fa-heart"></i></div>
            <div className="me-2"><i className="fa-brands fa-facebook-messenger" style={{color: "grey"}}></i></div>
        </div>
        </header>
  )
}
