import React from 'react'
import { Link } from 'gatsby'

const Header = () => {
    return (
        <header>
            <h1>Andrew Mead</h1>
            <nav>
                <li><Link to="/">Home</Link></li>
                <li> <Link to="/about">About</Link></li>
                <li> <Link to="/contact">Contact</Link></li>
            </nav>
        </header>
    )
}

export default Header