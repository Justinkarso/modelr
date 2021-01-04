import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <div className="nav">
            <h1><NavLink to="/"><a>Modelr</a></NavLink></h1>
            <ul>
                <li><NavLink to="/models"><a>Models</a></NavLink></li>
                <li><NavLink to="/catagories"><a>Catagories</a></NavLink></li>
                <li><NavLink to="/support-me" ><a>Support Me</a></NavLink></li>
                <li><NavLink to="/about"><a>About</a></NavLink></li>
            </ul>
        </div>
    )
}

export default Nav;