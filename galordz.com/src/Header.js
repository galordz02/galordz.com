import React from 'react'
import './css/Header.css'

function Header() {
    return (
    <header className="header">
        <div className="container">
            <div className="logo">
              <a href="/" className="logoImage"></a>
            </div>
            <nav className="menu">
              <ol>
                <li>
                  <a className="link" href="/projects">Projects</a>
                </li>
                <hr/>
                <li>
                  <a className="link" href="/vlog">Blog</a>
                </li>
              </ol>
            </nav>
        </div>
    </header>
    )
}

export default Header
